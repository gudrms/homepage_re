import { locales, isLang, type Lang } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HtmlLang from "@/components/HtmlLang";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : "ko";

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
