import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { isLocale, localizedHref } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const shop = getDictionary(locale).shop;
  return { title: shop.title, description: shop.description };
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
      <h1 className="font-display text-5xl text-gold">{dict.shop.title}</h1>
      <div className="paper-rule my-8" />
      <p className="text-lg leading-relaxed text-ink/90">{dict.shop.intro}</p>
      <p className="mt-10">
        <Link
          href={localizedHref(locale, "/help")}
          className="border border-gold px-3 py-1 text-xs uppercase tracking-[0.16em] text-gold hover:bg-paper-3"
        >
          {dict.shop.toHelp}
        </Link>
      </p>
    </article>
  );
}
