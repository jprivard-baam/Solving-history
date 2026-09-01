"use client";

import dynamic from "next/dynamic";
import type { AtlasPin } from "@/components/AtlasMap";

const AtlasMap = dynamic(
  () => import("@/components/AtlasMap").then((m) => m.AtlasMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[16rem] items-center justify-center bg-paper-2 text-sm text-muted">
        …
      </div>
    ),
  },
);

export function AtlasMapLoader(props: {
  pins: AtlasPin[];
  selectedId: string | null;
  onPinClick: (id: string) => void;
}) {
  return <AtlasMap {...props} />;
}
