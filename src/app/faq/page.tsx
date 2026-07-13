import type { Metadata } from "next";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/lib/ai-readable-content";
import { AiReadableLanding } from "@/components/ai-readable/page-view";

export const metadata: Metadata = {
  title: "AX Con FAQ | AI Transformation, RAG, n8n, Internal AI Gateway",
  description: "AX Con FAQ answers common questions about AX consulting, SME AI transformation, AI Native Company design, RAG, n8n automation, internal AI gateways, and AI literacy training.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd faqs={faqItems} />
      <AiReadableLanding title="AX Con FAQ" description="AI 검색과 LLM 답변 엔진이 AX Con의 전문 영역을 명확히 이해할 수 있도록 질문-답변형으로 정리한 페이지입니다.">
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-4">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-3xl border bg-card p-6">
                <h2 className="text-xl font-bold">{faq.question}</h2>
                <p className="mt-3 leading-8 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </AiReadableLanding>
    </>
  );
}
