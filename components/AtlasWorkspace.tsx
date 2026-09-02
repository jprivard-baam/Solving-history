"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AtlasMapLoader } from "@/components/AtlasMapLoader";
import type { DossierId } from "@/lib/dossiers";

export type AtlasCard = {
  id: DossierId;
  lat: number;
  lng: number;
  image: string;
  title: string;
  hook: string;
  place: string;
  date: string;
  listBlurb?: string;
  lede: string;
  imageAlt: string;
  href: string;
  index: number;
};

export function AtlasWorkspace({
  cards,
  kicker,
  title,
  intro,
  lede,
  openLabel,
  closeLabel,
  listLabel,
  mapLabel,
}: {
  cards: AtlasCard[];
  kicker: string;
  title: string;
  intro: string;
  lede: string;
  openLabel: string;
  closeLabel: string;
  listLabel: string;
  mapLabel: string;
}) {
  const [focusId, setFocusId] = useState<DossierId | null>(null);
  const [cardId, setCardId] = useState<DossierId | null>(null);
  const [flashId, setFlashId] = useState<DossierId | null>(null);
  const pins = useMemo(
    () =>
      cards.map((card) => ({
        id: card.id,
        lat: card.lat,
        lng: card.lng,
        image: card.image,
        title: card.title,
        hook: card.hook,
        place: card.place,
        date: card.date,
        listBlurb: card.listBlurb,
        lede: card.lede,
        imageAlt: card.imageAlt,
        href: card.href,
      })),
    [cards],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCardId(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!focusId) {
      return;
    }
    document
      .getElementById(`atlas-row-${focusId}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [focusId]);

  const selectFromList = (id: DossierId) => {
    setFocusId(id);
    setCardId(null);
    setFlashId(id);
    window.setTimeout(() => {
      setFlashId((current) => (current === id ? null : current));
    }, 560);
  };

  const togglePin = (id: string) => {
    setFocusId(id as DossierId);
    setCardId((current) => (current === id ? null : (id as DossierId)));
  };

  return (
    <section className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-rule px-4 py-8 sm:px-6 lg:hidden">
        <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">{kicker}</p>
        <h1 className="font-serif mt-2 text-2xl uppercase tracking-[0.12em] text-gold">{title}</h1>
        <p className="font-serif mt-6 max-w-2xl text-lg font-normal italic leading-relaxed text-ink">
          {intro}
        </p>
        <div className="paper-rule my-4 max-w-2xl" />
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {lede}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <aside
          className="flex max-h-[min(46svh,24rem)] min-h-0 w-full flex-col border-b border-rule bg-paper lg:max-h-none lg:w-[min(26rem,38%)] lg:border-b-0 lg:border-r"
          aria-label={listLabel}
        >
          <div className="hidden border-b border-rule px-5 py-8 lg:block">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">{kicker}</p>
            <h1 className="font-serif mt-2 text-2xl uppercase tracking-[0.12em] text-gold">{title}</h1>
            <p className="font-serif mt-6 max-w-2xl text-lg font-normal italic leading-relaxed text-ink">
              {intro}
            </p>
            <div className="paper-rule my-4" />
            <p className="mt-3 text-sm leading-relaxed text-muted">{lede}</p>
          </div>
          <ol className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
            {cards.map((card) => {
              const active = card.id === focusId;
              return (
                <li key={card.id}>
                  <button
                    type="button"
                    id={`atlas-row-${card.id}`}
                    aria-pressed={active}
                    onClick={() => selectFromList(card.id)}
                    className={
                      (card.id === flashId ? "atlas-row-flash " : "") +
                      (active
                        ? "w-full overflow-hidden rounded-none border border-[#8a7030] bg-[#1c1812] text-left shadow-none"
                        : "w-full overflow-hidden rounded-none border border-[#3d3426] bg-[#1c1812] text-left shadow-none hover:border-[#8a7030]")
                    }
                  >
                    <span className="relative block aspect-video">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="object-cover opacity-90"
                        sizes="26rem"
                      />
                    </span>
                    <span className="block p-3">
                      <span className="font-display block text-xl leading-tight text-gold">
                        {card.title}
                      </span>
                      {card.listBlurb ? (
                        <span className="mt-1 block text-sm leading-snug text-ink/90">
                          {card.listBlurb}
                        </span>
                      ) : null}
                      <span className="mt-1 block text-xs text-muted">
                        {card.place}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>

        <div
          className="relative h-[min(48svh,28rem)] shrink-0 lg:h-auto lg:min-h-0 lg:flex-1"
          role="region"
          aria-label={mapLabel}
        >
          <div className="absolute inset-0">
            <AtlasMapLoader
              pins={pins}
              selectedId={focusId}
              openId={cardId}
              flashId={flashId}
              onPinClick={togglePin}
              onClose={() => setCardId(null)}
              openLabel={openLabel}
              closeLabel={closeLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
