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
  baalbek: "Trois pierres géantes sont dans un mur romain. Personne ne les a jamais pesées. Elles sont encore en place.",
  "unfinished-obelisk-aswan": "On a commencé à tailler une immense aiguille de pierre dans la montagne. Une fissure est apparue, et on s’est arrêté. Elle est encore prise dans le roc.",
  sacsayhuaman: "Les murs zigzaguent. Ils sont taillés dans le calcaire de la colline, pas dans la pierre volcanique sombre d’une autre carrière.",
  pumapunku: "Ils ont taillé la pierre en forme de H. Ces blocs pèsent environ 600 kg. La plateforme a été faite vers 580–710.",
  "gobekli-tepe": "Des gens qui chassaient et cueillaient encore ont dressé d’immenses pierres en forme de T. L’âge qu’on donne au lieu vient du plâtre, pas des pierres en T.",
  "great-pyramid-khufu": "C’est le tombeau d’un roi. Ce qui étonne, c’est le granite dur posé très haut à l’intérieur — pas une histoire d’esclaves.",
  "antikythera-mechanism": "Une machine de bronze d’une trentaine de roues, trouvée dans une épave vers 60 AEC. On n’en a qu’un seul exemplaire.",
  "serapeum-saqqara": "Sous terre, vingt-quatre énormes caisses de pierre, vers 550, au temps d’Amasis.",
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
