export type DossierId =
  | "baalbek"
  | "unfinished-obelisk-aswan"
  | "sacsayhuaman"
  | "pumapunku"
  | "gobekli-tepe"
  | "great-pyramid-khufu"
  | "antikythera-mechanism"
  | "serapeum-saqqara";

export type DossierMeta = {
  id: DossierId;
  lat: number;
  lng: number;
  image: string;
  imageCredit: string;
};

/** List order: most improbable first (JP). No ninth site. */
export const dossiers: DossierMeta[] = [
  {
    id: "gobekli-tepe",
    lat: 37.2233,
    lng: 38.9224,
    image: "/dossiers/gobekli-tepe.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "great-pyramid-khufu",
    lat: 29.9792,
    lng: 31.1342,
    image: "/dossiers/khufu.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "baalbek",
    lat: 34.0069,
    lng: 36.2039,
    image: "/dossiers/baalbek.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "unfinished-obelisk-aswan",
    lat: 24.0764,
    lng: 32.8953,
    image: "/dossiers/aswan-obelisk.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "serapeum-saqqara",
    lat: 29.87611,
    lng: 31.21028,
    image: "/dossiers/serapeum-saqqara.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "antikythera-mechanism",
    lat: 35.8886,
    lng: 23.3053,
    image: "/dossiers/antikythera.jpg",
    imageCredit: "Wikimedia Commons / National Archaeological Museum, Athens",
  },
  {
    id: "sacsayhuaman",
    lat: -13.5075,
    lng: -71.9817,
    image: "/dossiers/sacsayhuaman.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "pumapunku",
    lat: -16.5608,
    lng: -68.6794,
    image: "/dossiers/pumapunku-hblocks.jpg",
    imageCredit: "Wikimedia Commons",
  },
];

export const dossierIds = dossiers.map((d) => d.id);

export function getDossier(id: string): DossierMeta | undefined {
  return dossiers.find((d) => d.id === id);
}

export const CARTO_DARK_URL =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
