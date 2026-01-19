"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { 
  ArrowRight, 
  Factory, 
  AlertTriangle, 
  ClipboardList, 
  CheckCircle2,
  Cog,
  BarChart3,
  Package,
  FileText,
  Clock,
  TrendingDown
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
    icon: ClipboardList,
    title: "수작업 데이터 입력",
    description: "반복적인 데이터 입력 작업으로 인한 업무 시간 낭비와 인적 오류 발생",
  },
  {
    icon: AlertTriangle,
    title: "생산 일정 관리 복잡",
    description: "복잡한 생산 일정과 자재 관리로 인한 비효율적인 생산 계획 수립",
  },
  {
    icon: Factory,
    title: "품질 관리 이슈",
    description: "수동 품질 검사로 인한 불량률 관리 어려움과 데이터 기반 분석 부재",
  },
]

const solutions = [
  {
    icon: Cog,
    title: "생산관리 자동화",
    description: "ERP/MES 연동을 통한 생산 계획 자동 수립 및 실시간 생산 현황 모니터링",
    benefits: ["생산 계획 수립 시간 80% 단축", "실시간 생산 현황 파악"],
  },
  {
    icon: BarChart3,
    title: "품질 데이터 분석",
    description: "AI 기반 품질 데이터 분석으로 불량 원인 사전 예측 및 품질 개선 방안 도출",
    benefits: ["불량률 감소", "품질 이슈 사전 예방"],
  },
  {
    icon: Package,
    title: "재고 관리 최적화",
    description: "수요 예측 기반 적정 재고 수준 유지 및 자동 발주 시스템 구축",
    benefits: ["재고 비용 절감", "결품률 최소화"],
  },
  {
    icon: FileText,
    title: "보고서 자동 생성",
    description: "일일/주간/월간 생산 보고서 자동 생성 및 경영진 대시보드 구축",
    benefits: ["보고서 작성 시간 90% 절감", "데이터 기반 의사결정"],
  },
]

const caseStudyStats = [
  { icon: Clock, value: "월 80시간", label: "업무 시간 절감" },
  { icon: TrendingDown, value: "95%", label: "오류율 감소" },
]

export default function ManufacturingPage() {
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
        {/* Hero Section */}
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
                  <Factory className="w-4 h-4" />
                  Manufacturing
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">제조업</span> AI 자동화
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                생산성 향상과 비용 절감을 동시에 실현합니다
              </motion.p>

              <motion.p 
                variants={fadeUp}
                className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                수작업 중심의 반복 업무를 AI 자동화로 전환하여<br className="hidden sm:block" />
                생산 효율을 극대화하고 품질 관리를 강화합니다.
              </motion.p>

              <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">
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
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
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
                제조업이 겪는 <span className="text-red-600 dark:text-red-400">공통된 고민</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                많은 제조 기업들이 아래의 문제로 어려움을 겪고 있습니다
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                        <point.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
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

        {/* Solutions Section */}
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
                AI 자동화 <span className="text-primary">솔루션</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                AX-Consulting이 제공하는 제조업 맞춤형 솔루션입니다
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
                  className="group relative p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
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
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Study Section */}
        <section 
          ref={caseStudyRef}
          className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                  Case Study
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  도입 <span className="text-primary">성공 사례</span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="bg-background rounded-2xl border border-border/50 p-8 md:p-12 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <Factory className="w-4 h-4" />
                      A제조사
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      생산관리 자동화 도입으로<br />
                      업무 효율 대폭 개선
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      수작업으로 진행하던 생산 계획 수립과 데이터 입력 업무를 AI 자동화 시스템으로 전환하여 
                      월 80시간의 업무 시간을 절감하고, 데이터 입력 오류율을 95% 감소시켰습니다.
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-6">
                    {caseStudyStats.map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-primary/5 rounded-xl">
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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
                제조 현장의 디지털 전환,<br />
                지금 시작하세요
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                귀사의 생산 현황을 무료로 진단해 드립니다.
                <br className="hidden md:block" />
                AI 자동화로 달성할 수 있는 효과를 직접 확인해 보세요.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20 px-8 h-12"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    무료 진단 신청하기
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
