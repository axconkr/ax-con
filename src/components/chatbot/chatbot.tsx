"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const faqData: Record<string, string> = {
  "서비스": "AX-Consulting은 AI 컨설팅, 업무 자동화, AI 교육 3가지 서비스를 제공합니다. 자세한 내용은 서비스 페이지를 참고해주세요.",
  "비용": "프로젝트 규모와 요구사항에 따라 맞춤 견적을 제공합니다. 무료 상담을 통해 정확한 비용을 안내받으실 수 있습니다.",
  "요금": "프로젝트 규모와 요구사항에 따라 맞춤 견적을 제공합니다. 무료 상담을 통해 정확한 비용을 안내받으실 수 있습니다.",
  "가격": "프로젝트 규모와 요구사항에 따라 맞춤 견적을 제공합니다. 무료 상담을 통해 정확한 비용을 안내받으실 수 있습니다.",
  "상담": "무료 진단 상담은 1시간 화상 미팅으로 진행됩니다. 현재 업무 프로세스를 분석하고 자동화 가능 영역을 파악해드립니다. 문의 페이지에서 신청하실 수 있습니다.",
  "무료": "무료 진단 상담은 1시간 화상 미팅으로 진행됩니다. 현재 업무 프로세스를 분석하고 자동화 가능 영역을 파악해드립니다.",
  "기간": "프로젝트 규모에 따라 다르지만, 일반적으로 파일럿 프로젝트는 2-4주, 전사 도입은 1-3개월 정도 소요됩니다.",
  "자동화": "n8n, Make 등 검증된 노코드/로우코드 도구를 활용하여 반복 업무를 자동화합니다. 데이터 입력, 보고서 생성, 알림 발송 등 다양한 업무에 적용 가능합니다.",
  "n8n": "n8n은 오픈소스 워크플로우 자동화 도구입니다. 다양한 앱과 서비스를 연결하여 업무 프로세스를 자동화할 수 있습니다.",
  "교육": "AI 교육은 실무 중심의 맞춤형 커리큘럼으로 진행됩니다. ChatGPT 활용, 프롬프트 엔지니어링, 자동화 도구 사용법 등을 교육합니다.",
  "연락처": "이메일: axconkr@gmail.com\n전화: 010-4739-0704\n위치: 서울특별시 봉은사로 121",
  "전화": "전화번호는 010-4739-0704 입니다.",
  "이메일": "이메일 주소는 axconkr@gmail.com 입니다.",
  "위치": "서울특별시 봉은사로 121에 위치해 있습니다.",
  "주소": "서울특별시 봉은사로 121에 위치해 있습니다.",
  "안녕": "안녕하세요! AX-Consulting입니다. 무엇을 도와드릴까요?",
  "hello": "안녕하세요! AX-Consulting입니다. 무엇을 도와드릴까요?",
  "roi": "ROI(투자 대비 수익)는 무료 진단 시 상세하게 분석해드립니다. 평균적으로 47%의 비용 절감 효과를 보고 있습니다.",
  "효과": "자동화 도입 후 평균 47% 비용 절감, 월 80시간 이상의 업무 시간 절약 효과를 보고 있습니다.",
  "사례": "제조업 A사는 월 80시간 절감, B클리닉은 노쇼율 40% 감소, C유통은 처리시간 70% 단축 등의 성과를 달성했습니다. 자세한 사례는 사례 페이지를 참고해주세요.",
}

const quickReplies = [
  "서비스가 궁금해요",
  "비용이 어떻게 되나요?",
  "무료 상담 신청",
  "연락처 알려주세요",
]

function findAnswer(input: string): string | null {
  const normalizedInput = input.toLowerCase().trim()
  
  for (const [keyword, answer] of Object.entries(faqData)) {
    if (normalizedInput.includes(keyword.toLowerCase())) {
      return answer
    }
  }
  
  return null
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "안녕하세요! AX-Consulting입니다.\n무엇을 도와드릴까요?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500))

    const answer = findAnswer(messageText)
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: answer || "죄송합니다. 해당 질문에 대한 답변을 찾지 못했습니다.\n\n더 자세한 상담을 원하시면:\n• 전화: 010-4739-0704\n• 이메일: axconkr@gmail.com\n\n또는 '상담 신청' 페이지를 이용해주세요.",
      timestamp: new Date(),
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, assistantMessage])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105",
          isOpen && "hidden"
        )}
        aria-label="채팅 문의"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-[380px] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "min(600px, calc(100vh - 6rem))" }}
          >
            <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">AX-Consulting</p>
                  <p className="text-xs opacity-80">보통 1시간 이내 응답</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="닫기"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-background border border-border rounded-bl-md"
                    )}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-background border border-border rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 py-3 border-t border-border bg-background">
                <p className="text-xs text-muted-foreground mb-2">자주 묻는 질문</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSend(reply)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-2.5 text-sm bg-muted rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="전송"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
