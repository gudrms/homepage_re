import type { Metadata } from "next";
import Link from "next/link";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { robotics, productLabels } from "@/content/products";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  return { title: robotics.title[lang], description: robotics.intro[lang] };
}

export default async function RoboticsCategory({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  const c = robotics;

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
                <Link className="ci" href={`/${lang}/robotics/${p.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} loading="lazy" />
                </Link>
                <div className="cb">
                  <span className="en">
                    {c.no}.{String(i + 1).padStart(2, "0")} · {p.tags[0]}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.summary[lang]}</p>
                  <Link className="more" href={`/${lang}/robotics/${p.slug}`}>
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
