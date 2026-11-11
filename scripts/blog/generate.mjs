#!/usr/bin/env node
/**
 * AX 인사이트 블로그 자동 작성기
 *
 * - content/blog/topics.json 에서 status가 "queued"인 첫 주제를 골라
 * - content/blog/STYLE.md 기준과 기존 글 한 편을 본보기로 Gemini(무료 등급)에 글을 쓰게 하고
 * - 규칙 검사(lint)에 걸리면 고쳐 쓰게 한 뒤
 * - content/blog/posts/<slug>.md 로 저장합니다.
 *
 * 환경 변수
 *   GEMINI_API_KEY  (필수) Google AI Studio 에서 무료로 발급
 *   GEMINI_MODEL    (선택) 기본 gemini-2.5-flash
 *   BLOG_TOPIC      (선택) 대기열 대신 이 주제로 바로 작성
 *   BLOG_CATEGORY   (선택) BLOG_TOPIC 과 함께 쓸 분류 (strategy|industry|practice|guide)
 *   DRY_RUN=1       (선택) API를 호출하지 않고 프롬프트만 출력
 *
 * 외부 패키지 없이 Node 20+ 만으로 동작합니다.
 */
import fs from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const BLOG = path.join(ROOT, "content", "blog")
const POSTS = path.join(BLOG, "posts")
const TOPICS_FILE = path.join(BLOG, "topics.json")
const STYLE_FILE = path.join(BLOG, "STYLE.md")
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash"
const API_KEY = process.env.GEMINI_API_KEY
const DRY = process.env.DRY_RUN === "1"
const CATEGORIES = ["strategy", "industry", "practice", "guide"]

const BANNED = ["혁신적", "게임 체인저", "게임체인저", "AI 시대에", "알아보겠습니다", "결론적으로", "놀라운", "완벽한", "해보세요!"]

// ---------- helpers ----------
function todayKST() {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10)
}

function readJSON(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const data = {}
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!mm) continue
    const v = mm[2].trim()
    try {
      data[mm[1]] = /^[[{"]/.test(v) ? JSON.parse(v) : v
    } catch {
      data[mm[1]] = v
    }
  }
  return { data, body: m[2] }
}

function existingPosts() {
  if (!fs.existsSync(POSTS)) return []
  return fs
    .readdirSync(POSTS)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS, f), "utf8")
      const { data, body } = parseFrontmatter(raw)
      return { slug: f.replace(/\.md$/, ""), title: data.title, description: data.description, category: data.category, date: data.date, raw, body }
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
}

function oneLine(s) {
  return String(s).replace(/\s*\n\s*/g, " ").trim()
}

// ---------- Gemini ----------
async function gemini({ system, user, schema, temperature = 0.7 }) {
  if (!API_KEY) throw new Error("GEMINI_API_KEY 가 설정되지 않았습니다.")
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: "user", parts: [{ text: user }] }],
    generationConfig: { temperature, responseMimeType: "application/json", responseSchema: schema },
  }
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": API_KEY },
      body: JSON.stringify(body),
    })
    if (res.ok) {
      const json = await res.json()
      const text = json?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? ""
      if (!text) throw new Error("Gemini 응답이 비어 있습니다: " + JSON.stringify(json).slice(0, 500))
      return JSON.parse(text)
    }
    const errText = await res.text()
    if ((res.status === 429 || res.status >= 500) && attempt < 4) {
      const wait = 20 * attempt
      console.warn(`Gemini ${res.status} — ${wait}초 후 재시도 (${attempt}/3)`)
      await new Promise((r) => setTimeout(r, wait * 1000))
      continue
    }
    throw new Error(`Gemini 오류 ${res.status}: ${errText.slice(0, 800)}`)
  }
}

const POST_SCHEMA = {
  type: "OBJECT",
  properties: {
    title: { type: "STRING" },
    slug: { type: "STRING", description: "영문 소문자와 하이픈만, 3~6단어" },
    description: { type: "STRING" },
    tags: { type: "ARRAY", items: { type: "STRING" } },
    body: { type: "STRING", description: "본문 마크다운. 제목(#)은 넣지 않고 도입 문단부터 시작" },
    faq: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { q: { type: "STRING" }, a: { type: "STRING" } }, required: ["q", "a"] },
    },
  },
  required: ["title", "slug", "description", "tags", "body", "faq"],
}

