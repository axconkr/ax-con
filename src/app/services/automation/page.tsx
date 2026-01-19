import type { Metadata } from "next"
import AutomationPageClient from "./page-client"

export const metadata: Metadata = {
  title: "업무 자동화",
  description: "n8n, Make, Zapier 등 검증된 노코드/로우코드 도구로 귀사의 반복 업무를 자동화합니다. 복잡한 코딩 없이 빠르게 구현합니다.",
  keywords: ["업무 자동화", "n8n", "Make", "Zapier", "노코드", "로우코드", "워크플로우 자동화"],
  openGraph: {
    title: "업무 자동화 | AX-Consulting",
    description: "n8n, Make, Zapier 등 검증된 노코드/로우코드 도구로 귀사의 반복 업무를 자동화합니다.",
  },
}

export default function AutomationPage() {
  return <AutomationPageClient />
}
