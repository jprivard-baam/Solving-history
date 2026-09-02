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
  /basemaps\.cartocdn\.com/i,
];

for (const re of forbidden) {
  if (re.test(blob)) {
    errors.push(`Forbidden pattern found: ${re}`);
  }
}

if (!blob.includes("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")) {
  errors.push("Missing OSM raster URL");
}
if (!blob.includes("filter: invert(1)")) {
  errors.push("Atlas must keep the dark CSS filter on OSM tiles");
}

const atlasMap = readFileSync(join(root, "components/AtlasMap.tsx"), "utf8");
if (atlasMap.includes("Popup") || atlasMap.includes("leaflet-popup-tip")) {
  errors.push("Summary card must not be a Leaflet balloon above the pin");
}
if (!atlasMap.includes("latLngToContainerPoint") || !atlasMap.includes("createPortal")) {
  errors.push("Summary card must be laid on the map at the clicked lat-lng");
}
if (!atlasMap.includes("atlas-summary-lede") || !atlasMap.includes("openLabel")) {
  errors.push("Laid card must be the summary teaser, not a title+link stub");
}
if (!atlasMap.includes("/mark-pin.svg") || !atlasMap.includes("iconAnchor: [16, 12]")) {
  errors.push("Atlas pins must use mark-pin.svg with iconAnchor [16, 12]");
}
if (atlasMap.includes("iconAnchor: [16, 16]")) {
  errors.push("Pin anchor must be the bar middle [16, 12], not [16, 16]");
}
if (atlasMap.includes("CircleMarker") || atlasMap.includes("teardrop") || atlasMap.includes("circumpunct")) {
  errors.push("Atlas pins must not be CircleMarker, teardrop, or circumpunct");
}

const header = readFileSync(join(root, "components/SiteHeader.tsx"), "utf8");
if (!header.includes("/wordmark.svg")) {
  errors.push("Header must be wordmark SVG only");
}
if (header.includes("mark-pin") || header.includes("mark-borne") || header.includes("favicon")) {
  errors.push("Header must not carry the pin glyph or favicon");
}
if (!header.includes("z-[1100]") || !header.includes("bg-paper")) {
  errors.push("Header must sit above Leaflet with a solid paper background");
}
if (header.includes("bg-paper/85") || header.includes("backdrop-blur")) {
  errors.push("Header must not be translucent over the map");
}

const pinSvg = readFileSync(join(root, "public/mark-pin.svg"), "utf8");
if (
  !pinSvg.includes('d="M8 12 H24 M16 12 L10.5 23 M16 12 L21.5 23"') ||
  !pinSvg.includes("#c9a44a")
) {
  errors.push("mark-pin.svg must be the locked encoche glyph");
}
if (pinSvg.includes("<circle") || pinSvg.includes("circumpunct")) {
  errors.push("Circumpunct must stay off the map pin");
}

const atlasWorkspace = readFileSync(join(root, "components/AtlasWorkspace.tsx"), "utf8");
if (atlasWorkspace.includes("absolute bottom-3") || atlasWorkspace.includes("z-[800]")) {
  errors.push("Summary card must not float in a page corner");
}
if (!atlasWorkspace.includes("kicker") || !atlasWorkspace.includes("{kicker}")) {
  errors.push("Atlas kicker must be rendered");
}
if (!atlasWorkspace.includes("selectFromList") || !atlasWorkspace.includes("setFlashId")) {
  errors.push("List click must zoom and flash, without opening the pin card");
}
if (!atlasWorkspace.includes("setCardId(null)") || !atlasWorkspace.includes("togglePin")) {
  errors.push("Pin click must open the pin card; list click must not");
}
if (atlasWorkspace.includes("atlasPinId")) {
  errors.push("List id must equal pin id — no Baalbek pin alias");
}
if (!atlasWorkspace.includes("setFlashId(id)") || !atlasWorkspace.includes("flashId={flashId}")) {
  errors.push("List click must flash the marker whose id matches the row");
}
const css = readFileSync(join(root, "app/globals.css"), "utf8");
if (!css.includes("@keyframes atlas-pin-flash") || !css.includes(".atlas-pin-flash")) {
  errors.push("Pin red flash keyframes must stay");
}

