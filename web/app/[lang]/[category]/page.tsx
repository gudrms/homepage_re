import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { categories, getCategory, productLabels } from "@/content/products";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    categories.map((c) => ({ lang, category: c.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang: raw, category } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const c = getCategory(category);
  if (!c) return {};
  return { title: c.title[lang], description: c.intro[lang] };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { lang: raw, category } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const c = getCategory(category);
  if (!c) notFound();

  return (
    <>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href={`/${lang}/`}>{productLabels.breadcrumbHome[lang]}</Link>
            <span className="sep">/</span>
            <span className="cur">{c.title[lang]}</span>
          </div>
          <div className="eyebrow">
            <span className="tick" />
            {c.eyebrow}
          </div>
          <h1>{c.title[lang]}</h1>
          <p className="summary">{c.intro[lang]}</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="cat-grid">
            {c.products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="cat-card">
                <Link className="ci" href={`/${lang}/${c.slug}/${p.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} loading="lazy" />
                </Link>
                <div className="cb">
                  <span className="en">
                    {c.no}.{String(i + 1).padStart(2, "0")} · {p.tags[0]}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.summary[lang]}</p>
                  <Link className="more" href={`/${lang}/${c.slug}/${p.slug}`}>
                    {productLabels.viewDetail[lang]} <span className="arr">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
