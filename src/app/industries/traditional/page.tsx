"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { 
  ArrowRight, 
  Clock, 
  PackageSearch, 
  UserX, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Megaphone,
  CheckCircle2,
  TrendingDown,
  Timer,
  Store
} from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

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

const painPoints = [
  {
    icon: Clock,
    title: "주문 처리 지연",
    description: "수기 주문 접수와 전화 응대로 인한 주문 처리 병목 현상. 피크 시간대 고객 대기 시간 증가와 주문 오류 발생.",
  },
  {
    icon: PackageSearch,
    title: "재고 파악 어려움",
    description: "실시간 재고 현황 파악 불가. 품절로 인한 매출 손실과 과잉 재고로 인한 폐기 손실이 반복됩니다.",
  },
  {
    icon: UserX,
    title: "고객 관리 부재",
    description: "단골 고객 정보 관리 미흡. 방문 이력, 선호 메뉴, 특별 요청 사항 등 소중한 고객 데이터가 활용되지 못합니다.",
  },
]

const solutions = [
  {
    icon: ShoppingCart,
    title: "주문 자동화",
    description: "키오스크, 모바일 주문, POS 연동으로 주문 접수부터 조리 지시까지 자동화. 주문 오류 제로, 처리 시간 70% 단축.",
    benefits: ["주문 오류 제로화", "처리 시간 70% 단축", "피크타임 대응력 향상"],
  },
  {
    icon: BarChart3,
    title: "재고 관리 시스템",
    description: "AI 기반 수요 예측으로 최적 발주량 자동 산출. 실시간 재고 현황 대시보드로 품절과 폐기 손실을 최소화합니다.",
    benefits: ["실시간 재고 현황 파악", "AI 수요 예측", "자동 발주 알림"],
  },
  {
    icon: Users,
    title: "고객 데이터 분석",
    description: "고객 방문 패턴, 구매 이력, 선호도 분석으로 맞춤형 서비스 제공. 단골 고객 유지율을 높이고 객단가를 증대합니다.",
    benefits: ["고객 세그먼트 분석", "맞춤형 추천", "리텐션 향상"],
  },
  {
    icon: Megaphone,
    title: "마케팅 자동화",
    description: "고객 데이터 기반 타겟 마케팅. 자동 쿠폰 발송, 이벤트 알림, SNS 연동으로 재방문율과 신규 유입을 높입니다.",
    benefits: ["자동 쿠폰 발송", "타겟 마케팅", "SNS 연동 관리"],
  },
]

const caseStudy = {
  company: "C유통사",
  industry: "소매/유통",
  results: [
    { icon: Timer, label: "주문 처리 시간", value: "70%", suffix: "단축" },
    { icon: TrendingDown, label: "인건비", value: "35%", suffix: "절감" },
  ],
  quote: "AI 주문 시스템 도입 후 피크 시간대 대기 줄이 사라졌습니다. 직원들은 고객 응대에 더 집중할 수 있게 되었고, 전체 운영 비용도 크게 줄었습니다.",
}

export default function TraditionalIndustryPage() {
  const painPointsRef = React.useRef(null)
  const solutionsRef = React.useRef(null)
  const caseStudyRef = React.useRef(null)
  
  const painPointsInView = useInView(painPointsRef, { once: true, amount: 0.2 })
  const solutionsInView = useInView(solutionsRef, { once: true, amount: 0.2 })
  const caseStudyInView = useInView(caseStudyRef, { once: true, amount: 0.2 })

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[70vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}
          />
          
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32 mx-auto">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium ring-1 ring-inset ring-orange-500/20">
                  <Store className="w-4 h-4" />
                  Industry Solution
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">전통산업</span> AI 자동화
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                요식업, 소매업, 서비스업의 디지털 전환을 지원합니다
              </motion.p>

              <motion.p 
                variants={fadeUp}
                className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                복잡한 IT 지식 없이도 쉽게 도입할 수 있는 AI 솔루션으로<br className="hidden sm:block" />
                매장 운영의 효율을 극대화하세요.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                  asChild
                >
                  <Link href="/contact">
                    무료 상담 신청하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-8 text-base"
                  asChild
                >
                  <Link href="/cases">
                    성공 사례 보기
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section 
          ref={painPointsRef}
          className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={painPointsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-600 dark:text-red-400 uppercase bg-red-500/10 rounded-full">
                Pain Points
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                이런 <span className="text-red-500">어려움</span> 겪고 계신가요?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                전통산업 현장에서 흔히 마주하는 운영 과제들입니다
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              animate={painPointsInView ? "visible" : "hidden"}
              variants={stagger}
            >
              {painPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  className="group relative p-8 bg-background rounded-2xl border border-red-200/50 dark:border-red-900/30 shadow-sm hover:shadow-md hover:border-red-300/50 dark:hover:border-red-800/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                      <point.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section 
          ref={solutionsRef}
          className="py-24 md:py-32 bg-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-green-400/5 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Solutions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                AI로 <span className="text-primary">해결</span>합니다
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                검증된 AI 솔루션으로 운영 효율을 극대화하세요
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              initial="hidden"
              animate={solutionsInView ? "visible" : "hidden"}
              variants={stagger}
            >
              {solutions.map((solution) => (
                <motion.div
                  key={solution.title}
                  variants={fadeUp}
                  className="group relative p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <solution.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit) => (
                          <span 
                            key={benefit}
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-primary bg-primary/5 rounded-md"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section 
          ref={caseStudyRef}
          className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <span className="text-primary">성공 사례</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                AI 자동화 도입으로 실제 성과를 달성한 사례입니다
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            >
              <div className="bg-background rounded-3xl border border-border/50 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                    <div>
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-muted-foreground bg-muted rounded-full">
                        {caseStudy.industry}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold">{caseStudy.company}</h3>
                    </div>
                    <div className="flex gap-6">
                      {caseStudy.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <result.icon className="w-5 h-5 text-primary" />
                            <span className="text-3xl md:text-4xl font-bold text-primary">{result.value}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {result.label} {result.suffix}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-primary/20 font-serif">"</div>
                    <p className="relative z-10 text-lg md:text-xl text-foreground/80 leading-relaxed pl-6">
                      {caseStudy.quote}
                    </p>
                  </blockquote>
                </div>
              </div>
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
                매장 운영, AI로 더 스마트하게
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                무료 진단으로 우리 매장에 맞는 AI 솔루션을 확인해 보세요.
                <br className="hidden md:block" />
                복잡한 IT 지식 없이도 쉽게 시작할 수 있습니다.
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
                  <span>무료 현장 진단</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/90" />
                  <span>맞춤형 솔루션 설계</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/90" />
                  <span>도입 후 지속 지원</span>
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
