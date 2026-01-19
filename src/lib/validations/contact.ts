import { z } from "zod"

export const industryOptions = [
  { value: "manufacturing", label: "제조업" },
  { value: "healthcare", label: "의료/헬스케어" },
  { value: "traditional", label: "전통산업" },
  { value: "it", label: "IT/기술" },
  { value: "other", label: "기타" },
] as const

export const companySizeOptions = [
  { value: "1-10", label: "1-10명" },
  { value: "11-50", label: "11-50명" },
  { value: "51-200", label: "51-200명" },
  { value: "200+", label: "200명 이상" },
] as const

export const serviceOptions = [
  { value: "consulting", label: "AI 컨설팅" },
  { value: "automation", label: "업무 자동화" },
  { value: "education", label: "AI 교육" },
] as const

const phoneRegex = /^(01[016789][-\s]?\d{3,4}[-\s]?\d{4}|02[-\s]?\d{3,4}[-\s]?\d{4}|0[3-9]\d[-\s]?\d{3,4}[-\s]?\d{4})$/

export const contactSchema = z.object({
  companyName: z
    .string()
    .min(2, "회사명은 2자 이상 입력해주세요")
    .max(50, "회사명은 50자 이하로 입력해주세요"),
  contactName: z
    .string()
    .min(2, "담당자명은 2자 이상 입력해주세요")
    .max(20, "담당자명은 20자 이하로 입력해주세요"),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식을 입력해주세요"),
  phone: z
    .string()
    .min(1, "연락처를 입력해주세요")
    .regex(phoneRegex, "올바른 연락처 형식을 입력해주세요 (예: 010-1234-5678)"),
  industry: z
    .string()
    .min(1, "업종을 선택해주세요"),
  companySize: z
    .string()
    .min(1, "직원 수를 선택해주세요"),
  services: z
    .array(z.string())
    .min(1, "최소 1개 이상의 관심 서비스를 선택해주세요"),
  message: z
    .string()
    .max(500, "문의 내용은 500자 이하로 입력해주세요")
    .optional(),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, "개인정보 수집 및 이용에 동의해주세요"),
})

export type ContactFormData = z.infer<typeof contactSchema>
