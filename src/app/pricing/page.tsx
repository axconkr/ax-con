import type { Metadata } from "next"
import PricingPageClient from "./page-client"

export const metadata: Metadata = {
  title: "요금제",
  description: "AX-Consulting의 투명한 가격 정책을 확인하세요. 무료 진단부터 엔터프라이즈 솔루션까지, 귀사에 맞는 AI 자동화 컨설팅 서비스를 제공합니다.",
  keywords: ["AI 컨설팅 요금", "자동화 컨설팅 비용", "무료 진단", "AI 도입 비용", "업무 자동화 가격"],
  openGraph: {
    title: "요금제 | AX-Consulting",
    description: "AX-Consulting의 투명한 가격 정책을 확인하세요. 무료 진단부터 엔터프라이즈 솔루션까지 다양한 옵션을 제공합니다.",
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
