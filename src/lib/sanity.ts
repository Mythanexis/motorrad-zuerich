import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export type SanityTermin = {
  label: string;
  spots: number;
};

export type SanityKurs = {
  _id: string;
  slug: { current: string };
  titel: string;
  shortTitel: string;
  tagline: string;
  nummer: number;
  kategorie: string;
  badges: string[];
  dauer: string;
  preis: string;
  preisAufAnfrage: boolean;
  beschreibung: string;
  longDescription: string[];
  minAlter: string;
  ort: string;
  module: { titel: string; beschreibung: string }[];
  enthalten: string[];
  anforderungen: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bild: any;
  termine: SanityTermin[];
  aktiv: boolean;
};

export const KURSE_QUERY = `*[_type == "kurs" && aktiv == true] | order(nummer asc) {
  _id,
  slug,
  titel,
  shortTitel,
  tagline,
  nummer,
  kategorie,
  badges,
  dauer,
  preis,
  preisAufAnfrage,
  beschreibung,
  longDescription,
  minAlter,
  ort,
  module,
  enthalten,
  anforderungen,
  bild,
  termine,
  aktiv
}`;

export const KURS_BY_SLUG_QUERY = `*[_type == "kurs" && slug.current == $slug && aktiv == true][0] {
  _id,
  slug,
  titel,
  shortTitel,
  tagline,
  nummer,
  kategorie,
  badges,
  dauer,
  preis,
  preisAufAnfrage,
  beschreibung,
  longDescription,
  minAlter,
  ort,
  module,
  enthalten,
  anforderungen,
  bild,
  termine,
  aktiv
}`;

export const ALLE_SLUGS_QUERY = `*[_type == "kurs" && aktiv == true].slug.current`;

export type SanityFooterKurs = {
  _id: string;
  slug: { current: string };
  shortTitel: string;
};

export const FOOTER_KURSE_QUERY = `*[_type == "kurs" && aktiv == true && imFooterAnzeigen == true] | order(nummer asc) {
  _id,
  slug,
  shortTitel
}`;

// Tomi can type "3 Tage | 12 Std" — this renders it as "3 Tage · 12 Std"
export function formatDauer(dauer: string | undefined): string {
  if (!dauer) return "";
  return dauer.replace(/\s*[|/]\s*/g, " · ");
}

export type SanityMotorradSpec = {
  bezeichnung: string;
  wert: string;
};

export type SanityMotorrad = {
  _id: string;
  nummer: number;
  name: string;
  kategorie: string;
  tagline: string;
  specs: SanityMotorradSpec[];
  preisTag: string;
  preisWoche: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bild: any;
  ausgebucht: boolean;
};

export const MOTORRAEDER_QUERY = `*[_type == "motorrad"] | order(nummer asc) {
  _id,
  nummer,
  name,
  kategorie,
  tagline,
  specs,
  preisTag,
  preisWoche,
  bild,
  ausgebucht
}`;

export const MOTORRAEDER_COUNT_QUERY = `count(*[_type == "motorrad"])`;

const ZAHLWORT_NEUTRAL = [
  "Kein",
  "Ein",
  "Zwei",
  "Drei",
  "Vier",
  "Fünf",
  "Sechs",
  "Sieben",
  "Acht",
  "Neun",
  "Zehn",
];
const ZAHLWORT_FEMININ = [
  "Keine",
  "Eine",
  "Zwei",
  "Drei",
  "Vier",
  "Fünf",
  "Sechs",
  "Sieben",
  "Acht",
  "Neun",
  "Zehn",
];

// Spells out small counts for German copy ("Drei Maschinen" instead of "3 Maschinen")
export function zahlwort(count: number, genus: "neutral" | "feminin" = "feminin"): string {
  const woerter = genus === "feminin" ? ZAHLWORT_FEMININ : ZAHLWORT_NEUTRAL;
  return woerter[count] ?? String(count);
}
