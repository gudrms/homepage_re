import type { Lang, L } from "@/lib/i18n";

// 회사 공통 정보(전화·주소·대표 등)는 content/company.ts 의 companyInfo 단일 소스를 사용

export type NavItem = { id: string; href: string; label: L };
export type BusinessArea = {
  no: string;
  tag: string;
  href: string;
  image: string;
  title: L;
  en: string;
  desc: L;
  items: L[];
};

export const nav: NavItem[] = [
  { id: "top", href: "#top", label: { ko: "홈", en: "Home" } },
  { id: "biz", href: "#biz", label: { ko: "사업영역", en: "Business" } },
  { id: "vision", href: "#vision", label: { ko: "비전", en: "Vision" } },
  { id: "contact", href: "#contact", label: { ko: "문의", en: "Contact" } },
];

export const businessAreas: BusinessArea[] = [
  {
    no: "01",
    tag: "Robotics",
    href: "/robotics",
    image: "/images/robot1_big_img.png",
    title: { ko: "특수목적용 로봇", en: "Special Purpose Robotics" },
    en: "Special Purpose Robotics",
    desc: {
      ko: "힘 제어와 비전 기술로 작업자의 감각·시야를 대신해, 고방사선 등 위험 현장의 작업을 수행합니다.",
      en: "Force-control and vision technology replace the senses and sight of workers, performing tasks in high-radiation and other hazardous environments.",
    },
    items: [
      { ko: "정비 자동화 (O&M)", en: "Automation for O&M" },
      { ko: "원전·위험설비 해체", en: "Facility Decommissioning" },
      { ko: "Master-Slave 원격제어", en: "Master-Slave Remote Control" },
      { ko: "VR 시뮬레이션 훈련", en: "VR Simulation & Training" },
    ],
  },
  {
    no: "02",
    tag: "AI",
    href: "/ai",
    image: "/images/ai2_big_img.png",
    title: { ko: "AI 예측·진단", en: "AI Predictive Diagnostics" },
    en: "AI Predictive Diagnostics",
    desc: {
      ko: "인공지능·빅데이터 분석 기술로 플랜트 상태감시와 회전기기의 미래 고장까지 예측합니다.",
      en: "AI and big-data analytics enable plant condition monitoring and prediction of future failures in rotating machinery.",
    },
    items: [
      { ko: "AI 진단장비 (AIDE)", en: "AI Diagnostic Equipment (AIDE)" },
      { ko: "기동·정지 AI 시스템", en: "AI Startup & Shutdown System" },
      { ko: "센서 온라인 모니터링", en: "Online Sensor Monitoring" },
      { ko: "예측진단 알고리즘", en: "Predictive Diagnosis Algorithm" },
    ],
  },
  {
    no: "03",
    tag: "Engineering",
    href: "/engineering",
    image: "/images/engine2_big_img.png",
    title: { ko: "엔지니어링·진단장비", en: "Engineering & Diagnostics" },
    en: "Engineering & Diagnostics",
    desc: {
      ko: "동력구동밸브 성능 평가와 주기적 상태 감시를 위한 진단장비·센서 및 엔지니어링 서비스를 제공합니다.",
      en: "Diagnostic equipment, sensors and engineering services for performance evaluation and periodic condition monitoring of power-operated valves.",
    },
    items: [
      { ko: "POV 진단 서비스", en: "POV Diagnostic Service" },
      { ko: "건물 환기성능시험", en: "Inleakage Test Service" },
      { ko: "MOVIDS A+ v2.5", en: "MOVIDS A+ v2.5" },
      { ko: "ACSENTT", en: "ACSENTT" },
    ],
  },
];

export const specs: { k: L; v: string; unit: L }[] = [
  { k: { ko: "Manipulator", en: "Manipulator" }, v: "7", unit: { ko: "-DOF Dual-arm", en: "-DOF Dual-arm" } },
  { k: { ko: "반복 정밀도", en: "Repeatability" }, v: "±0.1", unit: { ko: "mm", en: "mm" } },
  { k: { ko: "제어 주기", en: "Control Cycle" }, v: "1", unit: { ko: "ms Real-time", en: "ms Real-time" } },
  { k: { ko: "Payload", en: "Payload" }, v: "100", unit: { ko: "kg", en: "kg" } },
];

