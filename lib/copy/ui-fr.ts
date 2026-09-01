import type { UiCopy } from "./types";

export const uiFr: UiCopy = {
  meta: {
    title: "Solving History",
    description:
      "Un atlas non publié de problèmes ouverts en ingénierie ancienne. Les mesures d’abord. Hors ligne.",
    notLive: "Hors ligne. Non indexé.",
  },
  nav: {
    atlas: "Atlas",
    mission: "Mission",
    method: "Méthode",
    help: "Aide",
  },
  language: {
    en: "EN",
    fr: "FR",
    switchTo: "English",
  },
  atlas: {
    kicker: "Huit dossiers ouverts",
    title: "Atlas",
    lede: "Une carte sombre de problèmes mesurés. Chaque pion est un dossier. Les masses jamais pesées restent marquées estimées. Les dates disent ce qu’elles datent vraiment.",
    openDossier: "Ouvrir le dossier",
    closeCard: "Fermer",
    listLabel: "Liste des dossiers",
    mapLabel: "Atlas mondial des huit dossiers",
  },
  mission: {
    kicker: "Pourquoi cet atlas",
    title: "Mission",
    paragraphs: [
      "Solving History est un atlas de problèmes ouverts en histoire profonde et en ingénierie ancienne. Ce n’est pas une chaîne, pas une boutique, pas un livre fermé. C’est une table de travail : huit dossiers, une méthode, deux langues.",
      "La conversation publique autour de ces sites est bruyante et mince. Les blocs s’alourdissent à chaque récit. Les dates s’étirent pour servir une thèse. Un échantillon d’enduit est traité comme s’il était le monument. Une pièce unique est traitée comme si aucun atelier ne l’avait précédée.",
      "Ce projet tient une règle plus étroite. Si une masse est estimée à partir d’un volume et d’une densité, la fiche dit estimée. Si une date radiocarbone porte sur un enduit, la fiche dit enduit. Si une fourchette populaire est plus large que l’article, l’article l’emporte. Le folklore n’est pas interdit ; il est retiré du pion.",
      "L’atlas est bilingue parce que les questions ne sont pas nationales. L’anglais porte une grande part de la littérature technique. Le français est l’autre langue publique du projet. Ni l’une ni l’autre n’est un résumé.",
      "Le site n’est pas en ligne. Les robots reçoivent noindex, nofollow. Il n’y a ni vitrine ni paiement. L’aide tient en trois chemins — partager un mystère, apporter des données ou une spécialité, ou aider financièrement lorsque ce chemin pourra exister sans transformer l’atlas en panier.",
    ],
  },
  methodPage: {
    kicker: "Comment un dossier se lit",
    title: "Méthode",
    intro: [
      "Chaque dossier de cet atlas est coupé de la même façon. Quatre couches, dans l’ordre. Un registre commun pour qui veut le problème en langue claire. Un registre avancé pour qui veut l’échantillon, le kilogramme et la citation.",
      "Les couches ne sont pas une échelle vers un secret. Elles sont un filtre. Ce qui est au sol. Ce que la date date vraiment. Quel mécanisme porte le travail avec le moins d’inventions. Ce qui ne tient toujours pas.",
    ],
    commonLabel: "Commun",
    advancedLabel: "Avancé",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        body: "Ce qui est encore là : le bloc, la carrière, le coffre, le train d’engrenages, le mur. Des dimensions vérifiables. Des matériaux nommés par la pétrographie, pas par l’habitude.",
      },
      {
        title: "Couche 2 — La date",
        body: "Inscriptions, typologie, radiocarbone, textes. La fiche doit dire ce qui a été daté — un nom royal, un enduit, l’horizon d’une épave — et ce qui ne l’a pas été.",
      },
      {
        title: "Couche 3 — Le mécanisme",
        body: "Le récit le moins étonnant de la façon dont le travail a été fait avec les outils, la main-d’œuvre et la logistique de la période que la date soutient vraiment.",
      },
      {
        title: "Couche 4 — Pourquoi ça ne tient pas",
        body: "Le résidu. Pas une licence pour inventer une civilisation perdue. Une liste de ce que le mécanisme n’arrive toujours pas à porter, et quelles affirmations populaires tombent d’abord.",
      },
    ],
  },
  help: {
    kicker: "Trois chemins, pas de boutique",
    title: "Aide",
    intro: "L’atlas n’est pas publié. L’aide n’est pas une boutique. Trois chemins sont ouverts comme intention. Aucun ne traite un paiement.",
    paths: [
      {
        id: "share",
        title: "Partager le mystère",
        body: [
          "Un site, un bloc, une fissure, une photographie avec une échelle, une mesure prise au sol. Pas une théorie finie. Le dossier.",
          "Quand la correspondance s’ouvrira, ce chemin portera une adresse. D’ici là, gardez les notes : lieu, datum, comment le chiffre a été obtenu, et ce qui reste estimé.",
        ],
      },
      {
        id: "data",
        title: "Données + spécialité",
        body: [
          "Pétrographie, épigraphie, photogrammétrie, géodésie, archéologie expérimentale, langues des sources premières. Une spécialité sert quand elle peut corriger une fiche.",
          "L’atlas préfère une densité pesée à une légende de plus. Si vous travaillez dans un champ qui peut resserrer une masse, une date ou une pierre mal nommée, c’est ce chemin.",
        ],
      },
      {
        id: "finance",
        title: "Aider financièrement",
        body: [
          "Il n’y a pas de paiement sur ce site. Pas de panier, pas de prestataire, pas de référence, pas de boutique. /shop est renvoyé ici exprès.",
          "L’aide financière, lorsqu’elle existera, sera indiquée ici comme une adresse ou une déclaration publique — pas comme un produit. D’ici là ce chemin est un occupant, pas un règlement.",
        ],
      },
    ],
  },
  dossier: {
    methodKicker: "Méthode sur ce dossier",
    common: "Commun",
    advanced: "Avancé",
    sources: "Notes de travail",
    next: "Dossier suivant",
    backAtlas: "Retour à l’atlas",
  },
  pathsTitle: "Trois chemins",
  footer: {
    line: "Solving History — atlas non publié. Huit dossiers. Pas de boutique.",
    robots: "robots : noindex, nofollow",
  },
};
