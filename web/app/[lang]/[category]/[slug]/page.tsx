import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { categories, getCategory, productLabels } from "@/content/products";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    categories.flatMap((c) =>
      c.products.map((p) => ({ lang, category: c.slug, slug: p.slug }))
    )
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: raw, category, slug } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const p = getCategory(category)?.products.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.name, description: p.summary[lang] };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: string; category: string; slug: string }>;
}) {
  const { lang: raw, category, slug } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const c = getCategory(category);
  const p = c?.products.find((x) => x.slug === slug);
  if (!c || !p) notFound();

  return (
    <>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href={`/${lang}/`}>{productLabels.breadcrumbHome[lang]}</Link>
            <span className="sep">/</span>
            <Link href={`/${lang}/${c.slug}`}>{c.title[lang]}</Link>
            <span className="sep">/</span>
            <span className="cur">{p.name}</span>
          </div>

          <div className="phero-grid">
            <div>
              <div className="eyebrow">
                <span className="tick" />
                {c.eyebrow}
              </div>
              <h1>{p.name}</h1>
              {p.korName[lang] && <div className="ko-sub">{p.korName[lang]}</div>}
              <p className="summary">{p.summary[lang]}</p>
              <div className="chips">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.brochure && (
                <a className="dl-btn" href={p.brochure} target="_blank" rel="noopener noreferrer">
                  ↓ {productLabels.brochure[lang]}
                </a>
              )}
            </div>
            <Reveal className="phero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} />
            </Reveal>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Features</span>
              <h2>{productLabels.features[lang]}</h2>
            </div>
          </div>
          <div className="feat-grid">
            {p.features.map((f, i) => (
              <Reveal key={i} delay={i * 90} className="feat">
                <h3>{f.title}</h3>
                <ul>
                  {f.points.map((pt, j) => (
                    <li key={j}>{pt[lang]}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="fa-grid">
            <div className="fa-box">
              <h3>{productLabels.functionT[lang]}</h3>
              <ul className="fa-list">
                {p.functions.map((fn, i) => (
                  <li key={i}>
                    <span className="i">{String(i + 1).padStart(2, "0")}</span>
                    {fn[lang]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fa-box dark">
              <h3>{productLabels.application[lang]}</h3>
              <ul className="fa-list">
                {p.applications.map((ap, i) => (
                  <li key={i}>
                    <span className="i">→</span>
                    {ap[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-line" href={`/${lang}/${c.slug}`}>
              ← {productLabels.backToCategory[lang]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
