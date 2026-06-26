"use client";

import Link from "next/link";
import { useState } from "react";
import { companyInfo, companyLabels } from "@/content/company";
import type { Lang } from "@/lib/i18n";

export default function LocationClient({ lang }: { lang: Lang }) {
  const [tab, setTab] = useState<"seoul" | "busan">("seoul");
  const seoul = companyInfo.offices.seoul;
  const busan = companyInfo.offices.busan;
  const office = tab === "seoul" ? seoul : busan;

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
            <span className="cur">{companyLabels.locationTitle[lang]}</span>
          </div>
          <div className="eyebrow">
            <span className="tick" />
            Our Company
          </div>
          <h1>{companyLabels.locationTitle[lang]}</h1>
        </div>
      </div>

      <div className="co-subnav">
        <div className="wrap">
          {subNav.map((s) => (
            <Link
              key={s.href}
              href={`/${lang}/${s.href}`}
              className={s.href === "company/location" ? "active" : ""}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="loc-tabs">
            <button className={tab === "seoul" ? "active" : ""} onClick={() => setTab("seoul")}>
              {seoul.label[lang]}
            </button>
            <button className={tab === "busan" ? "active" : ""} onClick={() => setTab("busan")}>
              {busan.label[lang]}
            </button>
          </div>

          <div className="loc-wrap">
            <div className="loc-map">
              <iframe
                key={tab}
                src={office.googleMapSrc}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={office.label[lang]}
              />
            </div>

            <div className="loc-info">
              <dl>
                <dt>{companyLabels.address[lang]}</dt>
                <dd>{office.address[lang]}</dd>

                <dt>{companyLabels.tel[lang]}</dt>
                <dd><a href={`tel:${office.tel}`}>{office.tel}</a></dd>

                <dt>{companyLabels.fax[lang]}</dt>
                <dd>{office.fax}</dd>

                {tab === "seoul" && (
                  <>
                    <dt>{companyLabels.directions[lang]}</dt>
                    <dd>{seoul.directions[lang]}</dd>
                    <dt>{companyLabels.parking[lang]}</dt>
                    <dd>{seoul.parking[lang]}</dd>
                  </>
                )}

                <dt>E-mail</dt>
                <dd><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
