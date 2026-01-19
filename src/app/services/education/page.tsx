"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  BookOpen, 
  MessageSquare, 
  Wrench, 
  Target,
  CheckCircle2,
  Users,
  Clock,
  Award,
  Sparkles
} from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const curriculum = [
  {
    icon: BookOpen,
    title: "AI 기초",
    description: "ChatGPT, Claude 등 생성형 AI 도구 활용법",
    features: [
      "생성형 AI의 작동 원리 이해",
      "다양한 AI 도구 비교 분석",
      "업무별 적합한 도구 선택법",
      "실전 활용 사례 학습"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "프롬프트 엔지니어링",
    description: "효과적인 프롬프트 작성법과 고급 기법",
    features: [
      "프롬프트 구조화 기법",
      "역할 설정과 컨텍스트 제공",
      "Chain of Thought 기법",
      "복잡한 업무 자동화 프롬프트"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "업무 자동화 실습",
    description: "n8n, Make 등 도구를 활용한 실제 업무 자동화 구축",
    features: [
      "자동화 도구 기초 및 설치",
      "워크플로우 설계 방법론",
      "AI API 연동 실습",
      "실무 자동화 프로젝트 구축"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Target,
    title: "맞춤형 과정",
    description: "귀사 업무에 특화된 AI 활용 교육",
    features: [
      "기업별 업무 프로세스 분석",
      "산업 특화 AI 활용 전략",
      "팀별 맞춤 커리큘럼 설계",
      "지속적인 사후 지원"
    ],
    gradient: "from-green-500 to-emerald-500"
  }
]

const benefits = [
  {
    icon: Users,
    value: "1,200+",
    label: "교육 수료 인원"
  },
  {
    icon: Award,
    value: "4.9/5.0",
    label: "수강 만족도"
  },
  {
    icon: Clock,
    value: "즉시 적용",
    label: "실무 활용성"
  }
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}
          />
          
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32 mx-auto">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium ring-1 ring-inset ring-purple-500/20">
                  <Sparkles className="w-4 h-4" />
                  AI 역량 강화 프로그램
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">AI 교육</span>
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="text-xl md:text-2xl text-foreground font-medium mb-4"
              >
                임직원 AI 역량을 강화하여 조직의 경쟁력을 높이세요
              </motion.p>

              <motion.p 
                variants={fadeUp}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                AI 기초부터 프롬프트 엔지니어링, 실무 자동화 구축까지.
                <br className="hidden sm:block" />
                맞춤형 커리큘럼으로 실전에서 바로 활용 가능한 역량을 키워드립니다.
              </motion.p>

              <motion.div 
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    교육 문의하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
                  <Link href="/cases">
                    성공 사례 보기
                  </Link>
                </Button>
              </motion.div>

              <motion.div 
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50 max-w-3xl mx-auto"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <benefit.icon className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">{benefit.value}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{benefit.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                체계적인 <span className="text-primary">커리큘럼</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                단계별로 설계된 교육 과정으로 AI 활용 역량을 체계적으로 향상시킵니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {curriculum.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.33, 1, 0.68, 1],
                    delay: index * 0.1 
                  }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden group">
                    <CardHeader className="pb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                왜 <span className="text-primary">AX-Consulting</span> 교육인가요?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                현장 경험 기반의 실무 중심 교육으로 차별화된 가치를 제공합니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "실무 중심 커리큘럼",
                  description: "50개 이상의 실제 프로젝트 경험을 바탕으로 구성된 교육 과정으로 현장에서 바로 적용 가능한 스킬을 습득합니다."
                },
                {
                  title: "맞춤형 교육 설계",
                  description: "기업별 업무 환경과 목표를 분석하여 최적화된 커리큘럼을 제공합니다. 산업별 특성을 반영한 실습 과제를 진행합니다."
                },
                {
                  title: "지속적인 사후 지원",
                  description: "교육 종료 후에도 실무 적용 과정에서 발생하는 질문에 답변하고, 최신 AI 트렌드 업데이트를 지속적으로 제공합니다."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.33, 1, 0.68, 1],
                    delay: index * 0.1 
                  }}
                  className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
          
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
                AI 교육으로 조직의 경쟁력을 높이세요
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                무료 상담을 통해 귀사에 맞는 교육 프로그램을 설계해 드립니다.
                <br className="hidden md:block" />
                지금 바로 문의하세요.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20 px-8"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    무료 상담 신청하기
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <p className="mt-8 text-sm text-white/60">
                1,200명 이상의 임직원이 AX-Consulting 교육을 수료했습니다
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
