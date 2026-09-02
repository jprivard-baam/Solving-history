export type FrHelpRole = {
  role: string;
  ask: string;
};

export type FrSource = {
  cite: string;
  url: string | null;
};

export type FrPhoto = {
  file: string;
  alt: string;
  credit: string;
  licence: string;
};

export type FrQuarry = {
  name: string;
  lat: number;
  lng: number;
  coordSource: string;
};

/** Research payload schema for lib/copy/fr-json/*-fr.json */
export type FrResearchPayload = {
  id: string;
  order: number;
  name: string;
  place: string;
  yearLabel: string;
  yearSort: number;
  lat: number;
  lng: number;
  coordSource: string;
  quarry?: FrQuarry;
  chips: string[];
  photo: FrPhoto;
  common: string;
  advanced: string;
  accepted: string;
  fact: string;
  object: string;
  technique: string;
  evidence: string;
  hearsay: string;
  open: string[];
  help: FrHelpRole[];
  sources: FrSource[];
  xLine: string;
};

/** Atlas id ← JSON id. Unwired JSON stays on disk. */
export const FR_JSON_TO_ATLAS = {
  baalbek: "baalbek",
  aswan: "aswan-unfinished-obelisk",
  "gobekli-tepe": "gobekli-tepe",
  khufu: "khufu-great-pyramid",
  antikythera: "antikythera-mechanism",
  "serapeum-saqqara": "serapeum-saqqara",
  pumapunku: "pumapunku",
  sacsayhuaman: "sacsayhuaman",
} as const;

export type FrJsonId = keyof typeof FR_JSON_TO_ATLAS;
