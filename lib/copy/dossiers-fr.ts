import type { DossierId } from "@/lib/dossiers";
import type { DossierCopy } from "./types";
import type { FrResearchPayload } from "./fr-payload";
import { FR_JSON_TO_ATLAS } from "./fr-payload";
import { uiFr } from "./ui-fr";
import baalbek from "./fr-json/baalbek-fr.json";
import aswan from "./fr-json/aswan-fr.json";
import gobekliTepe from "./fr-json/gobekli-tepe-fr.json";
import khufu from "./fr-json/khufu-fr.json";
import antikythera from "./fr-json/antikythera-fr.json";

const LAYER4 = "Pourquoi ça ne tient pas";

const CARD_HOOKS: Partial<Record<DossierId, string>> = {
  baalbek: "Trois blocs d’environ 800 t, encore dans le mur",
  "aswan-unfinished-obelisk": "41,75 m — encore dans le banc",
  "gobekli-tepe": "Le carbone date le plâtre, pas les piliers en T",
  "khufu-great-pyramid": "Biais −3,9′. Granite d’environ 50 t à 43 m",
  "antikythera-mechanism": "Trente engrenages. Un seul exemplaire",
};

const LIST_BLURB: Record<DossierId, string> = {
  baalbek:
    "Trois pierres si grandes qu’elles font le mur. Dans la carrière, deux autres n’ont jamais fait un mur : l’une encore dans la montagne, l’autre fendue et laissée.",
  "us-01":
    "Ils ont entassé une immense colline de terre en quatre-vingt-dix jours. Au-dedans, la terre n’est même pas devenue du sol.",
  "us-06":
    "Une colline de terre grande comme un château. Ils l’ont faite en deux grands élans, en moins de vingt ans.",
  "gobekli-tepe":
    "Avant même de planter un champ, des gens ont dressé d’immenses pierres en forme de T. Ils chassaient encore leur nourriture.",
  "us-07":
    "Onze collines de terre en rond. Ceux qui les ont faites chassaient encore leur nourriture. Pas encore de fermes.",
  "antikythera-mechanism":
    "De la mer, une machine de bronze d’une trentaine de petites roues, comme l’intérieur d’une horloge. On n’en a qu’une seule.",
  "khufu-great-pyramid":
    "Un tombeau grand comme une montagne de pierre. Dedans, ils ont posé du granite, très haut.",
  "aswan-unfinished-obelisk":
    "Ils ont taillé une immense aiguille de pierre, puis l’ont laissée dans la montagne. Elle s’est fendue. Elle est encore prise dans le roc.",
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
  "gobekli-tepe": gobekliTepe,
  khufu,
  antikythera,
} as Record<keyof typeof FR_JSON_TO_ATLAS, FrResearchPayload>;

