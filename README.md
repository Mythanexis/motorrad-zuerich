# Motorradkurse Zürich

Website für Motorradkurse in Zürich.

## Tech Stack

- **Framework:** TanStack Start (React 19 + TypeScript)
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS v4
- **UI Komponenten:** shadcn/ui (Radix UI)
- **Build Tool:** Vite
- **Package Manager:** Bun
- **Deployment:** Cloudflare (via Wrangler)

## Ordnerstruktur

```
src/
├── routes/        # Seiten & Layouts (TanStack Router)
├── components/
│   ├── ui/        # shadcn/ui Basiskomponenten
│   └── site/      # Projekt-spezifische Komponenten
├── lib/           # Hilfsfunktionen & Utilities
├── hooks/         # Custom React Hooks
└── assets/        # Statische Assets (werden von Vite verarbeitet)
public/
└── assets/        # Statische Assets (direkt ausgeliefert)
```

## Setup

```bash
# Abhängigkeiten installieren
bun install

# Entwicklungsserver starten (http://localhost:8080)
bun run dev

# Produktions-Build erstellen
bun run build

# Build-Vorschau starten
bun run preview
```

## Code-Qualität

```bash
# ESLint ausführen
bun run lint

# Prettier formatieren
bun run format
```

## Umgebungsvariablen

Kopiere `.env.local.example` zu `.env.local` und fülle die Werte aus.
