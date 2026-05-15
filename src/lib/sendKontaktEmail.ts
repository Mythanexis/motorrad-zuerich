import { createServerFn } from "@tanstack/react-start";
import { kontaktSchema, type KontaktData } from "./kontaktSchema";

export type { KontaktData };

export const sendKontaktEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => kontaktSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY nicht konfiguriert");

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Kontaktformular MK Zürich <noreply@motorradkurse-zuerich.ch>",
      to: "info@motorradkurse-zuerich.ch",
      replyTo: data.email,
      subject: `Anfrage: ${data.topic} — ${data.firstName} ${data.lastName}`,
      text: [
        `Thema: ${data.topic}`,
        `Name: ${data.firstName} ${data.lastName}`,
        `E-Mail: ${data.email}`,
        data.phone ? `Telefon: ${data.phone}` : null,
        ``,
        data.message,
      ]
        .filter((l) => l !== null)
        .join("\n"),
    });
  });
