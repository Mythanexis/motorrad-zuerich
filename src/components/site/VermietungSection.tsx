import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { zahlwort } from "@/lib/sanity";

const RENTAL_IMAGE = "/assets/rental-bikes.webp";

/** MYT-13 — Vermietung: Bild, Text, CTA (Vite: statisches Bild unter `public/assets/`). */
export function VermietungSection({ anzahl }: { anzahl: number }) {
  const maschinenLabel = `${zahlwort(anzahl, "feminin")} ${anzahl === 1 ? "Maschine" : "Maschinen"}.`;

  return (
    <section className="bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img
            src={RENTAL_IMAGE}
            alt="Motorräder zur Vermietung"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-32">
          <div className="eyebrow opacity-60">02 — Vermietung</div>
          <h2 className="display-lg mt-4">
            {maschinenLabel}
            <br />
            <span className="opacity-60">Bereit, wenn Sie es sind.</span>
          </h2>
          <p className="mt-8 max-w-md text-base opacity-80">
            Eine sorgfältig kuratierte Auswahl an Motorrädern für Kursteilnehmer und Privatfahrer.
            Tageweise, stundenweise, kompromisslos gewartet.
          </p>
          <div className="mt-10">
            <Link to="/vermietung" className="btn-pill text-white">
              <span>Verfügbarkeit prüfen</span> <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
