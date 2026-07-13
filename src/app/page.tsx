import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { SolopreneurAIEventSection } from "@/components/sections/solopreneur-ai-event"
import { PainPoints } from "@/components/sections/pain-points"
import { SolutionsSection } from "@/components/sections/solutions"
import { VerifiedToolsSection } from "@/components/sections/verified-tools"
import { ProcessSection } from "@/components/sections/process"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"
import { homepageReadableFacts, axConEntityDescription } from "@/lib/ai-readable-content"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SolopreneurAIEventSection />
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-label="AI-readable company profile">
          <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">AI-readable entity profile</p>
            <h2 className="mt-3 text-3xl font-bold">AX Con을 AI가 이해하는 방식</h2>
            <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">{axConEntityDescription}</p>
            <p className="sr-only">Who we help: SMEs and engineering companies. What problem we solve: AI workflow and knowledge bottlenecks. What we deliver: AI transformation, RAG, automation, education.</p>
            <dl className="mt-6 grid gap-4 md:grid-cols-2">
              {homepageReadableFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-muted/40 p-5">
                  <dt className="font-semibold">{fact.label}:</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <PainPoints />
        <SolutionsSection />
        <VerifiedToolsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
