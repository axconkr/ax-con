import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI 컨설팅 | AX-Consulting",
  description: "귀사에 맞는 최적의 AI 솔루션을 설계합니다. 업무 프로세스 분석부터 솔루션 설계, ROI 계산까지.",
}

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
