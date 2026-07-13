import type { Metadata } from "next";
import { AiReadablePageView } from "@/components/ai-readable/page-view";
import { servicePages } from "@/lib/ai-readable-content";
import { FAQJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

const page = servicePages["ai-automation"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/services/ai-automation" },
};

export default function Page() {
  return <><ServiceJsonLd name={page.title} description={page.description} url={`https://ax-con.com/services/ai-automation`} /><FAQJsonLd faqs={page.faqs} /><AiReadablePageView page={page} /></>;
}
