export type DossierId =
  | "baalbek"
  | "us-01"
  | "us-06"
  | "gobekli-tepe"
  | "us-07"
  | "antikythera-mechanism"
  | "khufu-great-pyramid"
  | "aswan-unfinished-obelisk";

export type DossierMeta = {
  id: DossierId;
  lat: number;
  lng: number;
  image: string;
  imageCredit: string;
};

/** Preview: eight places, one pin each. Most improbable first. Do not add the 63. */
export const dossiers: DossierMeta[] = [
  {
    id: "baalbek",
    lat: 34.00682,
    lng: 36.20338,
    image: "/dossiers/baalbek.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "us-01",
    lat: 32.63694,
    lng: -91.40639,
    image: "/dossiers/poverty-point.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "us-06",
    lat: 38.659,
    lng: -90.061,
    image: "/dossiers/cahokia.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "gobekli-tepe",
    lat: 37.2233,
    lng: 38.9224,
    image: "/dossiers/gobekli-tepe.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "us-07",
    lat: 32.36842,
    lng: -92.13139,
    image: "/dossiers/watson-brake.jpg",
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
    id: "khufu-great-pyramid",
    lat: 29.9792,
    lng: 31.1342,
    image: "/dossiers/khufu.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "aswan-unfinished-obelisk",
    lat: 24.0764,
    lng: 32.8953,
    image: "/dossiers/aswan-obelisk.jpg",
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