const remappedHooks = {
  en: [
    "Three blocks of ~800 t, still in the wall",
    "41.75 m — still in the bed",
    "Carbon dates the plaster, not the T-pillars",
    "Bias −3.9′. Granite of ~50 t at 43 m",
    "Thirty gears. One surviving example",
  ],
  fr: [
    "Trois blocs d’environ 800 t, encore dans le mur",
    "41,75 m — encore dans le banc",
    "Le carbone date le plâtre, pas les piliers en T",
    "Biais −3,9′. Granite d’environ 50 t à 43 m",
    "Trente engrenages. Un seul exemplaire",
  ],
};
const enCopy = readFileSync(join(root, "lib/copy/dossiers-en.ts"), "utf8");
const frCopy = readFileSync(join(root, "lib/copy/dossiers-fr.ts"), "utf8");
for (const hook of remappedHooks.en) {
  if (!enCopy.includes(hook)) errors.push(`Missing EN cardHook: ${hook}`);
}
for (const hook of remappedHooks.fr) {
  if (!frCopy.includes(hook)) errors.push(`Missing FR cardHook: ${hook}`);
}

const listBlurbs = {
  en: {
    baalbek: "The wall is three stones. Just three.",
    "us-01": "A hill of earth raised in ninety days.",
    "us-06": "A castle of earth.",
    "gobekli-tepe": "Giant T-stones standing in a circle.",
    "us-07": "Eleven hills of earth, drawn in a ring.",
    "antikythera-mechanism": "A bronze clock pulled from the sea",
    "khufu-great-pyramid": "A mountain of stone, built as a tomb.",
    "aswan-unfinished-obelisk": "A giant needle of stone, still stuck in the mountain.",
    "serapeum-saqqara": "Twenty-four huge stone boxes wait in the dark.",
    pumapunku: "Stone cut into the letter H, ready to lock.",
    kalasasaya: "A whole doorway from a single stone",
    sacsayhuaman: "The wall zigzags like lightning.",
    stonehenge: "A ring of giants, fitted like wood.",
    "us-02": "A stone city in a dry canyon.",
    "igbo-ukwu": "Tiny bronze insects",
    "tichitt-walata": "A whole stone town on the cliff",
    "jerwan-aqueduct": "A stone road in the air, just for water.",
    "aguada-fenix": "A platform of earth longer than a town.",
    "us-08": "Hills of earth rising from the flat land.",
    "nabta-playa": "a ring of stones smaller than a room",
    "ca-07": "The oldest grave of its kind in the north.",
    "ca-12": "ten houses, thirty-two tall poles",
  },
  fr: {
    baalbek: "Le mur, c’est trois pierres. Rien que trois.",
    "us-01": "Une colline de terre dressée en quatre-vingt-dix jours.",
    "us-06": "Un château de terre.",
    "gobekli-tepe": "D’immenses pierres en T, debout en cercle.",
    "us-07": "Onze collines de terre, tracées en rond.",
    "antikythera-mechanism": "Une horloge de bronze sortie de la mer",
    "khufu-great-pyramid": "Une montagne de pierre, bâtie pour un tombeau.",
    "aswan-unfinished-obelisk": "Une immense aiguille de pierre, encore prise dans la montagne.",
    "serapeum-saqqara": "Vingt-quatre énormes caisses de pierre attendent dans le noir.",
    pumapunku: "Pierre taillée en H, prête à s’emboîter.",
    kalasasaya: "Toute une porte dans une seule pierre",
    sacsayhuaman: "Le mur zigzague comme l’éclair.",
    stonehenge: "Un rond de géants, emboîtés comme du bois.",
    "us-02": "Une ville de pierre dans un canyon sec.",
    "igbo-ukwu": "De tout petits insectes de bronze",
    "tichitt-walata": "Toute une ville de pierre sur la falaise",
    "jerwan-aqueduct": "Une route de pierre en l’air, rien que pour l’eau.",
    "aguada-fenix": "Une plateforme de terre plus longue qu’une ville.",
    "us-08": "Des collines de terre qui sortent de la plaine.",
    "nabta-playa": "un rond de pierres plus petit qu’une pièce",
    "ca-07": "La plus ancienne tombe de ce genre au nord.",
    "ca-12": "dix maisons, trente-deux grands poteaux",
  },
};
for (const [id, line] of Object.entries(listBlurbs.en)) {
  if (!enCopy.includes(line)) errors.push(`Missing EN listBlurb for ${id}`);
}
for (const [id, line] of Object.entries(listBlurbs.fr)) {
  if (!frCopy.includes(line)) errors.push(`Missing FR listBlurb for ${id}`);
}

if (!atlasMap.includes("pin.hook")) {
  errors.push("Atlas overlay H2 must read cardHook, not the site name");
}
if (!atlasWorkspace.includes("card.title") && !atlasWorkspace.includes("{card.title}")) {
  errors.push("Atlas list rows must keep the site name");
}
if (!atlasWorkspace.includes("card.listBlurb")) {
  errors.push("Atlas list rows must render listBlurb under the name");
}

if (!blob.includes("Why it does not make sense") || !blob.includes("Pourquoi ça ne tient pas")) {
  errors.push("Missing Layer 4 titles");
}

const uiEn = readFileSync(join(root, "lib/copy/ui-en.ts"), "utf8");
const uiFr = readFileSync(join(root, "lib/copy/ui-fr.ts"), "utf8");
if (!uiEn.includes('kicker: "Twenty-two open files"')) {
  errors.push("EN atlas kicker must be Twenty-two open files");
}
if (!uiFr.includes('kicker: "Vingt-deux dossiers ouverts"')) {
  errors.push("FR atlas kicker must be Vingt-deux dossiers ouverts");
}
if (uiEn.includes("eight files") || uiFr.includes("huit dossiers")) {
  errors.push("Mission still says eight/huit");
}

const removed = [
  "great-pyramid-khufu",
  "unfinished-obelisk-aswan",
  "baalbek-trilithon",
  "baalbek-2014-block",
  "baalbek-hajjar-al-hibla",
];
const live = [
  readFileSync(join(root, "lib/dossiers.ts"), "utf8"),
  readFileSync(join(root, "lib/copy/fr-payload.ts"), "utf8"),
  readFileSync(join(root, "lib/copy/dossiers-fr.ts"), "utf8"),
  enCopy,
].join("\n");
for (const id of removed) {
  if (new RegExp(String.raw`id:\s*"${id}"`).test(live) || live.includes(`| "${id}"`)) {
    errors.push(`Removed dossier still wired: ${id}`);
  }
}

const ids = [
  "baalbek",
  "us-01",
  "us-06",
  "gobekli-tepe",
  "us-07",
  "antikythera-mechanism",
  "khufu-great-pyramid",
  "aswan-unfinished-obelisk",
  "serapeum-saqqara",
  "pumapunku",
  "kalasasaya",
  "sacsayhuaman",
  "stonehenge",
  "us-02",
  "igbo-ukwu",
  "tichitt-walata",
  "jerwan-aqueduct",
  "aguada-fenix",
  "us-08",
  "nabta-playa",
  "ca-07",
  "ca-12",
];
const data = readFileSync(join(root, "lib/dossiers.ts"), "utf8");
for (const id of ids) {
  if (!data.includes(`id: "${id}"`)) errors.push(`Missing dossier id ${id}`);
}
const order = ids
  .map((id) => data.indexOf(`id: "${id}"`))
  .filter((i) => i >= 0);
if (order.length !== 22 || order.join() !== [...order].sort((a, b) => a - b).join()) {
  errors.push("Atlas list order must be the locked twenty-two-place order");
}
if ((data.match(/id: "/g) || []).length !== 22) {
  errors.push("Atlas must have exactly twenty-two place pins");
}

const coords = [
  ["34.00682", "36.20338"],
  ["32.63694", "-91.40639"],
  ["38.659", "-90.061"],
  ["37.2233", "38.9224"],
  ["32.36842", "-92.13139"],
  ["35.8886", "23.3053"],
  ["29.9792", "31.1342"],
  ["24.0764", "32.8953"],
  ["29.87611", "31.21028"],
  ["-16.56169", "-68.67959"],
  ["-16.555", "-68.673"],
  ["-13.50678", "-71.98024"],
  ["51.179", "-1.825"],
  ["36.06066", "-107.96160"],
  ["6.017", "7.017"],
  ["18.44167", "-9.49167"],
  ["36.66972", "43.39361"],
  ["17.800", "-91.150"],
  ["33.237095", "-90.487026"],
  ["22.507967", "30.725600"],
  ["51.480403", "-56.868388"],
  ["52.09889", "-131.21667"],
];
for (const [lat, lng] of coords) {
  if (!data.includes(lat) || !data.includes(lng)) {
    errors.push(`Missing sourced pin ${lat}, ${lng}`);
  }
}

if (/\b(pantheon)\b/i.test(blob)) {
  errors.push("Forbidden extra site present");
}

const publicUi = [
  "components/MethodLayers.tsx",
  "components/FrResearchExtras.tsx",
  "app/[locale]/dossier/[id]/page.tsx",
]
  .map((f) => readFileSync(join(root, f), "utf8"))
  .join("\n");
for (const key of ["hearsay", "jsonFields"]) {
  if (publicUi.includes(key)) {
    errors.push(`Public dossier UI must not render schema key ${key}`);
  }
}

if (!blob.includes("/help") || !blob.includes("/shop")) {
  errors.push("Shop redirect wiring missing");
}

const dossierPage = readFileSync(
  join(root, "app/[locale]/dossier/[id]/page.tsx"),
  "utf8",
);
if (!dossierPage.includes("/ 22")) {
  errors.push("Dossier chrome must count twenty-two files");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("invariants ok");
