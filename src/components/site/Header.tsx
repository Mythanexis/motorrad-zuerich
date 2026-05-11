import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/kurse", label: "Kurse" },
  { to: "/vermietung", label: "Vermietung" },
  { to: "/standorte", label: "Standorte" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header({ variant = "light" }: { variant?: "light" | "overlay" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOverlay = variant === "overlay" && !scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isOverlay
          ? "bg-transparent text-white"
          : "bg-background/90 backdrop-blur-md text-foreground border-b border-border",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <button
          className="flex items-center gap-2 text-sm font-medium md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
          <span>Menü</span>
        </button>

        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
              activeProps={{ className: "opacity-100" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-base font-semibold tracking-[0.18em]">
          MK<span className="opacity-60">·</span>ZÜRICH
        </Link>

        <Link to="/kontakt" className="text-sm font-medium opacity-80 hover:opacity-100">
          Buchen
        </Link>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-medium last:border-b-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
