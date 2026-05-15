import { forwardRef, useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { kontaktSchema, type KontaktData } from "@/lib/kontaktSchema";

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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<KontaktData>({
    resolver: zodResolver(kontaktSchema),
    defaultValues: { topic: topics[0], honeypot: "" },
  });

  const topic = watch("topic");

  const onSubmit = async (_data: KontaktData) => {
    // TODO: E-Mail-Versand via Resend (MYT-20)
    setStatus("success");
  };

  return (
    <>
      <main>
        {/* HERO */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-[1600px] px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <div
                  className="hero-fade-up eyebrow opacity-80"
                  style={{ animationDelay: "200ms" }}
                >
                  Kontakt
                </div>
                <h1 className="display-xl mt-6">
                  <span className="word-rise-wrap">
                    <span className="word-rise" style={{ animationDelay: "350ms" }}>
                      Sprechen
                    </span>
                  </span>
                  <br />
                  <span className="word-rise-wrap">
                    <span className="word-rise" style={{ animationDelay: "480ms" }}>
                      wir.
                    </span>
                  </span>
                </h1>
              </div>
              <p
                className="hero-fade-up max-w-md text-base opacity-80 md:col-span-4 md:text-lg"
                style={{ animationDelay: "650ms" }}
              >
                Anmeldungen, Reservationen, Partneranfragen — wir antworten innerhalb eines
                Werktages.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK CONTACTS */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-border lg:grid-cols-3">
            <ContactTile
              icon={<Phone className="size-4" />}
              label="Telefon"
              value="+41 76 430 31 01"
              href="tel:+41764303101"
              hoverIcon={<Phone className="size-5" />}
            />
            <ContactTile
              icon={<Mail className="size-4" />}
              label="E-Mail"
              value="info@motorradkurse-zuerich.ch"
              href="mailto:info@motorradkurse-zuerich.ch"
              hoverIcon={<Mail className="size-5" />}
            />
            <ContactTile
              icon={<MapPin className="size-4" />}
              label="Standort"
              value="Seestrasse 1, 8810 Horgen"
              href="https://maps.google.com/?q=Seestrasse+1+Horgen"
              hoverIcon={<MapPin className="size-5" />}
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
                  <Stat n="&lt;24h" l="Antwortzeit Mo–Fr" />
                  <Stat n="98%" l="Bestehensquote" />
                  <Stat n="1'200+" l="Ausgebildete Fahrer" />
                </div>
              </div>

              <div className="md:col-span-8">
                {status === "success" ? (
                  <div className="flex h-full flex-col items-start justify-center border-t border-border-strong pt-12">
                    <div className="eyebrow opacity-60">Vielen Dank</div>
                    <h3 className="display-lg mt-4">Wir melden uns.</h3>
                    <p className="mt-6 max-w-md text-base opacity-70">
                      Ihre Nachricht ist bei uns angekommen. Wir antworten innerhalb eines
                      Werktages.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    {/* Honeypot — unsichtbar für User, Bots füllen es aus */}
                    <input
                      {...register("honeypot")}
                      type="text"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute -left-[9999px] opacity-0"
                      autoComplete="off"
                    />

                    <div>
                      <div className="eyebrow opacity-60">Anliegen</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {topics.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setValue("topic", t)}
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
                      <Field
                        label="Vorname"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                        required
                      />
                      <Field
                        label="Nachname"
                        {...register("lastName")}
                        error={errors.lastName?.message}
                        required
                      />
                      <Field
                        label="E-Mail"
                        type="email"
                        {...register("email")}
                        error={errors.email?.message}
                        required
                      />
                      <Field label="Telefon" type="tel" {...register("phone")} />
                    </div>

                    <TextareaField
                      label="Nachricht"
                      {...register("message")}
                      error={errors.message?.message}
                      required
                    />

                    {status === "error" && (
                      <p className="text-sm text-red-500">
                        Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder
                        schreiben Sie uns direkt an info@motorradkurse-zuerich.ch.
                      </p>
                    )}

                    <div className="flex items-center justify-between gap-6 border-t border-border-strong pt-8">
                      <p className="max-w-md text-xs opacity-60">
                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir verwenden
                        Ihre Daten ausschliesslich zur Bearbeitung Ihrer Anfrage.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill-solid bg-foreground text-background disabled:opacity-50"
                      >
                        {isSubmitting ? "Wird gesendet…" : "Anfrage senden"}
                        {!isSubmitting && <ArrowRight className="size-4" />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
  hoverIcon,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  hoverIcon: ReactNode;
}) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const isHovered = useRef(false);

  const animate = useCallback(() => {
    const lerp = 0.1;
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${currentPos.current.x}px`;
      tooltipRef.current.style.top = `${currentPos.current.y}px`;
    }
    if (isHovered.current) rafId.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    isHovered.current = true;
    targetPos.current = { x: e.clientX, y: e.clientY };
    currentPos.current = { x: e.clientX, y: e.clientY };
    if (tooltipRef.current) tooltipRef.current.style.opacity = "1";
    rafId.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
    cancelAnimationFrame(rafId.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => () => cancelAnimationFrame(rafId.current), []);

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group relative flex items-start justify-between gap-6 bg-background p-10 transition-colors hover:bg-muted lg:p-14 cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div>
        <div className="eyebrow flex items-center gap-2 opacity-60">
          {icon} {label}
        </div>
        <div className="mt-5 text-xl font-medium md:text-2xl">{value}</div>
      </div>
      <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />

      <div
        ref={tooltipRef}
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s ease",
          zIndex: 9999,
        }}
        className="flex size-14 items-center justify-center rounded-full bg-black text-white"
      >
        {hoverIcon}
      </div>
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

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, type = "text", required, error, ...rest }, ref) => (
    <label className="block">
      <span className="eyebrow opacity-60">
        {label}
        {required && " *"}
      </span>
      <input
        ref={ref}
        type={type}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  ),
);
Field.displayName = "Field";

type TextareaFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
};

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, required, error, ...rest }, ref) => (
    <label className="block">
      <span className="eyebrow opacity-60">
        {label}
        {required && " *"}
      </span>
      <textarea
        ref={ref}
        rows={5}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  ),
);
TextareaField.displayName = "TextareaField";
