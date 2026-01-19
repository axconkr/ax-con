"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  contactSchema,
  type ContactFormData,
  industryOptions,
  companySizeOptions,
  serviceOptions,
} from "@/lib/validations/contact"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: "이메일",
    value: "axconkr@gmail.com",
    href: "mailto:axconkr@gmail.com",
  },
  {
    icon: Phone,
    label: "전화",
    value: "02-000-0000",
    href: "tel:02-000-0000",
  },
  {
    icon: Clock,
    label: "운영시간",
    value: "평일 09:00 - 18:00",
  },
  {
    icon: MapPin,
    label: "위치",
    value: "서울특별시",
  },
]

export default function ContactPage() {
  const [submitState, setSubmitState] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState<string>("")

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      industry: "",
      companySize: "",
      services: [],
      message: "",
      privacyConsent: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitState("success")
        reset()
      } else {
        setSubmitState("error")
        setErrorMessage(result.message || "전송에 실패했습니다.")
      }
    } catch {
      setSubmitState("error")
      setErrorMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[50vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
            }}
          />

          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24 mx-auto">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium ring-1 ring-inset ring-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Contact
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                무료 <span className="text-primary">상담 신청</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                AI 도입, 어디서부터 시작해야 할지 고민되시나요?
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
              >
                전문 컨설턴트가 귀사의 상황을 진단하고
                <br className="hidden sm:block" />
                최적의 AI 솔루션을 제안해 드립니다.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                <div className="bg-background rounded-2xl border border-border/50 shadow-sm p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-8">상담 신청서</h2>

                  {submitState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">상담 신청이 완료되었습니다</h3>
                      <p className="text-muted-foreground mb-8 max-w-md">
                        빠른 시일 내에 담당자가 연락드리겠습니다.
                        <br />
                        궁금한 점이 있으시면 언제든 문의해 주세요.
                      </p>
                      <Button onClick={() => setSubmitState("idle")}>새로운 상담 신청</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">
                            회사명 <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="companyName"
                            {...register("companyName")}
                            aria-invalid={!!errors.companyName}
                          />
                          {errors.companyName && (
                            <p className="text-sm text-destructive">{errors.companyName.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contactName">
                            담당자명 <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="contactName"
                            {...register("contactName")}
                            aria-invalid={!!errors.contactName}
                          />
                          {errors.contactName && (
                            <p className="text-sm text-destructive">{errors.contactName.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            이메일 <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            연락처 <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>
                            업종 <span className="text-destructive">*</span>
                          </Label>
                          <Controller
                            name="industry"
                            control={control}
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="w-full" aria-invalid={!!errors.industry}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {industryOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.industry && (
                            <p className="text-sm text-destructive">{errors.industry.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label>
                            직원 수 <span className="text-destructive">*</span>
                          </Label>
                          <Controller
                            name="companySize"
                            control={control}
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="w-full" aria-invalid={!!errors.companySize}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {companySizeOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.companySize && (
                            <p className="text-sm text-destructive">{errors.companySize.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>
                          관심 서비스 <span className="text-destructive">*</span>
                        </Label>
                        <Controller
                          name="services"
                          control={control}
                          render={({ field }) => (
                            <div className="flex flex-wrap gap-4">
                              {serviceOptions.map((option) => (
                                <label
                                  key={option.value}
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <Checkbox
                                    checked={field.value?.includes(option.value)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([...field.value, option.value])
                                      } else {
                                        field.onChange(
                                          field.value?.filter((v) => v !== option.value)
                                        )
                                      }
                                    }}
                                  />
                                  <span className="text-sm">{option.label}</span>
                                </label>
                              ))}
                            </div>
                          )}
                        />
                        {errors.services && (
                          <p className="text-sm text-destructive">{errors.services.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">문의 내용</Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          className="min-h-[120px] resize-none"
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message.message}</p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <Controller
                          name="privacyConsent"
                          control={control}
                          render={({ field }) => (
                            <label className="flex items-start gap-3 cursor-pointer">
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-0.5"
                              />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                <span className="text-destructive">*</span> 개인정보 수집 및 이용에
                                동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후
                                파기됩니다.
                              </span>
                            </label>
                          )}
                        />
                        {errors.privacyConsent && (
                          <p className="text-sm text-destructive">{errors.privacyConsent.message}</p>
                        )}
                      </div>

                      {submitState === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p className="text-sm">{errorMessage}</p>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12"
                        disabled={submitState === "loading"}
                      >
                        {submitState === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            전송 중...
                          </>
                        ) : (
                          "상담 신청하기"
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              >
                <div className="bg-background rounded-2xl border border-border/50 shadow-sm p-8">
                  <h3 className="text-xl font-bold mb-6">연락처 정보</h3>
                  <div className="space-y-5">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">빠른 상담이 필요하신가요?</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    급한 문의사항이 있으시면 이메일로 직접 연락 주세요. 평일 24시간 이내 답변드립니다.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="mailto:axconkr@gmail.com">이메일로 문의하기</a>
                  </Button>
                </div>

                <div className="bg-background rounded-2xl border border-border/50 shadow-sm p-8">
                  <h3 className="text-lg font-bold mb-4">상담 진행 안내</h3>
                  <ul className="space-y-3">
                    {[
                      "상담 신청 후 1영업일 내 연락",
                      "무료 1시간 현황 진단",
                      "맞춤형 솔루션 제안서 제공",
                      "견적 및 일정 협의",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
