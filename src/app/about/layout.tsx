import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "회사 소개",
  description: "중소기업이 AI의 혜택을 누릴 수 있도록 돕습니다. 복잡한 기술을 이해하기 쉬운 솔루션으로 바꾸고, 이론이 아닌 실행 가능한 결과를 제공합니다. 50개 이상의 성공 프로젝트, 평균 47% 비용 절감.",
  keywords: ["AI 컨설팅", "중소기업 AI", "회사 소개", "AX-Consulting", "AI 자동화"],
  openGraph: {
    title: "회사 소개 | AX-Consulting",
    description: "중소기업이 AI의 혜택을 누릴 수 있도록 돕습니다. 복잡한 기술을 이해하기 쉬운 솔루션으로 바꾸고, 이론이 아닌 실행 가능한 결과를 제공합니다.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
