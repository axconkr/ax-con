"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, ArrowRight } from "lucide-react"

const quickActions = [
  { label: "서비스 안내", href: "/services/consulting" },
  { label: "요금 문의", href: "/pricing" },
  { label: "상담 신청", href: "/contact" },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-colors ${isOpen ? "hidden" : ""}`}
        aria-label="문의하기"
      >
        <MessageCircle className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-[320px] rounded-xl border border-border bg-background shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <span className="text-sm font-medium">문의하기</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="닫기"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-sm">{action.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              ))}
            </div>

            <div className="border-t border-border p-4">
              <p className="text-xs text-muted-foreground text-center">
                axconkr@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
