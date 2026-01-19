import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "의료/클리닉 AI 자동화",
  description: "환자 경험 개선과 운영 효율화를 함께 달성합니다. 예약 자동화, 노쇼 방지 알림, 환자 상담 기록 관리, 보험 청구 자동화로 클리닉 운영을 혁신하세요.",
  keywords: [
    "의료 AI",
    "클리닉 자동화",
    "병원 예약 시스템",
    "노쇼 방지",
    "환자 관리 시스템",
    "보험 청구 자동화",
    "EMR 연동",
    "의료 업무 자동화",
    "스마트 클리닉"
  ],
  openGraph: {
    title: "의료/클리닉 AI 자동화 | AX-Consulting",
    description: "환자 경험 개선과 운영 효율화를 함께 달성합니다. 예약 자동화, 노쇼 방지 알림, 환자 상담 기록 관리, 보험 청구 자동화로 클리닉 운영을 혁신하세요.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "의료/클리닉 AI 자동화 | AX-Consulting",
    description: "환자 경험 개선과 운영 효율화를 함께 달성합니다. 예약 자동화, 노쇼 방지 알림, 환자 상담 기록 관리, 보험 청구 자동화로 클리닉 운영을 혁신하세요.",
  },
}

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
