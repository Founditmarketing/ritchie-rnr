"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#service", label: "Service" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[backdrop-filter,background-color] duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-paper)]/82"
          : "bg-transparent"
      }`}
    >
      <div className="container-edit flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="group inline-flex items-baseline gap-2"
          aria-label="Ritchie for NAR Treasurer — home"
        >
          <span
            className="font-display text-[1.65rem] md:text-[2rem] leading-none tracking-display-tight"
            style={{
              color: "var(--color-claret)",
              fontVariationSettings: '"opsz" 144, "SOFT" 70, "WONK" 0',
            }}
          >
            Ritchie
          </span>
          <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)] mb-[2px]">
            for NAR Treasurer
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-draw font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-claret)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://ritchie4nar.com/ritchie-nar-digital-brochure/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-claret)] hover:bg-[color:var(--color-claret-deep)] px-4 py-2 text-[12px] font-medium text-[color:var(--color-paper)] transition-colors"
          >
            Brochure
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </nav>

        {/* Rule + scroll progress — only show when scrolled.
            The rule replaces the previous border so they don't fight. */}
        <div
          aria-hidden
          className={`absolute left-0 right-0 bottom-0 h-px transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "var(--color-rule)" }}
        />
        <motion.div
          aria-hidden
          className="absolute left-0 bottom-0 h-[2px] origin-left"
          style={{
            scaleX: progress,
            width: "100%",
            background:
              "linear-gradient(90deg, var(--color-claret) 0%, var(--color-claret-2) 100%)",
          }}
        />

        {/* Mobile action cluster — keep brochure conversion path visible */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://ritchie4nar.com/ritchie-nar-digital-brochure/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-claret)] px-3.5 py-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-[color:var(--color-paper)]"
          >
            Brochure
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center min-w-11 min-h-11 -mr-2 text-[color:var(--color-ink)]"
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
              <path
                d={open ? "M3 3L17 13M17 3L3 13" : "M2 3H18M2 11H18"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden bg-[color:var(--color-paper)] border-b border-[color:var(--color-rule)] transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-edit py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-[1.5rem] tracking-display-tight text-[color:var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://ritchie4nar.com/ritchie-nar-digital-brochure/"
            target="_blank"
            rel="noopener"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-claret)] px-4 py-2 text-[12px] font-medium text-[color:var(--color-paper)]"
          >
            View brochure
          </a>
        </nav>
      </div>
    </header>
  );
}
