"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Zap, GraduationCap } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const services = [
  {
    icon: Brain,
    title: "AI 컨설팅",
    description: "업무 프로세스 분석부터 ROI 계산까지, 데이터 기반의 의사결정을 지원합니다.",
    href: "/services/consulting",
  },
  {
    icon: Zap,
    title: "업무 자동화",
    description: "n8n, Make 등 검증된 도구로 반복 업무를 자동화하여 효율성을 극대화합니다.",
    href: "/services/automation",
  },
  {
    icon: GraduationCap,
    title: "AI 교육",
    description: "실무에 바로 적용하는 맞춤 교육으로 조직의 AI 활용 역량을 강화합니다.",
    href: "/services/education",
  },
]

const fadeInUp = {
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

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-muted/30 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">서비스</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              귀사에 맞는 솔루션을 제안합니다
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="h-full"
              >
                <Card className="h-full border border-border bg-card transition-all duration-300 hover:border-primary/50 shadow-none hover:shadow-sm flex flex-col group rounded-none md:rounded-lg overflow-hidden">
                  <CardHeader className="pt-8 px-8 pb-4">
                    <div className="mb-6 text-foreground/80 group-hover:text-primary transition-colors duration-300">
                      <service.icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl font-bold tracking-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-4">
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      자세히 보기 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { SolutionsSection }
