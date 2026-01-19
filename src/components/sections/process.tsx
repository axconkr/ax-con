"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    id: "01",
    title: "상담",
    description: "현재 상황과 목표를 파악합니다",
  },
  {
    id: "02",
    title: "분석",
    description: "업무 프로세스와 자동화 가능 영역을 진단합니다",
  },
  {
    id: "03",
    title: "구현",
    description: "맞춤 솔루션을 설계하고 구축합니다",
  },
  {
    id: "04",
    title: "교육",
    description: "직접 활용할 수 있도록 인수인계합니다",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
}

export default function ProcessSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 bg-background border-t border-border/40"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            진행 방식
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-[15px] top-4 bottom-0 w-px bg-border md:left-0 md:top-[15px] md:w-full md:h-px md:bottom-auto" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                variants={itemVariants}
                className="flex md:block items-start gap-6 md:gap-0 pl-10 md:pl-0 pt-1 md:pt-10 relative"
              >
                <div className="absolute left-0 top-0 md:static md:mb-6">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-background border border-border text-xs font-mono text-muted-foreground z-10 relative">
                    {step.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { ProcessSection }
