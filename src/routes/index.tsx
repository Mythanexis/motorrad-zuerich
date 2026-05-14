import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { courses } from "@/lib/courses";
import heroBike from "@/assets/hero-kurs.webp";
import rentalImg from "@/assets/rental-bikes.jpg";

function W({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="word-rise-wrap">
      <span className="word-rise" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motorradkurse Zürich — Grundkurse, WAB & Vermietung in Horgen" },
      {
        name: "description",
        content:
          "Motorradausbildung in Zürich. Grundkurse, WAB-Kurse und Motorrad-Vermietung in Horgen. Präzision, Sicherheit und kompromisslose Qualität.",
      },
      { property: "og:title", content: "Motorradkurse Zürich" },
      { property: "og:description", content: "Grundkurse, WAB-Kurse und Vermietung in Horgen." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main className="-mt-16">
        {/* HERO */}
        <div className="hero-curtain" aria-hidden="true" />
        <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black text-white">
          <img
            src={heroBike}
            alt="Motorrad im Studiolicht"
            className="hero-img-zoom absolute inset-0 h-full w-full object-cover opacity-90"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-end px-6 pb-20 md:items-start md:px-10 md:pb-28">
            <div
              className="hero-fade-up eyebrow mb-6 text-center opacity-80 md:text-left"
              style={{ animationDelay: "900ms" }}
            >
              Saison 2026 · Anmeldung offen
            </div>
            <h1 className="display-xl max-w-5xl text-center md:text-left">
              <W delay={750}>Fahren</W> <W delay={870}>lernen.</W>
              <br />
              <W delay={1000}>
                <span className="opacity-70">Fahren</span>
              </W>{" "}
              <W delay={1120}>
                <span className="opacity-70">beherrschen.</span>
              </W>
            </h1>
            <p
              className="hero-fade-up mt-8 max-w-md text-center text-base opacity-80 md:text-left md:text-lg"
              style={{ animationDelay: "1300ms" }}
            >
              Motorradkurse in Zürich — vom Grundkurs bis zur Weiterbildung. Geführt von erfahrenen
              Instruktoren in Horgen.
            </p>
            <div
              className="hero-fade-up mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:w-auto md:justify-start"
              style={{ animationDelay: "1500ms" }}
            >
              <Link
                to="/kurse"
                className="btn-pill-solid w-4/5 justify-center bg-white text-black sm:w-auto sm:justify-start"
              >
                Kurse entdecken <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/vermietung"
                className="btn-pill w-4/5 justify-center text-white sm:w-auto sm:justify-start"
              >
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
                Wir glauben, dass jede sichere Fahrt mit Präzision beginnt. Mit der richtigen
                Technik. Dem richtigen Instinkt. Und der richtigen Schule.
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
              <Link
                to="/kurse"
                className="hidden text-sm font-medium opacity-70 hover:opacity-100 md:inline-flex md:items-center md:gap-2"
              >
                Alle Kurse <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="course-row flex flex-col gap-6 md:flex-row">
              {courses.slice(0, 2).map((c) => (
                <CourseCard
                  key={c.slug}
                  slug={c.slug}
                  img={c.img}
                  tags={c.tags}
                  title={c.title}
                  desc={c.description}
                  cta="Entdecken"
                />
              ))}
            </div>
          </div>
        </section>

        {/* RENTAL */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto grid max-w-[1600px] gap-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src={rentalImg}
                alt="Motorräder zur Vermietung"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-32">
              <div className="eyebrow opacity-60">02 — Vermietung</div>
              <h2 className="display-lg mt-4">
                Drei Maschinen.
                <br />
                <span className="opacity-60">Bereit, wenn Sie es sind.</span>
              </h2>
              <p className="mt-8 max-w-md text-base opacity-80">
                Eine sorgfältig kuratierte Auswahl an Motorrädern für Kursteilnehmer und
                Privatfahrer. Tageweise, stundenweise, kompromisslos gewartet.
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
                  Reservieren Sie
                  <br />
                  Ihren Platz.
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

function CourseCard({
  slug,
  img,
  tags,
  title,
  desc,
  cta,
}: {
  slug: string;
  img: string;
  tags: string[];
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <Link
      to="/kurse/$slug"
      params={{ slug }}
      className="course-card group relative flex-1 overflow-hidden rounded-2xl bg-surface text-surface-foreground transition-[flex-grow] duration-500 ease-out hover:flex-[1.2]"
    >
      <div className="relative h-[480px] w-full overflow-hidden md:h-[680px]">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        {/* Title top */}
        <div className="absolute left-0 right-0 top-0 p-6 md:p-8">
          <h3 className="text-3xl font-medium leading-tight text-white drop-shadow md:text-4xl">
            {title}
          </h3>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/40 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-xs text-sm text-white/85">{desc}</p>
            <span className="relative inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              {cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
