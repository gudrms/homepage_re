import { Fragment } from "react";
import Link from "next/link";

type Crumb = { label: string; href?: string };

interface Props {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
}

/** 회사소개(CompanyHeader)와 동일한 다크 페이지 헤더 — 서브탭이 없는 페이지용 */
export default function PageHeader({ crumbs, title, subtitle }: Props) {
  return (
    <div className="co-hd co-hd--plain">
      <div className="wrap">
        <div className="co-hd-top">
          <nav className="co-hd-crumb" aria-label="breadcrumb">
            {crumbs.map((c, i) => (
              <Fragment key={i}>
                {i > 0 && <span>/</span>}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </Fragment>
            ))}
          </nav>
          <h1 className="co-hd-title">{title}</h1>
          {subtitle && <p className="co-hd-sub">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
