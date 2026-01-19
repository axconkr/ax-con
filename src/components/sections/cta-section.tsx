"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              무료 상담으로 시작하세요
            </h2>
            <p className="text-muted-foreground text-lg">
              1시간 진단으로 귀사에 맞는 자동화 방안을 제안드립니다.
            </p>
          </div>

          <div>
            <Button 
              asChild 
              size="lg" 
              className="px-8 font-medium"
            >
              <Link href="/contact" className="flex items-center gap-2">
                상담 신청하기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
