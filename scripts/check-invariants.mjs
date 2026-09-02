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
    baalbek:
      "Three stones so big they make the wall. In the quarry, two more never became a wall: one still in the mountain, one cracked and left.",
    "us-01":
      "They piled a giant hill of earth in ninety days. Inside, the dirt never even became soil.",
    "us-06":
      "A hill of earth as big as a castle. They made it in two great pushes, in less than twenty years.",
    "gobekli-tepe":
      "Before anyone planted a field, people stood up giant stones shaped like a T. They were still hunting their food.",
    "us-07":
      "Eleven hills of earth in a ring. The people who made them still hunted their food. No farms yet.",
    "antikythera-mechanism":
      "From the sea, a bronze machine with about thirty little wheels, like the inside of a clock. We have only this one.",
    "khufu-great-pyramid":
      "A tomb as big as a mountain of stone. Inside, they put granite very high up.",
    "aswan-unfinished-obelisk":
      "They carved a giant needle of stone, then left it in the mountain. It cracked. It is still stuck in the rock.",
    "serapeum-saqqara":
      "Under the ground, a long dark hallway. In it, twenty-four huge stone boxes, sitting in the dark.",
    pumapunku:
      "They cut stone into the letter H, as if the pieces should lock. Beside them, a floor of huge stone slabs — still lying there.",
    kalasasaya:
      "A whole doorway cut from one stone. It stands in a great courtyard of tall stones.",
    sacsayhuaman:
      "The wall does not go straight — it zigzags. Huge stones lean into each other and hold, with nothing in between.",
    stonehenge:
      "Giant stones stand in a ring, fitted like wood. One lying stone came from far in the north — much farther than the others.",
    "us-02":
      "A stone city in a dry canyon. The roof beams are trees that do not grow there — they were carried from mountains far away.",
    "igbo-ukwu":
      "They poured bronze into the shape of tiny insects, one by one. The metal still shines.",
    "tichitt-walata":
      "A stone town on the cliff, hundreds of rooms. It was already there, long before the desert caravans.",
    "jerwan-aqueduct":
      "A long stone road just for water, standing on arches. People walked under it. The water walked on top.",
    "aguada-fenix":
      "They built a giant platform of earth, longer than a town. No king’s pyramid on top. Just the platform.",
    "us-08":
      "They piled hills of earth here first. Later, farther away, they piled even bigger ones.",
    "nabta-playa":
      "A ring of stones in the desert, smaller than a room. It is not a great sky machine. It is a small circle.",
    "ca-07":
      "They built a small hill of earth for someone young, and laid them with care in a box of stone. It is the oldest grave of its kind we know in the north.",
    "ca-12":
      "A village of wood on an island. Ten houses, and thirty-two tall poles — still standing in the wind.",
  },
  fr: {
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
    "serapeum-saqqara":
      "Sous terre, un long couloir sombre. Dedans, vingt-quatre énormes caisses de pierre, posées dans le noir.",
    pumapunku:
      "Ils ont taillé la pierre en forme de H, comme si les morceaux devaient s’emboîter. À côté, un sol de dalles énormes — encore là.",
    kalasasaya:
      "Toute une porte taillée dans une seule pierre. Elle se tient dans une grande cour de pierres hautes.",
    sacsayhuaman:
      "Le mur ne va pas droit — il zigzague. D’énormes pierres se penchent l’une contre l’autre et tiennent, sans rien au milieu.",
    stonehenge:
      "Des pierres géantes se tiennent en rond, emboîtées comme du bois. Une pierre couchée vient de très loin au nord — bien plus loin que les autres.",
    "us-02":
      "Une ville de pierre dans un canyon sec. Les poutres du toit sont des arbres qui n’y poussent pas — on les a portés depuis des montagnes lointaines.",
    "igbo-ukwu":
      "Ils ont coulé du bronze en forme de tout petits insectes, un par un. Le métal brille encore.",
    "tichitt-walata":
      "Une ville de pierre sur la falaise, des centaines de pièces. Elle était déjà là, longtemps avant les caravanes du désert.",
    "jerwan-aqueduct":
      "Une longue route de pierre rien que pour l’eau, posée sur des arches. Les gens passaient en dessous. L’eau passait au-dessus.",
    "aguada-fenix":
      "Ils ont bâti une immense plateforme de terre, plus longue qu’une ville. Pas de pyramide de roi dessus. Juste la plateforme.",
    "us-08":
      "Ils ont entassé des collines de terre ici d’abord. Plus tard, plus loin, ils en ont fait de plus grandes.",
    "nabta-playa":
      "Un rond de pierres dans le désert, plus petit qu’une pièce. Ce n’est pas une grande machine du ciel. C’est un petit cercle.",
    "ca-07":
      "Ils ont fait une petite colline de terre pour quelqu’un de jeune, et l’ont déposé avec soin dans une caisse de pierre. C’est la plus ancienne tombe de ce genre que l’on connaisse au nord.",
    "ca-12":
      "Un village de bois sur une île. Dix maisons, et trente-deux grands poteaux — encore debout dans le vent.",
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
