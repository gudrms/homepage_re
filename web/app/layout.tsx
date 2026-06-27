import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Splash from "@/components/Splash";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.core-robotics.kr"),
  title: {
    default: "코어로보틱스 | CORE ROBOTICS",
    template: "%s | CORE ROBOTICS",
  },
  description:
    "㈜코어로보틱스는 인공지능 기반 예측 진단, 정비 자동화 및 원전 해체용 특수목적 로봇, 플랜트 엔지니어링 서비스를 제공합니다.",
  applicationName: "CORE ROBOTICS",
  openGraph: {
    type: "website",
    siteName: "CORE ROBOTICS",
    locale: "ko_KR",
    alternateLocale: "en_US",
    title: "코어로보틱스 | CORE ROBOTICS",
    description:
      "원자력·플랜트를 위한 특수목적 로봇, AI 예측·진단, 엔지니어링 진단장비 — ㈜코어로보틱스.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "CORE ROBOTICS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "코어로보틱스 | CORE ROBOTICS",
    description:
      "원자력·플랜트를 위한 특수목적 로봇, AI 예측·진단, 엔지니어링 진단장비 — ㈜코어로보틱스.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <Splash />
        {children}
      </body>
    </html>
  );
}
