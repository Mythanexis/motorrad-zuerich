import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
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
      <Header />
      <main className="pt-32 pb-32 text-center">
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

function CourseDetail() {
  const data = Route.useLoaderData();
  const course: Course = data.course;
  const idx = courses.findIndex((c) => c.slug === course.slug);
  const next = courses[(idx + 1) % courses.length];

  return (
    <>
      <Header variant="overlay" />
      <main>
        {/* HERO */}
        <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-surface text-surface-foreground">
          <img
            src={course.img}
            alt={course.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
            <Link
              to="/kurse"
              className="mb-8 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            >
              <ArrowLeft className="size-4" /> Alle Kurse
            </Link>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="display-xl mt-6 max-w-4xl">{course.title}</h1>
            <p className="mt-6 max-w-xl text-base opacity-85 md:text-lg">{course.tagline}</p>
          </div>
        </section>

        {/* KEY FACTS strip */}
        <section className="bg-foreground text-background">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-white/15 px-0 md:grid-cols-4">
            {[
              { l: "Dauer", v: course.duration },
              { l: "Ab", v: course.price },
              { l: "Kategorie", v: course.category },
              { l: "Mindestalter", v: course.minAge },
            ].map((f) => (
              <div key={f.l} className="bg-foreground p-8 md:p-10">
                <div className="eyebrow opacity-60">{f.l}</div>
                <div className="mt-3 text-xl font-medium md:text-2xl">{f.v}</div>
              </div>
            ))}
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

        {/* INCLUDES + REQUIREMENTS */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
            <div>
              <div className="eyebrow opacity-60">Im Kurs enthalten</div>
              <ul className="mt-8 space-y-4">
                {course.includes.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-t border-white/20 pt-4 text-base"
                  >
                    <Check className="mt-1 size-4 shrink-0 opacity-70" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow opacity-60">Voraussetzungen</div>
              <ul className="mt-8 space-y-4">
                {course.requirements.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-t border-white/20 pt-4 text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="eyebrow opacity-60 md:col-span-3">Anmeldung</div>
              <div className="md:col-span-9">
                <h2 className="display-xl">
                  Bereit für
                  <br />
                  {course.shortTitle}?
                </h2>
                <div className="mt-12 flex flex-wrap gap-3">
                  <Link to="/kontakt" className="btn-pill-solid bg-foreground text-background">
                    Jetzt anmelden <ArrowRight className="size-4" />
                  </Link>
                  <Link to="/kurse" className="btn-pill text-foreground">
                    <span>Andere Kurse</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT COURSE */}
        <section className="bg-foreground text-background">
          <Link to="/kurse/$slug" params={{ slug: next.slug }} className="group block">
            <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <div className="eyebrow opacity-60">Nächster Kurs</div>
                  <h3 className="display-lg mt-4">{next.title}</h3>
                </div>
                <ArrowRight className="size-8 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
