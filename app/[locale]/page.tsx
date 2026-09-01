import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AtlasWorkspace } from "@/components/AtlasWorkspace";
import { getDictionary } from "@/lib/copy/get-dictionary";
import { dossiers } from "@/lib/dossiers";
import { isLocale, localizedHref } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const dict = getDictionary(locale);
  return {
    title: dict.atlas.title,
    description: dict.atlas.lede,
  };
}

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
  const cards = dossiers.map((d, index) => {
    const copy = dict.dossiers[d.id];
    return {
      id: d.id,
      lat: d.lat,
      lng: d.lng,
      image: d.image,
      title: copy.title,
      hook: copy.cardHook,
      place: copy.place,
      date: copy.cardDate,
      lede: copy.lede,
      imageAlt: copy.imageAlt,
      href: localizedHref(locale, `/dossier/${d.id}`),
      index,
    };
  });

  return (
    <div className="flex min-h-[calc(100svh-3.5rem)] flex-col lg:h-[calc(100svh-3.5rem)] lg:min-h-0 lg:overflow-hidden">
      <AtlasWorkspace
        cards={cards}
        kicker={dict.atlas.kicker}
        title={dict.atlas.title}
        lede={dict.atlas.lede}
        openLabel={dict.atlas.openDossier}
        closeLabel={dict.atlas.closeCard}
        listLabel={dict.atlas.listLabel}
        mapLabel={dict.atlas.mapLabel}
      />
    </div>
  );
}
