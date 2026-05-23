"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Section = { id: string; num: string; name: string };

const SECTIONS: Section[] = [
  { id: "about", num: "02", name: "About" },
  { id: "vision", num: "03", name: "Vision" },
  { id: "service", num: "04", name: "Service" },
  { id: "media", num: "05", name: "Media" },
  { id: "support", num: "06", name: "Support" },
  { id: "contact", num: "07", name: "Contact" },
];

/**
 * SectionIndex — bottom-left running header that tracks the current section.
 * Uses a scroll handler with rAF rather than IntersectionObserver to avoid
 * the brittle "threshold didn't fire" failure mode the previous version had.
 * Hidden while the reader is in the hero.
 */
export function SectionIndex() {
  const [current, setCurrent] = useState<Section | null>(null);

  useEffect(() => {
    let rafId = 0;
    let scheduled = false;

    const update = () => {
      scheduled = false;
      const viewport = window.innerHeight;
      const triggerY = viewport * 0.35;

      // In the hero — clear the indicator.
      if (window.scrollY < viewport * 0.55) {
        setCurrent((prev) => (prev === null ? prev : null));
        return;
      }

      // Find the section whose top is most recently above the trigger line.
      let best: Section | null = null;
      let bestTop = -Infinity;

      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.top > bestTop) {
          bestTop = rect.top;
          best = s;
        }
      }

      if (best) {
        setCurrent((prev) => (prev?.id === best.id ? prev : best));
      }
    };

    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-5 md:left-8 bottom-6 md:bottom-9 z-30 pointer-events-none hidden md:block mix-blend-multiply"
    >
      <AnimatePresence mode="wait">
        {current ? (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span
              className="font-mono text-[10.5px] uppercase tracking-[0.20em]"
              style={{ color: "var(--color-claret)" }}
            >
              No. {current.num}
            </span>
            <span
              aria-hidden
              className="w-7 h-px"
              style={{ background: "var(--color-claret)", opacity: 0.4 }}
            />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-[color:var(--color-ink-2)]">
              {current.name}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
