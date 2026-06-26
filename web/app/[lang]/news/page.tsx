import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { news, newsLabels } from "@/content/news";
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
  return { title: newsLabels.pageTitle[lang], description: newsLabels.summary[lang] };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  if (!isLang(raw)) notFound();

  return (
    <>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href={`/${lang}/`}>{newsLabels.breadcrumbHome[lang]}</Link>
            <span className="sep">/</span>
            <span className="cur">{newsLabels.pageTitle[lang]}</span>
          </div>
          <div className="eyebrow">
            <span className="tick" />
            {newsLabels.eyebrow[lang]}
          </div>
          <h1>{newsLabels.pageTitle[lang]}</h1>
          <p className="summary">{newsLabels.summary[lang]}</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="news-list">
            {news.map((n, i) => (
              <Reveal key={i} delay={i * 40} className="news-item">
                <span className="news-tag">{n.tag[lang]}</span>
                <span className="news-title">{n.title[lang]}</span>
                <time className="news-date">{n.date}</time>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
