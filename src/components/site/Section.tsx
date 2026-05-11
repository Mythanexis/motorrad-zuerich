import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
  dark = false,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={[dark ? "bg-surface text-surface-foreground" : "bg-background text-foreground", className].join(" ")}>
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        {(eyebrow || title) && (
          <div className="mb-16 grid gap-6 md:grid-cols-12">
            {eyebrow && <div className="eyebrow md:col-span-3 opacity-60">{eyebrow}</div>}
            {title && <h2 className="display-lg md:col-span-9">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
