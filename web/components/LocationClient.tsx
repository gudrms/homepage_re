"use client";

import { useState } from "react";
import { companyInfo, companyLabels } from "@/content/company";
import type { Lang } from "@/lib/i18n";
import CompanyHeader from "@/components/CompanyHeader";

export default function LocationClient({ lang }: { lang: Lang }) {
  const [tab, setTab] = useState<"seoul" | "busan">("seoul");
  const seoul = companyInfo.offices.seoul;
  const busan = companyInfo.offices.busan;
  const office = tab === "seoul" ? seoul : busan;

  return (
    <>
      <CompanyHeader
        lang={lang}
        title={companyLabels.locationTitle[lang]}
        activeHref={`/${lang}/company/location`}
      />

      <section>
        <div className="wrap loc-list">
          <div className="loc-tabs">
            <button
              className={tab === "seoul" ? "active" : ""}
              onClick={() => setTab("seoul")}
            >
              {seoul.label[lang]}
            </button>
            <button
              className={tab === "busan" ? "active" : ""}
              onClick={() => setTab("busan")}
            >
              {busan.label[lang]}
            </button>
          </div>

          <div className="loc-wrap">
            <div className="loc-map">
              <iframe
                key={tab}
                src={office.googleMapSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={office.label[lang]}
              />
            </div>
            <div className="loc-info">
              <h2 className="loc-office-title">{office.label[lang]}</h2>
              <dl>
                <dt>{companyLabels.address[lang]}</dt>
                <dd>{office.address[lang]}</dd>
                <dt>{companyLabels.tel[lang]}</dt>
                <dd><a href={`tel:${office.tel}`}>{office.tel}</a></dd>
                <dt>{companyLabels.fax[lang]}</dt>
                <dd>{office.fax}</dd>
                {"directions" in office && (
                  <>
                    <dt>{companyLabels.directions[lang]}</dt>
                    <dd>{(office as typeof seoul).directions[lang]}</dd>
                  </>
                )}
                {"parking" in office && (
                  <>
                    <dt>{companyLabels.parking[lang]}</dt>
                    <dd>{(office as typeof seoul).parking[lang]}</dd>
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
