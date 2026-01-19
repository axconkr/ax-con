export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AX-Consulting",
    url: "https://ax-con.com",
    logo: "https://ax-con.com/logo.png",
    description:
      "중소기업 맞춤 AI 자동화 컨설팅. 제조업, 의료, 전통산업 특화 솔루션으로 평균 47% 비용 절감.",
    email: "axconkr@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "axconkr@gmail.com",
      contactType: "customer service",
      availableLanguage: ["Korean"],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AX-Consulting",
    description:
      "중소기업 AI 자동화 컨설팅 전문. AI 컨설팅, 업무 자동화, AI 교육 서비스 제공.",
    url: "https://ax-con.com",
    email: "axconkr@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.5665",
      longitude: "126.9780",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "AX-Consulting",
      url: "https://ax-con.com",
    },
    areaServed: {
      "@type": "Country",
      name: "South Korea",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
