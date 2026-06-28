import type { Metadata } from "next";
import Link from "next/link";
import { isLang, locales, type Lang } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { alternates } from "@/lib/seo";
import { home, businessAreas, specs, trustOrgs } from "@/content/site";
import { companyInfo } from "@/content/company";

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
    alternates: alternates(lang, ""),
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
            <div className="eyebrow">
              <span className="tick" />
              {home.eyebrow[lang]}
            </div>
            <h1 className="title">
              {home.heroTitle[lang].map((line, i) => (
                <span key={i} className={i === 1 ? "accent" : ""}>{line}</span>
              ))}
            </h1>
            <p className="lead">{home.heroLead[lang]}</p>
            <div className="hero-btns">
              <a className="btn btn-primary" href="#biz">
                {home.ctaPrimary[lang]} →
              </a>
              <a className="btn btn-line" href="#contact">
                {home.ctaSecondary[lang]}
              </a>
            </div>
          </div>

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
                <Link className="card-link" href={`/${lang}${a.href}`} aria-label={a.title[lang]} />
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
                  <span className="more">
                    {home.labels.learnMore[lang]} <span className="arr">→</span>
                  </span>
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
          <Link className="band-cta" href={`/${lang}/company`}>
            {lang === "ko" ? "회사소개 보기" : "About the company"}
            <span className="arr">→</span>
          </Link>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap contact">
          <div className="contact-intro">
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
            <div className="info">
            <div className="row">
              <div className="k">{home.labels.hq[lang]}</div>
              <div className="v">{companyInfo.offices.seoul.address[lang]}</div>
            </div>
            <div className="row">
              <div className="k">{home.labels.factory[lang]}</div>
              <div className="v">{companyInfo.offices.busan.address[lang]}</div>
            </div>
            <div className="row">
              <div className="k">Tel</div>
              <div className="v">
                {companyInfo.tel} &nbsp;/&nbsp; Fax {companyInfo.fax}
              </div>
            </div>
            <div className="row">
              <div className="k">Mail</div>
              <div className="v">
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
            </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
