import type { Metadata } from "next";
import { isLang, locales, type Lang } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import {
  home,
  businessAreas,
  specs,
  trustOrgs,
  company,
  addresses,
} from "@/content/site";

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
  return {
    title:
      lang === "ko"
        ? "코어로보틱스 | CORE ROBOTICS"
        : "CORE ROBOTICS | Nuclear · Robotics · AI",
    description: home.heroLead[lang],
    alternates: {
      languages: { ko: "/ko/", en: "/en/" },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";

  const vq = home.visionQuote[lang];
  const vh = home.visionHighlight[lang];
  const [vqBefore, vqAfter] = vq.split(vh);

  return (
    <>
      {/* HERO */}
      <div className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <Reveal>
              <div className="eyebrow">
                <span className="tick" />
                {home.eyebrow[lang]}
              </div>
            </Reveal>
            <h1 className="title">
              {home.heroTitle[lang].map((line, i) => (
                <Reveal key={i} delay={120 + i * 120}>
                  <span className={i === 1 ? "accent" : ""}>{line}</span>
                </Reveal>
              ))}
            </h1>
            <Reveal delay={540}>
              <p className="lead">{home.heroLead[lang]}</p>
            </Reveal>
            <Reveal delay={660}>
              <div className="hero-btns">
                <a className="btn btn-primary" href="#biz">
                  {home.ctaPrimary[lang]} →
                </a>
                <a className="btn btn-line" href="#contact">
                  {home.ctaSecondary[lang]}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <aside className="spec">
              <div className="head">
                <span className="t">{home.specHead[lang]}</span>
                <span className="led" />
              </div>
              {specs.map((s, i) => (
                <div className="row" key={i}>
                  <span className="k">{s.k[lang]}</span>
                  <span className="v">
                    {s.v}
                    <small>{s.unit[lang]}</small>
                  </span>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </div>

      {/* TRUST */}
      <div className="trust">
        <div className="wrap">
          <span className="lbl">{home.trustLabel[lang]}</span>
          <div className="orgs">
            {trustOrgs.map((o, i) => (
              <span className="org" key={i}>
                {o[lang]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BUSINESS */}
      <section id="biz">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{home.bizEyebrow[lang]}</span>
              <h2>{home.bizTitle[lang]}</h2>
            </div>
            <div className="desc">{home.bizDesc[lang]}</div>
          </div>
          <div className="cards">
            {businessAreas.map((a, i) => (
              <Reveal key={a.no} delay={i * 110} className="card">
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt={a.title[lang]} loading="lazy" />
                </div>
                <div className="pad">
                  <div className="top">
                    <span className="no">{a.no}</span>
                    <span className="tag">{a.tag}</span>
                  </div>
                  <h3>{a.title[lang]}</h3>
                  <div className="en">{a.en}</div>
                  <p>{a.desc[lang]}</p>
                  <ul>
                    {a.items.map((it, j) => (
                      <li key={j}>{it[lang]}</li>
                    ))}
                  </ul>
                  <a className="more" href={`/${lang}${a.href}`}>
                    {home.labels.learnMore[lang]} <span className="arr">→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <div className="band" id="vision">
        <div className="wrap">
          <span className="eyebrow">{home.visionEyebrow[lang]}</span>
          <q>
            {vqBefore}
            <em>{vh}</em>
            {vqAfter}
          </q>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap contact">
          <div>
            <span className="eyebrow">{home.contactEyebrow[lang]}</span>
            <h2 style={{ marginTop: 14 }}>
              {lang === "ko" ? (
                <>
                  프로젝트를
                  <br />
                  <span>시작</span>하세요.
                </>
              ) : (
                <>
                  Let&apos;s <span>start</span>
                  <br />
                  your project.
                </>
              )}
            </h2>
          </div>
          <div className="info">
            <div className="row">
              <div className="k">{home.labels.hq[lang]}</div>
              <div className="v">{addresses.hq[lang]}</div>
            </div>
            <div className="row">
              <div className="k">{home.labels.factory[lang]}</div>
              <div className="v">{addresses.factory[lang]}</div>
            </div>
            <div className="row">
              <div className="k">Tel</div>
              <div className="v">
                {company.tel} &nbsp;/&nbsp; Fax {company.fax}
              </div>
            </div>
            <div className="row">
              <div className="k">Mail</div>
              <div className="v">{company.email}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
