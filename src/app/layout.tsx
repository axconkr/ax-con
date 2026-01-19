import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { Chatbot } from "@/components/chatbot/chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AX-Consulting | 중소기업 AI 자동화 컨설팅",
    template: "%s | AX-Consulting",
  },
  description:
    "중소기업 맞춤 AI 자동화 컨설팅. 제조업, 의료, 전통산업 특화 솔루션으로 평균 47% 비용 절감. 무료 진단으로 ROI 먼저 확인하세요.",
  keywords: [
    "AI 자동화 컨설팅",
    "중소기업 AI 도입",
    "제조업 AI 자동화",
    "AI 교육 프로그램",
    "n8n 자동화",
    "업무 자동화",
  ],
  authors: [{ name: "AX-Consulting" }],
  creator: "AX-Consulting",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ax-con.com",
    siteName: "AX-Consulting",
    title: "AX-Consulting | 중소기업 AI 자동화 컨설팅",
    description:
      "중소기업 맞춤 AI 자동화 컨설팅. 제조업, 의료, 전통산업 특화 솔루션으로 평균 47% 비용 절감.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AX-Consulting | 중소기업 AI 자동화 컨설팅",
    description:
      "중소기업 맞춤 AI 자동화 컨설팅. 제조업, 의료, 전통산업 특화 솔루션으로 평균 47% 비용 절감.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ax-con.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ fontFamily: "Pretendard, var(--font-inter), sans-serif" }}
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
