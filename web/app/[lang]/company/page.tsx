import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { aboutIntro, companyLabels } from "@/content/company";
import { categories } from "@/content/products";
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
  return { title: companyLabels.pageTitle[lang] };
}

export default async function CompanyPage({
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
            <span className="cur">{companyLabels.pageTitle[lang]}</span>
          </div>
          <div className="eyebrow"><span className="tick" />Our Company</div>
          <h1>{companyLabels.aboutTitle[lang]}</h1>
        </div>
      </div>

      <div className="co-subnav">
        <div className="wrap">
          {subNav.map((s) => (
            <Link
              key={s.href}
              href={`/${lang}/${s.href}`}
              className={s.href === "company" ? "active" : ""}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <section>
        <div className="wrap co-about">
          <Reveal className="co-intro">
            {aboutIntro[lang].split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="co-biz-title">
            <span className="eyebrow"><span className="tick" />{companyLabels.bizAreas[lang]}</span>
          </div>
          <div className="co-biz-grid">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 90} className="co-biz-card">
                <Link href={`/${lang}/${c.slug}`}>
                  <span className="co-biz-no">{c.no}</span>
                  <span className="co-biz-eyebrow">{c.eyebrow}</span>
                  <h3>{c.title[lang]}</h3>
                  <p>{c.intro[lang]}</p>
                  <span className="more">{lang === "ko" ? "자세히 보기" : "Learn more"} <span className="arr">→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
