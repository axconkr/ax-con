"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Factory, Stethoscope, ShoppingCart } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    icon: Factory,
    industry: "제조",
    company: "A제조사",
    metric: "80h",
    metricSuffix: "/월 절감",
    brief: "생산관리 자동화로 데이터 입력 시간 대폭 감소",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    icon: Stethoscope,
    industry: "의료",
    company: "B클리닉",
    metric: "40%",
    metricSuffix: " 노쇼율 감소",
    brief: "자동 예약 확인 시스템 도입",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    id: 3,
    icon: ShoppingCart,
    industry: "유통",
    company: "C유통",
    metric: "70%",
    metricSuffix: " 처리시간 단축",
    brief: "주문-재고 연동 자동화",
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-500",
  },
]

const ease = [0.33, 1, 0.68, 1] as const

export function CaseStudiesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            검증된 성과
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 산업군에서 실제로 달성한 성과입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${study.gradient}`} />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${study.bgColor} flex items-center justify-center`}>
                    <study.icon className={`w-6 h-6 ${study.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">{study.industry}</span>
                    <h3 className="font-semibold text-foreground">{study.company}</h3>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                      {study.metric}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {study.metricSuffix}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {study.brief}
                </p>
              </div>
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
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary hover:text-primary/80 border border-primary/20 hover:border-primary/40 rounded-full transition-all hover:gap-3"
          >
            전체 사례 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
