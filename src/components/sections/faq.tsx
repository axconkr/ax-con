"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "무료 진단은 어떻게 진행되나요?",
    answer: "1시간 화상 미팅으로 현재 업무를 파악하고, 자동화 가능 영역을 분석합니다."
  },
  {
    question: "비용은 어떻게 책정되나요?",
    answer: "프로젝트 규모에 따라 달라집니다. 무료 상담에서 맞춤 견적을 안내드립니다."
  },
  {
    question: "어떤 산업에 적합한가요?",
    answer: "제조, 의료, 유통 등 반복 업무가 있는 모든 중소기업에 적용 가능합니다."
  },
  {
    question: "기간은 얼마나 걸리나요?",
    answer: "간단한 자동화는 2주, 복잡한 시스템은 4-8주 소요됩니다."
  },
  {
    question: "교육도 제공하나요?",
    answer: "네, 직원분들이 직접 활용할 수 있도록 교육과 문서를 제공합니다."
  }
]

const accordionTransition = { duration: 0.3, ease: [0.33, 1, 0.68, 1] as const }

const AccordionItem = ({ 
  item, 
  isOpen, 
  onClick 
}: { 
  item: FAQItem, 
  isOpen: boolean, 
  onClick: () => void 
}) => {
  return (
    <div className="border-b border-border/50">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium tracking-tight text-foreground transition-colors">
          {item.question}
        </span>
        <div className="relative flex h-5 w-5 items-center justify-center ml-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
          <Plus 
            className={cn(
              "absolute h-5 w-5 transition-opacity duration-200", 
              isOpen ? "opacity-0" : "opacity-100"
            )} 
          />
          <Minus 
            className={cn(
              "absolute h-5 w-5 transition-opacity duration-200", 
              isOpen ? "opacity-100" : "opacity-0"
            )} 
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={accordionTransition}
            className="overflow-hidden"
          >
            <div className="pb-6 text-muted-foreground leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 md:py-32 w-full bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            자주 묻는 질문
          </h2>
          
          <div className="border-t border-border/50">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
