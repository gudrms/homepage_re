"use client";

import Link from "next/link";
import { useEffect } from "react";

/** 루트(/)는 기본 언어(ko)로 보냄. 정적 export라 클라이언트 리다이렉트로 처리. */
export default function RootRedirect() {
  useEffect(() => {
    window.location.replace("/ko/");
  }, []);

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <p>
        Redirecting… <Link href="/ko/">코어로보틱스</Link> ·{" "}
        <Link href="/en/">CORE ROBOTICS (EN)</Link>
      </p>
    </main>
  );
}
