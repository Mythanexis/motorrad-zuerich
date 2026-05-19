import { defineField, defineType } from "sanity";

export const kursSchema = defineType({
  name: "kurs",
  title: "Kurs",
  type: "document",
  fields: [
    defineField({
      name: "aktiv",
      title: "Aktiv (auf Website sichtbar)",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "imFooterAnzeigen",
      title: "Im Footer anzeigen",
      type: "boolean",
      initialValue: false,
      description: "Kurs wird im Footer unter «Angebot» aufgelistet",
    }),
    defineField({
      name: "nummer",
      title: "Kursnummer",
      type: "number",
      description: "Reihenfolge auf der Website (01, 02 …)",
    }),
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortTitel",
      title: "Kurztitel (für CTA-Buttons)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "URL-Slug",
      type: "slug",
      options: { source: "titel" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline (Untertitel im Hero)",
      type: "string",
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      description: 'z.B. "Kat. A1, A35, A"',
    }),
    defineField({
      name: "badges",
      title: "Badges (Tags auf der Kurs-Card)",
      type: "array",
      of: [{ type: "string" }],
      description: 'z.B. ["Pflicht", "3 Tage"]',
    }),
    defineField({
      name: "dauer",
      title: "Dauer",
      type: "string",
      description: 'z.B. "3 Tage | 12 Std"',
    }),
    defineField({
      name: "preis",
      title: "Preis",
      type: "string",
      description: 'z.B. "CHF 590" oder "ab CHF 690"',
    }),
    defineField({
      name: "preisAufAnfrage",
      title: "Preis auf Anfrage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "minAlter",
      title: "Mindestalter",
      type: "string",
      description: 'z.B. "16 Jahre (A1)"',
    }),
    defineField({
      name: "ort",
      title: "Ort",
      type: "string",
      initialValue: "Horgen, Zürichsee",
    }),
    defineField({
      name: "beschreibung",
      title: "Kurzbeschreibung (für Kurs-Card)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "longDescription",
      title: "Lange Beschreibung (Absätze für Detailseite)",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "module",
      title: "Module / Tagesplan",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "titel", title: "Titel", type: "string" }),
            defineField({ name: "beschreibung", title: "Beschreibung", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "titel", subtitle: "beschreibung" } },
        },
      ],
    }),
    defineField({
      name: "enthalten",
      title: "Im Kurs enthalten",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "anforderungen",
      title: "Voraussetzungen",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "bild",
      title: "Kursbild",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt-Text", type: "string" })],
    }),
    defineField({
      name: "termine",
      title: "Termine",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Datum",
              type: "string",
              description: 'z.B. "30. Mai – 1. Jun 2026"',
            }),
            defineField({
              name: "spots",
              title: "Freie Plätze (-1 = Auf Anfrage)",
              type: "number",
            }),
          ],
          preview: { select: { title: "label", subtitle: "spots" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "titel", subtitle: "kategorie", media: "bild" },
  },
  orderings: [
    {
      title: "Kursnummer",
      name: "nummerAsc",
      by: [{ field: "nummer", direction: "asc" }],
    },
  ],
});
