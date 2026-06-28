import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { categories } from "@/content/products";
import { news } from "@/content/news";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // /{lang} 뒤 경로 목록 (앞 슬래시 없이, 홈은 "")
  const subs: string[] = [
    "",
    "company",
    "company/history",
    "company/certifications",
    "company/location",
    "news",
  ];

  categories.forEach((c) => {
    subs.push(c.slug);
    c.products.forEach((p) => subs.push(`${c.slug}/${p.slug}`));
  });
  news.forEach((n) => subs.push(`news/${n.id}`));

  const lastModified = new Date("2026-06-28");

  return locales.flatMap((lang) =>
    subs.map((sub) => ({
      url: `${SITE_URL}/${lang}${sub ? `/${sub}` : ""}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: sub === "" ? 1 : 0.7,
    }))
  );
}
