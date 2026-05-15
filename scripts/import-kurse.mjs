import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "bhak4wmc",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const grundkurs = {
  _type: "kurs",
  aktiv: true,
  nummer: 1,
  titel: "Grundkurs",
  shortTitel: "Grundkurs",
  slug: { _type: "slug", current: "grundkurs" },
  tagline: "Sportliche Grundausbildung. Ein Fundament fürs ganze Fahrerleben.",
  kategorie: "Kat. A1, A35, A",
  badges: ["Pflicht", "3 Tage"],
  dauer: "3 Tage · 12 Std",
  preis: "CHF 590",
  preisAufAnfrage: false,
  minAlter: "16 Jahre (A1)",
  ort: "Horgen, Zürichsee",
  beschreibung:
    "Die obligatorische Motorrad-Grundausbildung — drei Tage, zwölf Stunden, ein Fundament fürs ganze Fahrerleben.",
  longDescription: [
    "Der Grundkurs ist die gesetzlich vorgeschriebene Motorrad-Grundausbildung in der Schweiz. In drei Tagen vermitteln wir Ihnen die zentralen Fertigkeiten — von der ersten Berührung mit der Maschine bis zum sicheren Manövrieren im Strassenverkehr.",
    "Wir arbeiten in kleinen Gruppen mit maximal vier Teilnehmern pro Instruktor. So bleibt Zeit für Sie, Ihre Fragen und Ihre persönliche Linie.",
  ],
  module: [
    {
      _key: "tag1",
      titel: "Tag 1 · Vertrautmachen",
      beschreibung:
        "Bedienelemente, Anfahren, Bremsen, Schalten — die Maschine wird zur Selbstverständlichkeit.",
    },
    {
      _key: "tag2",
      titel: "Tag 2 · Manöver",
      beschreibung: "Slalom, enge Kurven, Notbremsung. Präzision auf engem Raum.",
    },
    {
      _key: "tag3",
      titel: "Tag 3 · Strassenverkehr",
      beschreibung: "Begleitete Ausfahrt, Verkehrskunde, Sicherheitsstrategien.",
    },
  ],
  enthalten: ["Motorrad inkl. Benzin", "Helm & Handschuhe", "Versicherung", "Kursunterlagen"],
  anforderungen: ["Lernfahrausweis Kat. A", "Robuste Kleidung", "Festes Schuhwerk"],
  termine: [
    { _key: "t1", label: "30. Mai – 1. Jun 2026", spots: 3 },
    { _key: "t2", label: "20.–22. Jun 2026", spots: 6 },
    { _key: "t3", label: "11.–13. Jul 2026", spots: 6 },
    { _key: "t4", label: "8.–10. Aug 2026", spots: 0 },
    { _key: "t5", label: "5.–7. Sep 2026", spots: 6 },
  ],
};

async function run() {
  console.log("Importiere Grundkurs...");
  const result = await client.create(grundkurs);
  console.log(`✅ Grundkurs erstellt: ${result._id}`);
}

run().catch((err) => {
  console.error("❌ Fehler:", err.message);
  process.exit(1);
});
