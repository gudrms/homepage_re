export const locales = ["ko", "en"] as const;
export type Lang = (typeof locales)[number];

/** 다국어 문자열 (ko/en) 공용 타입 */
export type L = Record<Lang, string>;

export function isLang(v: string): v is Lang {
  return (locales as readonly string[]).includes(v);
}
