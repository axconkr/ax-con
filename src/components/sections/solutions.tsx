"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Zap, GraduationCap } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI 컨설팅",
    description: "업무 프로세스 분석부터 ROI 계산까지, 데이터 기반의 의사결정을 지원합니다.",
    href: "/services/consulting",
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "업무 자동화",
    description: "n8n, Make 등 검증된 도구로 반복 업무를 자동화하여 효율성을 극대화합니다.",
    href: "/services/automation",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: GraduationCap,
    title: "AI 교육",
    description: "실무에 바로 적용하는 맞춤 교육으로 조직의 AI 활용 역량을 강화합니다.",
    href: "/services/education",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              귀사에 맞는 솔루션을 제안합니다
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI 기술을 활용한 맞춤형 솔루션으로 비즈니스 성장을 지원합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const 
                }}
                className="group h-full"
              >
                <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div className={`relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.iconBg}`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="relative text-xl font-bold tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="relative text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.href} 
                    className={`relative inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                  >
                    자세히 보기 
                    <ArrowRight className={`ml-2 w-4 h-4 ${service.iconColor} transition-transform group-hover:translate-x-1`} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { SolutionsSection }
