import Link from "next/link";
import { footerNav, footerLabels } from "@/content/site";
import { companyInfo } from "@/content/company";
import type { Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <Link href={`/${lang}/`} className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="CORE ROBOTICS" />
          </Link>

          <nav className="foot-cols">
            {footerNav.map((col, i) => (
              <div className="foot-col" key={i}>
                <h2>{col.title[lang]}</h2>
                <ul>
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <Link href={`/${lang}${l.href}`}>{l.label[lang]}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="foot-div" />

        <div className="foot-info">
          <div className="foot-co">{companyInfo.name[lang]}</div>
          <div className="foot-meta">
            <span>
              {footerLabels.ceo[lang]} : {companyInfo.ceoName[lang]}
            </span>
            <i>|</i>
            <span>
              {footerLabels.bizNo[lang]} : {companyInfo.bizNo}
            </span>
            <i>|</i>
            <span>
              {footerLabels.tel[lang]} : {companyInfo.tel}
            </span>
            <i>|</i>
            <span>
              {footerLabels.fax[lang]} : {companyInfo.fax}
            </span>
          </div>
          <div className="foot-addr">
            {footerLabels.hq[lang]} : {companyInfo.offices.seoul.address[lang]}
          </div>
          <div className="foot-addr">
            {footerLabels.factory[lang]} : {companyInfo.offices.busan.address[lang]}
          </div>
          <div className="foot-links">
            <Link href={`/${lang}/privacy`}>
              {lang === "ko" ? "개인정보 처리방침" : "Privacy Policy"}
            </Link>
          </div>
          <div className="foot-copy">Copyright ⓒ CORE ROBOTICS. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
