export const axConEntityDescription =
  "AX Con is an AI Transformation consulting organization specializing in AI Native Company design, AI workflow automation, RAG systems, internal AI gateways, and AI literacy education for SMEs and engineering companies.";

export const homepageReadableFacts = [
  { label: "Who we help", text: "중소기업, 엔지니어링 회사, 제조기업, 교육기관, 연구조직, 스타트업 팀, 컨설팅 조직" },
  { label: "What problem we solve", text: "반복 업무, 문서 처리, 보고서 작성, 사내 지식 검색, 결재 병목, AI 도입 우선순위 혼란" },
  { label: "What we deliver", text: "AI 전환 로드맵, 업무 자동화 워크플로우, RAG/사내 AI 게이트웨이, 교육 프로그램, PoC/MVP" },
  { label: "What tools and methods we use", text: "RAG, n8n, Dify, LLM API, OCR, Google Workspace 자동화, AI Governance, Business Process Automation" },
];

export const aiReadableSectionLabels = [
  "Who we help",
  "Problems we solve",
  "Services we provide",
  "Tools and methods",
  "Deliverables",
  "Case examples",
];

export const serviceTypes = [
  "AI Transformation Consulting",
  "AI Workflow Automation",
  "RAG System Implementation",
  "Internal AI Gateway",
  "AI Literacy Training",
  "SME AI Consulting",
];

export const knowsAbout = [
  "AI Transformation",
  "AI Native Company",
  "RAG",
  "n8n",
  "Dify",
  "LLM",
  "AI Governance",
  "Business Process Automation",
];

