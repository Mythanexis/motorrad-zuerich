import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Motorradkurse Zürich" },
      { name: "description", content: "Kontaktieren Sie uns für Kursanmeldungen und Vermietung. Standort Horgen, Schweiz." },
      { property: "og:title", content: "Kontakt — MK Zürich" },
      { property: "og:description", content: "Wir antworten innerhalb eines Werktages." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-background">
          <div className="mx-auto grid max-w-[1600px] gap-16 px-6 pt-24 pb-32 md:grid-cols-12 md:px-10 md:pt-32">
            <div className="md:col-span-5">
              <div className="eyebrow opacity-60">Kontakt</div>
              <h1 className="display-xl mt-6">Sprechen<br />wir.</h1>
              <p className="mt-10 max-w-md text-base opacity-70">
                Anmeldungen, Reservationen, Partneranfragen — wir antworten
                innerhalb eines Werktages.
              </p>

              <div className="mt-16 space-y-8">
                <div className="border-t border-border-strong pt-6">
                  <div className="eyebrow flex items-center gap-2 opacity-60"><Phone className="size-3" /> Telefon</div>
                  <a href="tel:+41440000000" className="mt-3 block text-2xl font-medium">+41 44 000 00 00</a>
                </div>
                <div className="border-t border-border-strong pt-6">
                  <div className="eyebrow flex items-center gap-2 opacity-60"><Mail className="size-3" /> E-Mail</div>
                  <a href="mailto:info@motorradkurse-zuerich.ch" className="mt-3 block text-xl font-medium">info@motorradkurse-zuerich.ch</a>
                </div>
                <div className="border-t border-border-strong pt-6">
                  <div className="eyebrow flex items-center gap-2 opacity-60"><MapPin className="size-3" /> Adresse</div>
                  <p className="mt-3 text-base">Seestrasse 1, 8810 Horgen</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="border border-border-strong p-8 md:p-12"
              >
                {sent ? (
                  <div className="py-20 text-center">
                    <div className="eyebrow opacity-60">Vielen Dank</div>
                    <h2 className="display-md mt-4">Nachricht gesendet.</h2>
                    <p className="mt-4 opacity-70">Wir melden uns innerhalb eines Werktages.</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <Field label="Name" name="name" required />
                    <Field label="E-Mail" name="email" type="email" required />
                    <Field label="Telefon" name="phone" type="tel" />
                    <SelectField label="Anliegen" name="topic" options={["Grundkurs", "WAB", "Vermietung", "Partnerschaft", "Anderes"]} />
                    <TextareaField label="Nachricht" name="message" required />

                    <div className="flex justify-end pt-4">
                      <button type="submit" className="btn-pill-solid">
                        Anfrage senden <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow opacity-60">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}
function TextareaField({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow opacity-60">{label}{required && " *"}</span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="eyebrow opacity-60">{label}</span>
      <select name={name} className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
