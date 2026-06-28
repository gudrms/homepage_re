import type { L } from "@/lib/i18n";

export type NewsItem = {
  /** 구 사이트 게시판 wr_id — 신/구 URL 301 매핑에 사용 */
  id: string;
  date: string;
  tag: L;
  title: L;
  images: string[];
  body: { ko: string[]; en: string[] };
};

/** 구 사이트(news 게시판)에서 본문·이미지까지 옮겨온 보도·공지. 최신순. */
export const news: NewsItem[] = [
  {
    id: "25",
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 유자격공급자 등록증 안내",
      en: "CORE ROBOTICS Qualified Supplier Registration Certificate",
    },
    images: ["/images/news/25_1.webp", "/images/news/25_2.webp"],
    body: {
      ko: ["㈜코어로보틱스의 동력구동밸브 진단시험 용역, 원전 주제어실 거주성 평가용역 유자격공급자 등록증을 안내드립니다."],
      en: ["We are pleased to share CORE ROBOTICS' Qualified Supplier registration certificates for power-operated valve diagnostic testing services and nuclear main control room habitability assessment services."],
    },
  },
  {
    id: "24",
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 KOLAS 공인시험기관 인정서 안내",
      en: "CORE ROBOTICS KOLAS Accredited Testing Laboratory Certificate",
    },
    images: ["/images/news/24_1.webp"],
    body: {
      ko: ["㈜코어로보틱스의 KOLAS 공인시험기관 인정서를 안내드립니다."],
      en: ["We are pleased to share CORE ROBOTICS' KOLAS Accredited Testing Laboratory certificate."],
    },
  },
  {
    id: "23",
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 ISO 9001 · ISO 19443 · ISO 45001 인증(갱신)",
      en: "CORE ROBOTICS ISO 9001 / ISO 19443 / ISO 45001 Certification (Renewal)",
    },
    images: ["/images/news/23_1.webp", "/images/news/23_2.webp", "/images/news/23_3.webp"],
    body: {
      ko: ["㈜코어로보틱스의 품질경영시스템 인증(ISO 9001), 원자력 공급망 품질경영시스템 인증(ISO 19443), 안전보건경영시스템 인증(ISO 45001)을 안내드립니다."],
      en: ["We are pleased to share CORE ROBOTICS' certifications: Quality Management System (ISO 9001), Nuclear Supply Chain Quality Management System (ISO 19443), and Occupational Health and Safety Management System (ISO 45001)."],
    },
  },
  {
    id: "22",
    date: "2025-12-15",
    tag: { ko: "인증", en: "Certification" },
    title: {
      ko: "㈜코어로보틱스 KEPIC-MN 원자력 품질보증 자격 인증(갱신)",
      en: "CORE ROBOTICS KEPIC-MN Nuclear Quality Assurance Qualification (Renewal)",
    },
    images: ["/images/news/22_1.webp"],
    body: {
      ko: [
        "KEPIC-MN 원자력 품질보증 자격 인증이 갱신되었습니다.",
        "적용기준 : KEPIC-MN",
        "인증일자 : 2025.10.20",
        "종료일자 : 2027.12.21",
      ],
      en: [
        "Our KEPIC-MN nuclear quality assurance qualification has been renewed.",
        "Standard: KEPIC-MN",
        "Certified: 2025.10.20",
        "Valid until: 2027.12.21",
      ],
    },
  },
  {
    id: "20",
    date: "2025-11-25",
    tag: { ko: "회사", en: "Company" },
    title: {
      ko: "사명 변경 안내 : ㈜엠앤디 → ㈜코어로보틱스",
      en: "Company Name Change: M&D → CORE ROBOTICS",
    },
    images: [],
    body: {
      ko: [
        "지속적인 성장과 브랜드 가치 제고를 위해 기존 사명 '㈜엠앤디'에서 '㈜코어로보틱스'로 사명을 변경하였음을 안내드립니다. 새로운 사명엔 신규 비전과 미래 사업확장을 위한 리브랜딩의 의미를 담고자 하였습니다.",
        "사명 변경 외의 조직 구조, 사업 내용, 고객 서비스 등은 기존과 동일하게 유지되며, 더 나은 품질과 기술력으로 보답하겠습니다.",
        "앞으로도 많은 관심과 성원 부탁드립니다.",
        "감사합니다.",
      ],
      en: [
        "We are pleased to announce that our company name has been changed from 'M&D Co., Ltd.' to 'CORE ROBOTICS Co., Ltd.' to support continued growth and enhance our brand value. The new name reflects our rebranding toward a new vision and future business expansion.",
        "Apart from the name change, our organizational structure, business operations, and customer service remain the same, and we will continue to repay you with even better quality and technology.",
        "We sincerely appreciate your continued interest and support.",
        "Thank you.",
      ],
    },
  },
  {
    id: "19",
    date: "2024-02-16",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "㈜엠앤디 '원전기업 인증(골드)' 획득",
      en: "M&D Awarded 'Nuclear Enterprise Certification (Gold)'",
    },
    images: ["/images/news/19_1.webp"],
    body: {
      ko: [
        "㈜엠앤디는 한국원자력산업협회로부터 '원전산업 이해와 수행역량'을 종합적으로 평가받은 결과 2024년 2월 15일 원전기업 인증 최고 등급인 '골드' 등급을 획득하였습니다. ㈜엠앤디는 앞으로도 원전산업 기술경쟁력 제고와 원자력발전소 안전성 향상에 기여할 수 있도록 최선을 다하겠습니다.",
        "* 원전기업 인증제도란? 기업 경영진의 안전문화 이해정도와 사업(구매, 공사, 용역 등) 기술 능력, 품질 확보 노력 및 부정당 제재 최소화 노력 정도에 대한 적극적 의지를 바탕으로 원전산업에 참여중인 기업에 인증을 부여하는 제도로서, 향후 정부 예산 집행이나 원전공기업 원전사업 시 기준으로 활용될 예정입니다.",
      ],
      en: [
        "Following a comprehensive evaluation of its 'understanding of and capability in the nuclear power industry' by the Korea Atomic Industrial Forum, M&D was awarded the 'Gold' grade — the highest level of the Nuclear Enterprise Certification — on February 15, 2024. M&D will continue to do its best to enhance the technological competitiveness of the nuclear industry and improve the safety of nuclear power plants.",
        "* What is the Nuclear Enterprise Certification? A system that grants certification to companies in the nuclear industry based on management's understanding of safety culture, technical capability in business (procurement, construction, services, etc.), efforts to ensure quality, and commitment to minimizing improper conduct. It is to be used as a criterion for future government budget execution and nuclear public-enterprise projects.",
      ],
    },
  },
  {
    id: "17",
    date: "2023-11-21",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "㈜엠앤디 동반성장위원회 ESG 우수 중소기업 선정",
      en: "M&D Selected as ESG Excellent SME by the Win-Win Growth Committee",
    },
    images: ["/images/news/17_1.webp", "/images/news/17_2.webp"],
    body: {
      ko: [
        "㈜엠앤디는 환경(Environmental), 사회(Social), 지배구조(Governance)를 고려한 사회적 기업으로 발전하도록 노력하고 있으며, 2023년 9월 25일 동반성장위원회로부터 글로벌 수준의 사회적 책임을 이행하는 중소기업으로 인정받아 ESG 우수 중소기업으로 선정되었습니다.",
        "㈜엠앤디는 이번 ESG 우수 중소기업 선정을 ESG 경영에 더욱 노력하라는 의미로 받아들이고, 앞으로 더욱 사회적 책임과 윤리경영에 최선을 다하도록 하겠습니다.",
      ],
      en: [
        "M&D strives to grow as a socially responsible company that considers Environmental, Social, and Governance (ESG) factors. On September 25, 2023, it was recognized by the Win-Win Growth Committee as an SME fulfilling world-class social responsibility, and was selected as an ESG Excellent SME.",
        "M&D accepts this selection as encouragement to further strengthen its ESG management, and will continue to do its utmost in social responsibility and ethical management.",
      ],
    },
  },
  {
    id: "15",
    date: "2023-11-17",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "㈜엠앤디 '원전수출 첫걸음 프로그램' 선정",
      en: "M&D Selected for the 'First Step to Nuclear Export' Program",
    },
    images: ["/images/news/15_1.webp"],
    body: {
      ko: [
        "㈜엠앤디는 2023년 11월 15일 산업통상자원부에서 개최한 '원전수출 첫걸음 프로그램 발대식'에 참여했습니다.",
        "'원전수출 첫걸음 프로그램'은 원전 중소·중견기업의 수출을 집중 지원하기 위해 신설된 사업으로, 가격·품질·납기 3박자 경쟁력을 모두 갖춘 수출 유망기업 13곳을 선정했고, ㈜엠앤디는 한빛·고리·새울 원자력발전소에 납품한 '액체필터 교체 자동화 로봇'을 주요 수출품목으로 지정하여 해당 사업에 선정되는 쾌거를 달성했습니다.",
        "㈜엠앤디는 해당 사업에 적극적으로 참여하여 수출을 통한 수익창출은 물론, 원전설비 수출산업 발전에 기여하도록 하겠습니다.",
      ],
      en: [
        "On November 15, 2023, M&D participated in the 'First Step to Nuclear Export Program' launch ceremony hosted by the Ministry of Trade, Industry and Energy.",
        "The 'First Step to Nuclear Export Program' is a newly established initiative to intensively support the exports of small and mid-sized nuclear companies. Thirteen promising export companies with competitiveness in price, quality, and delivery were selected, and M&D was chosen with its 'liquid filter replacement automation robot' — delivered to the Hanbit, Kori, and Saeul nuclear power plants — designated as a key export item.",
        "M&D will actively participate in the program to generate revenue through exports and to contribute to the growth of the nuclear equipment export industry.",
      ],
    },
  },
  {
    id: "13",
    date: "2023-07-05",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "㈜엠앤디 민관합동 SMR 얼라이언스 참여",
      en: "M&D Joins the Public-Private SMR Alliance",
    },
    images: ["/images/news/13_1.webp"],
    body: {
      ko: [
        "㈜엠앤디는 2023년 7월 4일 '민관합동 소형모듈원자로(SMR) 얼라이언스' 출범식에 참여했습니다.",
        "민관합동 SMR 얼라이언스는 글로벌 SMR 시장 선점을 위해 구성된 조직으로 산업통상자원부, 한국수력원자력 등 정부·공공기관 11곳과 SK, 두산에너빌리티 등 31개 기업이 참여합니다.",
        "얼라이언스는 SMR 분야 국가 경쟁력 강화를 목표로 SMR 활용 사업 전략 수립(사업개발 워킹그룹)과 제도 기반 조성(제도정비 워킹그룹)을 위한 구체적 전략을 수립합니다.",
        "㈜엠앤디는 민관합동 SMR 얼라이언스 참여를 통해 SMR 산업 활성화에 적극 기여하고 고부가가치 비즈니스 창출을 위해 노력하겠습니다.",
      ],
      en: [
        "On July 4, 2023, M&D participated in the launch ceremony of the 'Public-Private Small Modular Reactor (SMR) Alliance.'",
        "The Public-Private SMR Alliance is an organization formed to gain an early lead in the global SMR market, with participation from 11 government and public institutions including the Ministry of Trade, Industry and Energy and Korea Hydro & Nuclear Power, along with 31 companies such as SK and Doosan Enerbility.",
        "Aiming to strengthen national competitiveness in the SMR field, the alliance establishes concrete strategies for SMR business strategy development (Business Development Working Group) and institutional foundation building (Regulatory Improvement Working Group).",
        "Through its participation in the Public-Private SMR Alliance, M&D will actively contribute to revitalizing the SMR industry and strive to create high-value-added business.",
      ],
    },
  },
  {
    id: "12",
    date: "2023-05-22",
    tag: { ko: "회사", en: "Company" },
    title: {
      ko: "안전보건 경영방침 및 목표",
      en: "Safety & Health Management Policy and Objectives",
    },
    images: ["/images/news/12_1.webp"],
    body: {
      ko: ["㈜엠앤디는 안전보건을 경영의 최우선 가치로 인식하고 법규 및 기준을 준수하는 안전보건관리체계를 구축하여, 임직원 및 업무관계자에게 미치는 유해·위험요인을 사전에 제거 및 예방하고자 안전보건 경영방침 및 목표를 선언합니다."],
      en: ["M&D recognizes safety and health as the top priority of its management. By establishing a safety and health management system that complies with laws and standards, it declares this Safety and Health Management Policy and Objectives to proactively eliminate and prevent hazards and risks affecting its employees and business partners."],
    },
  },
  {
    id: "11",
    date: "2023-04-07",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "KIMM-Family 기업 협약 체결",
      en: "KIMM-Family Company Agreement Signed",
    },
    images: ["/images/news/11_1.webp"],
    body: {
      ko: [
        "㈜엠앤디는 2023년 3월 29일 한국기계연구원(KIMM)과 KIMM-Family 기업 협약식을 진행했습니다.",
        "이번 협약은 한국기계연구원이 엠앤디를 KIMM-Family 기업으로 선정하여, 지속적인 상호 교류 협력을 통해 기업의 경쟁력 강화와 성장을 지원한다는 내용이 담겨 있습니다.",
        "한국기계연구원과의 협력을 통해 고객 여러분께 보다 좋은 기술력과 서비스로 보답하겠습니다.",
      ],
      en: [
        "On March 29, 2023, M&D held a KIMM-Family company agreement ceremony with the Korea Institute of Machinery & Materials (KIMM).",
        "Under this agreement, KIMM selected M&D as a KIMM-Family company to support its competitiveness and growth through continued mutual exchange and cooperation.",
        "Through cooperation with KIMM, we will repay our customers with even better technology and service.",
      ],
    },
  },
  {
    id: "10",
    date: "2022-08-23",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "한국수력원자력㈜ 동반성장 최우수 협력기업 선정",
      en: "Selected as KHNP Best Win-Win Growth Partner",
    },
    images: ["/images/news/10_1.webp", "/images/news/10_2.webp"],
    body: {
      ko: [
        "한국수력원자력, 최우수 및 우수협력기업 특별 포상",
        "한국수력원자력이 8월 1일 '2022년도 상반기 우수협력기업 특별 포상식'을 개최했습니다. 행사에서는 한수원이 중소벤처기업부 동반성장평가에서 2020년과 2021년 연속 최우수등급을 받은 것을 축하하는 의미로 최우수 및 우수 협력기업 10개사에 대해 특별 포상을 시행했습니다. 또한, ESG에 대한 협력중소기업들의 이해를 높이기 위해 'ESG 경영의 개념과 필요성' 등 특별강의와 함께 중소기업들의 향후 성장전략에 대해 전문가들과 토론하는 시간도 가졌습니다. 정재훈 한수원 사장은 '혁신형 SMR 사업과 체코, 폴란드 원전 수주 등 원전 산업계 미래를 위해 협력을 강화하자'며, '협력 중소기업들과의 동반성장을 위해 계속해서 힘쓰겠다'고 말했습니다.",
      ],
      en: [
        "Korea Hydro & Nuclear Power: Special Awards for Best and Excellent Partner Companies",
        "On August 1, Korea Hydro & Nuclear Power (KHNP) held its 'Special Award Ceremony for Excellent Partner Companies of the First Half of 2022.' To celebrate KHNP receiving the highest grade for two consecutive years (2020 and 2021) in the win-win growth evaluation by the Ministry of SMEs and Startups, special awards were given to 10 best and excellent partner companies. To deepen partner SMEs' understanding of ESG, the event also featured a special lecture on 'the concept and necessity of ESG management' and a discussion with experts on the SMEs' future growth strategies. KHNP President Jeong Jae-hoon said, 'Let us strengthen cooperation for the future of the nuclear industry, including the innovative SMR business and the Czech and Polish nuclear plant orders,' adding, 'we will continue to work hard for shared growth with our partner SMEs.'",
      ],
    },
  },
  {
    id: "5",
    date: "2021-12-28",
    tag: { ko: "납품", en: "Delivery" },
    title: {
      ko: "한빛 1·2호기 FilterBot(액체필터 교체 자동화설비) 납품",
      en: "FilterBot (Liquid Filter Replacement Automation) Delivered to Hanbit Units 1 & 2",
    },
    images: [
      "/images/news/5_1.webp",
      "/images/news/5_2.webp",
      "/images/news/5_3.webp",
      "/images/news/5_4.webp",
      "/images/news/5_5.webp",
      "/images/news/5_6.webp",
      "/images/news/5_7.webp",
    ],
    body: {
      ko: ["2021년 12월 20일, 한빛 1·2호기에 FilterBot(액체필터 교체 자동화설비)을 납품했습니다."],
      en: ["On December 20, 2021, we delivered FilterBot (liquid filter replacement automation equipment) to Hanbit Units 1 and 2."],
    },
  },
  {
    id: "4",
    date: "2021-10-26",
    tag: { ko: "수상", en: "Award" },
    title: {
      ko: "산업통상자원부장관 표창 수상 (로봇개발부 김성신 부장)",
      en: "Minister of Trade, Industry and Energy Commendation (Kim Sung-shin)",
    },
    images: ["/images/news/4_1.webp"],
    body: {
      ko: ["2021년 11월 17일, 로봇개발부 김성신 부장이 원자력분야 노사협력 및 전력안전을 통하여 국가사회발전에 기여한 공을 인정받아 산업통상자원부장관 표창을 수상하였습니다."],
      en: ["On November 17, 2021, Kim Sung-shin, General Manager of the Robotics Development Department, received a commendation from the Minister of Trade, Industry and Energy in recognition of his contribution to national and social development through labor-management cooperation and electrical safety in the nuclear field."],
    },
  },
  {
    id: "3",
    date: "2021-10-26",
    tag: { ko: "사업", en: "Business" },
    title: {
      ko: "'필터교체 자동화 설비' 개발선정품 지정",
      en: "'Filter Replacement Automation Equipment' Designated as Development-Selected Product",
    },
    images: ["/images/news/3_1.webp"],
    body: {
      ko: [
        "'필터교체 자동화 설비'가 한국수력원자력㈜ 개발선정품으로 지정되었습니다.",
        "지정기간 : 2021. 8. 3. ~ 2024. 8. 2. (3년간)",
      ],
      en: [
        "Our 'filter replacement automation equipment' has been designated as a Development-Selected Product by Korea Hydro & Nuclear Power (KHNP).",
        "Designation period: Aug 3, 2021 – Aug 2, 2024 (3 years)",
      ],
    },
  },
];

export function getNewsItem(id: string): NewsItem | undefined {
  return news.find((n) => n.id === id);
}

export const newsLabels = {
  pageTitle: { ko: "뉴스", en: "News" } as L,
  eyebrow: { ko: "Business Issues", en: "Business Issues" } as L,
  summary: {
    ko: "코어로보틱스의 인증·수상 및 주요 사업 소식을 전합니다.",
    en: "Certifications, awards and key business news from CORE ROBOTICS.",
  } as L,
  breadcrumbHome: { ko: "홈", en: "Home" } as L,
  backToList: { ko: "← 목록으로", en: "← Back to list" } as L,
};
