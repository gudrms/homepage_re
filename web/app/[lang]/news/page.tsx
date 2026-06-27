import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { news, newsLabels } from "@/content/news";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
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
    title: newsLabels.pageTitle[lang],
    description: newsLabels.summary[lang],
    alternates: alternates(lang, "news"),
  };
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
      <PageHeader
        crumbs={[
          { label: newsLabels.breadcrumbHome[lang], href: `/${lang}/` },
          { label: newsLabels.pageTitle[lang] },
        ]}
        title={newsLabels.pageTitle[lang]}
        subtitle={newsLabels.summary[lang]}
      />

      <section>
        <div className="wrap">
          <div className="news-list">
            {news.map((n, i) => (
              <Reveal key={n.id} delay={i * 40} className="news-item">
                <Link className="news-link" href={`/${lang}/news/${n.id}`} aria-label={n.title[lang]} />
                <span className="news-tag">{n.tag[lang]}</span>
                <span className="news-title">{n.title[lang]}</span>
                <time className="news-date">{n.date}</time>
                <span className="news-arr" aria-hidden>→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
