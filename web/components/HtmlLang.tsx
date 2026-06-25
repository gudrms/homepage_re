"use client";

import { useEffect } from "react";

/** 정적 export에서 /en 페이지의 <html lang>를 클라이언트에서 보정 */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
