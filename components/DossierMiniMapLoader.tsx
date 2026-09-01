"use client";

import dynamic from "next/dynamic";

const DossierMiniMap = dynamic(
  () => import("@/components/DossierMiniMap").then((m) => m.DossierMiniMap),
  {
    ssr: false,
    loading: () => <div className="h-56 bg-paper-2" />,
  },
);

export function DossierMiniMapLoader(props: {
  lat: number;
  lng: number;
  label: string;
}) {
  return <DossierMiniMap {...props} />;
}
