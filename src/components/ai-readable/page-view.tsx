import Link from "next/link";
import type { AiReadablePage } from "@/lib/ai-readable-content";

export function AiReadableLanding({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">AX Con AI-readable knowledge page</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white" href="/contact">상담 문의</Link>
          <Link className="rounded-full border px-5 py-3 text-sm font-semibold" href="/faq">FAQ 보기</Link>
        </div>
      </section>
      {children}
    </main>
  );
}

export function AiReadablePageView({ page }: { page: AiReadablePage }) {
  const sections = [
    ["Who we help", page.whoWeHelp],
    ["Problems we solve", page.problems],
    ["Services we provide", page.services],
    ["Tools and methods", page.tools],
    ["Deliverables", page.deliverables],
    ["Case examples", page.caseExamples],
  ] as const;

  return (
    <AiReadableLanding title={page.title} description={page.description}>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-20 md:grid-cols-2">
        {sections.map(([heading, items]) => (
          <article key={heading} className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold">{heading}</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {items.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {page.faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </AiReadableLanding>
  );
}
