import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThreePaths } from "@/components/ThreePaths";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).help.title };
}

export default async function HelpPage({
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
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
        {dict.help.kicker}
      </p>
      <h1 className="font-display mt-2 text-5xl text-gold">{dict.help.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {dict.help.intro}
      </p>
      <ThreePaths locale={locale} dict={dict} />
    </article>
  );
}
