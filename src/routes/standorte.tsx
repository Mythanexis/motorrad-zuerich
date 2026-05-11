import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, MapPin } from "lucide-react";
import horgenImg from "@/assets/location-horgen.jpg";

export const Route = createFileRoute("/standorte")({
  head: () => ({
    meta: [
      { title: "Standorte — Motorradkurse Zürich" },
      {
        name: "description",
        content: "Unser Hauptstandort in Horgen. Bald an weiteren Orten in der Schweiz.",
      },
      { property: "og:title", content: "Standorte — MK Zürich" },
      { property: "og:description", content: "Heute Horgen. Morgen die Schweiz." },
    ],
  }),
  component: StandortePage,
});

const planned = [
  { city: "Zürich Stadt", year: "2026" },
  { city: "Winterthur", year: "2026" },
  { city: "Zug", year: "2027" },
  { city: "Luzern", year: "2027" },
];

function StandortePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative h-[85vh] min-h-[560px] overflow-hidden bg-surface text-surface-foreground">
          <img
            src={horgenImg}
            alt="Horgen am Zürichsee"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
            <div className="eyebrow opacity-80">Standorte</div>
            <h1 className="display-xl mt-6 max-w-5xl">
              Heute Horgen.
              <br />
              <span className="opacity-70">Morgen die Schweiz.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base opacity-85 md:text-lg">
              Wir starten am Zürichsee — und öffnen unser Netzwerk Schritt für Schritt für weitere
              Fahrschulen in der ganzen Schweiz.
            </p>
          </div>
        </section>

        {/* HORGEN — Hauptstandort */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 text-xs font-medium">
                  <span className="size-1.5 rounded-full bg-brand" />
                  Aktiv · Hauptstandort
                </span>
              </div>
              <div className="md:col-span-9">
                <h2 className="display-lg">Horgen.</h2>
                <p className="mt-6 max-w-2xl text-base opacity-80 md:text-lg">
                  Direkt am Zürichsee, 25 Minuten ab Zürich HB. Unser Übungsgelände, unsere
                  Mietflotte, unser Klassenzimmer.
                </p>

                <div className="mt-16 grid gap-12 md:grid-cols-3">
                  <Detail
                    label="Adresse"
                    value={
                      <>
                        Seestrasse 1<br />
                        8810 Horgen
                        <br />
                        Schweiz
                      </>
                    }
                  />
                  <Detail
                    label="Öffnungszeiten"
                    value={
                      <>
                        Mo–Fr · 08:00–18:00
                        <br />
                        Sa · 08:00–14:00
                        <br />
                        So · geschlossen
                      </>
                    }
                  />
                  <Detail
                    label="Anreise"
                    value={
                      <>
                        S2/S8 bis Horgen
                        <br />
                        A3 Ausfahrt 38
                        <br />
                        Parkplätze vorhanden
                      </>
                    }
                  />
                </div>

                <div className="mt-16 flex flex-wrap gap-3">
                  <Link to="/kontakt" className="btn-pill-solid bg-foreground text-background">
                    Standort kontaktieren <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Horgen+Schweiz"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pill text-foreground"
                  >
                    <MapPin className="size-4" /> <span>In Maps öffnen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GEPLANTE STANDORTE */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="mb-16 grid gap-6 md:grid-cols-12">
              <div className="eyebrow opacity-60 md:col-span-3">Roadmap</div>
              <div className="md:col-span-9">
                <h2 className="display-lg">Bald in Ihrer Nähe.</h2>
                <p className="mt-6 max-w-xl text-base opacity-75">
                  Wir prüfen aktiv Partnerschaften mit etablierten Fahrschulen. Nächste Standorte in
                  Planung:
                </p>
              </div>
            </div>

            <ul className="border-t border-white/20">
              {planned.map((p) => (
                <li
                  key={p.city}
                  className="group flex items-center justify-between gap-6 border-b border-white/20 py-8 transition-colors hover:bg-white/5 md:py-10"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm opacity-40">{p.year}</span>
                    <span className="display-md">{p.city}</span>
                  </div>
                  <span className="eyebrow opacity-60">In Abklärung</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PARTNER CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <div className="eyebrow opacity-60">Für Fahrschulen</div>
                <h2 className="display-xl mt-6">
                  Werden Sie
                  <br />
                  Partner.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-base opacity-80 md:text-lg">
                  Sie betreiben eine Fahrschule und möchten unsere Kursinfrastruktur und unser
                  Buchungssystem nutzen? Wir öffnen unser Netzwerk Schritt für Schritt — sprechen
                  Sie mit uns.
                </p>
                <div className="mt-10">
                  <Link to="/kontakt" className="btn-pill-solid bg-foreground text-background">
                    Partner werden <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-px border-t border-border bg-border md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Buchungssystem",
                  d: "Volle Nutzung unserer Online-Plattform und CRM.",
                },
                {
                  n: "02",
                  t: "Mietflotte",
                  d: "Zugriff auf gewartete Maschinen für Ihre Kursteilnehmer.",
                },
                {
                  n: "03",
                  t: "Marke & Marketing",
                  d: "Auftritt unter dem Dach von Motorradkurse Zürich.",
                },
              ].map((b) => (
                <div key={b.n} className="bg-background p-8 md:p-10">
                  <div className="text-sm opacity-40">{b.n}</div>
                  <div className="display-md mt-6">{b.t}</div>
                  <p className="mt-4 text-sm opacity-70">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Detail({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="border-t border-border-strong pt-5">
      <div className="eyebrow opacity-60">{label}</div>
      <p className="mt-3 text-base">{value}</p>
    </div>
  );
}
