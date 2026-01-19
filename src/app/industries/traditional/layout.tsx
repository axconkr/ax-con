import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "전통산업 AI 자동화",
  description: "요식업, 소매업, 서비스업의 디지털 전환을 지원합니다. 주문 자동화, 재고 관리, 고객 데이터 분석으로 운영 효율을 극대화하세요.",
  keywords: [
    "전통산업 AI",
    "요식업 자동화",
    "소매업 자동화",
    "서비스업 디지털 전환",
    "주문 자동화",
    "재고 관리 시스템",
    "고객 데이터 분석",
    "마케팅 자동화",
    "POS 연동"
  ],
  openGraph: {
    title: "전통산업 AI 자동화 | AX-Consulting",
    description: "요식업, 소매업, 서비스업의 디지털 전환을 지원합니다. 주문 자동화, 재고 관리, 고객 데이터 분석으로 운영 효율을 극대화하세요.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "전통산업 AI 자동화 | AX-Consulting",
    description: "요식업, 소매업, 서비스업의 디지털 전환을 지원합니다. 주문 자동화, 재고 관리, 고객 데이터 분석으로 운영 효율을 극대화하세요.",
  },
}

export default function TraditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