export const trustOrgs: L[] = [
  { ko: "한국수력원자력", en: "KHNP" },
  { ko: "한국중부발전", en: "KOMIPO" },
  { ko: "원자력 발전소", en: "Nuclear Power Plants" },
  { ko: "플랜트 산업", en: "Plant Industry" },
];

/** 홈 화면 카피 */
export const home = {
  eyebrow: { ko: "NUCLEAR · ROBOTICS · AI DIAGNOSTICS", en: "NUCLEAR · ROBOTICS · AI DIAGNOSTICS" },
  heroTitle: {
    ko: ["위험한 현장을", "대신하는 기술,", "코어로보틱스."],
    en: ["Technology that", "stands in for", "the hazardous site."],
  } as Record<Lang, string[]>,
  heroLead: {
    ko: "㈜코어로보틱스는 인공지능 기반 예측 진단, 정비 자동화 및 원전 해체용 특수목적 로봇, 플랜트의 안전성과 효율성을 위한 엔지니어링 서비스를 제공합니다.",
    en: "CORE ROBOTICS provides AI-based predictive diagnostics, special-purpose robots for maintenance automation and nuclear decommissioning, and engineering services for plant safety and efficiency.",
  },
  ctaPrimary: { ko: "사업영역 보기", en: "Explore Business" },
  ctaSecondary: { ko: "기술 문의", en: "Contact Us" },
  specHead: { ko: "Core Technology", en: "Core Technology" },
  trustLabel: { ko: "주요 협력 · 납품 기관", en: "Key Partners & Clients" },
  bizEyebrow: { ko: "Business Areas", en: "Business Areas" },
  bizTitle: { ko: "세 개의 기술 축", en: "Three Technology Pillars" },
  bizDesc: {
    ko: "접근이 어렵고 위험이 높은 발전·플랜트 현장을 로보틱스·AI·엔지니어링으로 대신합니다.",
    en: "We replace hard-to-reach, high-risk power and plant operations with robotics, AI and engineering.",
  },
  visionEyebrow: { ko: "A new name, a new era", en: "A new name, a new era" },
  visionQuote: {
    ko: "데이터가 에너지가 되고, 기술이 바다를 움직이는 시대 — 코어로보틱스가 차세대 원자력과 스마트 조선의 중심에 서겠습니다.",
    en: "In an era where data becomes energy and technology moves the sea, CORE ROBOTICS will stand at the center of next-generation nuclear power and smart shipbuilding.",
  },
  visionHighlight: {
    ko: "코어로보틱스가 차세대 원자력과 스마트 조선의 중심",
    en: "CORE ROBOTICS will stand at the center of next-generation nuclear power and smart shipbuilding",
  },
  contactEyebrow: { ko: "Get in touch", en: "Get in touch" },
  labels: {
    hq: { ko: "본사", en: "HQ" },
    factory: { ko: "공장", en: "Factory" },
    learnMore: { ko: "자세히 보기", en: "Learn more" },
  },
};

/** 푸터 사이트맵 */
export const footerNav: { title: L; links: { label: L; href: string }[] }[] = [
  {
    title: { ko: "기업소개", en: "Company" },
    links: [
      { label: { ko: "About us", en: "About us" }, href: "/company" },
      { label: { ko: "찾아오시는길", en: "Directions" }, href: "/company/location" },
      { label: { ko: "연혁", en: "History" }, href: "/company/history" },
      { label: { ko: "인증현황", en: "Certifications" }, href: "/company/certifications" },
    ],
  },
  {
    title: { ko: "사업영역", en: "Business" },
    links: [
      { label: { ko: "특수목적용 로봇", en: "Special Purpose Robotics" }, href: "/robotics" },
      { label: { ko: "AI 예측·진단", en: "AI Diagnostics" }, href: "/ai" },
      { label: { ko: "엔지니어링·진단장비", en: "Engineering & Diagnostics" }, href: "/engineering" },
    ],
  },
  {
    title: { ko: "뉴스", en: "News" },
    links: [{ label: { ko: "Business Issues", en: "Business Issues" }, href: "/news" }],
  },
];

/** 푸터 회사정보 라벨 */
export const footerLabels = {
  ceo: { ko: "대표자", en: "CEO" } as L,
  bizNo: { ko: "사업자등록번호", en: "Biz Reg. No." } as L,
  tel: { ko: "대표전화", en: "Tel" } as L,
  fax: { ko: "팩스", en: "Fax" } as L,
  hq: { ko: "본사", en: "HQ" } as L,
  factory: { ko: "공장", en: "Factory" } as L,
};
