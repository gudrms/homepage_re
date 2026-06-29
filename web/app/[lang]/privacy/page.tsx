import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { companyInfo } from "@/content/company";
import { isLang, locales, type Lang, type L } from "@/lib/i18n";
import { alternates } from "@/lib/seo";

const labels = {
  title: { ko: "개인정보 처리방침", en: "Privacy Policy" },
  summary: {
    ko: "코어로보틱스 홈페이지 문의 처리에 필요한 개인정보 처리 기준입니다.",
    en: "How CORE ROBOTICS handles personal information submitted through this website.",
  },
  home: { ko: "홈", en: "Home" },
  updated: { ko: "시행일: 2026년 6월 29일", en: "Effective date: June 29, 2026" },
} satisfies Record<string, L>;

const sections: Record<Lang, { title: string; items: string[] }[]> = {
  ko: [
    {
      title: "수집 항목",
      items: [
        "필수 항목: 이름, 이메일, 문의 내용",
        "선택 항목: 회사명, 연락처",
        "자동 생성될 수 있는 항목: 문의 접수 시간, 전송 과정에서 필요한 기술 정보",
      ],
    },
    {
      title: "이용 목적",
      items: [
        "제품, 서비스, 사업 제휴 및 기타 문의 확인",
        "문의 내용에 대한 회신과 후속 연락",
        "스팸 및 오남용 방지",
      ],
    },
    {
      title: "보유 및 이용 기간",
      items: [
        "문의 처리 완료 후 1년간 보관한 뒤 지체 없이 파기합니다.",
        "관련 법령에 따라 보존이 필요한 경우에는 해당 기간 동안 보관할 수 있습니다.",
      ],
    },
    {
      title: "처리 위탁 및 외부 서비스",
      items: [
        "홈페이지 문의폼 전송에는 Web3Forms 서비스가 사용됩니다.",
        "입력한 정보는 문의 접수와 이메일 전달을 위해 Web3Forms를 거쳐 회사 담당자에게 전달될 수 있습니다.",
      ],
    },
    {
      title: "동의 거부 권리",
      items: [
        "개인정보 수집 및 이용에 동의하지 않을 수 있습니다.",
        "다만 동의하지 않는 경우 홈페이지 문의폼 제출이 제한됩니다.",
      ],
    },
    {
      title: "문의처",
      items: [
        `${companyInfo.name.ko} 개인정보 문의: ${companyInfo.email}`,
        `전화: ${companyInfo.tel}`,
      ],
    },
  ],
  en: [
    {
      title: "Information We Collect",
      items: [
        "Required: name, email address, inquiry message",
        "Optional: company name, phone number",
        "Technical information required for submission, such as submission time, may be generated during transmission.",
      ],
    },
    {
      title: "Purpose of Use",
      items: [
        "Reviewing product, service, partnership, and general inquiries",
        "Responding to inquiries and follow-up communication",
        "Preventing spam and abuse",
      ],
    },
    {
      title: "Retention Period",
      items: [
        "Personal information is retained for one year after the inquiry is resolved and then deleted without delay.",
        "If applicable laws require retention, the information may be kept for the required period.",
      ],
    },
    {
      title: "External Service Provider",
      items: [
        "This website uses Web3Forms to submit contact form inquiries.",
        "Submitted information may pass through Web3Forms and be delivered to the company contact email for inquiry handling.",
      ],
    },
    {
      title: "Right to Refuse Consent",
      items: [
        "You may refuse consent to the collection and use of personal information.",
        "If you refuse consent, contact form submission through this website will be unavailable.",
      ],
    },
    {
      title: "Contact",
      items: [
        `${companyInfo.name.en} privacy contact: ${companyInfo.email}`,
        `Tel: ${companyInfo.tel}`,
      ],
    },
  ],
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  return {
    title: labels.title[lang],
    description: labels.summary[lang],
    alternates: alternates(lang, "privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  if (!isLang(raw)) notFound();

  return (
    <>
      <PageHeader
        crumbs={[
          { label: labels.home[lang], href: `/${lang}/` },
          { label: labels.title[lang] },
        ]}
        title={labels.title[lang]}
        subtitle={labels.summary[lang]}
      />

      <section>
        <div className="wrap policy">
          <p className="policy-updated">{labels.updated[lang]}</p>
          {sections[lang].map((section) => (
            <section className="policy-section" key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
