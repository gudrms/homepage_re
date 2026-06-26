import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { certifications, companyLabels } from "@/content/company";
import Reveal from "@/components/Reveal";

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

  const subNav = [
    { href: "company", label: companyLabels.aboutTitle[lang] },
    { href: "company/history", label: companyLabels.historyTitle[lang] },
    { href: "company/certifications", label: companyLabels.certiTitle[lang] },
    { href: "company/location", label: companyLabels.locationTitle[lang] },
  ];

  return (
    <>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href={`/${lang}/`}>{companyLabels.breadHome[lang]}</Link>
            <span className="sep">/</span>
            <Link href={`/${lang}/company`}>{companyLabels.pageTitle[lang]}</Link>
            <span className="sep">/</span>
            <span className="cur">{companyLabels.certiTitle[lang]}</span>
          </div>
          <div className="eyebrow"><span className="tick" />Our Company</div>
          <h1>{companyLabels.certiTitle[lang]}</h1>
        </div>
      </div>

      <div className="co-subnav">
        <div className="wrap">
          {subNav.map((s) => (
            <Link
              key={s.href}
              href={`/${lang}/${s.href}`}
              className={s.href === "company/certifications" ? "active" : ""}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

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
