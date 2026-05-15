import { Section } from "@/components/site/Section";

export type StatItem = {
  value: string;
  label: string;
};

/** MYT-14 — Kennzahlen; neue Einträge einfach hier ergänzen. */
export const STATS: StatItem[] = [
  { value: "1’200+", label: "Ausgebildete Fahrer" },
  { value: "12", label: "Jahre Erfahrung" },
  { value: "1", label: "Standort · Horgen" },
  { value: "98%", label: "Bestehensquote" },
];

export function StatsSection() {
  return (
    <Section className="border-y border-border">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-t border-border-strong pt-6">
            <dt className="display-md font-semibold tracking-tight">{stat.value}</dt>
            <dd className="eyebrow mt-3 text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
