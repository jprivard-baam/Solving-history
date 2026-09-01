import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).shop.title };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);

  return (
    <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
        {dict.shop.kicker}
      </p>
      <h1 className="font-display mt-2 text-5xl text-gold">{dict.shop.title}</h1>
      <div className="paper-rule my-8" />
      <p className="text-lg leading-relaxed text-ink/90">{dict.shop.intro}</p>
    </article>
  );
}
