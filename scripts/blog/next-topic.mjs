#!/usr/bin/env node
/**
 * 다음에 쓸 블로그 주제를 JSON으로 출력합니다. (Hermes 등 에이전트가 직접 글을 쓸 때 사용)
 * 이미 게시된 글과, 열려 있는 blog-draft PR의 글이 다룬 topic 은 건너뜁니다.
 *
 *   node scripts/blog/next-topic.mjs            # 열린 PR은 gh CLI로 자동 조회
 *   BLOG_PENDING_TOPICS=a,b node scripts/blog/next-topic.mjs
 */
import { execSync } from "node:child_process"
import { existingPosts, loadTopics, usedTopicIds } from "./generate.mjs"

function pendingFromOpenPRs() {
  try {
    const branches = execSync(
      `gh pr list --label blog-draft --state open --json headRefName -q '.[].headRefName'`,
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    ).split("\n").filter(Boolean)
    const ids = []
    for (const b of branches) {
      execSync(`git fetch -q --depth=1 origin ${JSON.stringify(b)}`, { stdio: "ignore" })
      const files = execSync(`git diff --name-only --diff-filter=A HEAD FETCH_HEAD -- content/blog/posts`, { encoding: "utf8" })
        .split("\n").filter(Boolean)
      for (const f of files) {
        const raw = execSync(`git show FETCH_HEAD:${JSON.stringify(f)}`, { encoding: "utf8" })
        const m = raw.match(/^topic:\s*(\S+)/m)
        if (m) ids.push(m[1])
      }
    }
    return ids
  } catch {
    return []
  }
}

if (!process.env.BLOG_PENDING_TOPICS) process.env.BLOG_PENDING_TOPICS = pendingFromOpenPRs().join(",")
const posts = existingPosts()
const used = usedTopicIds(posts)
const topics = loadTopics()
const topic = topics.find((t) => t.status === "queued" && !used.has(t.id))
const remaining = topics.filter((t) => t.status === "queued" && !used.has(t.id)).length
console.log(
  JSON.stringify(
    {
      topic: topic ?? null,
      remaining_queued: remaining,
      skipped_pending: process.env.BLOG_PENDING_TOPICS.split(",").filter(Boolean),
      exemplar: posts[0] ? `content/blog/posts/${posts[0].slug}.md` : null,
      existing: posts.map((p) => ({ slug: p.slug, title: p.title, category: p.category })),
    },
    null,
    2
  )
)
