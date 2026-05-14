import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { courses, getCourse, type Course } from "@/lib/courses";

export const Route = createFileRoute("/kurse/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return { meta: [{ title: "Kurs — Motorradkurse Zürich" }] };
    return {
      meta: [
        { title: `${c.title} — Motorradkurse Zürich` },
        { name: "description", content: c.tagline },
        { property: "og:title", content: `${c.title} — MK Zürich` },
        { property: "og:description", content: c.tagline },
        { property: "og:image", content: c.img },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <main className="pb-32 pt-20 text-center">
        <div className="eyebrow opacity-60">404</div>
        <h1 className="display-lg mt-4">Kurs nicht gefunden.</h1>
        <Link to="/kurse" className="btn-pill mt-10 inline-flex">
          Zur Übersicht <ArrowRight className="size-4" />
        </Link>
      </main>
      <Footer />
    </>
  ),
  component: CourseDetail,
});

function TitleWords({ text, baseDelay }: { text: string; baseDelay: number }) {
  const words = text.split(" ");
  return (
    <>
      {words
        .map((word, i) => (
          <span key={i} className="word-rise-wrap">
            <span className="word-rise" style={{ animationDelay: `${baseDelay + i * 80}ms` }}>
              {word}
            </span>
          </span>
        ))
        .reduce<React.ReactNode[]>((acc, el, i) => (i === 0 ? [el] : [...acc, " ", el]), [])}
    </>
  );
}

