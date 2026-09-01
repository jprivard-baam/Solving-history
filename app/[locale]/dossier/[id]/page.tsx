import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DossierMiniMapLoader } from "@/components/DossierMiniMapLoader";
import { FrResearchExtras } from "@/components/FrResearchExtras";
import { MethodLayers } from "@/components/MethodLayers";
import { ThreePaths } from "@/components/ThreePaths";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { dossiers, getDossier } from "@/lib/dossiers";
import { isLocale, localizedHref } from "@/lib/i18n";

export function generateStaticParams() {
  return dossiers.flatMap((d) => [
    { locale: "en", id: d.id },
    { locale: "fr", id: d.id },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const dict = getDictionary(locale);
  const copy = dict.dossiers[id as keyof typeof dict.dossiers];
  if (!copy) {
    return {};
  }
  return {
    title: copy.title,
    description: copy.lede,
  };
}

export default async function DossierPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const meta = getDossier(id);
  if (!meta) {
    notFound();
  }
  const dict = getDictionary(locale);
  const copy = dict.dossiers[meta.id];
  const index = dossiers.findIndex((d) => d.id === meta.id);
  const next = dossiers[(index + 1) % dossiers.length];

  return (
    <article>
      <header className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
              {String(index + 1).padStart(2, "0")} / 08 · {copy.cardDate}
            </p>
            <h1 className="font-display mt-2 text-5xl text-gold sm:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-2 text-muted">{copy.place}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/90">
              {copy.lede}
            </p>
          </div>
          <div className="overflow-hidden border border-rule">
            <DossierMiniMapLoader
              lat={meta.lat}
              lng={meta.lng}
              label={copy.title}
            />
          </div>
        </div>
      </header>

      <figure className="border-b border-rule">
        <div className="relative mx-auto aspect-[16/8] max-w-6xl">
          <Image
            src={meta.image}
            alt={copy.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <figcaption className="mx-auto max-w-6xl px-4 py-3 text-sm text-muted sm:px-6">
          {copy.imageCaption} · {meta.imageCredit}
        </figcaption>
      </figure>

      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
        <MethodLayers
          dossier={copy}
          commonLabel={dict.dossier.common}
          advancedLabel={dict.dossier.advanced}
          kicker={dict.dossier.methodKicker}
          jsonFields={Boolean(copy.research)}
        />

        {copy.research ? (
          <FrResearchExtras research={copy.research} />
        ) : (
          <aside className="mt-12 border border-rule bg-paper-2 p-5">
            <h2 className="font-display text-xl text-gold">{dict.dossier.sources}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {copy.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </aside>
        )}

        <ThreePaths locale={locale} dict={dict} compact />

        <nav className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 text-sm">
          <Link
            href={localizedHref(locale, "/")}
            className="text-muted hover:text-gold"
          >
            {dict.dossier.backAtlas}
          </Link>
          <Link
            href={localizedHref(locale, `/dossier/${next.id}`)}
            className="text-gold hover:underline"
          >
            {dict.dossier.next}: {dict.dossiers[next.id].title}
          </Link>
        </nav>
      </div>
    </article>
  );
}
