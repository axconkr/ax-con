#!/usr/bin/env node
/**
 * 블로그 글 파일 하나를 STYLE.md 규칙으로 검사합니다. 통과하면 exit 0, 지적이 있으면 목록을 출력하고 exit 1.
 *   node scripts/blog/lint.mjs content/blog/posts/<slug>.md
 */
import fs from "node:fs"
import path from "node:path"
import { CATEGORIES, existingPosts, lint, parseFrontmatter } from "./generate.mjs"

const file = process.argv[2]
if (!file || !fs.existsSync(file)) {
  console.error("사용법: node scripts/blog/lint.mjs content/blog/posts/<slug>.md")
  process.exit(2)
}
const slug = path.basename(file).replace(/\.md$/, "")
const { data, body } = parseFrontmatter(fs.readFileSync(file, "utf8"))
const post = {
  title: String(data.title ?? ""),
  description: String(data.description ?? ""),
  slug,
  body,
  tags: data.tags,
  faq: data.faq,
}
const others = existingPosts().map((p) => p.slug).filter((s) => s !== slug)
const issues = lint(post, others)
if (!CATEGORIES.includes(data.category)) issues.push(`category "${data.category}" — ${CATEGORIES.join(" | ")} 중 하나`)
if (!data.topic) issues.push("frontmatter에 topic: <주제 id> 가 없습니다")
if (!/^\d{4}-\d{2}-\d{2}$/.test(String(data.date ?? ""))) issues.push("date: YYYY-MM-DD 형식이 아닙니다")
if (issues.length) {
  console.log(`지적 ${issues.length}건\n- ` + issues.join("\n- "))
  process.exit(1)
}
console.log("통과")
