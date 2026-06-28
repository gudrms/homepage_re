import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { certifications, companyLabels } from "@/content/company";
import CompanyHeader from "@/components/CompanyHeader";
import CertGallery from "@/components/CertGallery";
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
    title: `${companyLabels.certiTitle[lang]} | ${companyLabels.pageTitle[lang]}`,
    alternates: alternates(lang, "company/certifications"),
  };
}

export default async function CertificationsPage({
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
        title={companyLabels.certiTitle[lang]}
        activeHref={`/${lang}/company/certifications`}
      />

      <section>
        <div className="wrap">
          <CertGallery
            items={certifications.map((c) => ({ image: c.image, label: c.label[lang] }))}
            downloadLabel={companyLabels.download[lang]}
            closeLabel={companyLabels.close[lang]}
          />
        </div>
      </section>
    </>
  );
}
