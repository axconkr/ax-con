"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Target, MessageSquare, HeartHandshake, Building2, Wrench, Award } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

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

const values = [
  {
    icon: Target,
    title: "실행 중심",
    description: "이론보다 실제 적용 가능한 솔루션을 우선합니다",
  },
  {
    icon: MessageSquare,
    title: "투명한 소통",
    description: "ROI와 비용을 명확히 제시하고 정직하게 소통합니다",
  },
  {
    icon: HeartHandshake,
    title: "지속 지원",
    description: "프로젝트 완료 후에도 성공적인 운영을 위해 지원합니다",
  },
]

const whyChooseUs = [
  {
    icon: Building2,
    title: "중소기업 특화",
    description: "대기업이 아닌 중소기업의 현실에 맞는 솔루션",
  },
  {
    icon: Wrench,
    title: "검증된 도구",
    description: "n8n, Make 등 안정적이고 비용 효율적인 도구 활용",
  },
  {
    icon: Award,
    title: "실전 경험",
    description: "50개 이상의 성공 프로젝트 경험",
  },
]

const stats = [
  { value: "50+", label: "프로젝트" },
  { value: "47%", label: "평균 비용 절감" },
  { value: "98%", label: "고객 만족도" },
]

export default function AboutPage() {
  const missionRef = React.useRef(null)
  const valuesRef = React.useRef(null)
  const whyUsRef = React.useRef(null)
  const statsRef = React.useRef(null)

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const whyUsInView = useInView(whyUsRef, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
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
                  About Us
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                <span className="text-primary">회사 소개</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                중소기업의 AI 전환을 돕는 파트너
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section
          ref={missionRef}
          className="py-20 md:py-28 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  우리의 <span className="text-primary">미션</span>
                </h2>
              </div>

              <motion.div
                className="bg-background rounded-2xl border border-border/50 shadow-sm p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                  중소기업이 AI의 혜택을 누릴 수 있도록 돕습니다.
                  <br className="hidden md:block" />
                  복잡한 기술을 이해하기 쉬운 솔루션으로 바꾸고,
                  <br className="hidden md:block" />
                  이론이 아닌 실행 가능한 결과를 제공합니다.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section
          ref={valuesRef}
          className="py-20 md:py-28 bg-background relative overflow-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                핵심 <span className="text-primary">가치</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                저희가 일하는 방식을 정의하는 세 가지 원칙
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
              variants={stagger}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="group relative p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          ref={whyUsRef}
          className="py-20 md:py-28 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                왜 <span className="text-primary">AX-Consulting</span>인가요?
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={stagger}
            >
              {whyChooseUs.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group flex items-start gap-5 p-6 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          ref={statsRef}
          className="py-20 md:py-28 bg-background relative overflow-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={stagger}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={fadeUp}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="text-center p-8"
                  >
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                      {stat.value}
                    </div>
                    <div className="text-lg text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                함께 시작하기
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                AI 도입의 첫 걸음을 저희와 함께하세요.
                <br className="hidden md:block" />
                무료 상담으로 귀사에 맞는 솔루션을 확인해 보세요.
              </p>

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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
