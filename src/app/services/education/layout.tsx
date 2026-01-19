import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI 교육",
  description: "AI 기초부터 프롬프트 엔지니어링, 실무 자동화 구축까지. 맞춤형 커리큘럼으로 실전에서 바로 활용 가능한 역량을 키워드립니다. 임직원 AI 역량을 강화하여 조직의 경쟁력을 높이세요.",
  keywords: [
    "AI 교육",
    "AI 역량 강화",
    "프롬프트 엔지니어링",
    "ChatGPT 교육",
    "Claude 교육",
    "업무 자동화 교육",
    "n8n 교육",
    "기업 AI 교육",
    "생성형 AI 교육"
  ],
  openGraph: {
    title: "AI 교육 | AX-Consulting",
    description: "AI 기초부터 프롬프트 엔지니어링, 실무 자동화 구축까지. 맞춤형 커리큘럼으로 실전에서 바로 활용 가능한 역량을 키워드립니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 교육 | AX-Consulting",
    description: "AI 기초부터 프롬프트 엔지니어링, 실무 자동화 구축까지. 맞춤형 커리큘럼으로 실전에서 바로 활용 가능한 역량을 키워드립니다.",
  },
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
