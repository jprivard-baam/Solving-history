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
  return { title: getDictionary(locale).methodPage.title };
}

export default async function MethodPage({
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
        {dict.methodPage.kicker}
      </p>
      <h1 className="font-display mt-2 text-5xl text-gold">
        {dict.methodPage.title}
      </h1>
      <div className="paper-rule my-8" />
      <div className="space-y-5 text-lg leading-relaxed text-ink/90">
        {dict.methodPage.intro.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted">
        {dict.methodPage.commonLabel} · {dict.methodPage.advancedLabel}
      </p>
      <ol className="mt-8 space-y-8">
        {dict.methodPage.layers.map((layer, i) => (
          <li key={layer.title} className="border-l border-gold-dim pl-5">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold-dim">
              {i + 1} / 4
            </p>
            <h2 className="font-display mt-1 text-2xl text-gold">{layer.title}</h2>
            <p className="mt-3 leading-relaxed text-ink/90">{layer.body}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
