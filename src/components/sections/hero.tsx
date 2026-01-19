"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const stats = [
  { value: "50+", label: "프로젝트 완료" },
  { value: "47%", label: "평균 비용 절감" },
  { value: "80h", label: "월 업무시간 절약" },
]

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto py-20 md:py-32">
        <motion.div 
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div 
            variants={fadeUp} 
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              AI 자동화 컨설팅 전문
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            <span className="text-foreground">중소기업의 업무 효율을</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              혁신합니다
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            복잡한 AI 기술을 간단한 솔루션으로.
            <br className="hidden sm:block" /> 
            <span className="text-foreground font-medium">무료 진단</span>으로 시작하세요.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              무료 상담 신청
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Link 
              href="/cases" 
              className="group flex items-center h-14 px-8 text-lg font-medium text-foreground hover:text-primary transition-all rounded-full border-2 border-border hover:border-primary/50 bg-white/50 backdrop-blur-sm"
            >
              성공 사례 보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-border/50 w-full max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  duration: 0.5, 
                  ease: [0.33, 1, 0.68, 1] as const 
                }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export { HeroSection }
