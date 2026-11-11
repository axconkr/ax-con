import fs from "node:fs"
import path from "node:path"
import { Marked } from "marked"

export const BLOG_DIR = path.join(process.cwd(), "content", "blog", "posts")

export const CATEGORIES = {
  strategy: {
    label: "AX 전략",
    description: "대표와 경영진이 AI 전환을 어디서 시작하고 어떻게 판단할지 정리했습니다.",
  },
  industry: {
    label: "업종별 AX",
    description: "제조·병의원·전통산업 현장에서 AI가 실제로 붙는 지점을 정리했습니다.",
  },
  practice: {
    label: "실무 자동화",
    description: "현업 담당자가 반복 업무를 줄이는 구체적인 방법을 정리했습니다.",
  },
  guide: {
    label: "자주 묻는 질문",
    description: "AX 컨설팅과 도입 과정에서 자주 받는 질문에 답했습니다.",
  },
} as const

export type CategoryKey = keyof typeof CATEGORIES

export interface FaqItem {
  q: string
  a: string
}

export interface PostMeta {
  slug: string
  title: string
  description: string
  category: CategoryKey
  tags: string[]
  date: string
  updated?: string
  faq: FaqItem[]
  draft?: boolean
}

export interface TocItem {
  id: string
  text: string
}

export interface Post extends PostMeta {
  html: string
  toc: TocItem[]
  readingMinutes: number
}

/**
 * Frontmatter is a small YAML subset: `key: value` per line, where the value
 * is either a bare string or JSON (arrays, objects, quoted strings).
 */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, unknown> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!m) continue
    const [, key, value] = m
    const v = value.trim()
    if (/^[[{"]/.test(v) || v === "true" || v === "false") {
      try {
        data[key] = JSON.parse(v)
        continue
      } catch {
        /* fall through to string */
      }
    }
    data[key] = v
  }
  return { data, body: match[2] }
}

export function slugifyHeading(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
}

function readPostFile(file: string): { meta: PostMeta; body: string } | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
  const { data, body } = parseFrontmatter(raw)
  const slug = file.replace(/\.md$/, "")
  const category = (data.category as string) in CATEGORIES ? (data.category as CategoryKey) : "strategy"
  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    date: String(data.date ?? "2026-01-01"),
    updated: data.updated ? String(data.updated) : undefined,
    faq: Array.isArray(data.faq) ? (data.faq as FaqItem[]) : [],
    draft: data.draft === true,
  }
  return { meta, body }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => readPostFile(f))
    .filter((p): p is { meta: PostMeta; body: string } => p !== null && !p.meta.draft)
    .map((p) => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getPostsByCategory(category: CategoryKey): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`
  if (!/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(path.join(BLOG_DIR, file))) return null
  const parsed = readPostFile(file)
  if (!parsed || parsed.meta.draft) return null

  const toc: TocItem[] = []
  const marked = new Marked({ gfm: true })
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens)
        const plain = text.replace(/<[^>]+>/g, "")
        const id = slugifyHeading(plain)
        if (depth === 2) toc.push({ id, text: plain })
        return `<h${depth} id="${id}">${text}</h${depth}>\n`
      },
      table(token) {
        // wrap tables so they scroll horizontally on phones
        const header = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join("")
        const rows = token.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`)
          .join("")
        return `<div class="table-wrap"><table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>\n`
      },
    },
  })
  const html = marked.parse(parsed.body, { async: false }) as string
  const chars = parsed.body.replace(/\s+/g, "").length
  return { ...parsed.meta, html, toc, readingMinutes: Math.max(2, Math.round(chars / 500)) }
}

export function getAdjacentPosts(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const all = getAllPosts()
  const i = all.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: null, next: null }
  // list is newest-first: "previous" = older post, "next" = newer post
  return { prev: all[i + 1] ?? null, next: all[i - 1] ?? null }
}

export function formatDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number)
  return `${y}년 ${m}월 ${d}일`
}