export type AiReadablePage = {
  slug: string;
  title: string;
  description: string;
  whoWeHelp: string[];
  problems: string[];
  services: string[];
  tools: string[];
  deliverables: string[];
  caseExamples: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: Record<string, AiReadablePage> = {
  "ai-transformation": {
    slug: "ai-transformation",
    title: "AI Transformation Consulting for SMEs",
    description: "AX Con helps Korean SMEs redesign workflows, decision processes, data access, and governance so AI becomes part of daily operations rather than a one-off chatbot experiment.",
    whoWeHelp: ["SME CEOs", "management teams", "operations leaders", "engineering and manufacturing companies", "education and research organizations"],
    problems: ["AI 도입 우선순위가 불명확함", "관리그룹 결재와 문서 병목", "AI 교육은 했지만 실제 업무 변화가 없음", "부서별 데이터와 문서가 흩어져 있음"],
    services: ["AI 전환 진단", "AI Native Company 운영 모델 설계", "업무 프로세스 분해와 자동화 우선순위 선정", "2~4주 PoC/MVP 설계", "AI Governance와 사내 사용 정책 수립"],
    tools: ["LLM", "RAG", "n8n", "Dify", "Google Workspace", "AI Gateway", "workflow automation"],
    deliverables: ["AI 전환 로드맵", "업무 자동화 후보 리스트", "PoC 범위 문서", "AI 사용 정책", "CEO 의사결정용 실행 보드"],
    caseExamples: ["문서 중심 중소기업의 보고서 작성 시간 단축", "관리그룹 결재 보조 AI MVP", "영업/운영 반복업무 자동화 로드맵"],
    faqs: [
      { question: "AI 전환은 어디서부터 시작해야 하나요?", answer: "직무가 아니라 프로세스를 먼저 분해합니다. 반복성, 문서 의존도, 판단 규칙성, 데이터 접근성을 기준으로 PoC 우선순위를 정합니다." },
      { question: "중소기업도 AI Native Company로 전환할 수 있나요?", answer: "가능합니다. 대규모 시스템보다 반복 업무와 문서 흐름을 먼저 자동화하면 2~4주 단위로 성과를 확인할 수 있습니다." },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Workflow Automation with n8n, Dify, RAG and LLM APIs",
    description: "AX Con builds practical AI workflow automation for document processing, reporting, approval support, lead handling, customer response, and internal knowledge search.",
    whoWeHelp: ["반복 업무가 많은 중소기업", "보고서와 문서 처리가 많은 조직", "운영/관리팀", "고객 응대와 리드 대응 팀"],
    problems: ["수작업 복사/붙여넣기", "보고서 작성 지연", "자료 조사와 정리 반복", "고객 문의/리드 후속 대응 누락", "결재 전 검토 업무 병목"],
    services: ["n8n 업무 자동화", "Dify 기반 사내 챗봇/워크플로우", "RAG 지식 검색", "OCR 문서 처리", "Google Workspace 자동화", "승인/결재 보조 AI MVP"],
    tools: ["n8n", "Dify", "RAG", "OCR", "Google Sheets", "Gmail", "LLM API", "webhook"],
    deliverables: ["자동화 워크플로우", "운영 매뉴얼", "오류/예외 처리 정책", "관리자 대시보드", "PoC 결과 리포트"],
    caseExamples: ["신규 문의 접수 후 요약·분류·알림 자동화", "견적/제안서 초안 생성", "회의록/보고서 자동 정리"],
    faqs: [
      { question: "n8n으로 어떤 업무를 자동화할 수 있나요?", answer: "이메일, 시트, 폼, CRM, 문서, 알림, LLM API를 연결해 반복적인 수집·분류·요약·보고 업무를 자동화할 수 있습니다." },
      { question: "자동화 전에 필요한 준비물은 무엇인가요?", answer: "현재 업무 흐름, 입력 데이터, 산출물 양식, 승인 기준, 예외 상황을 정리하면 PoC 범위를 빠르게 잡을 수 있습니다." },
    ],
  },
  "ai-education": {
    slug: "ai-education",
    title: "AI Literacy Training for Executives and Employees",
    description: "AX Con provides AI literacy education that connects executive strategy, employee workflows, safe AI use, prompt practice, and real business automation use cases.",
    whoWeHelp: ["CEO와 임원", "관리자", "실무자", "교육기관", "AI 도입을 준비하는 조직"],
    problems: ["AI 교육 후 실제 업무 적용이 없음", "직원별 AI 활용 편차", "보안과 저작권 우려", "경영진과 실무자의 기대 차이"],
    services: ["임원용 AI 전환 세미나", "직원용 업무 적용 워크숍", "프롬프트/문서 자동화 실습", "AI 거버넌스 교육", "부서별 적용 과제 설계"],
    tools: ["ChatGPT", "Gemini", "Claude", "Perplexity", "Dify", "n8n", "Google Workspace"],
    deliverables: ["교육 커리큘럼", "실습 자료", "부서별 AI 적용 과제", "AI 사용 가이드", "후속 PoC 제안서"],
    caseExamples: ["임원 대상 AI Native Company 세미나", "직원용 문서 작성 자동화 실습", "AI 안전 사용 정책 워크숍"],
    faqs: [
      { question: "AI 교육이 실패하는 이유는 무엇인가요?", answer: "도구 소개에 그치고 실제 업무 프로세스와 연결하지 않기 때문입니다. AX Con은 교육 후 바로 실험할 업무 과제를 함께 설계합니다." },
      { question: "비개발자도 AI 자동화를 배울 수 있나요?", answer: "가능합니다. n8n, Dify, Google Workspace 중심으로 시작하면 비개발자도 업무 자동화의 구조를 이해하고 운영할 수 있습니다." },
    ],
  },
};

export const industryPages: Record<string, AiReadablePage> = {
  sme: {
    slug: "sme",
    title: "SME AI Consulting for Korean Small and Medium-sized Enterprises",
    description: "AX Con helps Korean SMEs adopt AI through practical workflow automation, internal AI gateways, RAG knowledge systems, and employee AI literacy programs.",
    whoWeHelp: ["중소기업 CEO", "관리팀", "영업/운영팀", "문서 업무가 많은 조직", "소상공인 지원기관"],
    problems: ["AI를 어디에 써야 할지 모름", "반복 문서 업무", "고객 응대와 리드 관리 누락", "관리그룹 병목", "예산 대비 효과 불확실"],
    services: ["AI 전환 진단", "업무 자동화 PoC", "사내 지식 검색", "AI 교육", "MVP 구축"],
    tools: ["RAG", "n8n", "Dify", "LLM", "Google Workspace", "OCR"],
    deliverables: ["2~4주 PoC", "자동화 워크플로우", "도입 로드맵", "직원 교육", "성과 리포트"],
    caseExamples: ["문의 분류 자동화", "보고서 초안 생성", "반복 자료 조사 자동화"],
    faqs: [{ question: "중소기업 AX 컨설팅 비용은 어떻게 정해지나요?", answer: "업무 범위, 자동화 난이도, 데이터 준비 상태, PoC 기간에 따라 달라집니다. 먼저 무료 또는 저비용 진단으로 우선순위를 정하는 것이 안전합니다." }],
  },
  engineering: {
    slug: "engineering",
    title: "AI Automation for Engineering and Manufacturing Companies",
    description: "AX Con supports engineering companies with report automation, technical document search, approval workflow assistance, RAG systems, and AI literacy for field and office teams.",
    whoWeHelp: ["엔지니어링 회사", "제조기업", "기술영업팀", "품질/생산관리팀", "보고서 작성이 많은 조직"],
    problems: ["기술 보고서 작성 부담", "도면/문서/규정 검색 어려움", "현장 자료와 사무 문서 단절", "승인 전 검토 지연"],
    services: ["기술 문서 RAG", "보고서 자동화", "품질/생산 데이터 요약", "결재 보조 AI", "현장-사무 workflow 자동화"],
    tools: ["RAG", "OCR", "LLM", "n8n", "Dify", "문서 파서", "Google Drive/Sheets"],
    deliverables: ["기술문서 검색 PoC", "보고서 생성 템플릿", "자동화 workflow", "사용자 교육", "운영 정책"],
    caseExamples: ["엔지니어링 보고서 작성 자동화", "사내 기술문서 검색 챗봇", "현장 이슈 요약 및 보고 자동화"],
    faqs: [{ question: "엔지니어링 회사에 RAG가 필요한 이유는 무엇인가요?", answer: "기술 문서, 규정, 과거 보고서, 프로젝트 산출물이 많기 때문에 사내 자료를 기반으로 답변하는 RAG 시스템이 검색 시간과 보고서 작성 시간을 줄입니다." }],
  },
};

export const faqItems = [
  { question: "AX 컨설팅이란 무엇인가요?", answer: "AX 컨설팅은 기업의 업무 프로세스, 조직 구조, 데이터 흐름, 의사결정 방식을 AI 중심으로 재설계하는 컨설팅입니다. 단순 챗봇 도입이 아니라 업무 자동화, 사내 지식 검색, 문서 처리, 보고서 생성, 결재 보조, 교육 체계까지 포함합니다." },
  { question: "중소기업도 AI 전환이 가능한가요?", answer: "가능합니다. 중소기업은 반복 업무, 문서 업무, 결재 업무, 영업 관리, 고객 응대, 자료 조사 업무 비중이 높기 때문에 작은 PoC부터 빠르게 효과를 볼 수 있습니다." },
  { question: "AX Con은 어떤 기업에 적합한가요?", answer: "AX Con은 제조, 엔지니어링, 교육, 연구기관, 소상공인 지원기관, 중소기업 컨설팅 조직에 적합합니다. 특히 문서 업무가 많고 관리그룹 병목이 심한 조직에 적합합니다." },
  { question: "AI Native 회사로 전환하려면 무엇부터 해야 하나요?", answer: "먼저 업무를 직무 단위가 아니라 프로세스 단위로 분해해야 합니다. 이후 반복성, 문서 의존도, 판단 규칙성, 데이터 접근성을 기준으로 AI 적용 우선순위를 정하고 2~4주 단위 PoC를 실행해야 합니다." },
  { question: "사내 AI 게이트웨이는 왜 필요한가요?", answer: "직원들이 여러 AI 도구를 무분별하게 쓰면 보안, 비용, 품질 관리가 어렵습니다. 사내 AI 게이트웨이는 모델, 권한, 데이터 접근, 사용 로그, 승인 정책을 한 곳에서 관리하게 해줍니다." },
  { question: "RAG 시스템은 어떤 회사에 필요한가요?", answer: "문서, 매뉴얼, 규정, 보고서, 기술 자료, 고객 이력처럼 사내 지식이 많지만 찾기 어려운 회사에 적합합니다. RAG는 사내 자료를 근거로 답변하는 지식 검색 시스템입니다." },
];

export const blogArticles = [
  { slug: "where-to-start-sme-ai-transformation", title: "중소기업은 AI 전환을 어디서부터 시작해야 하나요?", summary: "업무 프로세스 분해, 반복성 평가, 2~4주 PoC 선정 기준을 설명합니다." },
  { slug: "ai-native-company", title: "AI Native Company란 무엇인가요?", summary: "AI를 부가 도구가 아니라 운영체계로 쓰는 회사의 구조를 정의합니다." },
  { slug: "management-bottleneck-ax", title: "관리그룹이 병목인 조직에서 AX를 적용하는 방법", summary: "결재, 검토, 보고 병목을 AI 보조 workflow로 줄이는 방법입니다." },
  { slug: "internal-ai-gateway", title: "사내 AI 게이트웨이는 왜 필요한가요?", summary: "AI 사용 권한, 보안, 비용, 로그, 모델 선택을 통제하는 내부 관문입니다." },
  { slug: "rag-system-fit", title: "RAG 시스템은 어떤 회사에 필요한가요?", summary: "사내 문서와 지식 검색이 많은 조직에서 RAG가 필요한 조건을 정리합니다." },
  { slug: "n8n-sme-automation", title: "n8n으로 중소기업 업무 자동화를 구축하는 방법", summary: "폼, 이메일, 시트, CRM, LLM API를 연결하는 실전 자동화 접근입니다." },
  { slug: "approval-assistant-mvp", title: "결재 보조 AI 시스템 MVP 구축 방법", summary: "결재 전 검토, 요약, 리스크 체크, 승인 대기열을 만드는 MVP 설계입니다." },
  { slug: "engineering-report-automation", title: "엔지니어링 회사의 보고서 작성 자동화 사례", summary: "기술 자료 수집, 보고서 초안, 근거 링크, 검토 흐름을 자동화합니다." },
  { slug: "why-ai-education-fails", title: "AI 교육이 실패하는 이유와 해결 방법", summary: "도구 교육에서 끝나지 않고 업무 과제로 연결하는 교육 설계입니다." },
  { slug: "sme-ax-consulting-cost-process", title: "중소기업 AX 컨설팅 비용과 도입 절차", summary: "진단, PoC, MVP, 운영 전환 단계별 비용 변수를 설명합니다." },
];
