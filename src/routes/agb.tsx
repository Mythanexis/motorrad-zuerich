import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/agb")({
  head: () => ({ meta: [{ title: "AGB — Motorradkurse Zürich" }] }),
  component: () => (
    <main>
      <Section eyebrow="Rechtliches" title="Allgemeine Geschäftsbedingungen.">
        <p className="text-muted-foreground">Inhalt folgt.</p>
      </Section>
    </main>
  ),
});
