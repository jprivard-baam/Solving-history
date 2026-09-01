import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <SiteChrome locale={locale} dict={dict}>
      {children}
    </SiteChrome>
  );
}
