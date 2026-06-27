import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { aboutIntro, companyLabels } from "@/content/company";
import Reveal from "@/components/Reveal";
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
    title: companyLabels.pageTitle[lang],
    alternates: alternates(lang, "company"),
  };
}

export default async function CompanyPage({
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
        title={companyLabels.aboutTitle[lang]}
        activeHref={`/${lang}/company`}
      />

      <section>
        <div className="wrap co-about">
          <Reveal className="co-intro">
            {aboutIntro[lang].split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="co-cta">
            <Link className="btn btn-primary" href={`/${lang}/#biz`}>
              {companyLabels.viewBusiness[lang]} <span className="arr">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
