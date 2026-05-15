import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/site/Section";

export type StatItem = {
  /** Statischer Endwert (Fallback, prefers-reduced-motion) */
  value: string;
  label: string;
  /** Zielzahl für Counter-Animation; weglassen = nur `value` anzeigen */
  end?: number;
  suffix?: string;
};

/** MYT-14 — Kennzahlen; neue Einträge einfach hier ergänzen. */
export const STATS: StatItem[] = [
  { value: "1’200+", label: "Ausgebildete Fahrer", end: 1200, suffix: "+" },
  { value: "12", label: "Jahre Erfahrung", end: 12 },
  { value: "1", label: "Standort · Horgen", end: 1 },
  { value: "98%", label: "Bestehensquote", end: 98, suffix: "%" },
];

const DURATION_MS = 1400;

function formatCount(n: number, suffix = ""): string {
  const rounded = Math.round(n);
  const formatted = rounded >= 1000 ? rounded.toLocaleString("de-CH") : String(rounded);
  return `${formatted}${suffix}`;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/** Sichtbarkeit + Counter nur beim Eintritt von oben nach unten (Scroll down). */
function useStatsReveal<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [runCounter, setRunCounter] = useState(false);
  const lastScrollY = useRef(0);
  const scrollingDownRef = useRef(true);
  const wasInViewRef = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      scrollingDownRef.current = y > lastScrollY.current;
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        if (visible && !wasInViewRef.current) {
          setRunCounter(scrollingDownRef.current);
        }

        if (!visible) {
          setRunCounter(false);
        }

        wasInViewRef.current = visible;
        setInView(visible);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView, runCounter };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function useCountUp(end: number, active: boolean, reducedMotion: boolean) {
  const [current, setCurrent] = useState(reducedMotion ? end : 0);

  useEffect(() => {
    if (reducedMotion) {
      setCurrent(end);
      return;
    }
    if (!active) {
      setCurrent(0);
      return;
    }

    let startTime: number | null = null;
    let raf = 0;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / DURATION_MS, 1);
      setCurrent(Math.round(end * easeOutCubic(progress)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, reducedMotion]);

  return current;
}

function StatValue({
  stat,
  inView,
  runCounter,
  reducedMotion,
}: {
  stat: StatItem;
  inView: boolean;
  runCounter: boolean;
  reducedMotion: boolean;
}) {
  const end = stat.end ?? 0;
  const count = useCountUp(end, runCounter && stat.end != null, reducedMotion);

  if (stat.end == null) return stat.value;
  if (reducedMotion) return stat.value;
  if (!inView) return formatCount(0, stat.suffix);
  if (!runCounter) return formatCount(end, stat.suffix);

  return formatCount(count, stat.suffix);
}

export function StatsSection() {
  const { ref, inView, runCounter } = useStatsReveal<HTMLDListElement>();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section className="border-y border-border">
      <dl ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-t border-border-strong pt-6">
            <dt className="display-md font-semibold tracking-tight tabular-nums">
              <StatValue
                stat={stat}
                inView={inView}
                runCounter={runCounter}
                reducedMotion={reducedMotion}
              />
            </dt>
            <dd className="eyebrow mt-3 text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
