import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { news, getNewsItem, newsLabels } from "@/content/news";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return locales.flatMap((lang) => news.map((n) => ({ lang, id: n.id })));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang: raw, id } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const item = getNewsItem(id);
  if (!item) return {};
  return {
    title: `${item.title[lang]} | ${newsLabels.pageTitle[lang]}`,
    description: item.body[lang][0],
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang: raw, id } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const item = getNewsItem(id);
  if (!isLang(raw) || !item) notFound();

  return (
    <>
      <PageHeader
        crumbs={[
          { label: newsLabels.breadcrumbHome[lang], href: `/${lang}/` },
          { label: newsLabels.pageTitle[lang], href: `/${lang}/news` },
          { label: item.title[lang] },
        ]}
        title={item.title[lang]}
      />

      <section>
        <div className="wrap nv">
          <div className="nv-meta">
            <span className="news-tag">{item.tag[lang]}</span>
            <time className="news-date">{item.date}</time>
          </div>

          <article className="nv-body">
            {item.body[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>

          {item.images.length > 0 && (
            <div className="nv-figs">
              {item.images.map((src, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={i} src={src} alt={`${item.title[lang]} ${i + 1}`} loading="lazy" />
              ))}
            </div>
          )}

          <div className="nv-foot">
            <Link href={`/${lang}/news`} className="nv-back">
              {newsLabels.backToList[lang]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
