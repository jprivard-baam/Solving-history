"use client";

import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import { CARTO_ATTRIBUTION, CARTO_DARK_URL } from "@/lib/dossiers";

export function DossierMiniMap({
  lat,
  lng,
  label,
}: {
  lat: number;
  lng: number;
  label: string;
}) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={6}
      className="h-56 w-full"
      scrollWheelZoom={false}
      aria-label={label}
    >
      <TileLayer url={CARTO_DARK_URL} attribution={CARTO_ATTRIBUTION} />
      <CircleMarker
        center={[lat, lng]}
        radius={10}
        pathOptions={{
          color: "#c9a44a",
          fillColor: "#c9a44a",
          fillOpacity: 0.95,
          weight: 1,
        }}
      />
    </MapContainer>
  );
}
