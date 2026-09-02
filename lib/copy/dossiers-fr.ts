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
import serapeumSaqqara from "./fr-json/serapeum-saqqara-fr.json";
import pumapunku from "./fr-json/pumapunku-fr.json";
import sacsayhuaman from "./fr-json/sacsayhuaman-fr.json";

const LAYER4 = "Pourquoi ça ne tient pas";

const CARD_HOOKS: Partial<Record<DossierId, string>> = {
  baalbek: "Trois blocs d’environ 800 t, encore dans le mur",
  "aswan-unfinished-obelisk": "41,75 m — encore dans le banc",
  "gobekli-tepe": "Le carbone date le plâtre, pas les piliers en T",
  "khufu-great-pyramid": "Biais −3,9′. Granite d’environ 50 t à 43 m",
  "antikythera-mechanism": "Trente engrenages. Un seul exemplaire",
  "serapeum-saqqara": "Vingt-quatre cuves, dès Amasis",
  pumapunku: "Blocs en H d’environ 600 kg",
  sacsayhuaman: "Calcaire. Des blocs d’environ 150 t",
};

const LIST_BLURB: Record<DossierId, string> = {
  baalbek: "Trois pierres dans le mur, chacune aussi lourde qu’une vingtaine de camions remplis. On nous dit que des grues de l’époque les ont mises là. Ces grues-là levaient à peu près un éléphant.",
  "us-01": "Une colline de terre haute comme un immeuble de sept étages, levée en quatre-vingt-dix jours. On nous dit que ça a pris cinq siècles.",
  "us-06": "Une colline de terre haute comme un immeuble de dix étages, faite en moins de vingt ans. On nous dit quatorze étages, pendant des siècles.",
  "gobekli-tepe": "Des pierres en T hautes comme une girafe, dressées par des gens qui chassaient encore. On nous dit : d’abord les champs, ensuite les monuments.",
  "us-07": "Onze collines de terre en rond, faites par des chasseurs. On nous dit que les grandes collines viennent après les champs.",
  "antikythera-mechanism": "Une machine de bronze avec une trentaine de roues, comme une horloge, sortie de la mer. On n’en a qu’une. On nous dit que les Grecs avaient les idées, pas les machines.",
  "khufu-great-pyramid": "Du granite aussi lourd qu’un camion, hissé à la hauteur d’un immeuble de quatorze étages. On nous raconte des esclaves avec des cailloux.",
  "aswan-unfinished-obelisk": "Une aiguille de pierre longue comme un immeuble de treize étages, encore collée à la montagne. On nous dit le plus grand obélisque du monde. Elle ne s’est jamais levée.",
  "serapeum-saqqara": "Vingt-quatre caisses de pierre sous terre, chacune aussi lourde qu’un camion. On nous dit une époque bien plus vieille. Elles datent d’environ cinq cent cinquante.",
  pumapunku: "Des blocs en H, chacun à peu près le poids d’un piano. On nous dit des centaines de tonnes, et quinze mille ans.",
  kalasasaya: "Une porte d’une seule pierre, aussi lourde que deux éléphants. On nous dit quinze mille ans. La cour qu’on voit a été remontée il n’y a pas si longtemps.",
  sacsayhuaman: "Des murs qui zigzaguent, des pierres aussi lourdes que trois ou quatre camions. On nous dit de la pierre volcanique amenée de très loin. C’est la colline elle-même.",
  stonehenge: "Un rond de pierres emboîtées comme du bois. Une pierre au sol a voyagé environ sept cents kilomètres. On nous dit des druides, et des pierres du coin.",
  "us-02": "Deux cent mille arbres portés à pied jusqu’à un canyon sec. Ça ne pousse pas ici. On nous dit des poutres impossibles : une poutre sèche pèse comme une ou deux personnes.",
  "igbo-ukwu": "Des insectes en bronze, coulés un par un, qui brillent encore. On nous dit que ce savoir-là commence plus tard, dans d’autres royaumes.",
  "tichitt-walata": "Une ville de pierre sur la falaise, des centaines de maisons. On nous dit les caravanes du Moyen Âge. Elle était déjà là deux mille ans avant.",
  "jerwan-aqueduct": "Une route de pierre pour l’eau, presque trois terrains de foot de long, posée sur des arches. On nous dit que les Romains ont inventé ça. C’était déjà debout cinq siècles trop tôt.",
  "aguada-fenix": "Une table de terre plus longue que quatorze terrains de foot. Pas de pyramide de roi. On nous dit : d’abord les villages, ensuite les rois.",
  "us-08": "Des collines de terre ici, un siècle avant celles qu’on met dans les livres. On nous dit que c’est une copie. C’est l’inverse.",
  "nabta-playa": "Un rond de pierres plus petit qu’une chambre, dans le désert. On nous dit le plus vieil observatoire du monde. Il est trop petit pour viser le ciel.",
  "ca-07": "Une colline de terre pour quelqu’un de jeune, déposé avec soin dans une caisse de pierre. Plus de sept mille ans. On nous dit que les monuments commencent beaucoup plus tard.",
  "ca-12": "Un village de bois sur une île : dix maisons, trente-deux poteaux encore debout dans le vent. On pense que le bois disparaît. Ils sont encore là."
}

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
  "serapeum-saqqara": serapeumSaqqara,
  pumapunku,
  sacsayhuaman,
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
  | "serapeum-saqqara"
  | "pumapunku"
  | "sacsayhuaman"
