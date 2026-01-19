import type { Metadata } from "next"
import CasesPageClient from "./page-client"

export const metadata: Metadata = {
  title: "성공 사례",
  description: "AX-Consulting의 AI 자동화 컨설팅 성공 사례를 확인하세요. 제조업, 의료, 전통산업 등 다양한 분야에서 실질적인 비즈니스 성과를 달성한 고객 사례를 소개합니다.",
  keywords: ["AI 자동화 사례", "성공 사례", "제조업 자동화", "의료 자동화", "업무 자동화 성과", "컨설팅 사례"],
  openGraph: {
    title: "성공 사례 | AX-Consulting",
    description: "AX-Consulting의 AI 자동화 컨설팅 성공 사례를 확인하세요. 다양한 산업에서 실질적인 비즈니스 성과를 달성한 고객 사례를 소개합니다.",
  },
}

export default function CasesPage() {
  return <CasesPageClient />
}
