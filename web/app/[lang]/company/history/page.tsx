import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { companyLabels } from "@/content/company";

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
  return { title: `${companyLabels.historyTitle[lang]} | ${companyLabels.pageTitle[lang]}` };
}

export default async function HistoryPage({
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
            <span className="cur">{companyLabels.historyTitle[lang]}</span>
          </div>
          <div className="eyebrow"><span className="tick" />Our Company</div>
          <h1>{companyLabels.historyTitle[lang]}</h1>
        </div>
      </div>

      <div className="co-subnav">
        <div className="wrap">
          {subNav.map((s) => (
            <Link
              key={s.href}
              href={`/${lang}/${s.href}`}
              className={s.href === "company/history" ? "active" : ""}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

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
