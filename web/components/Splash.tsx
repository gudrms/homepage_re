"use client";

import { useEffect, useState } from "react";

/** 첫 진입 시(세션당 1회) 로고를 가운데 띄우는 스플래시 */
export default function Splash() {
  const [state, setState] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    if (sessionStorage.getItem("crSplashSeen")) {
      // effect 본문에서 동기 setState를 피하려 다음 프레임에 처리
      const raf = requestAnimationFrame(() => setState("gone"));
      return () => cancelAnimationFrame(raf);
    }
    const t1 = setTimeout(() => setState("hide"), 500);
    const t2 = setTimeout(() => {
      sessionStorage.setItem("crSplashSeen", "1");
      setState("gone");
    }, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div className={`splash ${state === "hide" ? "splash--hide" : ""}`} aria-hidden>
      <div className="splash-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="CORE ROBOTICS" className="splash-logo" />
        <span className="splash-bar">
          <span />
        </span>
      </div>
    </div>
  );
}
