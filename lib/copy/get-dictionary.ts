import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import { uiEn } from "./ui-en";
import { uiFr } from "./ui-fr";
import { dossiersEn } from "./dossiers-en";
import { dossiersFr } from "./dossiers-fr";

export function getDictionary(locale: Locale): Dictionary {
  if (locale === "fr") {
    return { ...uiFr, dossiers: dossiersFr };
  }
  return { ...uiEn, dossiers: dossiersEn };
}
