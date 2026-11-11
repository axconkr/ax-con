import type { Metadata } from "next"
import { BlogShell, CategoryTabs, PostList } from "@/components/blog/blog-shell"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "AX 인사이트",
  description:
    "중소기업 AI 전환(AX)을 직접 해 본 컨설턴트가 전략, 업종별 적용, 실무 자동화를 정리합니다.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "AX 인사이트 | AX-Consulting",
    description: "중소기업 AI 전환(AX)의 전략, 업종별 적용, 실무 자동화를 정리합니다.",
    url: "https://ax-con.com/blog",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  return (
    <BlogShell>
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">AX 인사이트</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            중소기업이 AI 전환을 어디서 시작하고, 현장에 어떻게 붙이는지 정리했습니다.
          </p>
        </header>
        <CategoryTabs />
        <PostList posts={posts} />
      </div>
    </BlogShell>
  )
}
