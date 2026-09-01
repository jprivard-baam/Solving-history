import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const errors = [];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === ".git") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const files = walk(root).filter((f) => {
  if (f.includes("/scripts/")) return false;
  return /\.(ts|tsx|js|css)$/.test(f);
});
const blob = files.map((f) => readFileSync(f, "utf8")).join("\n");

const forbidden = [
  /Jean-Philippe/i,
  /\bRivard\b/,
  /TITSacademy/i,
  /google\.com\/maps/i,
  /maps\.googleapis/i,
  /mapbox/i,
  /maplibre/i,
  /openfreemap/i,
  /filter:\s*invert/,
];

for (const re of forbidden) {
  if (re.test(blob)) {
    errors.push(`Forbidden pattern found: ${re}`);
  }
}

if (!blob.includes("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png")) {
  errors.push("Missing Carto Dark raster URL");
}

if (!blob.includes("Why it does not make sense") || !blob.includes("Pourquoi ça ne tient pas")) {
  errors.push("Missing Layer 4 titles");
}

if (!blob.includes('id: "serapeum-saqqara"') && !blob.includes("serapeum-saqqara")) {
  errors.push("Missing serapeum-saqqara id");
}

if (!blob.includes("29.87611") || !blob.includes("31.21028")) {
  errors.push("Missing Serapeum pin");
}

const shopOk = blob.includes('redirect(new URL("/help"') || blob.includes('localizedHref') && blob.includes("/shop");
if (!blob.includes("/help") || !blob.includes("/shop")) {
  errors.push("Shop redirect wiring missing");
}

void shopOk;

const ids = [
  "baalbek",
  "unfinished-obelisk-aswan",
  "sacsayhuaman",
  "pumapunku",
  "gobekli-tepe",
  "great-pyramid-khufu",
  "antikythera-mechanism",
  "serapeum-saqqara",
];
const data = readFileSync(join(root, "lib/dossiers.ts"), "utf8");
for (const id of ids) {
  if (!data.includes(`id: "${id}"`)) errors.push(`Missing dossier id ${id}`);
}
if (/\b(pantheon|poverty-point|chaco)\b/i.test(blob)) {
  errors.push("Forbidden ninth site present");
}

const pumapunkuFr = readFileSync(
  join(root, "lib/copy/fr-json/pumapunku-fr.json"),
  "utf8",
);
if (!pumapunkuFr.includes("580–710") && !pumapunkuFr.includes("580-710")) {
  errors.push("Pumapunku FR yearLabel missing ~580–710");
}
if (/yearLabel[^}]*500–950/.test(pumapunkuFr) || /yearLabel[^}]*500-950/.test(pumapunkuFr)) {
  errors.push("Pumapunku FR yearLabel must not be 500–950");
}

const pumapunkuEn = readFileSync(
  join(root, "lib/copy/dossiers-en.ts"),
  "utf8",
);
const pumapunkuEnBlock = pumapunkuEn.slice(
  pumapunkuEn.indexOf("pumapunku:"),
  pumapunkuEn.indexOf('"gobekli-tepe"'),
);
if (!pumapunkuEnBlock.includes("580–710") && !pumapunkuEnBlock.includes("580-710")) {
  errors.push("Pumapunku EN copy must state 580–710");
}
if (pumapunkuEnBlock.includes("500–950") || pumapunkuEnBlock.includes("500-950")) {
  errors.push("Pumapunku EN visible copy must not contain 500–950");
}

const dossierPage = readFileSync(
  join(root, "app/[locale]/dossier/[id]/page.tsx"),
  "utf8",
);
if (/jsonFields\s*=/.test(dossierPage)) {
  errors.push("Public dossier page must not pass jsonFields");
}

const serapeumFr = readFileSync(
  join(root, "lib/copy/fr-json/serapeum-saqqara-fr.json"),
  "utf8",
);
if (!serapeumFr.includes("Amasis") || !serapeumFr.includes("550")) {
  errors.push("Serapeum FR yearLabel must keep Amasis ~550");
}
const serapeumYear = JSON.parse(serapeumFr).yearLabel;
if (/Nouvel Empire/i.test(serapeumYear) || /New Kingdom/i.test(serapeumYear)) {
  errors.push("Serapeum FR card date must not be New Kingdom");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("invariants ok");
