import type { Lang } from "@/lib/i18n";

type L = Record<Lang, string>;

export const companyInfo = {
  nameKo: "㈜코어로보틱스",
  nameEn: "CORE ROBOTICS Co., Ltd.",
  ceo: { ko: "대표이사 이명진", en: "CEO : Lee Myeong Jin" },
  registration: { ko: "사업자등록번호 : 124-81-71983", en: "Company Registration Number : 124-81-71983" },
  email: "COREROBOTICS@CORE-ROBOTICS.KR",
  offices: {
    seoul: {
      label: { ko: "서울 본사", en: "Seoul Head Office" },
      address: {
        ko: "서울특별시 서초구 효령로34길 4, 202호 2층",
        en: "2F, 202, 4, Hyoryeong-ro 34-gil, Seocho-gu, Seoul, Republic of Korea",
      },
      tel: "02-525-8660",
      fax: "02-525-8662",
      directions: {
        ko: "지하철 2호선 방배역 1번 출구에서 왼쪽으로 134m",
        en: "134m to the left from Bangbae Station Exit 1 (Seoul Metro Line 2)",
      },
      parking: {
        ko: "건물 지하 2~4층 주차 가능 (10분 무료, 30분 2,000원)",
        en: "Underground B2–B4 parking available (Free 10 min, 2,000 KRW/30 min)",
      },
      googleMapSrc: "https://maps.google.com/maps?q=서울특별시+서초구+효령로34길+4&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
    busan: {
      label: { ko: "부산 공장", en: "Busan Factory" },
      address: {
        ko: "부산광역시 기장군 장안읍 의과학6로 17",
        en: "17, Uigwahak 6-ro, Jangan-eup, Gijang-gun, Busan, Republic of Korea",
      },
      tel: "051-723-5021",
      fax: "051-723-5022",
      googleMapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.3205490285172!2d129.25452596123836!3d35.323034948780915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356887eb3fbdcd17%3A0xa56da1e5be8b994e!2zKOyjvCnsl6DslaTrlJQ!5e0!3m2!1sko!2skr!4v1663033465012!5m2!1sko!2skr",
    },
  },
};

export const certifications: { image: string; label: L }[] = [
  { image: "/images/certi_img1.png", label: { ko: "적격공급자 등록증 (POV)", en: "Qualified Supplier Registration Certificate (POV)" } },
  { image: "/images/certi_img2.png", label: { ko: "적격공급자 등록증 (CRH)", en: "Qualified Supplier Registration Certificate (CRH)" } },
  { image: "/images/certi_img3.png", label: { ko: "혁신제품 지정 확인서", en: "Innovative Product Designation Certificate" } },
  { image: "/images/certi_img4.png", label: { ko: "벤처기업 확인서", en: "Certificate of Venture Business" } },
  { image: "/images/certi_img5.png", label: { ko: "KOLAS 공인 인정서", en: "KOLAS Certificate of Accreditation" } },
  { image: "/images/certi_img6.png", label: { ko: "우수 동반성장 협력 표창", en: "Citation for Excellent Shared Growth Cooperation" } },
  { image: "/images/certi_img7.png", label: { ko: "경영시스템 인증서", en: "Management System Certificate" } },
  { image: "/images/certi_img8.png", label: { ko: "연구개발서비스업 신고확인서", en: "Research and Development Service Business Certificate" } },
  { image: "/images/certi_img9.png", label: { ko: "엔지니어링사업자 신고확인서", en: "Engineering Business Registration Certificate" } },
  { image: "/images/certi_img10.png", label: { ko: "KEPIC-MN 자격 인증서", en: "KEPIC-MN Qualification Certificate" } },
];

export const aboutIntro: L = {
  ko: "㈜코어로보틱스는 원자력·산업 플랜트의 안전성과 효율을 높이는 첨단 기술 기업입니다.\n한국수력원자력·중부발전 등 국내 주요 에너지 기관과 협력하며, 특수목적 로봇·AI 예측진단·엔지니어링 진단 세 분야에서 독자 기술을 개발·공급하고 있습니다.",
  en: "CORE ROBOTICS Co., Ltd. is an advanced technology company dedicated to enhancing the safety and efficiency of nuclear and industrial plants.\nWorking in close partnership with major domestic energy institutions, we develop and deliver proprietary solutions across three domains: special-purpose robotics, AI-based predictive diagnostics, and engineering diagnostic equipment.",
};

export const companyLabels = {
  pageTitle: { ko: "회사소개", en: "Our Company" } as L,
  aboutTitle: { ko: "About us", en: "About us" } as L,
  historyTitle: { ko: "연혁", en: "History" } as L,
  certiTitle: { ko: "인증현황", en: "Certifications" } as L,
  locationTitle: { ko: "찾아오시는 길", en: "Directions" } as L,
  address: { ko: "주소", en: "Address" } as L,
  tel: { ko: "전화", en: "Tel" } as L,
  fax: { ko: "팩스", en: "Fax" } as L,
  directions: { ko: "교통", en: "Directions" } as L,
  parking: { ko: "주차", en: "Parking" } as L,
  bizAreas: { ko: "사업 분야", en: "Business Areas" } as L,
  breadHome: { ko: "홈", en: "Home" } as L,
};
