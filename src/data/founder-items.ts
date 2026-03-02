export type Layer = "L1" | "L2" | "L3";

export interface FounderItem {
  id: string;
  layer: Layer;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  narrative: { ko: string; en: string };
  url?: string;
  year: number;
}

export interface LayerMeta {
  label: { ko: string; en: string };
  description: { ko: string; en: string };
}

export const layerMeta: Record<Layer, LayerMeta> = {
  L1: {
    label: { ko: "도구", en: "Tools" },
    description: { ko: "실용적 도구와 서비스", en: "Practical tools & services" },
  },
  L2: {
    label: { ko: "교육", en: "Education" },
    description: {
      ko: "기업 교육과 컨설팅",
      en: "Enterprise training & consulting",
    },
  },
  L3: {
    label: { ko: "철학", en: "Philosophy" },
    description: {
      ko: "기술 철학과 연구",
      en: "Tech philosophy & research",
    },
  },
};

export const founderItems: FounderItem[] = [
  // ── L1 · Tools ────────────────────────────────
  {
    id: "pass-connects-im",
    layer: "L1",
    year: 2023,
    title: {
      ko: "pass.connects.im",
      en: "pass.connects.im",
    },
    description: {
      ko: "Apple Wallet 기반 디지털 명함 서비스. 물리적 명함이라는 전통적 인터페이스를 디지털 네이티브로 재설계하고 직접 수익화한 프로덕트",
      en: "Apple Wallet-based digital business card service. Redesigned the traditional business card interface as digital-native and directly monetized the product",
    },
    narrative: {
      ko: "근본적 인터페이스(명함)를 재설계하고 운영·수익화까지 — L1 역량의 검증된 실적",
      en: "Redesigned a fundamental interface (business cards) and operated it to monetization — proven L1 capability",
    },
    url: "https://pass.connects.im",
  },
  {
    id: "aws-summit-2024",
    layer: "L1",
    year: 2024,
    title: {
      ko: "AWS Summit Seoul 2024",
      en: "AWS Summit Seoul 2024",
    },
    description: {
      ko: "데이터 디스커버리라는 근본적 문제를 AI 에이전트로 해결한 아키텍처. 기술 구현을 넘어 조직 문화 변화까지 설계한 엔드투엔드 접근",
      en: "Architecture that solved the fundamental problem of data discovery with AI agents. An end-to-end approach designing beyond technical implementation to organizational culture change",
    },
    narrative: {
      ko: "기술 도구가 조직의 데이터 접근 방식 자체를 바꿀 수 있음을 국내 최대 클라우드 행사에서 실증",
      en: "Demonstrated at Korea's largest cloud event that technical tools can fundamentally change how organizations access data",
    },
    url: "https://youtu.be/nRfu5TMALOQ?t=1047",
  },
  {
    id: "mk-ai-tools",
    layer: "L1",
    year: 2024,
    title: {
      ko: "매일경제 AI 툴 보도",
      en: "Maeil Business AI Tools Coverage",
    },
    description: {
      ko: "자체 설계한 AI 쿼리 생성 도구의 혁신성이 주요 경제지에서 토스와 함께 사례로 보도됨. 내부 도구 구축이 산업 수준의 인정을 받은 외부 검증",
      en: "The innovation of a self-designed AI query generation tool was covered alongside Toss in a major business newspaper. External validation that internal tool building earned industry-level recognition",
    },
    narrative: {
      ko: "개인의 기술력이 조직 혁신으로 이어지고 외부에서도 인정받은 궤적 — 도구가 미치는 영향력의 증거",
      en: "A trajectory where individual technical capability led to organizational innovation and external recognition — evidence of tool impact",
    },
    url: "https://www.mk.co.kr/news/it/10915255",
  },
  {
    id: "pycon-2022",
    layer: "L1",
    year: 2022,
    title: {
      ko: "PyCon 2022",
      en: "PyCon 2022",
    },
    description: {
      ko: "제품 라이프사이클 전체를 관통하는 독립적 문제해결 역량. 특정 프레임워크에 의존하지 않고 파이썬이라는 근본 도구로 풀스택 엔지니어링을 실현",
      en: "Independent problem-solving capability spanning the entire product lifecycle. Full-stack engineering realized with Python as a fundamental tool without framework dependency",
    },
    narrative: {
      ko: "도구에 종속되지 않고 문제 자체를 직접 해결하는 자세 — 독립적 도구 설계 철학의 원형",
      en: "The stance of solving problems directly without tool dependency — the archetype of independent tool design philosophy",
    },
    url: "https://youtu.be/yMA4F67deLE?t=620",
  },
  {
    id: "bigquery-4-years",
    layer: "L1",
    year: 2022,
    title: {
      ko: "BigQuery 도입 후 4년",
      en: "4 Years After BigQuery Adoption",
    },
    description: {
      ko: "단일 데이터 플랫폼의 4년 운영을 통해 축적된 깊이 있는 엔지니어링 지식. 도입 시점의 결정이 아닌, 장기 운영에서 드러나는 본질적 과제를 체계적으로 해결한 기록",
      en: "Deep engineering knowledge accumulated through 4 years of operating a single data platform. A record of systematically solving fundamental challenges that emerge from long-term operations",
    },
    narrative: {
      ko: "빠른 도입이 아닌 깊은 운영에서 오는 통찰 — '첫번째 원리'는 시간의 축적에서도 드러남",
      en: "Insights from deep operations rather than quick adoption — 'first principles' also emerge from the accumulation of time",
    },
    url: "https://docs.google.com/presentation/d/1irwgt2L2OCwSc-Xok04o4kqsXZSC-zEaWYfMaybLzjA/edit#slide=id.g125514d5365_0_10",
  },
  {
    id: "wanted-jira-bolt",
    layer: "L1",
    year: 2023,
    title: {
      ko: "wanted_jira_bolt",
      en: "wanted_jira_bolt",
    },
    description: {
      ko: "데이터 접근의 근본적 장벽을 AI로 해소한 오픈소스 도구. 93개의 GitHub 스타가 증명하는 실용성과 커뮤니티 인정",
      en: "An open-source tool that removed fundamental barriers to data access with AI. Practicality and community recognition proven by 93 GitHub stars",
    },
    narrative: {
      ko: "내부 도구를 오픈소스로 공유하여 커뮤니티 가치를 창출하는 실천",
      en: "The practice of sharing internal tools as open source to create community value",
    },
    url: "https://github.com/jongwony/wanted_jira_bolt",
  },
  {
    id: "claude-panel",
    layer: "L1",
    year: 2025,
    title: {
      ko: "ClaudePanel",
      en: "ClaudePanel",
    },
    description: {
      ko: "CLI 기반 AI 도구의 사용성 한계를 UI 레이어로 보완한 개발자 도구. AI 에이전트 워크플로우의 가시성을 높이는 인터페이스 설계",
      en: "A developer tool that complements CLI-based AI tool usability limitations with a UI layer. Interface design that increases AI agent workflow visibility",
    },
    narrative: {
      ko: "AI 도구의 사용 경험을 근본적으로 개선하려는 문제의식에서 출발",
      en: "Originated from the fundamental concern of improving the AI tool user experience",
    },
    url: "https://github.com/jongwony/ClaudePanel",
  },

  // ── L2 · Education ────────────────────────────
  {
    id: "lgcns-rag",
    layer: "L2",
    year: 2024,
    title: {
      ko: "LG CNS RAG LLM Application",
      en: "LG CNS RAG LLM Application",
    },
    description: {
      ko: "대기업 환경에서 LLM 기반 애플리케이션의 실질적 구축 역량을 전수. RAG 아키텍처의 핵심 원리부터 실습까지, 구조적 이해에 기반한 교육 설계",
      en: "Transferring practical LLM-based application building capabilities in enterprise environments. Education design based on structural understanding, from core RAG architecture principles to hands-on practice",
    },
    narrative: {
      ko: "기업 규모의 AI 도입을 교육·컨설팅으로 지원하는 역량 — L2 사업 모델의 검증된 실적",
      en: "Capability to support enterprise-scale AI adoption through education and consulting — proven L2 business model track record",
    },
  },
  {
    id: "hyundai-infra",
    layer: "L2",
    year: 2024,
    title: {
      ko: "현대자동차 데이터 인프라 특강",
      en: "Hyundai Motor Data Infrastructure Lecture",
    },
    description: {
      ko: "데이터 인프라의 근간을 이루는 구성 요소들을 분해하고, AI가 이 구조 위에서 어떻게 가치를 창출하는지 아키텍처 관점에서 조명. 인프라 없는 AI는 공허함을 실증",
      en: "Deconstructing the foundational components of data infrastructure and illuminating from an architecture perspective how AI creates value on this structure",
    },
    narrative: {
      ko: "탄탄한 인프라 위에 AI를 쌓는 접근 — 'Root(근본) + Proto(원형)' 네이밍의 기술적 원점",
      en: "The approach of building AI on solid infrastructure — the technical origin of the 'Root + Proto' naming",
    },
    url: "https://www.figma.com/slides/UuNgm9qx38X3zPrtEsdpb4",
  },
  {
    id: "claude-code-subagent",
    layer: "L2",
    year: 2025,
    title: {
      ko: "Claude Code Subagent: Context Engineering",
      en: "Claude Code Subagent: Context Engineering",
    },
    description: {
      ko: "AI 에이전트의 근본적 제약인 컨텍스트 한계를 구조적으로 해결하는 방법론 설계. 단순 사용을 넘어 내부 동작 원리를 이해하고, 아키텍처 수준에서 최적화",
      en: "Designing a methodology to structurally solve context limitations, the fundamental constraint of AI agents. Understanding internal operating principles and optimizing at the architecture level",
    },
    narrative: {
      ko: "표면적 사용을 넘어 근본 원리를 파악하고 새로운 패턴을 설계하는 역량의 증거",
      en: "Evidence of the capability to understand fundamental principles beyond surface-level usage and design new patterns",
    },
    url: "https://medium.com/delightroom/claude-code-subagent-context-engineering-5d8123ed4252",
  },
  {
    id: "claude-code-catchup",
    layer: "L2",
    year: 2025,
    title: {
      ko: "Claude Code 따라잡기",
      en: "Catching Up with Claude Code",
    },
    description: {
      ko: "AI 코딩 도구의 설계 철학과 아키텍처를 역공학적으로 분석. 빠르게 변화하는 릴리즈 너머의 본질적 설계 원리를 추적하는 방법론",
      en: "Reverse-engineering analysis of AI coding tool design philosophy and architecture. A methodology for tracking essential design principles beyond rapidly changing releases",
    },
    narrative: {
      ko: "도구의 표면이 아닌 설계자의 사고방식을 추적하는 습관 — Rootproto의 'Proto(원형)' 추구의 실천",
      en: "The habit of tracking the designer's mindset rather than the tool's surface — the practice of Rootproto's 'Proto' pursuit",
    },
    url: "https://www.figma.com/deck/gfjxpJfFMWWdiEIvXIRMYq/Claude-Code",
  },

  // ── L3 · Philosophy ───────────────────────────
  {
    id: "claude-code-terminal",
    layer: "L3",
    year: 2026,
    title: {
      ko: "Claude Code in Terminal",
      en: "Claude Code in Terminal",
    },
    description: {
      ko: "터미널이라는 가장 근본적인 인터페이스에서 AI 에이전트의 가능성을 탐구. Unix 철학의 조합 가능성(composability)이 AI 도구 설계의 원리가 됨을 실증",
      en: "Exploring AI agent possibilities in the most fundamental interface — the terminal. Demonstrating that Unix philosophy's composability becomes a principle for AI tool design",
    },
    narrative: {
      ko: "도구의 본질을 파고드는 접근 — Rootproto의 '첫번째 원리' 철학의 기술적 선언",
      en: "The approach of digging into the essence of tools — the technical declaration of Rootproto's 'first principles' philosophy",
    },
    url: "https://www.figma.com/deck/tlkYbWZKSfzdOwLAoh3vjn/Claude-Code-in-Terminal",
  },
  {
    id: "ai-brain-room",
    layer: "L3",
    year: 2021,
    title: {
      ko: "AI Brain Room",
      en: "AI Brain Room",
    },
    description: {
      ko: "인공지능의 내부 구조를 예술적 표현으로 시각화한 미디어 아트 설치 작품. 기술의 근본 원리를 비전문가도 직관적으로 이해할 수 있는 인터페이스로 변환한 실험",
      en: "A media art installation that visualized AI's internal structure through artistic expression. An experiment converting fundamental technology principles into an interface that non-experts can intuitively understand",
    },
    narrative: {
      ko: "기술과 인간 사이의 인터페이스를 설계하는 근원적 관심 — '연결의 방법론'의 예술적 원형",
      en: "A fundamental interest in designing interfaces between technology and humans — the artistic archetype of the 'methodology of connection'",
    },
    url: "https://www.youtube.com/watch?v=c03CTEvAreY",
  },
  {
    id: "python-mysql-replication",
    layer: "L3",
    year: 2023,
    title: {
      ko: "python-mysql-replication 커뮤니티",
      en: "python-mysql-replication Community",
    },
    description: {
      ko: "오픈소스 버그 리포팅이 커뮤니티 방문과 기술적 파트너십으로 발전한 사례. 코드 수준의 기여가 신뢰 기반의 연결로 확장되는 과정",
      en: "A case where open-source bug reporting evolved into community visits and technical partnership. The process of code-level contribution expanding into trust-based connections",
    },
    narrative: {
      ko: "기술적 깊이에서 시작된 연결이 커뮤니티와 파트너십으로 확장 — '연결의 방법론'의 실천적 원형",
      en: "Connections started from technical depth expanding into community and partnership — the practical archetype of the 'methodology of connection'",
    },
    url: "https://www.linkedin.com/posts/dongwook-chang_sqotyyrgu-wanted-opensource-activity-7123645714550718464-lxOW/",
  },
  {
    id: "epistemic-protocols",
    layer: "L3",
    year: 2025,
    title: {
      ko: "epistemic-protocols",
      en: "epistemic-protocols",
    },
    description: {
      ko: "AI와 인간의 협업에서 발생하는 인식론적 결핍을 구조적으로 해결하는 오픈소스 프로토콜 체계. 의도 명확화부터 실행 리스크 평가까지, AI 협업의 근본 원리를 방법론으로 체계화",
      en: "An open-source protocol system that structurally resolves epistemic deficits arising in AI-human collaboration. Systematizing fundamental principles of AI collaboration as methodology",
    },
    narrative: {
      ko: "'첫번째 원리부터 설계하는' Rootproto 철학의 가장 직접적인 구현체",
      en: "The most direct implementation of Rootproto's philosophy of 'designing from first principles'",
    },
    url: "https://github.com/jongwony/epistemic-protocols",
  },
];
