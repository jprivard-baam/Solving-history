"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import { CARTO_ATTRIBUTION, CARTO_DARK_URL, dossiers } from "@/lib/dossiers";

export function AtlasMap({
  locale,
  titles,
  openLabel,
}: {
  locale: Locale;
  titles: Record<string, string>;
  openLabel: string;
}) {
  return (
    <MapContainer
      center={[22, 18]}
      zoom={2}
      minZoom={2}
      className="h-[min(68vh,620px)] w-full"
      scrollWheelZoom
      worldCopyJump
    >
      <TileLayer url={CARTO_DARK_URL} attribution={CARTO_ATTRIBUTION} />
      {dossiers.map((d) => (
        <CircleMarker
          key={d.id}
          center={[d.lat, d.lng]}
          radius={8}
          pathOptions={{
            color: "#c9a44a",
            fillColor: "#c9a44a",
            fillOpacity: 0.92,
            weight: 1,
          }}
        >
          <Popup>
            <strong>{titles[d.id]}</strong>
            <br />
            <a href={localizedHref(locale, `/dossier/${d.id}`)}>{openLabel}</a>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
