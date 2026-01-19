"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Database, 
  GitBranch, 
  FileText, 
  Bell,
  Zap,
  Clock,
  TrendingUp
} from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

const ease = [0.33, 1, 0.68, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const features = [
  {
    icon: Database,
    title: "데이터 입력 자동화",
    description: "엑셀, 폼, 이메일 데이터를 자동으로 수집하고 정리합니다",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: GitBranch,
    title: "워크플로우 연결",
    description: "다양한 앱과 서비스를 연결하여 업무 흐름을 자동화합니다",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: FileText,
    title: "보고서 자동 생성",
    description: "정기 보고서를 자동으로 생성하고 배포합니다",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Bell,
    title: "알림 및 승인",
    description: "중요 이벤트 알림과 승인 프로세스를 자동화합니다",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

const benefits = [
  { icon: Clock, label: "시간 절약", value: "70%", description: "반복 업무 시간 절감" },
  { icon: Zap, label: "생산성 향상", value: "3배", description: "업무 처리 속도" },
  { icon: TrendingUp, label: "비용 절감", value: "45%", description: "운영 비용 감소" },
]

const tools = [
  { name: "n8n", description: "오픈소스 워크플로우 자동화" },
  { name: "Make", description: "강력한 시각적 자동화" },
  { name: "Zapier", description: "5000+ 앱 연동" },
]

const processSteps = [
  { step: "01", title: "업무 분석", description: "현재 업무 프로세스를 분석하고 자동화 가능한 영역을 식별합니다" },
  { step: "02", title: "솔루션 설계", description: "최적의 자동화 도구를 선정하고 워크플로우를 설계합니다" },
  { step: "03", title: "구현 및 테스트", description: "자동화 워크플로우를 구현하고 철저한 테스트를 진행합니다" },
  { step: "04", title: "교육 및 운영", description: "담당자 교육을 진행하고 안정적인 운영을 지원합니다" },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(to right, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium ring-1 ring-inset ring-purple-500/20">
              <Zap className="h-4 w-4" />
              업무 자동화 서비스
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
          >
            업무 자동화
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
          >
            반복 업무를 자동화하여 핵심 업무에 집중하세요
          </motion.p>

          <motion.p 
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            n8n, Make, Zapier 등 검증된 노코드/로우코드 도구로 귀사의 반복 업무를 자동화합니다. 
            복잡한 코딩 없이 빠르게 구현합니다.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow w-full sm:w-auto" asChild>
              <Link href="/contact">
                무료 상담 신청하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
              <Link href="/cases">
                자동화 사례 보기
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.label}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-border/50 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">{benefit.value}</span>
              <span className="text-sm font-medium text-primary mb-1">{benefit.label}</span>
              <span className="text-sm text-muted-foreground">{benefit.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            자동화 가능한 업무
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            반복적이고 시간이 많이 소요되는 업무를 자동화하여 
            비즈니스 효율성을 극대화합니다
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              variants={fadeUp}
              className="group p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ToolsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            검증된 자동화 도구
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            세계적으로 검증된 노코드/로우코드 도구를 활용하여 
            안정적이고 확장 가능한 자동화를 구현합니다
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {tools.map((tool) => (
            <motion.div 
              key={tool.name}
              variants={fadeUp}
              className="p-6 bg-background rounded-xl border border-border/50 shadow-sm text-center hover:border-primary/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{tool.name}</h3>
              <p className="text-muted-foreground">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            자동화 도입 프로세스
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            체계적인 4단계 프로세스로 안정적인 자동화를 구현합니다
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {processSteps.map((item, index) => (
            <motion.div 
              key={item.step}
              variants={fadeUp}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{item.step}</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-8 bg-border ml-8 mt-4" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5">
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
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            지금 바로 업무 자동화를 시작하세요
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-muted-foreground mb-10"
          >
            무료 상담을 통해 귀사에 맞는 자동화 솔루션을 찾아보세요.
            <br />
            전문 컨설턴트가 자동화 가능 영역과 예상 ROI를 분석해 드립니다.
          </motion.p>
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">
                무료 상담 신청하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/pricing">
                요금제 보기
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function AutomationPageClient() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <ToolsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
