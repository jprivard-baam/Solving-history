import type { UiCopy } from "./types";

export const uiFr: UiCopy = {
  meta: {
    title: "Solving History",
    description:
      "Un atlas non publié de problèmes ouverts en histoire profonde et en ingénierie ancienne. Une table de travail, pas une chaîne. Hors ligne.",
    notLive: "Hors ligne. Non indexé.",
  },
  nav: {
    atlas: "Atlas",
    mission: "Mission",
    method: "Méthode",
    shop: "Boutique",
    help: "Aidez-nous",
  },
  language: {
    en: "EN",
    fr: "FR",
    switchTo: "English",
  },
  atlas: {
    kicker: "Vingt-deux dossiers ouverts",
    title: "Atlas",
    intro:
      "Une contradiction ne peut pas exister dans la réalité. Ni en partie, ni en entier.",
    lede: "Pour découvrir une incohérence, choisir dans la liste ou un pion sur la carte.",
    openDossier: "Ouvrir le dossier",
    closeCard: "Fermer",
    listLabel: "Liste des dossiers",
    mapLabel: "Atlas des dossiers ouverts",
  },
  mission: {
    kicker: "Pourquoi cet atlas",
    title: "Mission",
    paragraphs: [
      "Sur le sol, il reste des ouvrages qu’aucune culture vivante n’explique vraiment : pierre géante taillée, structures alignées, objets de précision laboratoire, monuments trop mathématiquement exacts pour être le fruit du hasard. Pour certains, des réalisations tellement impressionnantes qu’on ne pourrait pas les répliquer aujourd’hui.",
      "Des gens ont bâti, mesuré, organisé. Ils ne sont plus là. Ce qui reste, c’est la trace d’un monde humain qui s’est élevé, a bâti quelque chose de plus grand que lui-même, puis s’est éteint.",
      "Un monument inexpliqué réduit à une carte postale, c’est une deuxième mort pour la société qui l’a laissé.",
      "Une part de ce qu’ils ont laissé peut être un message déposé exprès, une archive technique ou un avertissement.",
      "Le but n’est pas un nouveau dogme. C’est d’y voir plus clair : qui était là, ce qu’ils savaient faire, comment un monde en pleine force peut finir.",
      "Bref, résoudre les mystères de notre histoire."
    ],
  },
  methodPage: {
    kicker: "Comment un dossier se lit",
    title: "Méthode",
    intro: [
      "Chaque dossier de cet atlas est coupé de la même façon. Quatre couches, dans l’ordre. Un registre commun pour qui veut le problème en langue claire. Un registre avancé pour qui veut l’échantillon, le kilogramme et la citation.",
      "Les couches ne sont pas une échelle vers un secret. Elles sont un filtre. Ce qui est au sol. Ce que la date date vraiment. Quel mécanisme porte le travail avec le moins d’inventions. Ce qui ne tient toujours pas.",
      "La méthode est la règle plus étroite de la Mission, appliquée à un dossier. Estimée reste estimée. Une date dit ce qu’elle date. Le folklore n’est pas interdit ; il est retiré du pion.",
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
  shop: {
    kicker: "Une salle, pas un panier",
    title: "Boutique",
    description: "Une salle de l’atlas, pas un panier. Rien n’est à vendre. Pas de caisse.",
    intro: "Cette page est ouverte. Rien n’y est à vendre.",
    body: [
      "Solving History est une table de travail. Les dossiers de l’atlas sont des problèmes ouverts, pas de la marchandise. Cette salle existe pour que le mot dans la navigation ne soit pas un déguisement, et pour qu’une caisse n’ait nulle part où se cacher.",
      "Il n’y a ici ni inventaire, ni prix, ni prestataire, ni référence. Quand un objet appartiendra à cette page, il sera nommé ici comme un document du travail — pas comme un souvenir d’un pion. D’ici là le meuble est vide exprès.",
      "Les dossiers ne sont pas des produits. Une masse marquée estimée ne devient pas une gravure. Une couche qui ne tient pas ne devient pas un slogan.",
      "L’argent, s’il doit aider la table, ne se vend pas ici. Il a un chemin sur Aidez-nous. Ce chemin n’encaisse rien non plus.",
    ],
    toHelp: "Aidez-nous",
  },
  help: {
    kicker: "Trois chemins, pas de caisse",
    title: "Aidez-nous",
    description:
      "Trois chemins pour resserrer un atlas non publié. Partager un dossier. Apporter des données ou une spécialité. Aider financièrement — ce chemin n’encaisse pas.",
    intro: "L’atlas est une table de travail, non publiée. Il gagne quand un dossier peut être vérifié. L’aide n’est pas un achat. Trois chemins sont ouverts. Aucun n’encaisse.",
    paths: [
      {
        id: "share",
        title: "Partager",
        body: [
          "Un site, un bloc, une fissure, une photographie avec une échelle, une mesure prise au sol. Pas une théorie finie. Le dossier.",
          "Une rumeur sans lieu n’est pas un dossier.",
          "Tant que ce chemin ne porte pas d’adresse, gardez les notes : le lieu, comment le chiffre a été obtenu, et ce qui reste estimé.",
        ],
      },
      {
        id: "data",
        title: "Données + spécialité",
        body: [
          "Pétrographie, épigraphie, photogrammétrie, géodésie, archéologie expérimentale, langues des sources premières. Une spécialité sert quand elle peut corriger une fiche.",
          "L’atlas préfère une densité pesée à une légende de plus. Si un champ peut resserrer une masse, une date ou une pierre mal nommée, c’est ce chemin.",
        ],
      },
      {
        id: "finance",
        title: "Aider financièrement",
        body: [
          "Il n’y a pas de caisse sur ce site. Pas de panier, pas de prestataire, pas de produit. La Boutique est une salle sans caisse. Ce chemin n’est pas une seconde boutique.",
          "Quand l’aide financière pourra exister sans faire de l’atlas un panier, elle sera indiquée ici comme une adresse ou une déclaration publique — pas comme une référence. D’ici là ce chemin nomme une intention. Il n’encaisse pas.",
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
    line: "Solving History — atlas non publié. Une table de travail. Pas de caisse.",
    robots: "robots : noindex, nofollow",
  },
  notFound: {
    kicker: "404",
    title: "Solving History",
    body: "Ce dossier n’est pas sur l’atlas.",
    back: "Atlas",
  },
};
