import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "제조업 AI 자동화 | AX-Consulting",
  description: "생산성 향상과 비용 절감을 동시에 실현합니다. 생산관리 자동화, 품질 데이터 분석, 재고 관리 최적화, 보고서 자동 생성까지.",
  keywords: ["제조업", "AI 자동화", "생산관리", "품질관리", "재고관리", "스마트팩토리"],
  openGraph: {
    title: "제조업 AI 자동화 | AX-Consulting",
    description: "생산성 향상과 비용 절감을 동시에 실현합니다.",
    type: "website",
  },
}

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
