import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CATEGORIES, type CategoryKey, type PostMeta, formatDate } from "@/lib/blog"
import { cn } from "@/lib/utils"

export function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 md:pt-28">{children}</main>
      <Footer />
    </>
  )
}

export function CategoryTabs({ active }: { active?: CategoryKey }) {
  const tabs: { key?: CategoryKey; label: string; href: string }[] = [
    { label: "전체", href: "/blog" },
    ...(Object.keys(CATEGORIES) as CategoryKey[]).map((key) => ({
      key,
      label: CATEGORIES[key].label,
      href: `/blog/category/${key}`,
    })),
  ]
  return (
    <nav aria-label="블로그 카테고리" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border">
      {tabs.map((t) => {
        const isActive = t.key === active
        return (
          <Link
            key={t.href}
            href={t.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "-mb-px border-b-2 pb-3 text-sm transition-colors",
              isActive
                ? "border-foreground font-semibold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {t.label}
          </Link>
        )
      })}
    </nav>
  )
}

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="py-16 text-sm text-muted-foreground">아직 이 분류에 올라온 글이 없습니다.</p>
  }
  return (
    <ul className="divide-y divide-border">
      {posts.map((p) => (
        <li key={p.slug} className="py-8">
          <article>
            <p className="text-xs font-medium tracking-wide text-primary">{CATEGORIES[p.category].label}</p>
            <h2 className="mt-2 text-xl font-semibold leading-snug text-foreground md:text-2xl">
              <Link href={`/blog/${p.slug}`} className="hover:underline underline-offset-4">
                {p.title}
              </Link>
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
              <time dateTime={p.updated ?? p.date}>
                {formatDate(p.updated ?? p.date)}
                {p.updated ? " 갱신" : ""}
              </time>
              {p.tags.slice(0, 4).map((t) => (
                <span key={t} className="rounded bg-muted px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
