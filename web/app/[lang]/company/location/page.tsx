import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import { companyLabels } from "@/content/company";
import LocationClient from "@/components/LocationClient";
import { alternates } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";
  return {
    title: `${companyLabels.locationTitle[lang]} | ${companyLabels.pageTitle[lang]}`,
    alternates: alternates(lang, "company/location"),
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  return <LocationClient lang={raw} />;
}
