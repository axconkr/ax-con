"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Calendar,
  Bell,
  FileText,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Heart,
  Clock,
  Users
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

const painPoints = [
  {
    icon: Calendar,
    title: "예약 관리의 어려움",
    description: "전화, 문자, 카카오톡 등 다양한 채널로 들어오는 예약 요청을 수동으로 관리하느라 직원들의 업무 부담이 가중됩니다.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: TrendingDown,
    title: "노쇼(No-Show) 문제",
    description: "예약 후 연락 없이 방문하지 않는 환자들로 인해 수익 손실이 발생하고 다른 환자들의 진료 기회가 줄어듭니다.",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: FileText,
    title: "반복적인 행정 업무",
    description: "환자 정보 입력, 보험 청구, 진료 기록 정리 등 단순 반복 업무에 많은 시간을 소비하고 있습니다.",
    gradient: "from-amber-500 to-yellow-500"
  }
]

const solutions = [
  {
    icon: Calendar,
    title: "예약 자동화",
    description: "AI 챗봇이 24시간 예약 접수, 변경, 취소를 처리합니다",
    features: [
      "카카오톡, 웹사이트 연동 자동 예약",
      "실시간 예약 가능 시간 확인",
      "중복 예약 자동 방지",
      "대기 환자 자동 안내"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Bell,
    title: "노쇼 방지 알림 시스템",
    description: "스마트한 리마인더로 노쇼율을 획기적으로 낮춥니다",
    features: [
      "예약 전날, 당일 자동 알림",
      "환자별 맞춤 알림 시간 설정",
      "취소 시 대기 환자 자동 연락",
      "노쇼 이력 기반 관리"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: FileText,
    title: "환자 상담 기록 관리",
    description: "AI가 상담 내용을 자동으로 정리하고 분류합니다",
    features: [
      "음성 상담 자동 텍스트 변환",
      "주요 증상 및 요청사항 추출",
      "EMR 시스템 연동",
      "히스토리 기반 맞춤 상담"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: ShieldCheck,
    title: "보험 청구 자동화",
    description: "복잡한 보험 청구 프로세스를 자동화합니다",
    features: [
      "진료 기록 기반 자동 청구서 생성",
      "청구 누락 항목 자동 검토",
      "반려 사유 분석 및 재청구 지원",
      "청구 현황 실시간 모니터링"
    ],
    gradient: "from-indigo-500 to-violet-500"
  }
]

const metrics = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "노쇼율 감소"
  },
  {
    icon: Heart,
    value: "30%",
    label: "고객 만족도 향상"
  },
  {
    icon: Clock,
    value: "60%",
    label: "행정 업무 시간 절감"
  }
]

export default function HealthcarePage() {
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
          
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32 mx-auto">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium ring-1 ring-inset ring-cyan-500/20">
                  <Heart className="w-4 h-4" />
                  의료/클리닉 특화 솔루션
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">의료/클리닉</span> AI 자동화
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="text-xl md:text-2xl text-foreground font-medium mb-4"
              >
                환자 경험 개선과 운영 효율화를 함께 달성합니다
              </motion.p>

              <motion.p 
                variants={fadeUp}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                예약 관리부터 보험 청구까지, AI가 클리닉 운영의 복잡한 업무를 자동화합니다.
                <br className="hidden sm:block" />
                직원은 환자 케어에 집중하고, 반복 업무는 AI에게 맡기세요.
              </motion.p>

              <motion.div 
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    무료 상담 신청
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
                {metrics.map((metric, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <metric.icon className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                클리닉 운영의 <span className="text-primary">고민</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                많은 의료 기관들이 겪고 있는 공통적인 운영 문제들입니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {painPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.33, 1, 0.68, 1] as const,
                    delay: index * 0.1 
                  }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden group">
                    <CardHeader className="pb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                AI <span className="text-primary">솔루션</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                의료 기관에 최적화된 AI 자동화 솔루션으로 운영 효율을 높이세요
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.33, 1, 0.68, 1] as const,
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

        {/* Case Study Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden border-border/50 shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary to-secondary">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                      성공 사례
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      B클리닉
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      AI 예약 시스템과 노쇼 방지 알림 도입으로 운영 효율성을 크게 개선한 사례입니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <TrendingDown className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">노쇼율 40% 감소</p>
                          <p className="text-white/60 text-sm">월평균 손실 매출 복구</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">고객 만족도 30% 향상</p>
                          <p className="text-white/60 text-sm">편리한 예약 시스템 호평</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                      &quot;예약 관리에 쏟던 시간을 환자 케어에 집중할 수 있게 되었습니다. 
                      노쇼 문제가 해결되니 수익도 자연스럽게 개선되었어요.&quot;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">B클리닉 원장</p>
                        <p className="text-sm text-muted-foreground">피부과 전문</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
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
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                클리닉 운영의 새로운 기준을 경험하세요
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                무료 상담을 통해 귀 클리닉에 맞는 AI 솔루션을 제안해 드립니다.
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
                이미 50개 이상의 의료 기관이 AX-Consulting과 함께하고 있습니다
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
