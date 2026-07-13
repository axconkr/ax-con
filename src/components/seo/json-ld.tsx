import { axConEntityDescription, knowsAbout, serviceTypes } from "@/lib/ai-readable-content";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AX Con",
    alternateName: "AX-Consulting",
    url: "https://ax-con.com",
    logo: "https://ax-con.com/logo.png",
    description: axConEntityDescription,
    areaServed: "KR",
    knowsAbout,
    email: "axconkr@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "봉은사로 121",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    telephone: "+82-10-4739-0704",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-10-4739-0704",
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
    "@type": "ProfessionalService",
    name: "AX Con",
    description:
      "중소기업 AI 자동화 컨설팅 전문. AI 컨설팅, 업무 자동화, AI 교육 서비스 제공.",
    url: "https://ax-con.com",
    email: "axconkr@gmail.com",
    areaServed: "KR",
    serviceType: serviceTypes,
    knowsAbout,
    priceRange: "$$",
    telephone: "+82-10-4739-0704",
    address: {
      "@type": "PostalAddress",
      streetAddress: "봉은사로 121",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.5087",
      longitude: "127.0632",
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

export function ProfessionalServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AX Con",
    description: axConEntityDescription,
    url: "https://ax-con.com",
    areaServed: "KR",
    serviceType: serviceTypes,
    knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "Seoul",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbListJsonLd() {
  const pages = [
    ["Home", "https://ax-con.com/"],
    ["About", "https://ax-con.com/about"],
    ["Services", "https://ax-con.com/services/ai-transformation"],
    ["Industries", "https://ax-con.com/industries/sme"],
    ["FAQ", "https://ax-con.com/faq"],
    ["Blog", "https://ax-con.com/blog"],
  ]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pages.map(([name, item], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ArticleJsonLd({ title, description, url }: { title: string; description: string; url: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: { "@type": "Organization", name: "AX Con" },
    publisher: { "@type": "Organization", name: "AX Con" },
    mainEntityOfPage: url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
