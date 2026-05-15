import { z } from "zod";

export const kontaktSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  topic: z.string().min(1),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen enthalten"),
  honeypot: z.string().max(0),
});

export type KontaktData = z.infer<typeof kontaktSchema>;
