"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Circle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface RoadmapItem {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  status: "completed" | "current" | "upcoming"
  week: number
}

const sampleRoadmap: RoadmapItem[] = [
  {
    id: "1",
    title: "데이터 입력 자동화",
    description: "엑셀 → ERP 자동 연동",
    priority: "high",
    status: "completed",
    week: 1,
  },
  {
    id: "2",
    title: "보고서 자동 생성",
    description: "일일/주간 보고서 자동화",
    priority: "high",
    status: "completed",
    week: 2,
  },
  {
    id: "3",
    title: "알림 시스템 구축",
    description: "재고 부족 알림 자동화",
    priority: "medium",
    status: "current",
    week: 3,
  },
  {
    id: "4",
    title: "승인 워크플로우",
    description: "구매 승인 프로세스 자동화",
    priority: "medium",
    status: "upcoming",
    week: 4,
  },
  {
    id: "5",
    title: "대시보드 구축",
    description: "실시간 현황 모니터링",
    priority: "low",
    status: "upcoming",
    week: 5,
  },
]

const priorityConfig = {
  high: { label: "높음", color: "bg-red-100 text-red-700" },
  medium: { label: "중간", color: "bg-amber-100 text-amber-700" },
  low: { label: "낮음", color: "bg-green-100 text-green-700" },
}

const statusConfig = {
  completed: { icon: Check, color: "bg-primary text-white" },
  current: { icon: Circle, color: "bg-primary/20 text-primary border-2 border-primary" },
  upcoming: { icon: Circle, color: "bg-muted text-muted-foreground" },
}

export function RoadmapDemo() {
  const [selectedItem, setSelectedItem] = React.useState<string | null>("3")

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2">산출물 예시</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            실행 로드맵
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            무료 진단 후 귀사에 맞는 단계별 도입 계획과 우선순위를 제안드립니다.
            아래는 실제 프로젝트의 로드맵 예시입니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
            className="lg:col-span-2"
          >
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">A제조사 자동화 프로젝트</p>
                    <p className="text-sm text-muted-foreground">5주 로드맵 · 진행률 40%</p>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      완료 2
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                      진행 1
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/30"></span>
                      예정 2
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-6 text-xs text-muted-foreground">
                  {[1, 2, 3, 4, 5].map((week) => (
                    <div key={week} className="flex-1 text-center">
                      <div className={cn(
                        "h-1 rounded-full mb-2",
                        week <= 2 ? "bg-primary" : week === 3 ? "bg-primary/40" : "bg-muted"
                      )}></div>
                      {week}주차
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {sampleRoadmap.map((item) => {
                    const StatusIcon = statusConfig[item.status].icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={cn(
                          "w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all",
                          selectedItem === item.id
                            ? "bg-primary/5 border border-primary/20"
                            : "hover:bg-muted/50 border border-transparent"
                        )}
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                          statusConfig[item.status].color
                        )}>
                          <StatusIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={cn(
                            "font-medium truncate",
                            item.status === "completed" && "text-muted-foreground"
                          )}>
                            {item.title}
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            priorityConfig[item.priority].color
                          )}>
                            {priorityConfig[item.priority].label}
                          </span>
                          <span className="text-xs text-muted-foreground w-12">
                            {item.week}주차
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <div className="border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-medium mb-4">로드맵에 포함되는 항목</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>자동화 대상 업무 목록</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>우선순위 기반 실행 순서</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>주차별 상세 일정</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>예상 ROI 및 비용 절감액</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>필요 리소스 및 담당자</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  무료 진단 후 귀사 맞춤 로드맵을 제안드립니다.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  무료 진단 신청
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapDemo
