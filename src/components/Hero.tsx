"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { Counter } from "./Counter";

const nameWord: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const nameContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Portrait drifts down + scales as page scrolls — exaggerated for visibility.
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  // Name floats up + fades to make room.
  const nameOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.18]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-24 md:pt-28 pb-12 md:pb-16"
    >
      {/* Folio bar — top */}
      <div className="container-edit">
        <motion.div
          {...fade(0.05)}
          className="grid grid-cols-12 gap-x-6 items-end pb-10 md:pb-14 border-b border-[color:var(--color-rule)]"
        >
          <div className="col-span-6 md:col-span-3">
            <div className="marginalia mb-1.5">Candidate Folio</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
              No. 01 · 2026 ed.
            </div>
          </div>
          <div className="hidden md:block md:col-span-3">
            <div className="marginalia mb-1.5">Practice</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
              Alexandria · Louisiana
            </div>
          </div>
          <div className="hidden md:block md:col-span-3">
            <div className="marginalia mb-1.5">Standing for</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
              NAR Treasurer · 2027 & 2028
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 text-right">
            <div
              className="marginalia mb-1.5"
              style={{ color: "var(--color-claret)" }}
            >
              Eligible Candidate
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
              Est. of practice · 1999
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main composition — two self-contained editorial columns.
          Left flows: eyebrow → name → lede → vital → CTAs.
          Right flows: caption → portrait → figure-no.
          No height-mismatch gaps to fill. */}
      <div className="container-edit relative mt-10 md:mt-14">
        <div className="grid grid-cols-12 gap-x-6 items-stretch">
          {/* LEFT — name column, justified to use full height */}
          <motion.div
            style={{ opacity: nameOpacity, y: nameY }}
            className="col-span-12 md:col-span-7 flex flex-col md:min-h-[60vh]"
          >
            <motion.div
              {...fade(0.12)}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <span
                aria-hidden
                className="inline-block w-14 h-px"
                style={{ background: "var(--color-claret)" }}
              />
              <span className="eyebrow">
                A candidacy for the office of Treasurer
              </span>
            </motion.div>

            <motion.h1
              variants={nameContainer}
              initial="hidden"
              animate="visible"
              className="display-ceiling text-[color:var(--color-ink)] -ml-[0.045em]"
            >
              <span className="block overflow-hidden">
                <motion.span variants={nameWord} className="block">
                  Matt
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={nameWord}
                  className="block"
                  style={{ color: "var(--color-claret)" }}
                >
                  Ritchie.
                </motion.span>
              </span>
            </motion.h1>

            {/* Lede + vital record live below name, in the same column */}
            <motion.div
              {...fade(0.55)}
              className="mt-auto pt-10 md:pt-14"
            >
              <p className="text-[var(--fs-lede)] leading-[1.55] text-[color:var(--color-ink-2)] max-w-[44ch]">
                Broker, investor and property manager — a Louisiana practitioner
                with a quarter-century record at every tier of the industry.
                Standing for the Association&rsquo;s fiduciary office to
                safeguard its finances and steward its future.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 max-w-[34rem] pt-6 border-t border-[color:var(--color-rule)]">
                <li className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-[color:var(--color-ink-2)]">Practice</span>
                  <span className="text-[color:var(--color-ink-3)]">25 yrs</span>
                </li>
                <li className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-[color:var(--color-ink-2)]">Broker · LA</span>
                  <span className="text-[color:var(--color-ink-3)]">since 2004</span>
                </li>
                <li className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-[color:var(--color-ink-2)]">FedPolCoord</span>
                  <span className="text-[color:var(--color-ink-3)]">Sen. Kennedy</span>
                </li>
                <li className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-[color:var(--color-ink-2)]">Finance cmte.</span>
                  <span className="text-[color:var(--color-ink-3)]">Vice chair, 2026</span>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-claret)] hover:bg-[color:var(--color-claret-deep)] px-6 py-3 text-[13.5px] font-medium text-[color:var(--color-paper)] transition-colors"
                >
                  Read the record
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-y-0.5"
                    aria-hidden
                  >
                    <path
                      d="M7 2V12M7 12L2.5 7.5M7 12L11.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://ritchie4nar.com/ritchie-nar-digital-brochure/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-claret)] transition-colors"
                >
                  <span className="link-draw">Digital brochure</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 9L9 3M9 3H4M9 3V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — portrait column, marginalia above + caption below */}
          <motion.div
            {...fade(0.32)}
            className="col-span-12 md:col-span-5 mt-10 md:mt-0 max-w-[72%] sm:max-w-[60%] md:max-w-none mx-auto md:mx-0 flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-3 md:mb-4">
              <span
                className="marginalia"
                style={{ color: "var(--color-brass-2)" }}
              >
                Plate I · Portrait
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
                fig. 01
              </span>
            </div>

            <figure className="relative">
              <div
                className="relative w-full overflow-hidden shadow-[0_40px_80px_-32px_oklch(0.18_0.025_50/0.45)]"
                style={{ aspectRatio: "4 / 5" }}
              >
                <motion.div
                  style={{ y: portraitY, scale: portraitScale }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/matt-portrait.png"
                    alt="Matt Ritchie, candidate for 2027 & 2028 NAR Treasurer"
                    fill
                    sizes="(min-width: 1024px) 38vw, (min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 30%, transparent 60%, oklch(0.20 0.025 50 / 0.20) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
                  Alexandria, LA
                </span>
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-right"
                  style={{ color: "var(--color-brass-2)" }}
                >
                  Campaign portrait
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>

      {/* Statline — disciplined ledger row */}
      <motion.div {...fade(0.85)} className="container-edit mt-16 md:mt-24">
        <hr className="rule" />
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-5 md:gap-x-8 py-8 md:py-10">
          {[
            {
              k: <Counter to={25} />,
              suffix: "years",
              v: "Of brokerage, investment & property management",
            },
            {
              k: "X",
              suffix: "region",
              v: "Past NAR Vice-President, Region 10",
            },
            {
              k: <Counter to={50} prefix="$" suffix="K" />,
              suffix: "RPAC",
              v: "Golden R · Hall of Fame · President\u2019s Circle",
            },
            {
              k: "2024 → 27",
              suffix: "finance",
              v: "Member, NAR Finance Committee",
            },
          ].map((s) => (
            <div key={s.v} className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <dt
                  className="font-display leading-none text-[color:var(--color-ink)] tracking-display-tight"
                  style={{
                    fontSize: "var(--fs-l)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 30',
                  }}
                >
                  {s.k}
                </dt>
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-brass-2)" }}
                >
                  {s.suffix}
                </span>
              </div>
              <dd className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-3)] leading-[1.5]">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
        <hr className="rule" />
      </motion.div>
    </section>
  );
}
