import Link from "next/link"

const navigation = {
  services: [
    { label: "AI 컨설팅", href: "/services/consulting" },
    { label: "업무 자동화", href: "/services/automation" },
    { label: "AI 교육", href: "/services/education" },
  ],
  company: [
    { label: "회사 소개", href: "/about" },
    { label: "성공 사례", href: "/cases" },
    { label: "요금제", href: "/pricing" },
    { label: "문의하기", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-semibold text-foreground">
              AX-Consulting
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              중소기업 AI 자동화 컨설팅
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">서비스</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">회사</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">연락처</h3>
            <p className="text-sm text-muted-foreground">
              axconkr@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 AX-Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
