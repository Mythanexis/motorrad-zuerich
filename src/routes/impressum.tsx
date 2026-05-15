import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum — Motorradkurse Zürich" }] }),
  component: () => (
    <main>
      <Section eyebrow="Rechtliches" title="Impressum.">
        <p className="text-muted-foreground">Inhalt folgt.</p>
      </Section>
    </main>
  ),
});
