import type { DossierId } from "@/lib/dossiers";
import type { DossierCopy } from "./types";
import type { FrResearchPayload } from "./fr-payload";
import { FR_JSON_TO_ATLAS } from "./fr-payload";
import { uiFr } from "./ui-fr";
import baalbek from "./fr-json/baalbek-fr.json";
import aswan from "./fr-json/aswan-fr.json";
import sacsayhuaman from "./fr-json/sacsayhuaman-fr.json";
import pumapunku from "./fr-json/pumapunku-fr.json";
import gobekliTepe from "./fr-json/gobekli-tepe-fr.json";
import khufu from "./fr-json/khufu-fr.json";
import antikythera from "./fr-json/antikythera-fr.json";
import serapeumSaqqara from "./fr-json/serapeum-saqqara-fr.json";

const LAYER4 = "Pourquoi ça ne tient pas";
const CARD_HOOKS: Record<DossierId, string> = {
  baalbek: "Trois blocs d’environ 800 t, encore dans le mur",
  "unfinished-obelisk-aswan": "41,75 m — encore dans le banc",
  sacsayhuaman: "Calcaire. Des blocs d’environ 150 t",
  pumapunku: "Blocs en H d’environ 600 kg",
  "gobekli-tepe": "Le carbone date le plâtre, pas les piliers en T",
  "great-pyramid-khufu": "Biais −3,9′. Granite d’environ 50 t à 43 m",
  "antikythera-mechanism": "Trente engrenages. Un seul exemplaire",
  "serapeum-saqqara": "Vingt-quatre cuves, dès Amasis",
};
const LIST_BLURB: Record<DossierId, string> = {
  baalbek: "Trois pierres si grandes qu’elles font le mur. Elles sont encore là, l’une à côté de l’autre.",
  "unfinished-obelisk-aswan": "Ils ont taillé une immense aiguille de pierre, puis l’ont laissée dans la montagne. Elle s’est fendue. Elle est encore prise dans le roc.",
  sacsayhuaman: "Le mur ne va pas droit — il zigzague. D’énormes pierres se penchent l’une contre l’autre et tiennent, sans rien au milieu.",
  pumapunku: "Ils ont taillé la pierre en forme de H. On dirait que les morceaux doivent s’emboîter.",
  "gobekli-tepe": "Avant même de planter un champ, des gens ont dressé d’immenses pierres en forme de T. Ils chassaient encore leur nourriture.",
  "great-pyramid-khufu": "Un tombeau grand comme une montagne de pierre. Dedans, ils ont posé du granite, très haut.",
  "antikythera-mechanism": "De la mer, une machine de bronze d’une trentaine de petites roues, comme l’intérieur d’une horloge. On n’en a qu’une seule.",
  "serapeum-saqqara": "Sous terre, un long couloir sombre. Dedans, vingt-quatre énormes caisses de pierre, posées dans le noir.",
};

const LAYER_TITLES = [
  uiFr.methodPage.layers[0].title,
  uiFr.methodPage.layers[1].title,
  uiFr.methodPage.layers[2].title,
  LAYER4,
] as const;

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

function fromPayload(p: FrResearchPayload, atlasId: DossierId): DossierCopy {
  return {
    title: p.name,
    listBlurb: LIST_BLURB[atlasId],
    cardHook: CARD_HOOKS[atlasId],
    cardDate: p.yearLabel,
    place: p.place,
    lede: p.common,
    imageAlt: p.photo.alt,
    imageCaption: `${p.photo.credit} ${p.photo.licence}`,
    layers: [
      {
        title: LAYER_TITLES[0],
        common: [p.fact],
        advanced: [p.object],
      },
      {
        title: LAYER_TITLES[1],
        common: [p.accepted],
        advanced: [p.evidence],
      },
      {
        title: LAYER_TITLES[2],
        common: [p.technique],
        advanced: [p.advanced],
      },
      {
        title: LAYER_TITLES[3],
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
      return [atlasId, fromPayload(payloads[jsonId], atlasId)];
    },
  ),
) as Record<DossierId, DossierCopy>;
