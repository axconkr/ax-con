import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogShell, CategoryTabs, PostList } from "@/components/blog/blog-shell"
import { CATEGORIES, type CategoryKey, getPostsByCategory } from "@/lib/blog"

type Params = { category: string }

export function generateStaticParams(): Params[] {
  return Object.keys(CATEGORIES).map((category) => ({ category }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params
  const c = CATEGORIES[category as CategoryKey]
  if (!c) return {}
  return {
    title: `${c.label} | AX 인사이트`,
    description: c.description,
    alternates: { canonical: `/blog/category/${category}` },
  }
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params
  const c = CATEGORIES[category as CategoryKey]
  if (!c) notFound()
  const posts = getPostsByCategory(category as CategoryKey)
  return (
    <BlogShell>
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{c.label}</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{c.description}</p>
        </header>
        <CategoryTabs active={category as CategoryKey} />
        <PostList posts={posts} />
      </div>
    </BlogShell>
  )
}
