"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Popup as LeafletPopup } from "leaflet";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { CARTO_ATTRIBUTION, CARTO_DARK_URL } from "@/lib/dossiers";

export type AtlasPin = {
  id: string;
  lat: number;
  lng: number;
  image: string;
  title: string;
  place: string;
  date: string;
  lede: string;
  imageAlt: string;
  href: string;
};

function AtlasMapEffects({
  focus,
}: {
  focus: { lat: number; lng: number } | null;
}) {
  const map = useMap();

  useEffect(() => {
    const invalidate = () => {
      map.invalidateSize();
    };
    invalidate();
    const frame = window.requestAnimationFrame(invalidate);
    const timer = window.setTimeout(invalidate, 220);
    window.addEventListener("resize", invalidate);
    const observer = new ResizeObserver(invalidate);
    observer.observe(map.getContainer());
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("resize", invalidate);
      observer.disconnect();
    };
  }, [map]);

  useEffect(() => {
    if (!focus) {
      return;
    }
    map.flyTo([focus.lat, focus.lng], Math.max(map.getZoom(), 4), {
      duration: 0.55,
    });
  }, [focus, map]);

  return null;
}

function PinSummaryPopup({
  pin,
  openLabel,
  closeLabel,
  onClose,
}: {
  pin: AtlasPin;
  openLabel: string;
  closeLabel: string;
  onClose: () => void;
}) {
  const map = useMap();
  const popupRef = useRef<LeafletPopup>(null);

  useEffect(() => {
    const popup = popupRef.current;
    if (!popup) {
      return;
    }
    popup.setLatLng([pin.lat, pin.lng]);
    popup.openOn(map);
    return () => {
      map.closePopup(popup);
    };
  }, [map, pin.lat, pin.lng]);

  return (
    <Popup
      ref={popupRef}
      position={[pin.lat, pin.lng]}
      className="atlas-summary-popup"
      maxWidth={280}
      minWidth={240}
      autoPan
      autoPanPadding={[28, 28]}
      closeButton={false}
      closeOnClick={false}
      autoClose={false}
    >
      <article className="atlas-summary-card">
        <button
          type="button"
          onClick={onClose}
          className="atlas-summary-close"
        >
          {closeLabel}
        </button>
        <div className="atlas-summary-photo">
          <Image
            src={pin.image}
            alt={pin.imageAlt}
            width={280}
            height={158}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="atlas-summary-body">
          <p className="atlas-summary-meta">
            {pin.place} · {pin.date}
          </p>
          <h2 className="atlas-summary-title">{pin.title}</h2>
          <p className="atlas-summary-lede">{pin.lede}</p>
          <Link href={pin.href} className="atlas-summary-open">
            {openLabel}
          </Link>
        </div>
      </article>
    </Popup>
  );
}

export function AtlasMap({
  pins,
  selectedId,
  onPinClick,
  onClose,
  openLabel,
  closeLabel,
}: {
  pins: AtlasPin[];
  selectedId: string | null;
  onPinClick: (id: string) => void;
  onClose: () => void;
  openLabel: string;
  closeLabel: string;
}) {
  const selected = pins.find((pin) => pin.id === selectedId) ?? null;

  return (
    <MapContainer
      center={[22, 18]}
      zoom={2}
      minZoom={2}
      className="h-full w-full"
      scrollWheelZoom
      worldCopyJump
    >
      <TileLayer url={CARTO_DARK_URL} attribution={CARTO_ATTRIBUTION} />
      <AtlasMapEffects
        focus={selected ? { lat: selected.lat, lng: selected.lng } : null}
      />
      {pins.map((pin) => {
        const isSelected = pin.id === selectedId;
        return (
          <CircleMarker
            key={pin.id}
            center={[pin.lat, pin.lng]}
            radius={isSelected ? 11 : 8}
            pathOptions={{
              color: isSelected ? "#eadcc4" : "#c9a44a",
              fillColor: "#c9a44a",
              fillOpacity: isSelected ? 1 : 0.92,
              weight: isSelected ? 2 : 1,
            }}
            eventHandlers={{
              click: () => {
                onPinClick(pin.id);
              },
            }}
          />
        );
      })}
      {selected ? (
        <PinSummaryPopup
          pin={selected}
          openLabel={openLabel}
          closeLabel={closeLabel}
          onClose={onClose}
        />
      ) : null}
    </MapContainer>
  );
}
