import type { DossierId } from "@/lib/dossiers";
import type { FrResearchPayload } from "./fr-payload";

export type MethodLayer = {
  title: string;
  common: string[];
  advanced: string[];
};

export type DossierCopy = {
  title: string;
  /** Atlas pin-card H2 only. Dossier page H1 stays `title`. */
  cardHook: string;
  cardDate: string;
  place: string;
  lede: string;
  imageAlt: string;
  imageCaption: string;
  layers: [MethodLayer, MethodLayer, MethodLayer, MethodLayer];
  notes: string[];
  /** French research payload when the dossier copy is JSON-driven. */
  research?: FrResearchPayload;
}

export type UiCopy = {
  meta: {
    title: string;
    description: string;
    notLive: string;
  };
  nav: {
    atlas: string;
    mission: string;
    method: string;
    help: string;
  };
  language: {
    en: string;
    fr: string;
    switchTo: string;
  };
  atlas: {
    kicker: string;
    title: string;
    intro: string;
    lede: string;
    openDossier: string;
    closeCard: string;
    listLabel: string;
    mapLabel: string;
  };
  mission: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  methodPage: {
    kicker: string;
    title: string;
    intro: string[];
    commonLabel: string;
    advancedLabel: string;
    layers: { title: string; body: string }[];
  };
  help: {
    kicker: string;
    title: string;
    intro: string;
    paths: {
      id: "share" | "data" | "finance";
      title: string;
      body: string[];
    }[];
  };
  dossier: {
    methodKicker: string;
    common: string;
    advanced: string;
    sources: string;
    next: string;
    backAtlas: string;
  };
  pathsTitle: string;
  footer: {
    line: string;
    robots: string;
  };
};

export type Dictionary = UiCopy & {
  dossiers: Record<DossierId, DossierCopy>;
};