function CourseDetail() {
  const data = Route.useLoaderData();
  const course: Course = data.course;
  const idx = courses.findIndex((c) => c.slug === course.slug);
  const next = courses[(idx + 1) % courses.length];
  const titleWords = course.title.split(" ").length;
  const taglineDelay = 1500 + titleWords * 80 + 180;
  const statsDelay = taglineDelay + 150;

  return (
    <>
      <div className="hero-curtain" />
      <main className="-mt-16">
        {/* HERO */}
        <section className="relative h-svh overflow-hidden bg-surface text-surface-foreground">
          <img
            src={course.img}
            alt={course.title}
            className="absolute inset-0 h-full w-full object-cover hero-img-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pb-10 md:px-10 md:pb-14">
              <nav
                aria-label="breadcrumb"
                className="hero-fade-up mb-8"
                style={{ animationDelay: "1250ms" }}
              >
                <ol className="flex items-center gap-1.5 text-sm text-white/70">
                  <li>
                    <Link to="/" className="hover:text-white">
                      Startseite
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="size-3.5" />
                  </li>
                  <li>
                    <Link to="/kurse" className="hover:text-white">
                      Kurse
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="size-3.5" />
                  </li>
                  <li className="text-white">{course.title}</li>
                </ol>
              </nav>
              <div
                className="hero-fade-up flex flex-wrap gap-2"
                style={{ animationDelay: "1380ms" }}
              >
                {course.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="display-xl mt-6 max-w-4xl">
                <TitleWords text={course.title} baseDelay={1500} />
              </h1>
              <p
                className="hero-fade-up mt-6 max-w-xl text-base opacity-85 md:text-lg"
                style={{ animationDelay: `${taglineDelay}ms` }}
              >
                {course.tagline}
              </p>
            </div>
            {/* KEY FACTS strip — anchored to bottom of hero */}
            <div
              className="hero-fade-up bg-foreground text-background"
              style={{ animationDelay: `${statsDelay}ms` }}
            >
              <div className="mx-auto grid max-w-[1600px] gap-px bg-white/15 px-0 grid-cols-2 md:grid-cols-4">
                {[
                  { l: "Dauer", v: course.duration },
                  { l: "Ab", v: course.price },
                  { l: "Ort", v: course.location },
                  { l: "Mindestalter", v: course.minAge },
                ].map((f) => (
                  <div key={f.l} className="bg-foreground p-8 md:p-10">
                    <div className="eyebrow opacity-60">{f.l}</div>
                    <div className="mt-3 text-xl font-medium md:text-2xl">{f.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO + MODULES */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="eyebrow opacity-60">Über den Kurs</div>
                <h2 className="display-lg mt-4">Ihr Pfad.</h2>
              </div>
              <div className="space-y-6 md:col-span-7">
                {course.longDescription.map((p, i) => (
                  <p key={i} className="text-base opacity-80 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-24 md:mt-32">
              <div className="eyebrow opacity-60">Module</div>
              <ul className="mt-8 border-t border-border-strong">
                {course.modules.map((m, i) => (
                  <li
                    key={m.title}
                    className="grid gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-12"
                  >
                    <div className="text-sm opacity-40 md:col-span-1">0{i + 1}</div>
                    <h3 className="display-md md:col-span-5">{m.title}</h3>
                    <p className="text-base opacity-80 md:col-span-6">{m.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TERMINE */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="eyebrow opacity-60">Verfügbarkeit</div>
                <h2 className="display-lg mt-4">Nächste Termine.</h2>
              </div>
              <div className="md:col-span-7">
                {course.dates[0].spots === -1 ? (
                  <div className="border-t border-white/20 py-10">
                    <p className="text-base opacity-70">
                      Dieser Kurs wird individuell geplant. Kontaktieren Sie uns für einen
                      persönlichen Termin.
                    </p>
                    <Link to="/kontakt" className="btn-pill mt-8 inline-flex text-white">
                      Termin anfragen <ArrowRight className="size-4" />
                    </Link>
                  </div>
                ) : (
                  <ul className="border-t border-white/20">
                    {course.dates.map((d) => {
                      const full = d.spots === 0;
                      const few = d.spots > 0 && d.spots <= 2;
                      return (
                        <li
                          key={d.label}
                          className="grid items-center gap-6 border-b border-white/10 py-6 md:grid-cols-12"
                        >
                          <span className="text-lg font-medium md:col-span-6">{d.label}</span>
                          <span
                            className={`text-sm md:col-span-3 ${full ? "opacity-30" : few ? "opacity-100" : "opacity-60"}`}
                          >
                            {full
                              ? "Ausgebucht"
                              : few
                                ? `Noch ${d.spots} Plätze`
                                : `${d.spots} Plätze frei`}
                          </span>
                          <div className="md:col-span-3 md:text-right">
                            {full ? (
                              <Link to="/kontakt" className="btn-pill text-sm text-white/50">
                                Warteliste <ArrowRight className="size-3.5" />
                              </Link>
                            ) : (
                              <Link to="/kontakt" className="btn-pill text-sm text-white">
                                Anmelden <ArrowRight className="size-3.5" />
                              </Link>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* INCLUDES + REQUIREMENTS */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-2 md:gap-24">
              <div>
                <div className="eyebrow opacity-60">Im Kurs enthalten</div>
                <ul className="mt-8 space-y-4">
                  {course.includes.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 border-t border-border py-4 text-base"
                    >
                      <Check className="size-4 shrink-0 opacity-50" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow opacity-60">Voraussetzungen</div>
                <ul className="mt-8 space-y-0">
                  {course.requirements.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 border-t border-border py-4 text-base"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-32">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-foreground to-foreground/70 px-10 py-16 text-background md:px-16 md:py-20">
              <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="eyebrow opacity-40">Anmeldung</div>
                  <h2 className="display-xl mt-4">Bereit für {course.shortTitle}?</h2>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link to="/kontakt" className="btn-pill-solid bg-background text-foreground">
                    Jetzt anmelden <ArrowRight className="size-4" />
                  </Link>
                  <Link to="/kurse" className="btn-pill text-background">
                    Andere Kurse <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT COURSE */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="hairline" />
            <Link
              to="/kurse/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-between gap-8 py-12 md:py-16"
            >
              <div>
                <div className="eyebrow opacity-40">Nächster Kurs</div>
                <h3 className="display-lg mt-3 transition-opacity duration-300 group-hover:opacity-60">
                  {next.title}
                </h3>
              </div>
              <ArrowRight className="size-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