>;

const newFr = {
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
  kalasasaya: {
    title: 'Tiwanaku',
    listBlurb: LIST_BLURB['kalasasaya'],
    cardHook: 'Tiwanaku',
    cardDate: 'Tiwanaku',
    place: 'Tiwanaku, Bolivie',
    lede: LIST_BLURB['kalasasaya'],
    imageAlt: 'La Puerta del Sol dans la cour du Kalasasaya, Tiwanaku',
    imageCaption: 'Kalasasaya / Puerta del Sol, Tiwanaku. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Toute une porte taillée dans une seule pierre. Elle se tient dans une grande cour de pierres hautes.'],
        advanced: ['Coordonnées UNESCO : −16.555, −68.673. Un pion : la porte et la cour ensemble.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Toute une porte taillée dans une seule pierre. Elle se tient dans une grande cour de pierres hautes.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin UNESCO : −16.555, −68.673.', 'Photo : Wikimedia Commons.'],
  },
  stonehenge: {
    title: 'Stonehenge',
    listBlurb: LIST_BLURB['stonehenge'],
    cardHook: 'Stonehenge',
    cardDate: 'Néolithique',
    place: 'Wiltshire, Angleterre',
    lede: LIST_BLURB['stonehenge'],
    imageAlt: 'L’anneau de sarsen à Stonehenge',
    imageCaption: 'Stonehenge. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Des pierres géantes se tiennent en rond, emboîtées comme du bois. Une pierre couchée vient de très loin au nord — bien plus loin que les autres.'],
        advanced: ['Coordonnées UNESCO : 51.179, −1.825. Un pion : l’anneau et la pierre couchée du nord.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Des pierres géantes se tiennent en rond, emboîtées comme du bois. Une pierre couchée vient de très loin au nord — bien plus loin que les autres.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin UNESCO : 51.179, −1.825.', 'Photo : Wikimedia Commons.'],
  },
  "us-02": {
    title: 'Chaco',
    listBlurb: LIST_BLURB['us-02'],
    cardHook: 'Chaco',
    cardDate: 'Ancestral Pueblo',
    place: 'Chaco, Nouveau-Mexique',
    lede: LIST_BLURB['us-02'],
    imageAlt: 'Pueblo Bonito, Chaco Canyon, Nouveau-Mexique',
    imageCaption: 'Pueblo Bonito, Chaco. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Une ville de pierre dans un canyon sec. Les poutres du toit sont des arbres qui n’y poussent pas — on les a portés depuis des montagnes lointaines.'],
        advanced: ['OSM Pueblo Bonito : 36.06066, −107.96160.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Une ville de pierre dans un canyon sec. Les poutres du toit sont des arbres qui n’y poussent pas — on les a portés depuis des montagnes lointaines.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin OSM Pueblo Bonito : 36.06066, −107.96160.', 'Photo : Wikimedia Commons.'],
  },
  "igbo-ukwu": {
    title: 'Igbo-Ukwu',
    listBlurb: LIST_BLURB['igbo-ukwu'],
    cardHook: 'Igbo-Ukwu',
    cardDate: 'Igbo-Ukwu',
    place: 'Igbo-Ukwu, Nigeria',
    lede: LIST_BLURB['igbo-ukwu'],
    imageAlt: 'Bronze coulé d’Igbo-Ukwu',
    imageCaption: 'Bronze d’Igbo-Ukwu. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Ils ont coulé du bronze en forme de tout petits insectes, un par un. Le métal brille encore.'],
        advanced: ['Coordonnées : 6.017, 7.017.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Ils ont coulé du bronze en forme de tout petits insectes, un par un. Le métal brille encore.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin : 6.017, 7.017.', 'Photo : Wikimedia Commons.'],
  },
  "tichitt-walata": {
    title: 'Tichitt–Oualata',
    listBlurb: LIST_BLURB['tichitt-walata'],
    cardHook: 'Tichitt–Oualata',
    cardDate: 'Tichitt',
    place: 'Tichitt, Mauritanie',
    lede: LIST_BLURB['tichitt-walata'],
    imageAlt: 'Village de pierre sèche du Dhar Tichitt–Oualata',
    imageCaption: 'Dhar Tichitt–Oualata. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Une ville de pierre sur la falaise, des centaines de pièces. Elle était déjà là, longtemps avant les caravanes du désert.'],
        advanced: ['Wikipedia / UNESCO 750 : 18.44167, −9.49167.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Une ville de pierre sur la falaise, des centaines de pièces. Elle était déjà là, longtemps avant les caravanes du désert.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin Wikipedia Tichitt UNESCO 750 : 18.44167, −9.49167.', 'Photo : Wikimedia Commons.'],
  },
  "jerwan-aqueduct": {
    title: 'Jerwan',
    listBlurb: LIST_BLURB['jerwan-aqueduct'],
    cardHook: 'Jerwan',
    cardDate: 'Jerwan',
    place: 'Jerwan, Irak',
    lede: LIST_BLURB['jerwan-aqueduct'],
    imageAlt: 'L’aqueduc de pierre à Jerwan',
    imageCaption: 'Aqueduc de Jerwan. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Une longue route de pierre rien que pour l’eau, posée sur des arches. Les gens passaient en dessous. L’eau passait au-dessus.'],
        advanced: ['Coordonnées : 36.66972, 43.39361.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Une longue route de pierre rien que pour l’eau, posée sur des arches. Les gens passaient en dessous. L’eau passait au-dessus.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin : 36.66972, 43.39361.', 'Photo : Wikimedia Commons.'],
  },
  "aguada-fenix": {
    title: 'Aguada Fénix',
    listBlurb: LIST_BLURB['aguada-fenix'],
    cardHook: 'Aguada Fénix',
    cardDate: 'Aguada Fénix',
    place: 'Tabasco, Mexique',
    lede: LIST_BLURB['aguada-fenix'],
    imageAlt: 'La plateforme de terre d’Aguada Fénix, Tabasco',
    imageCaption: 'Aguada Fénix. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Ils ont bâti une immense plateforme de terre, plus longue qu’une ville. Pas de pyramide de roi dessus. Juste la plateforme.'],
        advanced: ['Coordonnées : 17.800, −91.150.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Ils ont bâti une immense plateforme de terre, plus longue qu’une ville. Pas de pyramide de roi dessus. Juste la plateforme.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin : 17.800, −91.150.', 'Photo : Wikimedia Commons.'],
  },
  "us-08": {
    title: 'Jaketown',
    listBlurb: LIST_BLURB['us-08'],
    cardHook: 'Jaketown',
    cardDate: 'Jaketown',
    place: 'Jaketown, Mississippi',
    lede: LIST_BLURB['us-08'],
    imageAlt: 'Le site de Jaketown, Mississippi',
    imageCaption: 'Jaketown. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Ils ont entassé des collines de terre ici d’abord. Plus tard, plus loin, ils en ont fait de plus grandes.'],
        advanced: ['Coordonnées : 33.237095, −90.487026.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Ils ont entassé des collines de terre ici d’abord. Plus tard, plus loin, ils en ont fait de plus grandes.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin : 33.237095, −90.487026.', 'Photo : Wikimedia Commons.'],
  },
  "nabta-playa": {
    title: 'Nabta Playa',
    listBlurb: LIST_BLURB['nabta-playa'],
    cardHook: 'Nabta Playa',
    cardDate: 'Nabta Playa',
    place: 'Nabta Playa, Égypte',
    lede: LIST_BLURB['nabta-playa'],
    imageAlt: 'Cercle de pierre reconstitué de Nabta Playa',
    imageCaption: 'Cercle de Nabta Playa (reconstitution à Assouan). Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Un rond de pierres dans le désert, plus petit qu’une pièce. Ce n’est pas une grande machine du ciel. C’est un petit cercle.'],
        advanced: ['Coordonnées : 22.507967, 30.725600.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Un rond de pierres dans le désert, plus petit qu’une pièce. Ce n’est pas une grande machine du ciel. C’est un petit cercle.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin : 22.507967, 30.725600.', 'Photo : Wikimedia Commons.'],
  },
  "ca-07": {
    title: 'L’Anse Amour',
    listBlurb: LIST_BLURB['ca-07'],
    cardHook: 'L’Anse Amour',
    cardDate: 'Archaïque',
    place: 'Labrador, Canada',
    lede: LIST_BLURB['ca-07'],
    imageAlt: 'Tertre funéraire de L’Anse Amour, Labrador',
    imageCaption: 'L’Anse Amour. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Ils ont fait une petite colline de terre pour quelqu’un de jeune, et l’ont déposé avec soin dans une caisse de pierre. C’est la plus ancienne tombe de ce genre que l’on connaisse au nord.'],
        advanced: ['Coordonnées NHS : 51.480403, −56.868388.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Ils ont fait une petite colline de terre pour quelqu’un de jeune, et l’ont déposé avec soin dans une caisse de pierre. C’est la plus ancienne tombe de ce genre que l’on connaisse au nord.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin NHS : 51.480403, −56.868388.', 'Photo : Wikimedia Commons.'],
  },
  "ca-12": {
    title: 'SG̱ang Gwaay',
    listBlurb: LIST_BLURB['ca-12'],
    cardHook: 'SG̱ang Gwaay',
    cardDate: 'Haida',
    place: 'Haida Gwaii, Canada',
    lede: LIST_BLURB['ca-12'],
    imageAlt: 'Poteaux encore debout à SG̱ang Gwaay',
    imageCaption: 'SG̱ang Gwaay. Wikimedia Commons.',
    layers: [
      {
        title: LAYER_TITLES[0],
        common: ['Un village de bois sur une île. Dix maisons, et trente-deux grands poteaux — encore debout dans le vent.'],
        advanced: ['Coordonnées BCGN : 52.09889, −131.21667.'],
      },
      {
        title: LAYER_TITLES[1],
        common: ["La fiche retient la période publiée. Elle n’invente pas une autre date de pose."],
        advanced: ["Le dossier ne serre pas l’année au-delà du fichier publié."],
      },
      {
        title: LAYER_TITLES[2],
        common: ['Un village de bois sur une île. Dix maisons, et trente-deux grands poteaux — encore debout dans le vent.'],
        advanced: ["Le récit le moins étonnant reste au sol : ce qui a été bâti, et ce qui ne l’a pas été."],
      },
      {
        title: LAYER_TITLES[3],
        common: ["Le résidu est ce que le relevé de liste tient déjà. Cette fiche n’invente pas de masse."],
        advanced: ["Fiche d’attente. La couche 4 garde le titre verrouillé. Pas d’accroche de pion inventée."],
      },
    ],
    notes: ['Pin BCGN : 52.09889, −131.21667.', 'Photo : Wikimedia Commons.'],
  },
};

export const dossiersFr = {
  ...remappedFr,
  ...newFr,
} as Record<DossierId, DossierCopy>;
