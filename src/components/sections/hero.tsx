"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

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
      staggerChildren: 0.1
    }
  }
}

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-background py-24 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Tag */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              AI 자동화 컨설팅
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
          >
            중소기업의 업무 효율을<br className="hidden sm:block" /> 혁신합니다
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
          >
            복잡한 AI 기술을 간단한 솔루션으로.<br className="hidden sm:block" /> 
            무료 진단으로 시작하세요.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 w-full sm:w-auto"
          >
            <Button size="lg" className="h-12 px-8 text-base font-medium rounded-full sm:w-auto w-full bg-[#2563EB] hover:bg-[#1d4ed8]">
              무료 상담 신청
            </Button>
            
            <Link 
              href="/cases" 
              className="group flex items-center text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              사례 보기
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust Line */}
          <motion.div 
            variants={fadeUp}
            className="pt-8 border-t border-border/40 w-full max-w-xs mx-auto"
          >
            <p className="text-sm text-muted-foreground font-medium">
              50+ 프로젝트 완료 · 평균 47% 비용 절감
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { HeroSection }
