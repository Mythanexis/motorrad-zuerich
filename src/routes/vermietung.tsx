import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import rentalImg from "@/assets/rental-bikes.jpg";
import bikeMt07 from "@/assets/bike-mt07.jpg";
import bikeCb650r from "@/assets/bike-cb650r.jpg";
import bikeGs from "@/assets/bike-gs1250.jpg";

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
    img: bikeMt07,
    name: "Yamaha MT-07",
    cat: "Kat. A2 · 35 kW",
    tagline: "Der wendige Begleiter für den Einstieg.",
    specs: [
      { l: "Hubraum", v: "689 ccm" },
      { l: "Leistung", v: "73 PS" },
      { l: "Gewicht", v: "184 kg" },
      { l: "Typ", v: "Naked" },
    ],
    day: "CHF 140",
    week: "CHF 720",
  },
  {
    no: "02",
    img: bikeCb650r,
    name: "Honda CB650R",
    cat: "Kat. A · unbeschränkt",
    tagline: "Neo Sports Cafe — pure Linie, voller Klang.",
    specs: [
      { l: "Hubraum", v: "649 ccm" },
      { l: "Leistung", v: "95 PS" },
      { l: "Gewicht", v: "202 kg" },
      { l: "Typ", v: "Sport" },
    ],
    day: "CHF 170",
    week: "CHF 870",
  },
  {
    no: "03",
    img: bikeGs,
    name: "BMW R 1250 GS",
    cat: "Kat. A · Touring",
    tagline: "Die Königin der Adventure-Bikes.",
    specs: [
      { l: "Hubraum", v: "1254 ccm" },
      { l: "Leistung", v: "136 PS" },
      { l: "Gewicht", v: "249 kg" },
      { l: "Typ", v: "Adventure" },
    ],
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
          <div className="mx-auto max-w-[1600px] space-y-6 px-6 py-20 md:px-10 md:py-28">
            {bikes.map((b, i) => (
              <article
                key={b.no}
                className={`group relative grid overflow-hidden rounded-3xl bg-surface text-surface-foreground md:min-h-[480px] md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative md:col-span-7">
                  <div className="aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full">
                    <img
                      src={b.img}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-10 p-8 md:col-span-5 md:p-12">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="eyebrow opacity-60">{b.cat}</div>
                        <h2 className="display-md mt-3">{b.name}</h2>
                      </div>
                      <span className="text-sm opacity-40">{b.no}</span>
                    </div>
                    <p className="mt-5 max-w-md text-base opacity-80">{b.tagline}</p>

                    <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
                      {b.specs.map((s) => (
                        <div key={s.l} className="border-t border-white/20 pt-3">
                          <dt className="eyebrow opacity-60">{s.l}</dt>
                          <dd className="mt-1.5 text-base font-medium">{s.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex items-end justify-between gap-6 border-t border-white/20 pt-6">
                    <div>
                      <div className="eyebrow opacity-60">Tag · Woche</div>
                      <div className="mt-2 text-base font-medium">
                        {b.day} <span className="opacity-50">/</span> {b.week}
                      </div>
                    </div>
                    <Link
                      to="/kontakt"
                      aria-label={`${b.name} reservieren`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-surface"
                    >
                      Reservieren <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] grid gap-12 border-t border-border px-6 py-24 md:grid-cols-3 md:px-10 md:py-32">
            {[
              { t: "Inklusive", d: "Helm, Handschuhe, Versicherung mit CHF 2’000 SB." },
              { t: "Voraussetzung", d: "Gültiger Führerausweis der entsprechenden Kategorie. Mindestalter 25." },
              { t: "Übergabe", d: "Persönliche Einweisung am Standort Horgen. Volltank bei Rückgabe." },
            ].map((x) => (
              <div key={x.t} className="border-t border-border-strong pt-6">
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
