"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { 
  BarChart3, 
  GitBranch, 
  Workflow, 
  Database,
  ArrowRight,
  Check
} from "lucide-react"

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

const tools = [
  {
    icon: BarChart3,
    name: "업무 분석 시스템",
    description: "현재 프로세스의 병목과 비효율을 데이터 기반으로 진단",
    features: ["업무 흐름 시각화", "시간 소요 분석", "자동화 가능성 평가"]
  },
  {
    icon: Workflow,
    name: "프로세스 매핑",
    description: "As-Is와 To-Be 프로세스를 명확하게 설계",
    features: ["단계별 흐름 정의", "담당자 역할 명시", "개선점 도출"]
  },
  {
    icon: GitBranch,
    name: "자동화 설계 도구",
    description: "최적의 자동화 시나리오를 시뮬레이션",
    features: ["트리거 조건 설계", "예외 처리 정의", "연동 방안 수립"]
  },
  {
    icon: Database,
    name: "ROI 계산기",
    description: "도입 비용 대비 예상 절감액을 산출",
    features: ["인건비 절감 추정", "오류 감소 효과", "투자 회수 기간"]
  },
]

const processSteps = [
  { step: "01", title: "현황 수집", description: "업무 데이터와 프로세스 정보 수집" },
  { step: "02", title: "분석 진단", description: "자동화 가능 영역과 우선순위 도출" },
  { step: "03", title: "설계 제안", description: "맞춤형 솔루션과 로드맵 제시" },
  { step: "04", title: "검증 적용", description: "파일럿 테스트 후 전사 확대" },
]

export function VerifiedToolsSection() {
  const sectionRef = React.useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-background border-t border-border/40"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
            className="mb-12"
          >
          <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-3">
            검증된 도구
          </motion.p>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            업무 분석 시스템을 통한
            <br />
            프로세스 업그레이드
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-muted-foreground"
          >
            감이 아닌 데이터로 진단합니다. 검증된 분석 도구를 활용해 
            귀사의 업무 프로세스를 체계적으로 분석하고 최적의 자동화 방안을 도출합니다.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={fadeUp}
              className="p-6 bg-muted/30 rounded-lg border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                  <tool.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <div className="bg-muted/30 rounded-lg border border-border/50 p-8">
            <h3 className="font-semibold mb-8 text-center">분석 프로세스</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-2xl font-bold text-primary/20 mb-2">
                      {item.step}
                    </span>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3">
                      <ArrowRight className="w-6 h-6 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VerifiedToolsSection
