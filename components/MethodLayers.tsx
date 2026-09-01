"use client";

import { useState } from "react";
import type { DossierCopy } from "@/lib/copy/types";

const JSON_FIELD_KEYS = [
  "fact · object",
  "accepted · evidence",
  "technique · advanced",
  "hearsay · open",
] as const;

export function MethodLayers({
  dossier,
  commonLabel,
  advancedLabel,
  kicker,
  jsonFields = false,
}: {
  dossier: DossierCopy;
  commonLabel: string;
  advancedLabel: string;
  kicker: string;
  jsonFields?: boolean;
}) {
  const [register, setRegister] = useState<"common" | "advanced">("common");

  return (
    <section aria-labelledby="method-on-file" className="mt-14">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-dim">{kicker}</p>
      <div className="mt-3 flex gap-2" role="tablist" aria-label="Register">
        <button
          type="button"
          role="tab"
          aria-selected={register === "common"}
          onClick={() => setRegister("common")}
          className={`border px-3 py-1 text-xs uppercase tracking-[0.16em] ${
            register === "common"
              ? "border-gold bg-gold text-paper"
              : "border-rule text-muted hover:text-ink"
          }`}
        >
          {commonLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={register === "advanced"}
          onClick={() => setRegister("advanced")}
          className={`border px-3 py-1 text-xs uppercase tracking-[0.16em] ${
            register === "advanced"
              ? "border-gold bg-gold text-paper"
              : "border-rule text-muted hover:text-ink"
          }`}
        >
          {advancedLabel}
        </button>
      </div>
      <ol className="mt-8 space-y-8">
        {dossier.layers.map((layer, index) => (
          <li key={layer.title} className="border-l border-gold-dim pl-5">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold-dim">
              {index + 1} / 4
            </p>
            <h3 className="font-display mt-1 text-2xl text-gold">{layer.title}</h3>
            {jsonFields ? (
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-gold-dim">
                {JSON_FIELD_KEYS[index]}
              </p>
            ) : null}
            <div className="mt-3 space-y-3 text-[1.05rem] leading-relaxed text-ink/90">
              {(register === "common" ? layer.common : layer.advanced).map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
