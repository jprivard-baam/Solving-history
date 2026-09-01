"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const headingId = useId();
  const [selectedId, setSelectedId] = useState<DossierId | null>(null);
  const selected = cards.find((card) => card.id === selectedId) ?? null;
  const pins = useMemo(
    () => cards.map((card) => ({ id: card.id, lat: card.lat, lng: card.lng })),
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
            />
          </div>

          {selected ? (
            <article
              className="absolute bottom-3 left-3 right-3 z-[800] max-w-sm overflow-hidden border border-gold-dim bg-paper-2 shadow-[0_18px_48px_rgba(0,0,0,0.55)] sm:right-auto sm:w-[22rem]"
              aria-labelledby={headingId}
            >
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="absolute right-2 top-2 z-10 border border-gold-dim bg-paper/85 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.16em] text-gold hover:bg-paper-3"
              >
                {closeLabel}
              </button>
              <div className="relative aspect-[16/9] border-b border-rule">
                <Image
                  src={selected.image}
                  alt={selected.imageAlt}
                  fill
                  className="object-cover"
                  sizes="22rem"
                />
              </div>
              <div className="p-4">
                <p className="pr-16 text-[0.7rem] uppercase tracking-[0.2em] text-gold-dim">
                  {selected.place} · {selected.date}
                </p>
                <h2
                  id={headingId}
                  className="font-display mt-1 text-2xl text-gold"
                >
                  {selected.title}
                </h2>
                <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-ink/85">
                  {selected.lede}
                </p>
                <Link
                  href={selected.href}
                  className="mt-4 inline-block border border-gold px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-gold hover:bg-paper-3"
                >
                  {openLabel}
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
