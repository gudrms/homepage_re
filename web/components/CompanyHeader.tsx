import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { companyLabels } from "@/content/company";

type SubNavItem = { href: string; label: string };

interface Props {
  lang: Lang;
  title: string;
  activeHref: string;
}

export default function CompanyHeader({ lang, title, activeHref }: Props) {
  const subNav: SubNavItem[] = [
    { href: `/${lang}/company`, label: companyLabels.aboutTitle[lang] },
    { href: `/${lang}/company/history`, label: companyLabels.historyTitle[lang] },
    { href: `/${lang}/company/certifications`, label: companyLabels.certiTitle[lang] },
    { href: `/${lang}/company/location`, label: companyLabels.locationTitle[lang] },
  ];

  return (
    <div className="co-hd">
      <div className="wrap">
        <div className="co-hd-top">
          <nav className="co-hd-crumb" aria-label="breadcrumb">
            <Link href={`/${lang}/`}>{companyLabels.breadHome[lang]}</Link>
            <span>/</span>
            <Link href={`/${lang}/company`}>{companyLabels.pageTitle[lang]}</Link>
            {activeHref !== `/${lang}/company` && (
              <>
                <span>/</span>
                <span>{title}</span>
              </>
            )}
          </nav>
          <h1 className="co-hd-title">{title}</h1>
        </div>
      </div>
      <div className="co-hd-tabs-bar">
        <div className="wrap">
          <nav className="co-hd-tabs" aria-label="company sub navigation">
            {subNav.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={s.href === activeHref ? "active" : ""}
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
