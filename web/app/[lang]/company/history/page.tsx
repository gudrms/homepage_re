import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { companyLabels } from "@/content/company";
import CompanyHeader from "@/components/CompanyHeader";
import { alternates } from "@/lib/seo";

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
    title: `${companyLabels.historyTitle[lang]} | ${companyLabels.pageTitle[lang]}`,
    alternates: alternates(lang, "company/history"),
  };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  if (!isLang(raw)) notFound();

  return (
    <>
      <CompanyHeader
        lang={lang}
        title={companyLabels.historyTitle[lang]}
        activeHref={`/${lang}/company/history`}
      />

      <section>
        <div className="wrap">
          <div className="co-history-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/history_img.png" alt={companyLabels.historyTitle[lang]} />
          </div>
        </div>
      </section>
    </>
  );
}
