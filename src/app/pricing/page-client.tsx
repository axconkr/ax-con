"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Plus, Minus } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  href: string
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "스타터",
    price: "무료",
    description: "무료 1시간 진단으로 시작하세요",
    features: [
      "업무 프로세스 분석",
      "AI 도입 가능 영역 진단",
      "간단 리포트 제공",
    ],
    cta: "무료 진단 신청",
    href: "/contact",
  },
  {
    name: "프로젝트",
    price: "500만원~",
    description: "단일 자동화 프로젝트",
    features: [
      "맞춤 솔루션 설계",
      "구현 및 테스트",
      "사용자 교육",
      "1개월 사후 지원",
    ],
    cta: "상담 신청",
    href: "/contact",
    popular: true,
  },
  {
    name: "엔터프라이즈",
    price: "별도 협의",
    description: "전사 디지털 전환",
    features: [
      "전체 업무 프로세스 분석",
      "다중 자동화 구현",
      "지속적 유지보수",
      "전담 매니저 배정",
    ],
    cta: "문의하기",
    href: "/contact",
  },
]

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "무료 진단은 어떻게 진행되나요?",
    answer: "1시간 화상 또는 방문 미팅으로 진행됩니다. 현재 업무 프로세스를 파악하고 AI 자동화 가능 영역을 분석해 드립니다. 미팅 후 간단한 진단 리포트를 무료로 제공합니다.",
  },
  {
    question: "프로젝트 비용은 어떻게 책정되나요?",
    answer: "프로젝트 규모, 복잡도, 연동 시스템 수에 따라 달라집니다. 무료 진단 후 정확한 견적을 안내해 드립니다. 투명한 가격 정책으로 숨겨진 비용 없이 진행합니다.",
  },
  {
    question: "프로젝트 기간은 얼마나 걸리나요?",
    answer: "간단한 자동화는 2주, 복잡한 시스템 구축은 4-8주 정도 소요됩니다. 무료 진단 후 정확한 일정을 안내해 드립니다.",
  },
  {
    question: "사후 지원은 어떻게 되나요?",
    answer: "프로젝트 완료 후 1개월간 무상 지원이 포함됩니다. 이후에도 유지보수 계약을 통해 지속적인 지원을 받으실 수 있습니다.",
  },
  {
    question: "결제 방식은 어떻게 되나요?",
    answer: "계약금 30%, 중간금 40%, 잔금 30%의 3단계로 진행됩니다. 프로젝트 규모에 따라 협의 가능합니다.",
  },
]

const AccordionItem = ({ 
  item, 
  isOpen, 
  onClick 
}: { 
  item: FAQItem
  isOpen: boolean
  onClick: () => void 
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "border-b border-border transition-colors duration-300",
        isOpen ? "bg-muted/30" : "bg-transparent hover:bg-muted/10"
      )}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-lg md:text-xl font-medium tracking-tight transition-colors group-hover:text-primary",
            isOpen ? "text-primary" : "text-foreground"
          )}
        >
          {item.question}
        </span>
        <div
          className={cn(
            "relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ml-4 shrink-0",
            isOpen
              ? "border-primary bg-primary text-primary-foreground rotate-180"
              : "border-muted-foreground/30 text-muted-foreground group-hover:border-primary group-hover:text-primary"
          )}
        >
          <Plus
            className={cn(
              "absolute h-4 w-4 transition-transform duration-300",
              isOpen && "rotate-90 opacity-0"
            )}
          />
          <Minus
            className={cn(
              "absolute h-4 w-4 transition-transform duration-300",
              !isOpen && "rotate-90 opacity-0"
            )}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-muted-foreground leading-relaxed text-base md:text-lg pr-4 md:pr-12">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingPageClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[50vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
            }}
          />

          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24 mx-auto">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium ring-1 ring-inset ring-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Pricing
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">요금제</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                투명한 가격 정책으로 시작하세요
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              {pricingTiers.map((tier) => (
                <motion.div key={tier.name} variants={fadeUp}>
                  <Card
                    className={cn(
                      "relative h-full flex flex-col transition-all duration-300 hover:shadow-lg",
                      tier.popular
                        ? "border-primary shadow-md scale-[1.02] md:scale-105"
                        : "border-border/50 hover:border-primary/50"
                    )}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="px-3 py-1 text-sm">인기</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="text-center mb-8">
                        <span className="text-4xl md:text-5xl font-bold text-foreground">
                          {tier.price}
                        </span>
                      </div>
                      <ul className="space-y-4">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="w-full"
                        variant={tier.popular ? "default" : "outline"}
                        size="lg"
                      >
                        <Link href={tier.href}>{tier.cta}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 w-full bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                >
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    자주 묻는
                    <br />
                    <span className="text-primary">질문</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    요금제와 서비스에 대해
                    <br className="hidden lg:block" />
                    궁금하신 점을 확인해 보세요.
                  </p>

                  <div className="hidden lg:block p-6 bg-muted/30 rounded-2xl border border-border/50 backdrop-blur-sm">
                    <p className="font-semibold mb-2">더 궁금한 점이 있으신가요?</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      무료 상담을 통해 전문가에게
                      <br />
                      직접 문의하실 수 있습니다.
                    </p>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      문의하기 &rarr;
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={stagger}
                  className="border-t border-border"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      item={faq}
                      isOpen={openIndex === index}
                      onClick={() => handleToggle(index)}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              >
                지금 바로 시작하세요
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground mb-8"
              >
                무료 진단을 통해 귀사에 맞는 최적의 AI 자동화 솔루션을 찾아보세요.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button asChild size="lg" className="h-12 px-8">
                  <Link href="/contact">무료 상담 신청하기</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
