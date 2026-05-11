import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import heroBike from "@/assets/hero-bike.jpg";
import grundkursImg from "@/assets/course-grundkurs.jpg";
import wabImg from "@/assets/wab-course.jpg";
import rentalImg from "@/assets/rental-bikes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motorradkurse Zürich — Grundkurse, WAB & Vermietung in Horgen" },
      { name: "description", content: "Motorradausbildung in Zürich. Grundkurse, WAB-Kurse und Motorrad-Vermietung in Horgen. Präzision, Sicherheit und kompromisslose Qualität." },
      { property: "og:title", content: "Motorradkurse Zürich" },
      { property: "og:description", content: "Grundkurse, WAB-Kurse und Vermietung in Horgen." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header variant="overlay" />
      <main>
        {/* HERO */}
        <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black text-white">
          <img
            src={heroBike}
            alt="Motorrad im Studiolicht"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
            <div className="eyebrow mb-6 opacity-80">Saison 2026 · Anmeldung offen</div>
            <h1 className="display-xl max-w-5xl">
              Fahren lernen.<br />
              <span className="opacity-70">Fahren beherrschen.</span>
            </h1>
            <p className="mt-8 max-w-md text-base opacity-80 md:text-lg">
              Motorradkurse in Zürich — vom Grundkurs bis zur Weiterbildung.
              Geführt von erfahrenen Instruktoren in Horgen.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/kurse" className="btn-pill-solid bg-white text-black">
                Kurse entdecken <ArrowRight className="size-4" />
              </Link>
              <Link to="/vermietung" className="btn-pill text-white">
                <span>Motorrad mieten</span> <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO STATEMENT */}
        <Section>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="eyebrow md:col-span-3 opacity-60">Philosophie</div>
            <div className="md:col-span-9">
              <p className="display-md max-w-4xl">
                Wir glauben, dass jede sichere Fahrt mit Präzision beginnt.
                Mit der richtigen Technik. Dem richtigen Instinkt. Und der
                richtigen Schule.
              </p>
            </div>
          </div>
        </Section>

        {/* COURSES — Porsche-style large cards */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="hairline" />
          </div>
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="mb-16 flex items-end justify-between gap-6">
              <div>
                <div className="eyebrow opacity-60">01 — Ausbildung</div>
                <h2 className="display-lg mt-4">Unsere Kurse.</h2>
              </div>
              <Link to="/kurse" className="hidden text-sm font-medium opacity-70 hover:opacity-100 md:inline-flex md:items-center md:gap-2">
                Alle Kurse <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="course-row flex flex-col gap-6 md:flex-row">
              <CourseCard
                img={grundkursImg}
                tags={["Pflicht", "3 Tage"]}
                title="Grundkurs"
                desc="Sportliche Grundausbildung: 4 Räder, 1 Maschine, ein Fundament."
                cta="Grundkurs entdecken"
              />
              <CourseCard
                img={wabImg}
                tags={["Weiterbildung", "2 Phasen"]}
                title="WAB · 2-Phasen"
                desc="Weiterführende Ausbildung für den definitiven Führerausweis."
                cta="WAB entdecken"
              />
            </div>
          </div>
        </section>

        {/* RENTAL */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto grid max-w-[1600px] gap-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img src={rentalImg} alt="Motorräder zur Vermietung" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-32">
              <div className="eyebrow opacity-60">02 — Vermietung</div>
              <h2 className="display-lg mt-4">Drei Maschinen.<br /><span className="opacity-60">Bereit, wenn Sie es sind.</span></h2>
              <p className="mt-8 max-w-md text-base opacity-80">
                Eine sorgfältig kuratierte Auswahl an Motorrädern für Kursteilnehmer
                und Privatfahrer. Tageweise, stundenweise, kompromisslos gewartet.
              </p>
              <div className="mt-10">
                <Link to="/vermietung" className="btn-pill text-white">
                  <span>Verfügbarkeit prüfen</span> <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <Section>
          <div className="grid gap-12 md:grid-cols-4">
            {[
              { n: "1’200+", l: "Ausgebildete Fahrer" },
              { n: "12", l: "Jahre Erfahrung" },
              { n: "1", l: "Standort · Horgen" },
              { n: "98%", l: "Bestehensquote" },
            ].map((s) => (
              <div key={s.l} className="border-t border-border-strong pt-6">
                <div className="display-md">{s.n}</div>
                <div className="eyebrow mt-3 opacity-60">{s.l}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="eyebrow md:col-span-3 opacity-60">Bereit?</div>
              <div className="md:col-span-9">
                <h2 className="display-xl">
                  Reservieren Sie<br />Ihren Platz.
                </h2>
                <div className="mt-12 flex flex-wrap gap-3">
                  <Link to="/kontakt" className="btn-pill-solid bg-white text-black">
                    Jetzt anfragen <ArrowRight className="size-4" />
                  </Link>
                  <Link to="/kurse" className="btn-pill text-white">
                    <span>Kursdaten ansehen</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CourseCard({ img, tag, title, desc }: { img: string; tag: string; title: string; desc: string }) {
  return (
    <div className="group relative bg-background p-8 md:p-12">
      <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div>
          <div className="eyebrow opacity-60">{tag}</div>
          <h3 className="display-md mt-3">{title}</h3>
        </div>
        <Link to="/kurse" className="shrink-0 rounded-full border border-border-strong p-3 transition-colors hover:bg-foreground hover:text-background" aria-label={`${title} ansehen`}>
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <p className="mt-6 max-w-md text-sm opacity-70">{desc}</p>
    </div>
  );
}
