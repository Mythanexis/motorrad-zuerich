import { defineField, defineType } from "sanity";

export const motorradSchema = defineType({
  name: "motorrad",
  title: "Motorrad",
  type: "document",
  fields: [
    defineField({
      name: "ausgebucht",
      title: "Ausgebucht",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "nummer",
      title: "Nummer",
      type: "number",
      description: "Reihenfolge auf der Website (1, 2, 3 …)",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      description: 'z.B. "Kat. A2 · 35 kW"',
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "bild",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt-Text", type: "string" })],
    }),
    defineField({
      name: "specs",
      title: "Technische Daten",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "bezeichnung",
              title: "Bezeichnung",
              type: "string",
              description: 'z.B. "Hubraum"',
            }),
            defineField({
              name: "wert",
              title: "Wert",
              type: "string",
              description: 'z.B. "689 ccm"',
            }),
          ],
          preview: { select: { title: "bezeichnung", subtitle: "wert" } },
        },
      ],
    }),
    defineField({
      name: "preisTag",
      title: "Preis pro Tag",
      type: "string",
      description: 'z.B. "CHF 140"',
    }),
    defineField({
      name: "preisWoche",
      title: "Preis pro Woche",
      type: "string",
      description: 'z.B. "CHF 720"',
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "kategorie", media: "bild" },
  },
  orderings: [
    {
      title: "Nummer",
      name: "nummerAsc",
      by: [{ field: "nummer", direction: "asc" }],
    },
  ],
});
