import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { certifications, companyLabels } from "@/content/company";
import Reveal from "@/components/Reveal";
import CompanyHeader from "@/components/CompanyHeader";

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
  return { title: `${companyLabels.certiTitle[lang]} | ${companyLabels.pageTitle[lang]}` };
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
          <div className="certi-grid">
            {certifications.map((c, i) => (
              <Reveal key={i} delay={i * 60} className="certi-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.label[lang]} loading="lazy" />
                <p>{c.label[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
