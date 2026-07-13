import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { PainPoints } from "@/components/sections/pain-points"
import { SolutionsSection } from "@/components/sections/solutions"
import { VerifiedToolsSection } from "@/components/sections/verified-tools"
import { ProcessSection } from "@/components/sections/process"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
