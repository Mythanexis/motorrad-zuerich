import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz — Motorradkurse Zürich" }] }),
  component: () => (
    <main>
      <Section eyebrow="Rechtliches" title="Datenschutz.">
        <p className="text-muted-foreground">Inhalt folgt.</p>
      </Section>
    </main>
  ),
});
