import type { Metadata } from "next";
import { AiReadablePageView } from "@/components/ai-readable/page-view";
import { industryPages } from "@/lib/ai-readable-content";
import { FAQJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

const page = industryPages["sme"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/industries/sme" },
};

export default function Page() {
  return <><ServiceJsonLd name={page.title} description={page.description} url={`https://ax-con.com/industries/sme`} /><FAQJsonLd faqs={page.faqs} /><AiReadablePageView page={page} /></>;
}
