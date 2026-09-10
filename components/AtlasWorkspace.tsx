"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AtlasMapLoader } from "@/components/AtlasMapLoader";
import { useAtlasVirtualList } from "@/lib/atlas-virtual-list";
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

  const opened = cards.find((card) => card.id === cardId) ?? null;
  const {
    scrollerRef,
    startIndex,
    endIndex,
    totalHeight,
    offsetOf,
    measure,
    scrollToIndex,
  } = useAtlasVirtualList(cards.length);
  const windowCards = cards.slice(startIndex, endIndex);

  useEffect(() => {
    if (!focusId) {
      return;
    }
    const index = cards.findIndex((card) => card.id === focusId);
    scrollToIndex(index);
  }, [cards, focusId, scrollToIndex]);

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
    <section className="relative flex min-h-0 flex-1 flex-col">
      <div className="border-b border-rule px-4 py-3 sm:px-6 lg:hidden">
        <h1 className="font-serif text-2xl uppercase tracking-[0.12em] text-gold">{title}</h1>
        <p className="font-serif mt-2 max-w-2xl text-lg font-normal italic leading-relaxed text-ink">
          {intro}
        </p>
        <div className="paper-rule my-1.5 max-w-2xl" />
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {lede}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <aside
          className="flex min-h-0 w-full flex-1 flex-col border-b border-rule bg-paper lg:max-h-none lg:w-[min(26rem,38%)] lg:flex-none lg:border-b-0 lg:border-r"
          aria-label={listLabel}
        >
          <div className="hidden border-b border-rule px-5 py-3 lg:block">
            <h1 className="font-serif text-2xl uppercase tracking-[0.12em] text-gold">{title}</h1>
            <p className="font-serif mt-2 max-w-2xl text-lg font-normal italic leading-relaxed text-ink">
              {intro}
            </p>
            <div className="paper-rule my-1.5" />
            <p className="text-sm leading-relaxed text-muted">{lede}</p>
          </div>
          <div
            ref={scrollerRef}
            className="min-h-0 flex-1 overflow-y-auto p-3"
            data-atlas-window={`${startIndex}-${endIndex}`}
          >
            <ol className="relative" style={{ height: totalHeight }}>
              {windowCards.map((card, offset) => {
                const index = startIndex + offset;
                const active = card.id === focusId;
                return (
                  <AtlasVirtualRow
                    key={card.id}
                    card={card}
                    index={index}
                    top={offsetOf(index)}
                    setSize={cards.length}
                    active={active}
                    flash={card.id === flashId}
                    onSelect={selectFromList}
                    onMeasure={measure}
                  />
                );
              })}
            </ol>
          </div>
        </aside>

        <div
          className="relative z-0 isolate min-h-0 flex-1 overflow-hidden"
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

      {opened ? (
        <article
          className="atlas-pin-sheet"
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <div className="atlas-pin-sheet-photo">
            <Image
              src={opened.image}
              alt={opened.imageAlt}
              width={390}
              height={160}
              className="pointer-events-none h-full w-full object-cover"
            />
          </div>
          <div className="atlas-pin-sheet-body">
            <p className="atlas-summary-meta">
              {opened.place} · {opened.date}
            </p>
            <h2 className="atlas-summary-title">{opened.hook}</h2>
            <p className="atlas-pin-sheet-lede">{opened.lede}</p>
          </div>
          <div className="atlas-pin-sheet-actions">
            <button
              type="button"
              onClick={() => setCardId(null)}
              className="atlas-pin-sheet-close"
            >
              {closeLabel}
            </button>
            <Link href={opened.href} className="atlas-pin-sheet-open">
              {openLabel}
            </Link>
          </div>
        </article>
      ) : null}
    </section>
  );
}

function AtlasVirtualRow({
  card,
  index,
  top,
  setSize,
  active,
  flash,
  onSelect,
  onMeasure,
}: {
  card: AtlasCard;
  index: number;
  top: number;
  setSize: number;
  active: boolean;
  flash: boolean;
  onSelect: (id: DossierId) => void;
  onMeasure: (index: number, height: number) => void;
}) {
  const rowRef = useRef<HTMLLIElement>(null);

  useLayoutEffect(() => {
    const node = rowRef.current;
    if (!node) {
      return;
    }
    const publish = () => onMeasure(index, node.offsetHeight);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(node);
    return () => observer.disconnect();
  }, [index, onMeasure]);

  return (
    <li
      ref={rowRef}
      className="atlas-list-row absolute right-0 left-0"
      style={{ top }}
      aria-setsize={setSize}
      aria-posinset={index + 1}
    >
      <button
        type="button"
        id={`atlas-row-${card.id}`}
        aria-pressed={active}
        onClick={() => onSelect(card.id)}
        className={
          (flash ? "atlas-row-flash " : "") +
          (active
            ? "w-full overflow-hidden rounded-none border border-[#8a7030] bg-[#1c1812] text-left shadow-none"
            : "w-full overflow-hidden rounded-none border border-[#3d3426] bg-[#1c1812] text-left shadow-none hover:border-[#8a7030]")
        }
      >
        <span className="block overflow-hidden">
          <Image
            src={card.image}
            alt={card.imageAlt}
            width={416}
            height={234}
            className="h-auto w-full object-cover opacity-90"
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
          <span className="mt-1 block text-xs text-muted">{card.place}</span>
        </span>
      </button>
    </li>
  );
}
