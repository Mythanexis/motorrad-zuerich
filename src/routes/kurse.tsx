import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import grundkursImg from "@/assets/course-grundkurs.jpg";
import wabImg from "@/assets/wab-course.jpg";

export const Route = createFileRoute("/kurse")({
  head: () => ({
    meta: [
      { title: "Kurse — Motorradkurse Zürich" },
      { name: "description", content: "Grundkurse, WAB-Kurse, A1, A35 und Theorie. Komplette Motorrad-Ausbildung in Horgen." },
      { property: "og:title", content: "Motorradkurse — MK Zürich" },
      { property: "og:description", content: "Alle Kurse für Ihre Motorrad-Ausbildung." },
    ],
  }),
  component: KursePage,
});

const courses = [
  {
    code: "01",
    tag: "Obligatorisch",
    title: "Grundkurs",
    duration: "3 Tage · 12 Std",
    price: "CHF 590",
    img: grundkursImg,
    desc: "Der gesetzlich vorgeschriebene Grundkurs für alle Motorrad-Kategorien. Wir vermitteln Fahrtechnik, Sicherheit und Verhalten im Strassenverkehr.",
    items: ["Anfahren & Bremsen", "Slalom & Kurventechnik", "Notbremsung", "Verkehrskunde"],
  },
  {
    code: "02",
    tag: "Weiterbildung",
    title: "WAB · 2-Phasen-Ausbildung",
    duration: "2 × 1 Tag",
    price: "CHF 480",
    img: wabImg,
    desc: "Die obligatorische Weiterausbildung innerhalb des Probeführerausweises. Pflicht für den definitiven Ausweis.",
    items: ["Risikoerkennung", "Bremsmanöver", "Fahrdynamik", "Geländefahrten"],
  },
  {
    code: "03",
    tag: "Kategorie",
    title: "A1 · Leichtmotorrad",
    duration: "Auf Anfrage",
    price: "ab CHF 590",
    img: grundkursImg,
    desc: "Ausbildung für 125er-Motorräder ab 16 Jahren. Eintritt in die Welt des Motorradfahrens.",
    items: ["bis 11 kW", "ab 16 Jahren", "inkl. Theorie", "Mietmotorrad möglich"],
  },
  {
    code: "04",
    tag: "Kategorie",
    title: "A · Unbeschränkt",
    duration: "Auf Anfrage",
    price: "ab CHF 690",
    img: wabImg,
    desc: "Volle Motorradkategorie ab 25 Jahren — oder nach 2 Jahren A2. Ohne Leistungsbeschränkung.",
    items: ["unbeschränkt", "ab 25 Jahren", "inkl. WAB", "individuelle Termine"],
  },
];

function KursePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24">
            <div className="eyebrow opacity-60">Ausbildung</div>
            <h1 className="display-xl mt-6 max-w-5xl">Alle Kurse.<br /><span className="opacity-60">Eine Schule.</span></h1>
            <p className="mt-10 max-w-xl text-base opacity-70 md:text-lg">
              Vom ersten Aufsitzen bis zur unbeschränkten Kategorie A —
              wir begleiten Sie durch jede Phase Ihrer Motorrad-Ausbildung.
            </p>
          </div>
          <div className="mx-auto max-w-[1600px] px-6 md:px-10"><div className="hairline" /></div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            {courses.map((c, i) => (
              <article key={c.code} className={`grid gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-32 ${i !== 0 ? "border-t border-border" : ""}`}>
                <div className="md:col-span-2">
                  <div className="text-sm font-medium opacity-40">{c.code}</div>
                </div>
                <div className="md:col-span-5">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="eyebrow opacity-60">{c.tag}</div>
                  <h2 className="display-lg mt-4">{c.title}</h2>
                  <p className="mt-6 text-base opacity-80">{c.desc}</p>
                  <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 opacity-80">
                        <span className="size-1 rounded-full bg-foreground" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex items-end justify-between gap-6 border-t border-border-strong pt-6">
                    <div>
                      <div className="eyebrow opacity-60">Dauer</div>
                      <div className="mt-2 text-base font-medium">{c.duration}</div>
                    </div>
                    <div>
                      <div className="eyebrow opacity-60">Ab</div>
                      <div className="mt-2 text-base font-medium">{c.price}</div>
                    </div>
                    <Link to="/kontakt" className="btn-pill text-foreground">
                      <span>Buchen</span> <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
