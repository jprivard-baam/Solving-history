"use client";

import { useEffect } from "react";
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";
import { CARTO_ATTRIBUTION, CARTO_DARK_URL } from "@/lib/dossiers";

export type AtlasPin = {
  id: string;
  lat: number;
  lng: number;
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

export function AtlasMap({
  pins,
  selectedId,
  onPinClick,
}: {
  pins: AtlasPin[];
  selectedId: string | null;
  onPinClick: (id: string) => void;
}) {
  const focus = pins.find((pin) => pin.id === selectedId) ?? null;

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
      <AtlasMapEffects focus={focus} />
      {pins.map((pin) => {
        const selected = pin.id === selectedId;
        return (
          <CircleMarker
            key={pin.id}
            center={[pin.lat, pin.lng]}
            radius={selected ? 11 : 8}
            pathOptions={{
              color: selected ? "#eadcc4" : "#c9a44a",
              fillColor: "#c9a44a",
              fillOpacity: selected ? 1 : 0.92,
              weight: selected ? 2 : 1,
            }}
            eventHandlers={{
              click: () => {
                onPinClick(pin.id);
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
}
