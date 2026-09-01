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
    help: "Help",
  },
  language: {
    en: "EN",
    fr: "FR",
    switchTo: "Français",
  },
  atlas: {
    kicker: "Eight open files",
    title: "Atlas",
    lede: "A dark map of measured problems. Each pin is a dossier. Masses that were never weighed stay marked estimated. Dates say what they actually date.",
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
  help: {
    kicker: "Three paths, no storefront",
    title: "Help",
    intro: "The atlas is unpublished. Help is not a shop. Three paths are open as intention. None of them processes a payment.",
    paths: [
      {
        id: "share",
        title: "Share the mystery",
        body: [
          "A site, a block, a crack, a photograph with a scale, a measurement taken on the ground. Not a finished theory. The file.",
          "When correspondence opens, this path will carry an address. Until then, keep the notes: place, datum, how the number was obtained, and what remains estimated.",
        ],
      },
      {
        id: "data",
        title: "Data + specialty",
        body: [
          "Petrography, epigraphy, photogrammetry, geodesy, experimental archaeology, the languages of the primary sources. A specialty is useful when it can correct a card.",
          "The atlas would rather have one weighed density than another legend. If you work in a field that can tighten a mass, a date, or a misnamed stone, that is this path.",
        ],
      },
      {
        id: "finance",
        title: "Help financially",
        body: [
          "There is no checkout on this site. No cart, no processor, no SKU, no shop. /shop is sent to this page on purpose.",
          "Financial help, when it exists, will be listed here as an address or a public statement — not as a product. Until then this path is a placeholder, not a payment.",
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
    line: "Solving History — unpublished atlas. Eight dossiers. No shop.",
    robots: "robots: noindex, nofollow",
  },
};
