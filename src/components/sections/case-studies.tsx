"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const caseStudies = [
  {
    id: 1,
    industry: "제조",
    company: "A제조사",
    metric: "80시간/월 절감",
    brief: "생산관리 자동화로 데이터 입력 시간 대폭 감소",
  },
  {
    id: 2,
    industry: "의료",
    company: "B클리닉",
    metric: "노쇼율 40%↓",
    brief: "자동 예약 확인 시스템 도입",
  },
  {
    id: 3,
    industry: "유통",
    company: "C유통",
    metric: "처리시간 70%↓",
    brief: "주문-재고 연동 자동화",
  },
]

const ease = [0.33, 1, 0.68, 1] as const

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            성과
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
            >
              <Card className="h-full border border-border/40 bg-card shadow-sm hover:border-border transition-colors duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <span className="text-sm font-medium text-muted-foreground block mb-4">
                      {study.industry}
                    </span>
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-1">
                      {study.metric}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {study.company}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.brief}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="text-center"
        >
          <Link 
            href="/cases" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5"
          >
            전체 사례 보기
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
