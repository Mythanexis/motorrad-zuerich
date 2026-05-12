import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Motorradkurse Zürich" },
      {
        name: "description",
        content:
          "Kontaktieren Sie uns für Kursanmeldungen und Vermietung. Standort Horgen, Schweiz.",
      },
      { property: "og:title", content: "Kontakt — MK Zürich" },
      { property: "og:description", content: "Wir antworten innerhalb eines Werktages." },
    ],
  }),
  component: KontaktPage,
});

const topics = [
  "Grundkurs",
  "WAB",
  "A1 / A35 / A",
  "Theoriekurs",
  "Vermietung",
  "Partnerschaft",
  "Anderes",
];

function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(topics[0]);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* HERO */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-[1600px] px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <div className="eyebrow opacity-60">Kontakt</div>
                <h1 className="display-xl mt-6">
                  Sprechen
                  <br />
                  wir.
                </h1>
              </div>
              <p className="max-w-md text-base opacity-80 md:col-span-4 md:text-lg">
                Anmeldungen, Reservationen, Partneranfragen — wir antworten innerhalb eines
                Werktages.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK CONTACTS */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-border md:grid-cols-3">
            <ContactTile
              icon={<Phone className="size-4" />}
              label="Telefon"
              value="+41 76 430 31 01"
              href="tel:+41764303101"
            />
            <ContactTile
              icon={<Mail className="size-4" />}
              label="E-Mail"
              value="info@motorradkurse-zuerich.ch"
              href="mailto:info@motorradkurse-zuerich.ch"
            />
            <ContactTile
              icon={<MapPin className="size-4" />}
              label="Standort"
              value="Seestrasse 1, 8810 Horgen"
              href="https://maps.google.com/?q=Seestrasse+1+Horgen"
            />
          </div>
        </section>

        {/* FORM */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="eyebrow opacity-60">Anfrage</div>
                <h2 className="display-lg mt-4">
                  Schreiben
                  <br />
                  Sie uns.
                </h2>
                <p className="mt-8 max-w-sm text-base opacity-70">
                  Je präziser Ihre Anfrage, desto schneller können wir den passenden Kurs oder
                  Termin vorschlagen.
                </p>

                <div className="mt-16 space-y-6 border-t border-border-strong pt-6">
                  <Stat n="<24h" l="Antwortzeit Mo–Fr" />
                  <Stat n="98%" l="Bestehensquote" />
                  <Stat n="1’200+" l="Ausgebildete Fahrer" />
                </div>
              </div>

              <div className="md:col-span-8">
                {sent ? (
                  <div className="flex h-full flex-col items-start justify-center border-t border-border-strong pt-12">
                    <div className="eyebrow opacity-60">Vielen Dank</div>
                    <h3 className="display-lg mt-4">Wir melden uns.</h3>
                    <p className="mt-6 max-w-md text-base opacity-70">
                      Ihre Nachricht ist bei uns angekommen. Wir antworten innerhalb eines
                      Werktages.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-12"
                  >
                    <div>
                      <div className="eyebrow opacity-60">Anliegen</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {topics.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTopic(t)}
                            className={[
                              "rounded-full border px-4 py-2 text-sm transition-colors",
                              topic === t
                                ? "border-foreground bg-foreground text-background"
                                : "border-border-strong text-foreground hover:bg-muted",
                            ].join(" ")}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2">
                      <Field label="Vorname" name="firstName" required />
                      <Field label="Nachname" name="lastName" required />
                      <Field label="E-Mail" name="email" type="email" required />
                      <Field label="Telefon" name="phone" type="tel" />
                    </div>

                    <TextareaField label="Nachricht" name="message" required />

                    <div className="flex items-center justify-between gap-6 border-t border-border-strong pt-8">
                      <p className="max-w-md text-xs opacity-60">
                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir verwenden
                        Ihre Daten ausschliesslich zur Bearbeitung Ihrer Anfrage.
                      </p>
                      <button
                        type="submit"
                        className="btn-pill-solid bg-foreground text-background"
                      >
                        Anfrage senden <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-start justify-between gap-6 bg-background p-10 transition-colors hover:bg-muted md:p-14"
    >
      <div>
        <div className="eyebrow flex items-center gap-2 opacity-60">
          {icon} {label}
        </div>
        <div className="mt-5 text-xl font-medium md:text-2xl">{value}</div>
      </div>
      <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
      <span className="text-2xl font-medium">{n}</span>
      <span className="eyebrow opacity-60">{l}</span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow opacity-60">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow opacity-60">
        {label}
        {required && " *"}
      </span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}
