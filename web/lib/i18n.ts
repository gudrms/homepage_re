export const locales = ["ko", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLocale: Lang = "ko";

export function isLang(v: string): v is Lang {
  return (locales as readonly string[]).includes(v);
}
