import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-semibold tracking-[0.18em]">MK·ZÜRICH</div>
            <p className="mt-6 max-w-sm text-sm opacity-70">
              Motorradkurse Zürich. Ausbildung, Weiterbildung und Vermietung — kompromisslos in
              Qualität, präzise in der Ausführung.
            </p>
          </div>

          <div>
            <div className="eyebrow opacity-60">Angebot</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/kurse" className="opacity-80 hover:opacity-100">
                  Grundkurse
                </Link>
              </li>
              <li>
                <Link to="/kurse" className="opacity-80 hover:opacity-100">
                  WAB / 2-Phasen
                </Link>
              </li>
              <li>
                <Link to="/vermietung" className="opacity-80 hover:opacity-100">
                  Vermietung
                </Link>
              </li>
              <li>
                <Link to="/standorte" className="opacity-80 hover:opacity-100">
                  Standorte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow opacity-60">Kontakt</div>
            <ul className="mt-5 space-y-3 text-sm opacity-80">
              <li>
                Seestrasse 1<br />
                8810 Horgen
              </li>
              <li>
                <a href="tel:+41764303101" className="hover:opacity-100">
                  +41 76 430 31 01
                </a>
              </li>
              <li>
                <a href="mailto:info@motorradkurse-zuerich.ch" className="hover:opacity-100">
                  info@motorradkurse-zuerich.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs opacity-60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Motorradkurse Zürich</div>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:opacity-100">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:opacity-100">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:opacity-100">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
