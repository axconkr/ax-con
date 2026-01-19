"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "무료 진단만으로도 많은 인사이트를 얻었습니다.",
    author: "김대표",
    role: "A제조",
  },
  {
    quote: "n8n 자동화로 월 80시간을 절약하고 있습니다.",
    author: "이팀장",
    role: "B클리닉",
  },
  {
    quote: "직원들이 직접 자동화를 만들 수 있게 되었어요.",
    author: "박대표",
    role: "C유통",
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

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 w-full bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={stagger}
          className="flex flex-col"
        >
          <motion.div variants={fadeInUp} className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              고객 후기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between h-full"
              >
                <div className="absolute -top-6 -left-2 text-muted-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>
                
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl font-medium leading-normal text-foreground/90 mb-8 break-keep">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/30 w-12 group-hover:w-full transition-all duration-500 ease-out">
                  <div className="flex flex-col gap-1 mt-4">
                    <span className="text-base font-semibold text-foreground">{testimonial.author}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
