"use client";

import { useEffect, useMemo, useState } from "react";
import { AtlasMapLoader } from "@/components/AtlasMapLoader";
import type { DossierId } from "@/lib/dossiers";

export type AtlasCard = {
  id: DossierId;
  lat: number;
  lng: number;
  image: string;
  title: string;
  place: string;
  date: string;
  lede: string;
  imageAlt: string;
  href: string;
  index: number;
};

export function AtlasWorkspace({
  cards,
  kicker,
  title,
  lede,
  openLabel,
  closeLabel,
  listLabel,
  mapLabel,
}: {
  cards: AtlasCard[];
  kicker: string;
  title: string;
  lede: string;
  openLabel: string;
  closeLabel: string;
  listLabel: string;
  mapLabel: string;
}) {
  const [selectedId, setSelectedId] = useState<DossierId | null>(null);
  const pins = useMemo(
    () =>
      cards.map((card) => ({
        id: card.id,
        lat: card.lat,
        lng: card.lng,
        image: card.image,
        title: card.title,
        place: card.place,
        date: card.date,
        lede: card.lede,
        imageAlt: card.imageAlt,
        href: card.href,
      })),
    [cards],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSelectedId]);

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    document
      .getElementById(`atlas-row-${selectedId}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  const selectFromList = (id: DossierId) => {
    setSelectedId(id);
  };

  const togglePin = (id: string) => {
    setSelectedId((current) => (current === id ? null : (id as DossierId)));
  };

  return (
    <section className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-rule px-4 py-6 sm:px-6 lg:hidden">
        <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
          {kicker}
        </p>
        <h1 className="font-display mt-2 text-4xl text-gold">{title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {lede}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <aside
          className="flex max-h-[min(46svh,24rem)] min-h-0 w-full flex-col border-b border-rule bg-paper lg:max-h-none lg:w-[min(26rem,38%)] lg:border-b-0 lg:border-r"
          aria-label={listLabel}
        >
          <div className="hidden border-b border-rule px-5 py-6 lg:block">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-dim">
              {kicker}
            </p>
            <h1 className="font-display mt-2 text-4xl text-gold">{title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">{lede}</p>
          </div>
          <ol className="min-h-0 flex-1 overflow-y-auto">
            {cards.map((card) => {
              const active = card.id === selectedId;
              return (
                <li key={card.id} className="border-b border-rule">
                  <button
                    type="button"
                    id={`atlas-row-${card.id}`}
                    aria-pressed={active}
                    onClick={() => selectFromList(card.id)}
                    className={
                      active
                        ? "flex w-full items-start gap-3 bg-paper-3 px-5 py-4 text-left"
                        : "flex w-full items-start gap-3 px-5 py-4 text-left transition-colors hover:bg-paper-2"
                    }
                  >
                    <span className="mt-0.5 shrink-0 text-[0.7rem] tracking-[0.16em] text-gold-dim">
                      {String(card.index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span
                        className={
                          active
                            ? "font-display block text-xl text-gold"
                            : "font-display block text-xl text-ink"
                        }
                      >
                        {card.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {card.place} · {card.date}
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
              selectedId={selectedId}
              onPinClick={togglePin}
              onClose={() => setSelectedId(null)}
              openLabel={openLabel}
              closeLabel={closeLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
