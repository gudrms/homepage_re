"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import type { Lang } from "@/lib/i18n";

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 스크롤스파이 — 현재 보이는 섹션에 맞춰 메뉴 자동 하이라이트
    const els = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    let spy: IntersectionObserver | null = null;
    if (els.length) {
      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive((e.target as HTMLElement).id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      els.forEach((el) => spy!.observe(el));
    }

    // 스크롤 진행률 바
    const bar = document.getElementById("progress");
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      bar.style.width = `${ratio * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      spy?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const koHref = pathname.replace(`/${lang}`, "/ko");
  const enHref = pathname.replace(`/${lang}`, "/en");

  return (
    <>
      <div className="util">
        <div className="wrap">
          <div>CORE ROBOTICS CO., LTD.</div>
          <div className="r">
            <Link href={`/${lang}/#contact`}>CONTACT US</Link>
            <span className="lang">
              <Link href={koHref} style={lang === "ko" ? { color: "#fff" } : undefined}>
                <b>KOR</b>
              </Link>
              {" / "}
              <Link href={enHref} style={lang === "en" ? { color: "#fff" } : undefined}>
                ENG
              </Link>
            </span>
          </div>
        </div>
      </div>

      <header className="site">
        <div className="wrap nav">
          <Link className="brand" href={`/${lang}/`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="CORE ROBOTICS" />
          </Link>

          <nav className={`menu ${open ? "open" : ""}`}>
            {nav.filter((n) => n.id !== "contact").map((n) => (
              <a
                key={n.id}
                href={`/${lang}/${n.href}`}
                className={active === n.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {n.label[lang]}
              </a>
            ))}
            <Link href={`/${lang}/company`} onClick={() => setOpen(false)}>
              {lang === "ko" ? "회사소개" : "Company"}
            </Link>
            <Link href={`/${lang}/news`} onClick={() => setOpen(false)}>
              {lang === "ko" ? "뉴스" : "News"}
            </Link>
          </nav>

          <a
            className="cta"
            href={`mailto:COREROBOTICS@CORE-ROBOTICS.KR?subject=${encodeURIComponent(lang === "ko" ? "[코어로보틱스] 사업 문의" : "[CORE ROBOTICS] Business Inquiry")}&body=${encodeURIComponent(lang === "ko" ? "■ 이름 / Name:\n■ 회사명 / Company:\n■ 연락처 / Contact:\n■ 문의 내용:\n\n" : "■ Name:\n■ Company:\n■ Contact:\n■ Inquiry:\n\n")}`}
          >
            {lang === "ko" ? "사업문의" : "Contact"}
          </a>
          <button
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            ☰
          </button>
        </div>
        <div id="progress" />
      </header>
    </>
  );
}
