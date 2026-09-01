import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AtlasMapLoader } from "@/components/AtlasMapLoader";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { dossiers } from "@/lib/dossiers";
import { isLocale, localizedHref } from "@/lib/i18n";

export default async function AtlasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);
  const titles = Object.fromEntries(
    dossiers.map((d) => [d.id, dict.dossiers[d.id].title]),
  );

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
            {dict.atlas.kicker}
          </p>
          <h1 className="font-display mt-2 text-5xl text-gold sm:text-6xl">
            {dict.atlas.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.atlas.lede}
          </p>
        </div>
        <div
          className="border-y border-rule"
          role="region"
          aria-label={dict.atlas.mapLabel}
        >
          <AtlasMapLoader
            locale={locale}
            titles={titles}
            openLabel={dict.atlas.openDossier}
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ol className="grid gap-6 sm:grid-cols-2">
          {dossiers.map((d, i) => {
            const copy = dict.dossiers[d.id];
            return (
              <li key={d.id}>
                <Link
                  href={localizedHref(locale, `/dossier/${d.id}`)}
                  className="group block overflow-hidden border border-rule bg-paper-2 transition-colors hover:border-gold-dim"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={d.image}
                      alt={copy.imageAlt}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold-dim">
                      {String(i + 1).padStart(2, "0")} · {copy.cardDate}
                    </p>
                    <h2 className="font-display mt-1 text-2xl text-ink group-hover:text-gold">
                      {copy.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted">{copy.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/80">
                      {copy.lede}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
