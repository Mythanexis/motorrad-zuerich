import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/kurse", label: "Kurse" },
  { to: "/vermietung", label: "Vermietung" },
  { to: "/standorte", label: "Standorte" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

function isRouteActive(pathname: string, to: string): boolean {
  if (pathname === to) return true;
  if (to === "/kurse") return pathname.startsWith("/kurse/");
  return pathname.startsWith(`${to}/`);
}

function useOverlayEligiblePath(pathname: string): boolean {
  if (pathname === "/") return true;
  return /^\/kurse\/[^/]+$/.test(pathname);
}

export function Navbar(_props?: { variant?: "light" | "overlay" }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overlayEligible = useOverlayEligiblePath(pathname);
  const isOverlay = overlayEligible && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.documentElement.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.documentElement.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const buchenActive = pathname === "/kontakt" || pathname.startsWith("/kontakt/");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isOverlay
          ? "border-transparent bg-transparent text-white"
          : "border-b border-border bg-background/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className={cn(
            "text-base font-semibold tracking-[0.18em] [font-variant:small-caps]",
            isOverlay ? "text-white" : "text-foreground",
          )}
        >
          MK<span className="opacity-60">·</span>ZÜRICH
        </Link>

        <div className="flex items-center gap-3 md:gap-8">
          <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
            {navItems.map((n) => {
              const active = isRouteActive(pathname, n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out",
                    "hover:after:scale-x-100",
                    active && "after:scale-x-100",
                    isOverlay
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/kontakt"
              className={cn(
                "rounded-none px-5 py-2.5 text-sm font-medium transition-opacity",
                "bg-foreground text-background hover:opacity-90",
                buchenActive && "ring-2 ring-foreground ring-offset-2 ring-offset-background",
                isOverlay && "ring-offset-transparent",
              )}
            >
              Buchen
            </Link>
          </nav>

          <button
            type="button"
            className={cn(
              "flex size-10 items-center justify-center md:hidden",
              isOverlay ? "text-white" : "text-foreground",
            )}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="site-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-background text-foreground md:hidden"
        >
          <nav
            className="flex flex-1 flex-col overflow-y-auto px-6 py-6"
            aria-label="Hauptnavigation mobil"
          >
            {navItems.map((n) => {
              const active = isRouteActive(pathname, n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-border py-4 text-lg font-medium transition-colors",
                    active ? "text-foreground" : "text-foreground/80",
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-8 inline-flex w-full items-center justify-center bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90",
                buchenActive && "ring-2 ring-foreground ring-offset-2 ring-offset-background",
              )}
            >
              Buchen
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
