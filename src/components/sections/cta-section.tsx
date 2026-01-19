"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "무료 1시간 진단",
  "맞춤형 솔루션 제안",
  "ROI 분석 리포트",
]

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            무료 상담으로 시작하세요
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            1시간 진단으로 귀사에 맞는 자동화 방안을 제안드립니다.
            <br className="hidden sm:block" />
            복잡한 계약 없이, 부담 없이 시작하세요.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const 
                }}
                className="flex items-center gap-2 text-white/90"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-10 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-2">
                상담 신청하기
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-white/60">
            평균 응답 시간: 24시간 이내
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
