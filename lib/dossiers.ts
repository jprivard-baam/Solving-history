export type DossierId =
  | "baalbek"
  | "us-01"
  | "us-06"
  | "gobekli-tepe"
  | "us-07"
  | "antikythera-mechanism"
  | "khufu-great-pyramid"
  | "aswan-unfinished-obelisk"
  | "serapeum-saqqara"
  | "pumapunku"
  | "kalasasaya"
  | "sacsayhuaman"
  | "stonehenge"
  | "us-02"
  | "igbo-ukwu"
  | "tichitt-walata"
  | "jerwan-aqueduct"
  | "aguada-fenix"
  | "us-08"
  | "nabta-playa"
  | "ca-07"
  | "ca-12";

export type DossierMeta = {
  id: DossierId;
  lat: number;
  lng: number;
  image: string;
  imageCredit: string;
};

/** Preview: twenty-two places, one pin each. Most improbable first. Do not add the 63. */
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
  {
    id: "serapeum-saqqara",
    lat: 29.87611,
    lng: 31.21028,
    image: "/dossiers/serapeum-saqqara.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "pumapunku",
    lat: -16.56169,
    lng: -68.67959,
    image: "/dossiers/pumapunku-hblocks.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "kalasasaya",
    lat: -16.555,
    lng: -68.673,
    image: "/dossiers/kalasasaya.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "sacsayhuaman",
    lat: -13.50678,
    lng: -71.98024,
    image: "/dossiers/sacsayhuaman.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "stonehenge",
    lat: 51.179,
    lng: -1.825,
    image: "/dossiers/stonehenge.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "us-02",
    lat: 36.06066,
    lng: -107.96160,
    image: "/dossiers/chaco.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "igbo-ukwu",
    lat: 6.017,
    lng: 7.017,
    image: "/dossiers/igbo-ukwu.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "tichitt-walata",
    lat: 18.44167,
    lng: -9.49167,
    image: "/dossiers/tichitt-walata.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "jerwan-aqueduct",
    lat: 36.66972,
    lng: 43.39361,
    image: "/dossiers/jerwan.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "aguada-fenix",
    lat: 17.800,
    lng: -91.150,
    image: "/dossiers/aguada-fenix.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "us-08",
    lat: 33.237095,
    lng: -90.487026,
    image: "/dossiers/jaketown.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "nabta-playa",
    lat: 22.507967,
    lng: 30.725600,
    image: "/dossiers/nabta-playa.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "ca-07",
    lat: 51.480403,
    lng: -56.868388,
    image: "/dossiers/anse-amour.jpg",
    imageCredit: "Wikimedia Commons",
  },
  {
    id: "ca-12",
    lat: 52.09889,
    lng: -131.21667,
    image: "/dossiers/sgang-gwaay.jpg",
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
