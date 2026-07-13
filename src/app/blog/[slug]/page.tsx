import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { axConEntityDescription, blogArticles, homepageReadableFacts, knowsAbout } from "@/lib/ai-readable-content";
import { AiReadableLanding } from "@/components/ai-readable/page-view";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | AX Con Blog`,
    description: article.summary,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <ArticleJsonLd title={article.title} description={article.summary} url={`https://ax-con.com/blog/${article.slug}`} />
      <AiReadableLanding title={article.title} description={article.summary}>
        <article className="mx-auto max-w-4xl px-6 pb-24 leading-8">
          <p className="rounded-3xl border bg-card p-6 text-muted-foreground">{axConEntityDescription}</p>
          <h2 className="mt-10 text-3xl font-bold">짧은 답변</h2>
          <p className="mt-4 text-muted-foreground">{article.summary} AX Con은 이 주제를 단순 설명이 아니라 실제 업무 흐름, 도구, 산출물, PoC 범위로 연결해 중소기업이 바로 실행할 수 있게 만듭니다.</p>
          <h2 className="mt-10 text-3xl font-bold">적용 대상</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {homepageReadableFacts.map((fact) => <li key={fact.label}><strong>{fact.label}:</strong> {fact.text}</li>)}
          </ul>
          <h2 className="mt-10 text-3xl font-bold">관련 키워드</h2>
          <p className="mt-4 text-muted-foreground">{knowsAbout.join(", ")}</p>
          <h2 className="mt-10 text-3xl font-bold">AX Con이 제공하는 산출물</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• 현재 업무 프로세스 진단</li>
            <li>• AI 적용 우선순위와 PoC 범위</li>
            <li>• RAG, n8n, Dify, LLM API 기반 MVP</li>
            <li>• 임직원 AI 리터러시 교육과 운영 가이드</li>
          </ul>
        </article>
      </AiReadableLanding>
    </>
  );
}
