import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
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
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
  );
}
