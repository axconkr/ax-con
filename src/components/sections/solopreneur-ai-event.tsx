import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin, Users, WalletCards } from "lucide-react"

import { Button } from "@/components/ui/button"

const eventDetails = [
  { icon: CalendarDays, label: "일시", value: "7/17(금) 오후 1시" },
  { icon: MapPin, label: "장소", value: "서울 마포구 성미산로 43, 6층" },
  { icon: Users, label: "정원", value: "15명 한정 · 선착순" },
  { icon: WalletCards, label: "참가비", value: "2만원" },
]

export function SolopreneurAIEventSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24" aria-labelledby="solopreneur-ai-event-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.22),transparent_35%)]" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              솔로프리너·사업가 모임 특강
            </p>
            <h2 id="solopreneur-ai-event-title" className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
              “AI 써야 한다는데,
              <br className="hidden sm:block" /> 내 사업엔 뭘 어떻게 쓰지?”
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              강의보다는 컨설팅에 가까운 시간입니다. 각자 업종을 놓고 AI를 내 사업 어디에 꽂아서 바로 써먹을지 함께 고민하고 답을 찾습니다.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              31년차 개발자 출신, 중소기업 AI 컨설팅 경험을 바탕으로 어려운 기술 얘기 없이 사업에 바로 쓸 것만 다룹니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full bg-white px-8 text-base font-semibold text-slate-950 hover:bg-blue-50">
                <Link href="https://tally.so/r/obQXRO" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  특강 신청하기
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">궁금한 점 문의하기</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
            <div className="mb-6 rounded-2xl bg-white p-5 text-slate-950">
              <p className="text-sm font-semibold text-blue-600">7월 오프라인 특강</p>
              <h3 className="mt-2 text-2xl font-bold">AI를 내 사업에 꽂는 방법</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                업종별 상황을 기준으로 AI 활용 포인트를 찾는 소규모 컨설팅형 세션입니다.
              </p>
            </div>
            <dl className="grid gap-4">
              {eventDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
                  <div>
                    <dt className="text-sm text-slate-300">{label}</dt>
                    <dd className="mt-1 font-semibold text-white">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-slate-300">
              정원이 적어 신청 순서대로 마감됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolopreneurAIEventSection
