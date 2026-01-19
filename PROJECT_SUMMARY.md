# AX-Consulting 웹사이트 프로젝트 요약

## 프로젝트 개요
- **프로젝트명**: AX-Consulting 웹사이트
- **도메인**: ax-con.com
- **목적**: 중소기업 대상 AI 자동화 컨설팅 B2B 웹사이트
- **작업 기간**: 2026년 1월 19일

---

## 기술 스택
| 구분 | 기술 |
|------|------|
| 프레임워크 | Next.js 16.1.3 |
| UI 라이브러리 | React 19.2.3 |
| 스타일링 | Tailwind CSS v4 |
| 컴포넌트 | shadcn/ui |
| 애니메이션 | Framer Motion |
| 폼 관리 | React Hook Form + Zod |
| 이메일 | Resend API |
| 아이콘 | Lucide React |

---

## 배포 정보
| 항목 | 값 |
|------|-----|
| GitHub | https://github.com/axconkr/ax-con |
| Vercel | 자동 배포 연동 |
| 이메일 | axconkr@gmail.com |
| 전화 | 010-4739-0704 |
| 주소 | 서울특별시 봉은사로 121 |

---

## 페이지 구조 (17개 라우트)

### 메인 페이지
| 경로 | 설명 |
|------|------|
| `/` | 홈페이지 (8개 섹션) |
| `/about` | 회사 소개 |
| `/contact` | 문의하기 (폼 + Resend 이메일) |
| `/cases` | 성공 사례 |
| `/pricing` | 요금제 |

### 서비스 페이지
| 경로 | 설명 |
|------|------|
| `/services/consulting` | AI 컨설팅 + 실행 로드맵 데모 |
| `/services/automation` | 업무 자동화 |
| `/services/education` | AI 교육 |

### 산업별 페이지
| 경로 | 설명 |
|------|------|
| `/industries/manufacturing` | 제조업 |
| `/industries/healthcare` | 의료 |
| `/industries/traditional` | 전통산업 |

### API & SEO
| 경로 | 설명 |
|------|------|
| `/api/contact` | 문의 폼 제출 API |
| `/sitemap.xml` | 사이트맵 |
| `/robots.txt` | 로봇 설정 |

---

## 홈페이지 섹션 구성

1. **Hero** - 메인 비주얼, CTA, 통계
2. **Pain Points** - 고객 문제점 3가지
3. **Solutions** - 서비스 소개 (컨설팅/자동화/교육)
4. **Verified Tools** - 검증된 도구 및 분석 시스템
5. **Process** - 진행 방식 4단계
6. **Case Studies** - 성과 사례 3개
7. **Testimonials** - 고객 후기
8. **FAQ** - 자주 묻는 질문 (아코디언)
9. **CTA** - 상담 신청 유도

---

## 주요 기능

### 1. 문의 폼
- React Hook Form + Zod 유효성 검사
- Resend API를 통한 이메일 발송
- 수신 이메일: axconkr@gmail.com

### 2. 1:1 챗봇
- 실시간 대화형 UI
- FAQ 기반 자동 응답 (15개+ 키워드)
- 빠른 답장 버튼
- 매칭 실패 시 연락처 안내

### 3. 실행 로드맵 데모
- 인터랙티브 타임라인
- 우선순위 및 상태 표시
- 컨설팅 서비스 페이지에 포함

### 4. SEO 최적화
- JSON-LD 구조화 데이터 (Organization, LocalBusiness, Service, FAQ)
- 동적 sitemap.xml
- robots.txt
- 메타 태그 최적화

---

## 디자인 특징

### 컬러 팔레트
| 용도 | 색상 |
|------|------|
| Primary | #2563EB (Blue 600) |
| Secondary | #1E40AF (Blue 800) |
| Accent | #F59E0B (Amber 500) |
| Background | #F9FAFB |
| Foreground | #111827 |

### 디자인 스타일
- 모던하고 전문적인 B2B 스타일
- Stripe/Linear/Vercel 참고
- 그라디언트 텍스트 및 배경
- 미묘한 블러 효과
- 호버 시 카드 상승 애니메이션
- 반응형 디자인 (모바일/태블릿/데스크탑)

---

## 파일 구조

```
ax-con/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # 홈페이지
│   │   ├── layout.tsx                  # 루트 레이아웃
│   │   ├── globals.css                 # 전역 스타일
│   │   ├── contact/page.tsx            # 문의 페이지
│   │   ├── api/contact/route.ts        # 이메일 API
│   │   ├── services/                   # 서비스 페이지
│   │   ├── industries/                 # 산업별 페이지
│   │   ├── cases/                      # 사례 페이지
│   │   ├── pricing/                    # 요금 페이지
│   │   ├── about/                      # 소개 페이지
│   │   ├── sitemap.ts                  # 사이트맵
│   │   └── robots.ts                   # 로봇 설정
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx              # 헤더
│   │   │   └── footer.tsx              # 푸터
│   │   ├── sections/
│   │   │   ├── hero.tsx                # Hero 섹션
│   │   │   ├── pain-points.tsx         # 문제점 섹션
│   │   │   ├── solutions.tsx           # 솔루션 섹션
│   │   │   ├── verified-tools.tsx      # 검증된 도구 섹션
│   │   │   ├── process.tsx             # 프로세스 섹션
│   │   │   ├── case-studies.tsx        # 사례 섹션
│   │   │   ├── testimonials.tsx        # 후기 섹션
│   │   │   ├── faq.tsx                 # FAQ 섹션
│   │   │   ├── cta-section.tsx         # CTA 섹션
│   │   │   └── roadmap-demo.tsx        # 로드맵 데모
│   │   ├── chatbot/
│   │   │   └── chatbot.tsx             # 1:1 챗봇
│   │   ├── seo/
│   │   │   └── json-ld.tsx             # JSON-LD
│   │   └── ui/                         # shadcn 컴포넌트
│   └── lib/
│       ├── utils.ts                    # 유틸리티
│       └── validations/contact.ts      # 폼 유효성 검사
├── public/                             # 정적 파일
├── .env.local                          # 환경 변수 (RESEND_API_KEY)
├── vercel.json                         # Vercel 설정
├── package.json                        # 의존성
└── tsconfig.json                       # TypeScript 설정
```

---

## 환경 변수

```env
RESEND_API_KEY=re_xxxxxxxxxx
```

---

## Git 커밋 히스토리

1. `feat: AX-Consulting 웹사이트 초기 버전`
2. `fix: 연락처 정보 업데이트`
3. `feat: 1:1 챗봇 기능 개발`
4. `chore: Vercel 배포 설정 추가`
5. `design: 전문적이고 모던한 디자인으로 업그레이드`

---

## 향후 작업 제안

### 단기
- [ ] 커스텀 도메인 연결 (ax-con.com)
- [ ] Vercel Analytics 설정
- [ ] 실제 고객 후기/사례 추가
- [ ] 로고 및 파비콘 교체

### 중기
- [ ] 블로그/뉴스 섹션 추가
- [ ] 다국어 지원 (영어)
- [ ] Google Analytics 연동
- [ ] 챗봇 AI 연동 (OpenAI)

### 장기
- [ ] 고객 포털 (로그인/대시보드)
- [ ] CRM 연동
- [ ] 예약 시스템 통합

---

## 담당자
- 개발: AI Assistant (Claude)
- 기획/운영: AX-Consulting

---

*문서 작성일: 2026년 1월 19일*
