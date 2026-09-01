"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/lib/i18n";

const AtlasMap = dynamic(
  () => import("@/components/AtlasMap").then((m) => m.AtlasMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(68vh,620px)] items-center justify-center bg-paper-2 text-sm text-muted">
        …
      </div>
    ),
  },
);

export function AtlasMapLoader(props: {
  locale: Locale;
  titles: Record<string, string>;
  openLabel: string;
}) {
  return <AtlasMap {...props} />;
}
