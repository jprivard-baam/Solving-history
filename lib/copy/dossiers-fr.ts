import type { DossierId } from "@/lib/dossiers";
import type { DossierCopy } from "./types";
import type { FrResearchPayload } from "./fr-payload";
import { FR_JSON_TO_ATLAS } from "./fr-payload";
import baalbek from "./fr-json/baalbek-fr.json";
import aswan from "./fr-json/aswan-fr.json";
import sacsayhuaman from "./fr-json/sacsayhuaman-fr.json";
import pumapunku from "./fr-json/pumapunku-fr.json";
import gobekliTepe from "./fr-json/gobekli-tepe-fr.json";
import khufu from "./fr-json/khufu-fr.json";
import antikythera from "./fr-json/antikythera-fr.json";
import serapeumSaqqara from "./fr-json/serapeum-saqqara-fr.json";

const LAYER4 = "Pourquoi ça ne tient pas";

const payloads = {
  baalbek,
  aswan,
  sacsayhuaman,
  pumapunku,
  "gobekli-tepe": gobekliTepe,
  khufu,
  antikythera,
  "serapeum-saqqara": serapeumSaqqara,
} as Record<keyof typeof FR_JSON_TO_ATLAS, FrResearchPayload>;

function fromPayload(p: FrResearchPayload): DossierCopy {
  return {
    title: p.name,
    cardDate: p.yearLabel,
    place: p.place,
    lede: p.common,
    imageAlt: p.photo.alt,
    imageCaption: `${p.photo.credit} ${p.photo.licence}`,
    layers: [
      {
        title: "Fait",
        common: [p.fact],
        advanced: [p.object],
      },
      {
        title: "Accepté",
        common: [p.accepted],
        advanced: [p.evidence],
      },
      {
        title: "Technique",
        common: [p.technique],
        advanced: [p.advanced],
      },
      {
        title: LAYER4,
        common: [p.hearsay],
        advanced: p.open,
      },
    ],
    notes: [p.xLine],
    research: p,
  };
}

export const dossiersFr = Object.fromEntries(
  (Object.keys(FR_JSON_TO_ATLAS) as (keyof typeof FR_JSON_TO_ATLAS)[]).map(
    (jsonId) => {
      const atlasId = FR_JSON_TO_ATLAS[jsonId];
      return [atlasId, fromPayload(payloads[jsonId])];
    },
  ),
) as Record<DossierId, DossierCopy>;
