import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import rentalImg from "@/assets/rental-bikes.jpg";

export const Route = createFileRoute("/vermietung")({
  head: () => ({
    meta: [
      { title: "Vermietung — Motorradkurse Zürich" },
      { name: "description", content: "Motorrad mieten in Horgen. Drei sorgfältig gewartete Maschinen — tageweise oder stundenweise." },
      { property: "og:title", content: "Motorrad-Vermietung Zürich" },
      { property: "og:description", content: "Drei Maschinen, kompromisslos gewartet. Mietbar in Horgen." },
    ],
  }),
  component: VermietungPage,
});

const bikes = [
  {
    no: "01",
    name: "Yamaha MT-07",
    cat: "Kat. A2 · 35 kW",
    specs: ["689 ccm", "73 PS (gedrosselt)", "184 kg", "Naked Bike"],
    day: "CHF 140",
    week: "CHF 720",
  },
  {
    no: "02",
    name: "Honda CB650R",
    cat: "Kat. A · unbeschränkt",
    specs: ["649 ccm", "95 PS", "202 kg", "Neo Sports Cafe"],
    day: "CHF 170",
    week: "CHF 870",
  },
  {
    no: "03",
    name: "BMW R 1250 GS",
    cat: "Kat. A · Touring",
    specs: ["1254 ccm", "136 PS", "249 kg", "Adventure"],
    day: "CHF 220",
    week: "CHF 1’150",
  },
];

function VermietungPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-surface text-surface-foreground">
          <img src={rentalImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
            <div className="eyebrow opacity-80">Vermietung</div>
            <h1 className="display-xl mt-6 max-w-4xl">Drei Motorräder.<br /><span className="opacity-70">Eine Wahl.</span></h1>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            {bikes.map((b, i) => (
              <article key={b.no} className={`grid items-end gap-8 py-16 md:grid-cols-12 md:py-24 ${i !== 0 ? "border-t border-border" : ""}`}>
                <div className="md:col-span-1 text-sm opacity-40">{b.no}</div>
                <div className="md:col-span-4">
                  <div className="eyebrow opacity-60">{b.cat}</div>
                  <h2 className="display-md mt-3">{b.name}</h2>
                </div>
                <div className="md:col-span-4">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm opacity-80">
                    {b.specs.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <div className="eyebrow opacity-60">Tag / Woche</div>
                  <div className="mt-2 text-base font-medium">{b.day} <span className="opacity-50">/</span> {b.week}</div>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <Link to="/kontakt" aria-label={`${b.name} reservieren`} className="inline-flex items-center justify-center rounded-full border border-border-strong p-3 transition-colors hover:bg-foreground hover:text-background">
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto max-w-[1600px] grid gap-12 px-6 py-24 md:grid-cols-3 md:px-10 md:py-32">
            {[
              { t: "Inklusive", d: "Helm, Handschuhe, Versicherung mit CHF 2’000 SB." },
              { t: "Voraussetzung", d: "Gültiger Führerausweis der entsprechenden Kategorie. Mindestalter 25." },
              { t: "Übergabe", d: "Persönliche Einweisung am Standort Horgen. Volltank bei Rückgabe." },
            ].map((x) => (
              <div key={x.t} className="border-t border-white/30 pt-6">
                <div className="eyebrow opacity-60">{x.t}</div>
                <p className="mt-4 text-base opacity-90">{x.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
