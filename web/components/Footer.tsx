import Link from "next/link";
import {
  company,
  companyName,
  ceoName,
  addresses,
  footerNav,
  footerLabels,
} from "@/content/site";
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
                <h4>{col.title[lang]}</h4>
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
          <div className="foot-co">{companyName[lang]}</div>
          <div className="foot-meta">
            <span>
              {footerLabels.ceo[lang]} : {ceoName[lang]}
            </span>
            <i>|</i>
            <span>
              {footerLabels.bizNo[lang]} : {company.bizNo}
            </span>
            <i>|</i>
            <span>
              {footerLabels.tel[lang]} : {company.tel}
            </span>
            <i>|</i>
            <span>
              {footerLabels.fax[lang]} : {company.fax}
            </span>
          </div>
          <div className="foot-addr">
            {footerLabels.hq[lang]} : {addresses.hq[lang]}
          </div>
          <div className="foot-addr">
            {footerLabels.factory[lang]} : {addresses.factory[lang]}
          </div>
          <div className="foot-copy">Copyright ⓒ CORE ROBOTICS. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
