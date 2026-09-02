"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import L from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { CARTO_ATTRIBUTION, CARTO_DARK_URL } from "@/lib/dossiers";

export type AtlasPin = {
  id: string;
  lat: number;
  lng: number;
  image: string;
  title: string;
  hook: string;
  place: string;
  date: string;
  lede: string;
  imageAlt: string;
  href: string;
};

function AtlasMapEffects({
  focusLat,
  focusLng,
}: {
  focusLat: number | null;
  focusLng: number | null;
}) {
  const map = useMap();
  const movingRef = useRef(false);

  useEffect(() => {
    let width = 0;
    let height = 0;
    const invalidate = () => {
      if (movingRef.current) {
        return;
      }
      const container = map.getContainer();
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      if (nextWidth === width && nextHeight === height) {
        return;
      }
      width = nextWidth;
      height = nextHeight;
      map.invalidateSize({ animate: false });
    };
    invalidate();
    window.addEventListener("resize", invalidate);
    const observer = new ResizeObserver(invalidate);
    observer.observe(map.getContainer());
    return () => {
      window.removeEventListener("resize", invalidate);
      observer.disconnect();
    };
  }, [map]);

  useEffect(() => {
    if (focusLat == null || focusLng == null) {
      return;
    }
    movingRef.current = true;
    map.stop();
    map.setView([focusLat, focusLng], Math.max(map.getZoom(), 4), {
      animate: true,
      duration: 0.55,
    });
    const onEnd = () => {
      movingRef.current = false;
    };
    map.once("moveend", onEnd);
    return () => {
      map.off("moveend", onEnd);
      movingRef.current = false;
    };
  }, [focusLat, focusLng, map]);

  return null;
}

function PinLaidCard({
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
  const [point, setPoint] = useState(() =>
    map.latLngToContainerPoint([pin.lat, pin.lng]),
  );

  useEffect(() => {
    const sync = () => {
      setPoint(map.latLngToContainerPoint([pin.lat, pin.lng]));
    };
    sync();
    map.on("move", sync);
    map.on("zoom", sync);
    map.on("zoomend", sync);
    map.on("moveend", sync);
    map.on("viewreset", sync);
    return () => {
      map.off("move", sync);
      map.off("zoom", sync);
      map.off("zoomend", sync);
      map.off("moveend", sync);
      map.off("viewreset", sync);
    };
  }, [map, pin.lat, pin.lng]);

  return createPortal(
    <article
      className="atlas-summary-card"
      style={{
        left: point.x,
        top: point.y,
      }}
      onClick={(event) => event.stopPropagation()}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <button type="button" onClick={onClose} className="atlas-summary-close">
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
          <h2 className="atlas-summary-title">{pin.hook}</h2>
        <p className="atlas-summary-lede">{pin.lede}</p>
        <Link href={pin.href} className="atlas-summary-open">
          {openLabel}
        </Link>
      </div>
    </article>,
    map.getContainer(),
  );
}

function pinIcon(active: boolean) {
  // Idle: gold circumpunct, static. Active: inline SVG + CSS breathe (SMIL in img does not play).
  const idle =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="9" stroke="#c9a44a" stroke-width="1.6"/><circle cx="16" cy="16" r="2.2" fill="#c9a44a"/></svg>';
  const lit =
    "<div class=\"sh-pin-active\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" aria-hidden=\"true\"><defs><radialGradient id=\"halo\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"#c2302a\" stop-opacity=\"0.5\"/><stop offset=\"55%\" stop-color=\"#c2302a\" stop-opacity=\"0.18\"/><stop offset=\"100%\" stop-color=\"#c2302a\" stop-opacity=\"0\"/></radialGradient></defs><circle cx=\"16\" cy=\"16\" r=\"13\" fill=\"url(#halo)\"/><circle cx=\"16\" cy=\"16\" r=\"2.2\" fill=\"#c2302a\"/><circle class=\"sh-pin-ring\" cx=\"16\" cy=\"16\" r=\"9\" fill=\"none\" stroke=\"#c2302a\" stroke-width=\"1.6\"/></svg></div>";
  return L.divIcon({
    className: "atlas-pin-icon",
    html: active ? lit : idle,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}


function PlacePin({
  pin,
  active,
  onClick,
}: {
  pin: AtlasPin;
  active: boolean;
  onClick: (id: string) => void;
}) {
  const map = useMap();
  const markerRef = useRef<L.Marker | null>(null);
  const onClickRef = useRef(onClick);
  onClickRef.current = onClick;

  useLayoutEffect(() => {
    const marker = L.marker([pin.lat, pin.lng], {
      icon: pinIcon(false),
      zIndexOffset: 0,
      keyboard: false,
    });
    marker.on("click", () => {
      onClickRef.current(pin.id);
    });
    marker.addTo(map);
    markerRef.current = marker;
    return () => {
      markerRef.current = null;
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    };
  }, [map, pin.id, pin.lat, pin.lng]);

  useLayoutEffect(() => {
    const marker = markerRef.current;
    if (!marker) {
      return;
    }
    marker.setIcon(pinIcon(active));
    marker.setZIndexOffset(active ? 1000 : 0);
  }, [active]);

  return null;
}

export function AtlasMap({
  pins,
  selectedId,
  openId,
  flashId,
  onPinClick,
  onClose,
  openLabel,
  closeLabel,
}: {
  pins: AtlasPin[];
  selectedId: string | null;
  openId: string | null;
  flashId: string | null;
  onPinClick: (id: string) => void;
  onClose: () => void;
  openLabel: string;
  closeLabel: string;
}) {
  const focused = pins.find((pin) => pin.id === selectedId) ?? null;
  const opened = pins.find((pin) => pin.id === openId) ?? null;

  return (
    <MapContainer
      center={[22, 18]}
      zoom={2}
      minZoom={2}
      className="atlas-map h-full w-full"
      scrollWheelZoom
      worldCopyJump
    >
      <TileLayer url={CARTO_DARK_URL} attribution={CARTO_ATTRIBUTION} />
      <AtlasMapEffects
        focusLat={focused ? focused.lat : null}
        focusLng={focused ? focused.lng : null}
      />
      {pins.map((pin) => (
        <PlacePin
          key={pin.id}
          pin={pin}
          active={pin.id === selectedId}
          onClick={onPinClick}
        />
      ))}
      {opened ? (
        <PinLaidCard
          pin={opened}
          openLabel={openLabel}
          closeLabel={closeLabel}
          onClose={onClose}
        />
      ) : null}
    </MapContainer>
  );
}
