import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

export const SITE_URL = "https://www.core-robotics.kr";

/**
 * hreflang/canonical alternates 생성.
 * @param lang 현재 언어
 * @param sub  /{lang} 뒤 경로 (앞 슬래시 없이). 홈은 "".  예: "news", "company/history", "robotics/pov"
 */
export function alternates(lang: Lang, sub: string): Metadata["alternates"] {
  const path = sub ? `/${sub}/` : "/";
  return {
    canonical: `${SITE_URL}/${lang}${path}`,
    languages: {
      ko: `${SITE_URL}/ko${path}`,
      en: `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/ko${path}`,
    },
  };
}
