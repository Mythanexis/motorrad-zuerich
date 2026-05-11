import { useEffect, useState } from "react";

function getBreakpoint(w: number) {
  if (w >= 1536) return "2XL";
  if (w >= 1280) return "XL";
  if (w >= 1024) return "LG";
  if (w >= 768) return "MD";
  if (w >= 640) return "SM";
  return "XS";
}

export function ViewportIndicator() {
  if (import.meta.env.PROD) return null;

  const [bp, setBp] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function onResize() {
      setBp(getBreakpoint(window.innerWidth));
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 1500);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] rounded-md bg-black/80 px-2.5 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: "none" }}
    >
      {bp}
    </div>
  );
}
