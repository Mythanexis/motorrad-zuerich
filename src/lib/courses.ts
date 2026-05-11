import grundkursImg from "@/assets/course-grundkurs.jpg";
import wabImg from "@/assets/wab-course.jpg";
import theorieImg from "@/assets/course-theorie.jpg";
import sicherheitImg from "@/assets/course-sicherheit.jpg";

export type Course = {
  slug: string;
  code: string;
  tag: string;
  tags: string[];
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  duration: string;
  price: string;
  category: string;
  minAge: string;
  img: string;
  modules: { title: string; desc: string }[];
  includes: string[];
  requirements: string[];
};

export const courses: Course[] = [
  {
    slug: "grundkurs",
    code: "01",
    tag: "Pflicht",
    tags: ["Pflicht", "3 Tage"],
    title: "Grundkurs",
    shortTitle: "Grundkurs",
    tagline: "Sportliche Grundausbildung. Ein Fundament fürs ganze Fahrerleben.",
    description: "Die obligatorische Motorrad-Grundausbildung — drei Tage, zwölf Stunden, ein Fundament fürs ganze Fahrerleben.",
    longDescription: [
      "Der Grundkurs ist die gesetzlich vorgeschriebene Motorrad-Grundausbildung in der Schweiz. In drei Tagen vermitteln wir Ihnen die zentralen Fertigkeiten — von der ersten Berührung mit der Maschine bis zum sicheren Manövrieren im Strassenverkehr.",
      "Wir arbeiten in kleinen Gruppen mit maximal vier Teilnehmern pro Instruktor. So bleibt Zeit für Sie, Ihre Fragen und Ihre persönliche Linie.",
    ],
    duration: "3 Tage · 12 Std",
    price: "CHF 590",
    category: "Kat. A1, A35, A",
    minAge: "16 Jahre (A1)",
    img: grundkursImg,
    modules: [
      { title: "Tag 1 · Vertrautmachen", desc: "Bedienelemente, Anfahren, Bremsen, Schalten — die Maschine wird zur Selbstverständlichkeit." },
      { title: "Tag 2 · Manöver", desc: "Slalom, enge Kurven, Notbremsung. Präzision auf engem Raum." },
      { title: "Tag 3 · Strassenverkehr", desc: "Begleitete Ausfahrt, Verkehrskunde, Sicherheitsstrategien." },
    ],
    includes: ["Motorrad inkl. Benzin", "Helm & Handschuhe", "Versicherung", "Kursunterlagen"],
    requirements: ["Lernfahrausweis Kat. A", "Robuste Kleidung", "Festes Schuhwerk"],
  },
  {
    slug: "wab",
    code: "02",
    tag: "Weiterbildung",
    tags: ["Weiterbildung", "2 Phasen"],
    title: "WAB · 2-Phasen-Ausbildung",
    shortTitle: "WAB",
    tagline: "Weiterführende Ausbildung für den definitiven Führerausweis.",
    description: "Die obligatorische Weiterausbildung innerhalb des Probeführerausweises. Pflicht für den definitiven Ausweis.",
    longDescription: [
      "Die WAB-Ausbildung ist Pflicht für alle Inhaber eines Probeführerausweises. Sie absolvieren zwei Tage à sieben Stunden — wir empfehlen, beide Phasen innerhalb der ersten zwölf Monate abzuschliessen.",
      "Unser Fokus liegt auf realer Risikoerkennung, Bremstechnik und Fahrdynamik bei Tempo. Sicherheit, die im Ernstfall den Unterschied macht.",
    ],
    duration: "2 × 1 Tag",
    price: "CHF 480",
    category: "Alle Kat. A",
    minAge: "Mit Probeausweis",
    img: wabImg,
    modules: [
      { title: "Phase 1 · Risiko", desc: "Risikoerkennung, Selbsteinschätzung, Verhalten in kritischen Situationen." },
      { title: "Phase 2 · Dynamik", desc: "Bremsmanöver bei hohem Tempo, Kurventechnik, Geländefahrten." },
    ],
    includes: ["Mietmotorrad möglich", "Schutzausrüstung", "Versicherung", "Pausenverpflegung"],
    requirements: ["Probeführerausweis Kat. A", "Eigenes oder Mietmotorrad", "Schutzkleidung"],
  },
  {
    slug: "a1",
    code: "03",
    tag: "Kategorie",
    tags: ["Kategorie A1", "ab 16 J."],
    title: "A1 · Leichtmotorrad",
    shortTitle: "A1",
    tagline: "Der Einstieg in die Welt des Motorradfahrens — ab 16 Jahren.",
    description: "Ausbildung für 125er-Motorräder ab 16 Jahren. Eintritt in die Welt des Motorradfahrens.",
    longDescription: [
      "Mit der Kategorie A1 dürfen Sie Motorräder bis 125 ccm und maximal 11 kW Leistung fahren — ab dem 16. Geburtstag.",
      "Wir kombinieren Theorievorbereitung, Grundkurs und individuelle Fahrlektionen zu einem klaren Pfad bis zur praktischen Prüfung.",
    ],
    duration: "Auf Anfrage",
    price: "ab CHF 590",
    category: "Kat. A1 · 125 ccm · 11 kW",
    minAge: "16 Jahre",
    img: grundkursImg,
    modules: [
      { title: "Theorievorbereitung", desc: "Online-Lernplattform und persönlicher Coaching-Termin." },
      { title: "Grundkurs", desc: "Drei Tage Pflichtausbildung, integriert in den Pfad." },
      { title: "Fahrlektionen", desc: "Individuelle Lektionen bis zur Prüfungsreife." },
    ],
    includes: ["Mietmotorrad 125er", "Theorie-Plattform", "Prüfungsvorbereitung"],
    requirements: ["16 Jahre alt", "Lernfahrausweis", "Sehtest"],
  },
  {
    slug: "a35",
    code: "04",
    tag: "Kategorie",
    tags: ["Kategorie A35", "ab 18 J."],
    title: "A35 · Mittelklasse",
    shortTitle: "A35",
    tagline: "Maximal 35 kW. Der ausgewogene Einstieg ab 18 Jahren.",
    description: "Ausbildung für Motorräder bis 35 kW. Pflichtkategorie für 18- bis 24-Jährige in der Schweiz.",
    longDescription: [
      "Die Kategorie A35 (auch A beschränkt) erlaubt Motorräder bis 35 kW Leistung. Sie ist der gesetzlich vorgegebene Einstieg für Fahrer zwischen 18 und 24 Jahren.",
      "Nach zwei Jahren beanstandungsfreier Probezeit können Sie ohne weitere Prüfung in die unbeschränkte Kategorie A wechseln.",
    ],
    duration: "Auf Anfrage",
    price: "ab CHF 690",
    category: "Kat. A · 35 kW",
    minAge: "18 Jahre",
    img: sicherheitImg,
    modules: [
      { title: "Theorievorbereitung", desc: "Strukturierte Online-Vorbereitung auf den Theorietest." },
      { title: "Grundkurs", desc: "Drei Tage Pflichtausbildung — integriert." },
      { title: "Fahrtechnik", desc: "Fahrstunden auf einem A35-Motorrad bis zur Prüfung." },
    ],
    includes: ["Mietmotorrad A35", "Schutzausrüstung", "Theorie-Plattform"],
    requirements: ["18 Jahre alt", "Lernfahrausweis Kat. A", "Sehtest"],
  },
  {
    slug: "a-unbeschraenkt",
    code: "05",
    tag: "Kategorie",
    tags: ["Kategorie A", "Unbeschränkt"],
    title: "A · Unbeschränkt",
    shortTitle: "A unbeschränkt",
    tagline: "Volle Motorradkategorie — ohne Leistungsbeschränkung.",
    description: "Volle Motorradkategorie ab 25 Jahren — oder nach 2 Jahren A2. Ohne Leistungsbeschränkung.",
    longDescription: [
      "Mit der unbeschränkten Kategorie A fahren Sie jedes Motorrad — ohne Leistungslimite. Direkter Einstieg ab 25 Jahren oder durch automatischen Wechsel nach zwei Jahren A35.",
      "Wir begleiten Sie bei Direkteinstieg mit individuell abgestimmten Fahrlektionen auf einer leistungsstarken Maschine.",
    ],
    duration: "Auf Anfrage",
    price: "ab CHF 790",
    category: "Kat. A · unbeschränkt",
    minAge: "25 Jahre (Direkt)",
    img: wabImg,
    modules: [
      { title: "Direkteinstieg", desc: "Beratung und Pfad-Definition für Direkteinsteiger." },
      { title: "Grundkurs", desc: "Pflichtausbildung — integriert." },
      { title: "Fahrtechnik", desc: "Fahrstunden auf einer leistungsstarken Maschine bis zur Prüfung." },
    ],
    includes: ["Leistungsstarkes Mietmotorrad", "Individueller Pfad", "Prüfungsbegleitung"],
    requirements: ["25 Jahre (Direkt) oder 2 Jahre A35", "Lernfahrausweis", "Sehtest"],
  },
  {
    slug: "theorie",
    code: "06",
    tag: "Theorie",
    tags: ["Theorie", "Online + Präsenz"],
    title: "Theoriekurs",
    shortTitle: "Theorie",
    tagline: "Strukturierte Vorbereitung auf den Theorietest — online und im Klassenzimmer.",
    description: "Vorbereitung auf den theoretischen Führerausweis-Test. Online-Lernplattform plus zwei Präsenzabende.",
    longDescription: [
      "Wir kombinieren modernste Online-Lernplattformen mit zwei intensiven Präsenzabenden bei uns in Horgen. Sie üben mit echten Prüfungsfragen und vertiefen schwierige Themen mit unseren Instruktoren.",
      "Die meisten Teilnehmer bestehen den Theorietest beim ersten Versuch — unsere Quote liegt bei über 95%.",
    ],
    duration: "2 Abende · 4 Std",
    price: "CHF 190",
    category: "Theorie Kat. A",
    minAge: "Ab 15 Jahren",
    img: theorieImg,
    modules: [
      { title: "Online-Plattform", desc: "Unbegrenzter Zugang zu allen Prüfungsfragen und Lernvideos." },
      { title: "Abend 1 · Verkehrskunde", desc: "Vorfahrt, Signale, Verhalten im Strassenverkehr." },
      { title: "Abend 2 · Risiko & Praxis", desc: "Gefahrenerkennung, Prüfungssimulation, offene Fragen." },
    ],
    includes: ["12 Mt. Online-Zugang", "Lernunterlagen", "Prüfungssimulation"],
    requirements: ["Mindestens 15 Jahre alt"],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
