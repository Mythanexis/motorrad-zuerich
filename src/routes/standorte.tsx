import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Plus } from "lucide-react";

export const Route = createFileRoute("/standorte")({
  head: () => ({
    meta: [
      { title: "Standorte — Motorradkurse Zürich" },
      { name: "description", content: "Unser Hauptstandort in Horgen. Bald an weiteren Orten in der Schweiz." },
      { property: "og:title", content: "Standorte — MK Zürich" },
      { property: "og:description", content: "Heute Horgen. Morgen die Schweiz." },
    ],
  }),
  component: StandortePage,
});

function StandortePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24">
            <div className="eyebrow opacity-60">Standorte</div>
            <h1 className="display-xl mt-6 max-w-5xl">Heute Horgen.<br /><span className="opacity-60">Morgen die Schweiz.</span></h1>
            <p className="mt-10 max-w-xl text-base opacity-70 md:text-lg">
              Wir starten am Zürichsee — und öffnen unser Netzwerk Schritt für
              Schritt für weitere Fahrschulen in der ganzen Schweiz.
            </p>
          </div>
          <div className="mx-auto max-w-[1600px] px-6 md:px-10"><div className="hairline" /></div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-px bg-border md:grid-cols-3">
              {/* Active location */}
              <div className="bg-background p-10 md:col-span-2 md:p-16">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="eyebrow opacity-60">Hauptstandort</div>
                    <h2 className="display-lg mt-4">Horgen</h2>
                  </div>
                  <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 text-xs">
                    <span className="size-1.5 rounded-full bg-brand" />
                    Aktiv
                  </span>
                </div>
                <div className="mt-12 grid gap-10 md:grid-cols-2">
                  <div>
                    <div className="eyebrow opacity-60">Adresse</div>
                    <p className="mt-3 text-base">
                      Seestrasse 1<br />
                      8810 Horgen<br />
                      Schweiz
                    </p>
                  </div>
                  <div>
                    <div className="eyebrow opacity-60">Öffnungszeiten</div>
                    <p className="mt-3 text-base">
                      Mo–Fr · 08:00–18:00<br />
                      Sa · 08:00–14:00
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex items-center gap-3 text-sm opacity-70">
                  <MapPin className="size-4" /> 25 Min. ab Zürich HB
                </div>
              </div>

              {/* Coming soon / partner CTA */}
              <div className="bg-surface p-10 text-surface-foreground md:p-16">
                <div className="eyebrow opacity-60">Bald</div>
                <h3 className="display-md mt-4">Werden Sie Partner.</h3>
                <p className="mt-6 text-sm opacity-80">
                  Sie betreiben eine Fahrschule und möchten unsere Kursinfrastruktur
                  und unser Buchungssystem nutzen? Wir öffnen unser Netzwerk.
                </p>
                <div className="mt-12 space-y-3">
                  {["Zürich Stadt", "Winterthur", "Zug"].map((c) => (
                    <div key={c} className="flex items-center justify-between border-t border-white/15 pt-3 text-sm">
                      <span>{c}</span>
                      <span className="flex items-center gap-2 opacity-60"><Plus className="size-3" /> geplant</span>
                    </div>
                  ))}
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
