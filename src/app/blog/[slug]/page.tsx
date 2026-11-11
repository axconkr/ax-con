import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BlogShell } from "@/components/blog/blog-shell"
import { AUTHOR } from "@/components/blog/author"
import { CATEGORIES, formatDate, getAdjacentPosts, getAllPosts, getPost } from "@/lib/blog"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://ax-con.com/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const { prev, next } = getAdjacentPosts(slug)
  const url = `https://ax-con.com/blog/${post.slug}`

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      inLanguage: "ko-KR",
      mainEntityOfPage: url,
      keywords: post.tags.join(", "),
      articleSection: CATEGORIES[post.category].label,
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        alternateName: AUTHOR.alternateName,
        jobTitle: AUTHOR.jobTitle,
        url: AUTHOR.url,
        sameAs: AUTHOR.sameAs,
      },
      publisher: { "@type": "Organization", name: "AX-Consulting", url: "https://ax-con.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AX 인사이트", item: "https://ax-con.com/blog" },
        {
          "@type": "ListItem",
          position: 2,
          name: CATEGORIES[post.category].label,
          item: `https://ax-con.com/blog/category/${post.category}`,
        },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ]
  if (post.faq.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    })
  }

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href={`/blog/category/${post.category}`}
          className="text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          {CATEGORIES[post.category].label}
        </Link>
        <h1 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-3 text-sm text-muted-foreground">
          <span>{AUTHOR.byline}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.updated ?? post.date}>
            {formatDate(post.updated ?? post.date)}
            {post.updated ? " 갱신" : ""}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes}분 분량</span>
        </div>

        {post.toc.length > 1 && (
          <nav aria-label="목차" className="mt-8 rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-foreground">목차</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
              {post.toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-foreground hover:underline underline-offset-4">
                    {t.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="post-body mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.faq.length > 0 && (
          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-bold text-foreground md:text-2xl">
              자주 묻는 질문
            </h2>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {post.faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-semibold text-foreground">{f.q}</dt>
                  <dd className="mt-2 text-[15px] leading-7 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {post.tags.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="태그">
            {post.tags.map((t) => (
              <li key={t} className="rounded bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        )}

        <aside className="mt-12 rounded-lg border border-border bg-card p-6 md:p-8">
          <p className="text-sm font-semibold text-foreground">{AUTHOR.byline}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{AUTHOR.bio}</p>
          <div className="mt-6 border-t border-border pt-6">
            <p className="text-base font-semibold text-foreground">우리 회사에 맞는 첫 과제가 궁금하다면</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              4주 POC로 실제 업무 하나를 AI로 바꿔 보고 효과를 숫자로 확인합니다. 기대한 결과가 나오지 않으면
              비용의 50%를 돌려드립니다.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              무료 진단 상담 신청
            </Link>
          </div>
        </aside>

        <nav className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2" aria-label="다른 글">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group">
              <span className="text-xs text-muted-foreground">이전 글</span>
              <span className="mt-1 block text-sm font-medium text-foreground group-hover:underline underline-offset-4">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className="group sm:text-right">
              <span className="text-xs text-muted-foreground">다음 글</span>
              <span className="mt-1 block text-sm font-medium text-foreground group-hover:underline underline-offset-4">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
        <p className="mt-8 text-center">
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            목록으로
          </Link>
        </p>
      </article>
    </BlogShell>
  )
}
