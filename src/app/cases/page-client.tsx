"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Factory,
  Stethoscope,
  Store,
  Clock,
  TrendingDown,
  TrendingUp,
  Users,
  CheckCircle2,
  Quote,
} from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }
  }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const caseStudies = [
  {
    id: 1,
    industry: "제조업",
    industryIcon: Factory,
    company: "A제조사",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-orange-500/20",
    challenge: "수작업 데이터 입력으로 월 100시간 이상 소요, 오류 빈번",
    solution: "n8n 기반 데이터 자동화, ERP 연동",
    results: [
      { icon: Clock, value: "월 80시간", label: "업무 시간 절감" },
      { icon: TrendingDown, value: "95%", label: "오류율 감소" },
    ],
    quote: "이제 직원들이 단순 입력이 아닌 분석 업무에 집중할 수 있게 되었습니다",
    highlightColor: "from-orange-500/10 to-amber-500/10",
    borderColor: "hover:border-orange-500/30",
  },
  {
    id: 2,
    industry: "의료",
    industryIcon: Stethoscope,
    company: "B클리닉",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20",
    challenge: "노쇼율 25%, 수동 예약 확인 전화 부담",
    solution: "자동 예약 확인 시스템, AI 기반 노쇼 예측",
    results: [
      { icon: TrendingDown, value: "40%", label: "노쇼율 감소" },
      { icon: TrendingUp, value: "30%", label: "고객 만족도 향상" },
    ],
    quote: "환자분들이 미리 알림을 받아 만족도가 크게 올랐습니다",
    highlightColor: "from-emerald-500/10 to-teal-500/10",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    id: 3,
    industry: "전통산업",
    industryIcon: Store,
    company: "C유통",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 ring-purple-500/20",
    challenge: "주문 처리 지연, 재고 파악 어려움",
    solution: "주문 자동화 시스템, 실시간 재고 연동",
    results: [
      { icon: Clock, value: "70%", label: "주문 처리 시간 단축" },
      { icon: Users, value: "35%", label: "인건비 절감" },
    ],
    quote: "작은 회사지만 대기업 못지않은 시스템을 갖추게 되었습니다",
    highlightColor: "from-purple-500/10 to-violet-500/10",
    borderColor: "hover:border-purple-500/30",
  },
]

export default function CasesPageClient() {
  const casesRef = React.useRef(null)
  const casesInView = useInView(casesRef, { once: true, amount: 0.1 })

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}
          />

          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          <div className="container relative z-10 px-4 md:px-6 py-20 md:py-28 mx-auto">
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
                  Case Studies
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">성공 사례</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                실제 고객이 경험한 변화를 확인하세요
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                제조업, 의료, 전통산업 등 다양한 분야에서<br className="hidden sm:block" />
                AI 자동화로 실질적인 비즈니스 성과를 달성한 사례입니다.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section
          ref={casesRef}
          className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
              className="space-y-12 md:space-y-16"
              initial="hidden"
              animate={casesInView ? "visible" : "hidden"}
              variants={stagger}
            >
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  variants={fadeUp}
                >
                  <Card className={`overflow-hidden border-border/50 transition-all duration-300 ${caseStudy.borderColor}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.highlightColor} opacity-30`} />
                    <CardHeader className="relative pb-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <Badge className={`${caseStudy.badgeColor} ring-1 ring-inset`}>
                            <caseStudy.industryIcon className="w-3 h-3 mr-1" />
                            {caseStudy.industry}
                          </Badge>
                          <span className="text-sm text-muted-foreground">Case {String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        {caseStudy.company}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative pt-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                Challenge
                              </h4>
                              <p className="text-foreground leading-relaxed">
                                {caseStudy.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                Solution
                              </h4>
                              <p className="text-foreground leading-relaxed">
                                {caseStudy.solution}
                              </p>
                            </div>
                          </div>

                          <div className="relative bg-background/60 rounded-xl p-6 border border-border/50">
                            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                            <p className="text-muted-foreground italic pl-8 leading-relaxed">
                              &ldquo;{caseStudy.quote}&rdquo;
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Results
                          </h4>
                          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            {caseStudy.results.map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="text-center p-6 bg-background rounded-xl border border-border/50 shadow-sm"
                              >
                                <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                  {result.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {result.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                고객과 함께 만든 <span className="text-primary">성과</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {[
                { value: "80+", label: "시간 절감 (월 평균)" },
                { value: "95%", label: "오류율 감소" },
                { value: "40%", label: "노쇼율 개선" },
                { value: "70%", label: "처리 시간 단축" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="text-center p-6 bg-muted/30 rounded-2xl border border-border/50"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700" />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                다음 성공 사례의 주인공이<br />
                되어보세요
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                무료 상담을 통해 귀사의 자동화 가능 영역을 진단해 드립니다.
                <br className="hidden md:block" />
                AI 자동화로 어떤 변화가 가능한지 직접 확인해 보세요.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20 px-8 h-12"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    무료 상담 신청하기
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/90" />
                  <span>무료 1시간 진단</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/90" />
                  <span>맞춤형 솔루션 제안</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/90" />
                  <span>ROI 분석 제공</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
