import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import {
  sanityClient,
  MOTORRAEDER_QUERY,
  urlFor,
  zahlwort,
  type SanityMotorrad,
} from "@/lib/sanity";
import rentalImg from "@/assets/rental-bikes.jpg";

export const Route = createFileRoute("/vermietung")({
  loader: async () => {
    const motorraeder = await sanityClient.fetch<SanityMotorrad[]>(MOTORRAEDER_QUERY);
    return { motorraeder };
  },
  head: ({ loaderData }) => {
    const anzahl = loaderData?.motorraeder.length ?? 0;
    const label = `${zahlwort(anzahl, "neutral")} ${anzahl === 1 ? "sorgfältig gewartete Maschine" : "sorgfältig gewartete Maschinen"}`;
    return {
      meta: [
        { title: "Vermietung — Motorradkurse Zürich" },
        {
          name: "description",
          content: `Motorrad mieten in Horgen. ${label} — tageweise oder wochenweise.`,
        },
        { property: "og:title", content: "Motorrad-Vermietung Zürich" },
        {
          property: "og:description",
          content: `${label}, kompromisslos gewartet. Mietbar in Horgen.`,
        },
      ],
    };
  },
  component: VermietungPage,
});

function W({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="word-rise-wrap">
      <span className="word-rise" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

function VermietungPage() {
  const { motorraeder } = Route.useLoaderData();
  const anzahl = motorraeder.length;
  const anzahlWort = zahlwort(anzahl, "neutral");
  const nomen = anzahl === 1 ? "Motorrad." : "Motorräder.";

  return (
    <>
      <div className="hero-curtain" aria-hidden="true" />
      <main>
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-surface text-surface-foreground">
          <img
            src={rentalImg}
            alt=""
            className="hero-img-zoom absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
            <div className="hero-fade-up eyebrow opacity-80" style={{ animationDelay: "600ms" }}>
              Vermietung
            </div>
            <h1 className="display-xl mt-6 max-w-4xl">
              <W delay={750}>{anzahlWort}</W> <W delay={870}>{nomen}</W>
              <br />
              <W delay={1000}>
                <span className="opacity-70">Eine</span>
              </W>{" "}
              <W delay={1120}>
                <span className="opacity-70">Wahl.</span>
              </W>
            </h1>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] space-y-6 px-6 py-20 md:px-10 md:py-28">
            {motorraeder.map((b, i) => {
              const imgSrc = b.bild
                ? urlFor(b.bild).width(1200).height(900).auto("format").url()
                : null;
              return (
                <article
                  key={b._id}
                  className={`group relative grid overflow-hidden rounded-3xl bg-surface text-surface-foreground md:min-h-[480px] md:grid-cols-12 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative md:col-span-7">
                    <div className="aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full">
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={b.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="h-full w-full bg-surface-strong" />
                      )}
                    </div>
                    {b.ausgebucht && (
                      <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        Ausgebucht
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between gap-10 p-8 md:col-span-5 md:p-12">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="eyebrow opacity-60">{b.kategorie}</div>
                          <h2 className="display-md mt-3">{b.name}</h2>
                        </div>
                        <span className="text-sm opacity-40">
                          {String(b.nummer).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-5 max-w-md text-base opacity-80">{b.tagline}</p>

                      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
                        {(b.specs ?? []).map((s) => (
                          <div key={s.bezeichnung} className="border-t border-white/20 pt-3">
                            <dt className="eyebrow opacity-60">{s.bezeichnung}</dt>
                            <dd className="mt-1.5 text-base font-medium">{s.wert}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="flex items-end justify-between gap-6 border-t border-white/20 pt-6">
                      <div>
                        <div className="eyebrow opacity-60">Tag · Woche</div>
                        <div className="mt-2 text-base font-medium">
                          {b.preisTag} <span className="opacity-50">/</span> {b.preisWoche}
                        </div>
                      </div>
                      {b.ausgebucht ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium opacity-50">
                          Ausgebucht
                        </span>
                      ) : (
                        <Link
                          to="/kontakt"
                          aria-label={`${b.name} reservieren`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-surface"
                        >
                          Reservieren <ArrowRight className="size-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] grid gap-12 border-t border-border px-6 py-24 md:grid-cols-3 md:px-10 md:py-32">
            {[
              {
                t: "Inklusive",
                d: "Helm, Handschuhe und Vollkaskoversicherung. Selbstbehalt im Schadensfall CHF 2’000.",
              },
              {
                t: "Voraussetzung",
                d: "Gültiger Führerausweis der entsprechenden Kategorie. Mindestalter 25.",
              },
              {
                t: "Übergabe",
                d: "Persönliche Einweisung am Standort Horgen. Volltank bei Rückgabe.",
              },
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
