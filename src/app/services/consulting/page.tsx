"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Search, Lightbulb, Calculator, Map } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { RoadmapDemo } from "@/components/sections/roadmap-demo"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }
  }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const features = [
  {
    icon: Search,
    title: "현황 분석",
    description: "현재 업무 프로세스의 비효율과 자동화 가능 영역을 진단합니다",
  },
  {
    icon: Lightbulb,
    title: "솔루션 설계",
    description: "귀사 상황에 맞는 최적의 AI 도구와 적용 방안을 제안합니다",
  },
  {
    icon: Calculator,
    title: "ROI 계산",
    description: "도입 전 예상 비용 절감액과 투자 회수 기간을 명확히 제시합니다",
  },
  {
    icon: Map,
    title: "실행 로드맵",
    description: "단계별 도입 계획과 우선순위를 수립합니다",
  },
]

const processSteps = [
  { id: "01", title: "초기 상담", description: "귀사의 현황과 목표를 파악합니다" },
  { id: "02", title: "현장 진단", description: "업무 프로세스를 상세 분석합니다" },
  { id: "03", title: "솔루션 제안", description: "맞춤형 AI 솔루션을 설계합니다" },
  { id: "04", title: "ROI 검토", description: "예상 효과와 투자 대비 수익을 제시합니다" },
  { id: "05", title: "실행 계획", description: "구체적인 도입 로드맵을 수립합니다" },
]

export default function ConsultingPage() {
  const featuresRef = React.useRef(null)
  const processRef = React.useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const processInView = useInView(processRef, { once: true, amount: 0.2 })

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-4">
                서비스
              </motion.p>

              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
              >
                AI 컨설팅
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                업무 프로세스 분석부터 솔루션 설계, ROI 계산까지.
                복잡한 AI 기술을 비즈니스 언어로 풀어드립니다.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Button asChild>
                  <Link href="/contact">
                    무료 상담 신청
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section 
          ref={featuresRef}
          className="py-24 bg-muted/30 border-y border-border/40"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                컨설팅 핵심 영역
              </h2>
              <p className="text-muted-foreground">
                AI 도입의 모든 과정을 전문가가 함께합니다
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={stagger}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section 
          ref={processRef}
          className="py-24 bg-background"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                진행 과정
              </h2>
              <p className="text-muted-foreground">
                체계적인 5단계 프로세스로 최적의 결과를 도출합니다
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl"
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={stagger}
            >
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    variants={fadeUp}
                    className="flex items-start gap-6 group"
                  >
                    <span className="text-sm font-mono text-muted-foreground w-8 pt-1">
                      {step.id}
                    </span>
                    <div className="flex-1 pb-6 border-b border-border/50 group-last:border-0">
                      <h4 className="font-semibold mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <RoadmapDemo />

        <section className="py-24 bg-muted/30 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                무료 상담으로 시작하세요
              </h2>
              <p className="text-muted-foreground mb-8">
                1시간 진단으로 귀사에 맞는 AI 솔루션을 확인해 보세요.
              </p>
              <Button asChild>
                <Link href="/contact">
                  상담 신청하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
