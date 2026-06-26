import type { Lang } from "@/lib/i18n";

type L = Record<Lang, string>;

export type NewsItem = { date: string; tag: L; title: L };

/** 구 사이트(news 게시판)에서 옮겨온 보도·공지 목록. 최신순. */
export const news: NewsItem[] = [
  {
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 유자격공급자 등록증 안내",
      en: "CORE ROBOTICS Qualified Supplier Registration Certificate",
    },
  },
  {
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 KOLAS 공인시험기관 인정서 안내",
      en: "CORE ROBOTICS KOLAS Accredited Testing Laboratory Certificate",
    },
  },
  {
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 ISO 9001 · ISO 19443 · ISO 45001 인증(갱신)",
      en: "CORE ROBOTICS ISO 9001 / ISO 19443 / ISO 45001 Certification (Renewal)",
    },
  },
  {
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 KEPIC-MN 원자력 품질보증 자격 인증(갱신)",
      en: "CORE ROBOTICS KEPIC-MN Nuclear Quality Assurance Qualification (Renewal)",
    },
  },
  {
    date: "2025-11-25",
    tag: { ko: "회사", en: "Company" },
    title: {
      ko: "사명 변경 안내 : ㈜엠앤디 → ㈜코어로보틱스",
      en: "Company Name Change: M&D → CORE ROBOTICS",
    },
  },
  {
    date: "2024-02-16",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "㈜엠앤디 '원전기업 인증(골드)' 획득",
      en: "M&D Awarded 'Nuclear Enterprise Certification (Gold)'",
    },
  },
  {
    date: "2023-11-21",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "㈜엠앤디 동반성장위원회 ESG 우수 중소기업 선정",
      en: "M&D Selected as ESG Excellent SME by the Win-Win Growth Committee",
    },
  },
  {
    date: "2023-11-17",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "㈜엠앤디 '원전수출 첫걸음 프로그램' 선정",
      en: "M&D Selected for the 'First Step to Nuclear Export' Program",
    },
  },
  {
    date: "2023-07-05",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "㈜엠앤디 민관합동 SMR 얼라이언스 참여",
      en: "M&D Joins the Public-Private SMR Alliance",
    },
  },
  {
    date: "2023-05-22",
    tag: { ko: "회사", en: "Company" },
    title: {
      ko: "안전보건 경영방침 및 목표",
      en: "Safety & Health Management Policy and Objectives",
    },
  },
  {
    date: "2023-04-07",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "KIMM-Family 기업 협약 체결",
      en: "KIMM-Family Company Agreement Signed",
    },
  },
  {
    date: "2022-08-23",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "한국수력원자력㈜ 동반성장 최우수 협력기업 선정",
      en: "Selected as KHNP Best Win-Win Growth Partner",
    },
  },
  {
    date: "2021-12-28",
    tag: { ko: "납품", en: "Delivery" },
    title: {
      ko: "한빛 1·2호기 FilterBot(액체필터 교체 자동화설비) 납품",
      en: "FilterBot (Liquid Filter Replacement Automation) Delivered to Hanbit Units 1 & 2",
    },
  },
  {
    date: "2021-10-26",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "산업통상자원부장관 표창 수상 (로봇개발부 김성신 부장)",
      en: "Minister of Trade, Industry and Energy Commendation (Kim Sung-shin)",
    },
  },
  {
    date: "2021-10-26",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "'필터교체 자동화 설비' 개발선정품 지정",
      en: "'Filter Replacement Automation Equipment' Designated as Development-Selected Product",
    },
  },
];

export const newsLabels = {
  pageTitle: { ko: "뉴스", en: "News" } as L,
  eyebrow: { ko: "Business Issues", en: "Business Issues" } as L,
  summary: {
    ko: "코어로보틱스의 인증·수상 및 주요 사업 소식을 전합니다.",
    en: "Certifications, awards and key business news from CORE ROBOTICS.",
  } as L,
  breadcrumbHome: { ko: "홈", en: "Home" } as L,
};