// ---------- lint ----------
function lint(post, existingSlugs) {
  const issues = []
  const body = post.body || ""
  const plainLen = body.replace(/[#*|`>\-\s]/g, "").length
  const h2 = (body.match(/^## /gm) || []).length
  if (post.title.length < 12 || post.title.length > 40) issues.push(`제목 길이 ${post.title.length}자 — 15~35자로`)
  if (post.description.length < 70 || post.description.length > 170)
    issues.push(`설명문 길이 ${post.description.length}자 — 80~150자로`)
  if (plainLen < 2200) issues.push(`본문이 짧습니다(약 ${plainLen}자) — 2,500자 이상으로`)
  if (plainLen > 5000) issues.push(`본문이 깁니다(약 ${plainLen}자) — 4,000자 안팎으로`)
  if (h2 < 3 || h2 > 6) issues.push(`소제목(##)이 ${h2}개 — 3~5개로`)
  if (/^# /m.test(body)) issues.push("본문에 # 제목이 있습니다 — 제거")
  if (!/^\|.*\|\s*$/m.test(body)) issues.push("표가 없습니다 — 비교 표를 1개 이상")
  if (/[!！]/.test(body.replace(/!\[/g, ""))) issues.push("느낌표를 쓰지 마세요")
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(body + post.title)) issues.push("이모지를 쓰지 마세요")
  for (const w of BANNED) if ((body + post.title).includes(w)) issues.push(`금지 표현 "${w}"`)
  const poc = (body.match(/POC/g) || []).length
  if (poc > 2) issues.push(`POC 언급 ${poc}회 — 한 번만`)
  if (/\d+\s*%/.test(body) && !/가상/.test(body) && !/50\s*%를 돌려/.test(body))
    issues.push("퍼센트 수치가 있습니다 — 출처 없는 수치는 빼거나 '가상의 예'로 밝히기")
  const slug = String(post.slug || "")
  if (!/^[a-z0-9]+(-[a-z0-9]+){1,7}$/.test(slug)) issues.push(`slug "${slug}" 형식 오류 — 영문 소문자-하이픈`)
  if (existingSlugs.includes(slug)) issues.push(`slug "${slug}" 가 이미 있습니다`)
  if (!Array.isArray(post.faq) || post.faq.length < 2) issues.push("자주 묻는 질문을 2~3개")
  if (!Array.isArray(post.tags) || post.tags.length < 3) issues.push("태그를 3~5개")
  return issues
}

// ---------- topic handling ----------
async function ensureTopicQueue(topicsDoc, posts) {
  const queued = topicsDoc.topics.filter((t) => t.status === "queued")
  if (queued.length >= 4 || DRY) return
  console.log(`대기 주제가 ${queued.length}개뿐이라 새 주제 6개를 제안받습니다.`)
  const style = fs.readFileSync(STYLE_FILE, "utf8")
  const known = topicsDoc.topics.map((t) => `- ${t.topic}`).join("\n")
  const result = await gemini({
    system: "당신은 중소기업 AI 전환(AX) 컨설팅 회사의 콘텐츠 편집장입니다. 한국어로 답합니다.",
    user: `아래 독자·기준에 맞는 새 블로그 주제 6개를 제안하세요. 이미 다룬 주제와 겹치지 않아야 하고, 네 분류(strategy, industry, practice, guide)를 고르게 섞으세요.\n\n[기준]\n${style}\n\n[이미 있는 주제]\n${known}`,
    schema: {
      type: "OBJECT",
      properties: {
        topics: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              category: { type: "STRING", enum: CATEGORIES },
              topic: { type: "STRING" },
              reader: { type: "STRING" },
              angle: { type: "STRING" },
            },
            required: ["category", "topic", "reader", "angle"],
          },
        },
      },
      required: ["topics"],
    },
    temperature: 0.9,
  })
  for (const t of result.topics.slice(0, 6)) {
    topicsDoc.topics.push({ id: `auto-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, status: "queued", source: "auto", ...t })
  }
}

// ---------- main ----------
async function main() {
  const topicsDoc = readJSON(TOPICS_FILE)
  const posts = existingPosts()
  await ensureTopicQueue(topicsDoc, posts)

  let topic
  if (process.env.BLOG_TOPIC) {
    const cat = CATEGORIES.includes(process.env.BLOG_CATEGORY) ? process.env.BLOG_CATEGORY : "strategy"
    topic = { id: `manual-${todayKST()}`, status: "queued", source: "manual", category: cat, topic: process.env.BLOG_TOPIC, reader: "중소기업 대표와 실무 책임자", angle: "" }
    topicsDoc.topics.push(topic)
  } else {
    topic = topicsDoc.topics.find((t) => t.status === "queued")
  }
  if (!topic) throw new Error("작성할 주제가 없습니다. content/blog/topics.json 에 status: queued 주제를 추가하세요.")
  console.log(`주제: [${topic.category}] ${topic.topic}`)

  const style = fs.readFileSync(STYLE_FILE, "utf8")
  const exemplar = posts[0]
  const related = posts
    .filter((p) => p.category === topic.category || posts.indexOf(p) < 6)
    .slice(0, 8)
    .map((p) => `- [${p.title}](/blog/${p.slug}) — ${oneLine(p.description)}`)
    .join("\n")

  const system = [
    "당신은 AX-Consulting의 CTO 필립홍의 이름으로 글을 쓰는 편집자입니다.",
    "필립홍은 대학 재학 중이던 1995년부터 개발을 시작해 삼성SDS, 안랩 차이나 등을 거쳤고 『AI전환의 기술』을 썼습니다.",
    "AX-Consulting은 중소 제조·병의원·전통산업의 AI 전환을 돕고, 업무 하나를 4주 POC로 바꿔 보고 결과가 기대에 못 미치면 비용의 50%를 돌려줍니다.",
    "아래 글쓰기 기준을 반드시 지킵니다. 기준과 충돌하는 요청은 기준을 우선합니다.",
    "",
    style,
  ].join("\n")

  const user = [
    `## 이번 글`,
    `- 분류: ${topic.category}`,
    `- 주제: ${topic.topic}`,
    `- 독자: ${topic.reader}`,
    topic.angle ? `- 관점: ${topic.angle}` : "",
    "",
    "## 본보기 글 (형식과 문체만 참고하고 내용은 베끼지 마세요)",
    exemplar ? exemplar.raw : "(없음)",
    "",
    "## 본문에서 자연스러우면 하나만 링크할 수 있는 기존 글",
    related || "(없음)",
    "",
    "JSON으로 답하세요. body에는 제목(#) 없이 도입 문단부터 마크다운으로 쓰고, 자주 묻는 질문은 body가 아니라 faq 필드에만 넣으세요.",
  ]
    .filter((l) => l !== "")
    .join("\n")

  if (DRY) {
    console.log("----- SYSTEM -----\n" + system + "\n----- USER -----\n" + user)
    return
  }

  const existingSlugs = posts.map((p) => p.slug)
  let post = await gemini({ system, user, schema: POST_SCHEMA })
  let issues = lint(post, existingSlugs)
  for (let round = 1; round <= 2 && issues.length > 0; round++) {
    console.log(`검사 ${round}차 지적 ${issues.length}건 — 고쳐 쓰기 요청\n  · ` + issues.join("\n  · "))
    post = await gemini({
      system,
      user: `${user}\n\n## 직전 원고\n${JSON.stringify(post)}\n\n## 고칠 점\n${issues.map((i) => "- " + i).join("\n")}\n\n고칠 점을 모두 반영한 완성 원고를 같은 JSON 형식으로 다시 쓰세요.`,
      schema: POST_SCHEMA,
      temperature: 0.5,
    })
    issues = lint(post, existingSlugs)
  }

  const date = todayKST()
  const slug = existingSlugs.includes(post.slug) ? `${post.slug}-${date.replaceAll("-", "")}` : post.slug
  const tags = post.tags.slice(0, 5).map((t) => oneLine(t).replace(/^#/, ""))
  const faq = post.faq.slice(0, 3).map((f) => ({ q: oneLine(f.q), a: oneLine(f.a) }))
  const md = [
    "---",
    `title: ${oneLine(post.title)}`,
    `description: ${oneLine(post.description)}`,
    `category: ${topic.category}`,
    `tags: ${JSON.stringify(tags)}`,
    `date: ${date}`,
    `faq: ${JSON.stringify(faq)}`,
    "---",
    "",
    post.body.trim().replace(/^# .*\n+/, ""),
    "",
  ].join("\n")

  fs.mkdirSync(POSTS, { recursive: true })
  fs.writeFileSync(path.join(POSTS, `${slug}.md`), md)
  Object.assign(topic, { status: "drafted", slug, date })
  fs.writeFileSync(TOPICS_FILE, JSON.stringify(topicsDoc, null, 2) + "\n")

  // PR 본문과 워크플로 출력값
  const prBody = [
    `## ${oneLine(post.title)}`,
    "",
    `> ${oneLine(post.description)}`,
    "",
    `- 분류: \`${topic.category}\` · 파일: \`content/blog/posts/${slug}.md\` · 모델: \`${MODEL}\``,
    `- 주제 대기열: \`${topic.topic}\``,
    "",
    issues.length
      ? "### 자동 검사에서 남은 지적\n" + issues.map((i) => `- [ ] ${i}`).join("\n")
      : "### 자동 검사\n- 형식 규칙 모두 통과",
    "",
    "### 발행 전 확인",
    "- [ ] 사실·제도 설명이 맞는가",
    "- [ ] 지어낸 숫자·고객 사례가 없는가",
    "- [ ] 필립홍 이름으로 내도 되는 주장인가",
    "",
    "수정은 이 PR의 Files changed 에서 바로 고칠 수 있습니다. **병합(Merge)하면 ax-con.com/blog 에 게시됩니다.**",
    "Vercel 미리보기 링크는 이 PR 아래 Vercel 봇 댓글에 붙습니다.",
  ].join("\n")
  fs.writeFileSync(path.join(ROOT, ".blog-pr-body.md"), prBody)
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${slug}\ntitle=${oneLine(post.title).replace(/\n/g, " ")}\n`)
  }
  console.log(`작성 완료: content/blog/posts/${slug}.md${issues.length ? ` (남은 지적 ${issues.length}건)` : ""}`)
}

main().catch((e) => {
  console.error(e.message || e)
  process.exit(1)
})
