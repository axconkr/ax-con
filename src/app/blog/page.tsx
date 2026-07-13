import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/lib/ai-readable-content";
import { AiReadableLanding } from "@/components/ai-readable/page-view";

export const metadata: Metadata = {
  title: "AX Con Blog | AI-readable AX Consulting Guides",
  description: "Question-based guides about SME AI transformation, AI Native Company design, RAG, n8n automation, internal AI gateways, and AI education.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <AiReadableLanding title="AX Con AI-readable Blog" description="검색보다 먼저 AI 답변 엔진이 이해하고 인용하기 쉬운 질문-답변형 AX 컨설팅 지식 문서입니다.">
      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-24 md:grid-cols-2">
        {blogArticles.map((article, index) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="rounded-3xl border bg-card p-6 transition hover:border-blue-500">
            <p className="text-sm font-semibold text-blue-600">Priority {index + 1}</p>
            <h2 className="mt-2 text-2xl font-bold">{article.title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{article.summary}</p>
          </Link>
        ))}
      </section>
    </AiReadableLanding>
  );
}