function fromPayload(p: FrResearchPayload, atlasId: DossierId): DossierCopy {
  return {
    title: p.name,
    listBlurb: LIST_BLURB[atlasId],
    cardHook: CARD_HOOKS[atlasId] ?? p.name,
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

const remappedFr = Object.fromEntries(
  (Object.keys(FR_JSON_TO_ATLAS) as (keyof typeof FR_JSON_TO_ATLAS)[]).map(
    (jsonId) => {
      const atlasId = FR_JSON_TO_ATLAS[jsonId];
      return [atlasId, fromPayload(payloads[jsonId], atlasId)];
    },
  ),
) as Pick<
  Record<DossierId, DossierCopy>,
  | "baalbek"
  | "aswan-unfinished-obelisk"
  | "gobekli-tepe"
  | "khufu-great-pyramid"
  | "antikythera-mechanism"
>;

const newFr: Record<"us-01" | "us-06" | "us-07", DossierCopy> = {
  "us-01": {
    title: "Poverty Point",
    listBlurb: LIST_BLURB["us-01"],
    cardHook: "Poverty Point",
    cardDate: "Archaïque récent",
    place: "Poverty Point, Louisiane",
    lede: "Des tertres monumentaux en Louisiane. Le noyau des tertres, dont Mound A, est le fichier UNESCO / World Heritage Explorer — pas le centroïde du parc OSM.",
    imageAlt: "Mound A, earthworks de Poverty Point, Louisiane",
    imageCaption: "Mound A, Poverty Point. Wikimedia Commons.",
    layers: [
      {
        title: LAYER_TITLES[0],
        common: [
          "Une immense colline de terre — Mound A — se dresse encore parmi les earthworks de Poverty Point.",
        ],
        advanced: [
          "Coordonnées du noyau des tertres : 32.63694, −91.40639 (UNESCO / World Heritage Explorer).",
        ],
      },
      {
        title: LAYER_TITLES[1],
        common: [
          "Paysage civic-cérémoniel de l’Archaïque récent. UNESCO inscrit le site comme Monumental Earthworks of Poverty Point.",
        ],
        advanced: [
          "La fiche retient la période UNESCO. Elle n’invente pas une autre date de pose.",
        ],
      },
      {
        title: LAYER_TITLES[2],
        common: [
          "Construction en terre. Le relevé de liste : entassée en quatre-vingt-dix jours ; au-dedans, la terre n’est même pas devenue du sol.",
        ],
        advanced: [
          "Le mécanisme le moins étonnant est un chantier de tertre en terre rapportée, pas une butte naturelle.",
        ],
      },
      {
        title: LAYER_TITLES[3],
        common: [
          "Une colline de cette ampleur, levée vite, dont le cœur n’est pas devenu un sol, est le résidu.",
        ],
        advanced: [
          "Cette fiche n’invente pas de masse. Le résidu est le rythme et la matière, tels que le relevé les tient.",
        ],
      },
    ],
    notes: [
      "Pin UNESCO / World Heritage Explorer : 32.63694, −91.40639.",
      "Photo : Mound A, Wikimedia Commons.",
    ],
  },
  "us-06": {
    title: "Cahokia",
    listBlurb: LIST_BLURB["us-06"],
    cardHook: "Cahokia",
    cardDate: "Mississippien",
    place: "Cahokia, Illinois",
    lede: "Monks Mound, la grande colline de terre de Cahokia. Coordonnées : table UNESCO WHC 198.",
    imageAlt: "Monks Mound à Cahokia, Illinois",
    imageCaption: "Monks Mound, Cahokia. Wikimedia Commons.",
    layers: [
      {
        title: LAYER_TITLES[0],
        common: [
          "Une colline de terre grande comme un château : Monks Mound, encore sur le site de Cahokia.",
        ],
        advanced: [
          "Coordonnées de la table UNESCO WHC 198 : 38.659, −90.061.",
        ],
      },
      {
        title: LAYER_TITLES[1],
        common: [
          "Centre mississippien. La fiche UNESCO WHC 198 porte le bien.",
        ],
        advanced: [
          "La période retenue est mississippienne. Cette fiche n’invente pas une autre dynastie.",
        ],
      },
      {
        title: LAYER_TITLES[2],
        common: [
          "Terre rapportée, en étapes. Le relevé de liste : deux grands élans, en moins de vingt ans.",
        ],
        advanced: [
          "Le récit le moins étonnant est un chantier de tertre mississippien, pas une butte naturelle.",
        ],
      },
      {
        title: LAYER_TITLES[3],
        common: [
          "Une colline de cette taille, faite vite, en deux poussées, est le résidu.",
        ],
        advanced: [
          "Cette fiche n’invente pas de masse. Le résidu est l’ampleur et le rythme du chantier.",
        ],
      },
    ],
    notes: [
      "Pin UNESCO WHC 198 : 38.659, −90.061.",
      "Photo : Monks Mound, Wikimedia Commons.",
    ],
  },
  "us-07": {
    title: "Watson Brake",
    listBlurb: LIST_BLURB["us-07"],
    cardHook: "Watson Brake",
    cardDate: "Archaïque moyen",
    place: "Watson Brake, Louisiane",
    lede: "Onze collines de terre en rond, Ouachita Parish, Louisiane. Ceux qui les ont faites chassaient encore. Pas encore de fermes.",
    imageAlt: "Reconstruction des tertres de Watson Brake, Louisiane",
    imageCaption:
      "Watson Brake, vue des tertres (illustration Commons ; le site n’a pas de photo de terrain libre).",
    layers: [
      {
        title: LAYER_TITLES[0],
        common: [
          "Onze tertres de terre disposés en ovale / en rond, encore lus sur le site de Watson Brake.",
        ],
        advanced: [
          "Coordonnées Wikipedia / Wikidata : 32°22′6.31″N 92°7′53.00″W = 32.36842, −92.13139 — pas le marais GNIS.",
        ],
      },
      {
        title: LAYER_TITLES[1],
        common: [
          "Archaïque moyen. Plus ancien que les grands centres agricoles à tertres plus tardifs.",
        ],
        advanced: [
          "Le dossier retient la période archaïque moyenne du fichier publié. Il n’invente pas une date de pose plus serrée.",
        ],
      },
      {
        title: LAYER_TITLES[2],
        common: [
          "Levant de terre par des gens qui chassaient encore leur nourriture. Pas encore de fermes.",
        ],
        advanced: [
          "Le récit le moins étonnant est un complexe de tertres de chasseurs-cueilleurs, pas un centre agricole.",
        ],
      },
      {
        title: LAYER_TITLES[3],
        common: [
          "Onze collines en rond avant les fermes : c’est le résidu.",
        ],
        advanced: [
          "Cette fiche n’invente pas de hauteur ni de masse. Le résidu est l’ordre et le moment : un anneau avant l’agriculture.",
        ],
      },
    ],
    notes: [
      "Pin Wikipedia / Wikidata : 32.36842, −92.13139.",
      "Photo : illustration Commons des tertres (pas de photo de terrain libre sur Commons).",
    ],
  },
};

export const dossiersFr = {
  ...remappedFr,
  ...newFr,
} as Record<DossierId, DossierCopy>;
