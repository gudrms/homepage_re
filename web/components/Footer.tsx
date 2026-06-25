import { company, companyName, ceoName } from "@/content/site";
import type { Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="CORE ROBOTICS" />
          <div>
            {companyName[lang]} · {ceoName[lang]} ·{" "}
            {lang === "ko" ? "사업자등록번호" : "Biz Reg. No."} {company.bizNo}
          </div>
        </div>
        <div>© 2026 CORE ROBOTICS. All rights reserved.</div>
      </div>
    </footer>
  );
}
