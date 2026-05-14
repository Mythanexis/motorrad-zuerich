import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { courses, type Course } from "@/lib/courses";

export const Route = createFileRoute("/kurse/")({
  head: () => ({
    meta: [
      { title: "Kurse — Motorradkurse Zürich" },
      {
        name: "description",
        content:
          "Grundkurse, WAB-Kurse, A1, A35, A unbeschränkt und Theorie. Komplette Motorrad-Ausbildung in Horgen.",
      },
      { property: "og:title", content: "Motorradkurse — MK Zürich" },
      { property: "og:description", content: "Alle Kurse für Ihre Motorrad-Ausbildung." },
    ],
  }),
  component: KursePage,
});

function KursePage() {
  return (
    <>
      <main>
        {/* HEADER */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <div className="eyebrow opacity-60">Ausbildung · 6 Kurse</div>
                <h1 className="display-xl mt-6">
                  Alle Kurse.
                  <br />
                  <span className="opacity-60">Eine Schule.</span>
                </h1>
              </div>
              <p className="max-w-md text-base opacity-70 md:col-span-4 md:text-lg">
                Vom ersten Aufsitzen bis zur unbeschränkten Kategorie A — wir begleiten Sie durch
                jede Phase Ihrer Ausbildung.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="hairline" />
          </div>
        </section>

        {/* GRID */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <CourseTile key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>

        {/* HELP CTA */}
        <section className="bg-surface text-surface-foreground">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="eyebrow opacity-60 md:col-span-3">Unsicher?</div>
              <div className="md:col-span-9">
                <h2 className="display-lg">
                  Wir beraten Sie
                  <br />
                  <span className="opacity-60">— ehrlich und persönlich.</span>
                </h2>
                <p className="mt-8 max-w-xl text-base opacity-80">
                  Sie wissen nicht, welcher Kurs zu Ihnen passt? Schreiben Sie uns — wir empfehlen
                  den richtigen Pfad für Ihre Situation.
                </p>
                <div className="mt-10">
                  <Link to="/kontakt" className="btn-pill text-white">
                    <span>Beratung anfragen</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CourseTile({ course }: { course: Course }) {
  return (
    <Link
      to="/kurse/$slug"
      params={{ slug: course.slug }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface text-surface-foreground"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {course.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/40 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <h3 className="text-2xl font-medium leading-tight text-white drop-shadow md:text-3xl">
            {course.title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-widest text-white/70">
            {course.code}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <div className="eyebrow opacity-60">{course.duration}</div>
          <div className="mt-1.5 text-base font-medium">{course.price}</div>
        </div>
        <span className="relative inline-flex items-center gap-2 pb-1 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 group-hover:after:scale-x-100">
          Details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
