import type { UiCopy } from "./types";

export const uiEn: UiCopy = {
  meta: {
    title: "Solving History",
    description:
      "An unpublished atlas of open problems in ancient engineering. Measurements first. Not live.",
    notLive: "Not live. Not indexed.",
  },
  nav: {
    atlas: "Atlas",
    mission: "Mission",
    method: "Method",
    shop: "Boutique",
    help: "Help us",
  },
  language: {
    en: "EN",
    fr: "FR",
    switchTo: "Français",
  },
  atlas: {
    kicker: "Eight open files",
    title: "Atlas",
    intro:
      "A contradiction can not exist in reality. Not in part, nor in whole.",
    lede: "To find an inconsistency, choose from the list or a pin on the map.",
    openDossier: "Open dossier",
    closeCard: "Close",
    listLabel: "Dossier list",
    mapLabel: "World atlas of the eight dossiers",
  },
  mission: {
    kicker: "Why this atlas exists",
    title: "Mission",
    paragraphs: [
      "Solving History is an atlas of open problems in deep history and ancient engineering. It is not a channel, not a shop, and not a finished book. It is a working table: eight files, one method, two languages.",
      "The public conversation around these sites is loud and thin. Blocks become heavier with each retelling. Dates stretch to fit a thesis. A plaster sample is treated as if it were the monument. A unique survival is treated as if it had no workshop behind it.",
      "This project holds a narrower rule. If a mass is estimated from volume and density, the card says estimated. If a radiocarbon date sits on plaster, the card says plaster. If a popular range is wider than the paper, the paper wins. Folklore is not banned; it is taken off the pin.",
      "The atlas is bilingual because the questions are not national. English carries much of the technical literature. French is the other public language of the project. Neither version is a summary of the other.",
      "The site is not live. Robots are told noindex, nofollow. There is no storefront and no checkout. Help is three paths — share a mystery, bring data or a specialty, or help financially when that path can exist without turning the atlas into a cart.",
    ],
  },
  methodPage: {
    kicker: "How a dossier is read",
    title: "Method",
    intro: [
      "Every dossier on this atlas is cut the same way. Four layers, in order. A common register for the reader who wants the problem in clear language. An advanced register for the reader who wants the sample, the kilogram, and the citation.",
      "The layers are not a ladder toward a secret. They are a filter. What is on the ground. What the date actually dates. What mechanism carries the work with the fewest inventions. What still does not hold.",
    ],
    commonLabel: "Common",
    advancedLabel: "Advanced",
    layers: [
      {
        title: "Layer 1 — The record",
        body: "What is still there: the block, the quarry, the chest, the gear train, the wall. Dimensions that can be checked. Materials named by petrography, not by habit.",
      },
      {
        title: "Layer 2 — The date",
        body: "Inscriptions, typology, radiocarbon, texts. The card must say what was dated — a royal name, a plaster coat, a shipwreck horizon — and what was not.",
      },
      {
        title: "Layer 3 — The mechanism",
        body: "The least-astonishing account of how the work was done with the tools, labour, and logistics of the period the date actually supports.",
      },
      {
        title: "Layer 4 — Why it does not make sense",
        body: "The residue. Not a license to invent a lost civilization. A list of what the mechanism still fails to carry, and which popular claims fail first.",
      },
    ],
  },
  shop: {
    kicker: "Open, without a till",
    title: "Boutique",
    description:
      "The boutique is open. Nothing is for sale. No cart, no checkout.",
    intro: "This page is open. Nothing on it is for sale.",
    body: [
      "The boutique is a room in the atlas, not a cart. There is no inventory here, no price, no processor. The word stands in the navigation so that it is not a disguise for a checkout.",
      "When an object belongs on this page, it will be named here. It will not be sold through this page until a till exists. That till does not exist.",
      "Money, if it is to help the work, is not a product. It has a path on Help us. That path does not collect a payment either.",
    ],
    toHelp: "Help us",
  },
  help: {
    kicker: "Three paths, no till",
    title: "Help us",
    description:
      "Three ways to help an unpublished atlas. Share a file. Bring data or a specialty. Help financially — this path does not take a payment.",
    intro: "The atlas is unpublished. Help is not a purchase. Three paths are open. None of them takes a payment.",
    paths: [
      {
        id: "share",
        title: "Share",
        body: [
          "A site, a block, a crack, a photograph with a scale, a measurement taken on the ground. Not a finished theory. The file.",
          "Until this path carries an address, keep the notes: place, how the figure was obtained, and what remains estimated.",
        ],
      },
      {
        id: "data",
        title: "Data + specialty",
        body: [
          "Petrography, epigraphy, photogrammetry, geodesy, experimental archaeology, the languages of the primary sources. A specialty is useful when it can correct a card.",
          "The atlas would rather have one weighed density than another legend. If a field can tighten a mass, a date, or a misnamed stone, that is this path.",
        ],
      },
      {
        id: "finance",
        title: "Help financially",
        body: [
          "There is no checkout on this site. No cart, no processor, no product. The Boutique is a page without a till. This path is not a second shop.",
          "When financial help can exist without turning the atlas into a cart, it will be listed here as an address or a public statement — not as a SKU. Until then this path names an intention. It does not collect a payment.",
        ],
      },
    ],
  },
  dossier: {
    methodKicker: "Method on this file",
    common: "Common",
    advanced: "Advanced",
    sources: "Working notes",
    next: "Next dossier",
    backAtlas: "Back to the atlas",
  },
  pathsTitle: "Three paths",
  footer: {
    line: "Solving History — unpublished atlas. Eight dossiers. Not live.",
    robots: "robots: noindex, nofollow",
  },
};
