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

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.22]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pb-12 md:pb-16"
      style={{
        paddingTop:
          "max(5rem, calc(env(safe-area-inset-top, 0px) + 4.5rem))",
      }}
    >
      {/* Folio strip — meta-only, 2-column with a rule between */}
      <div className="container-edit">
        <motion.div
          {...fade(0.05)}
          className="flex items-baseline justify-between gap-6 pb-7 md:pb-12 border-b border-[color:var(--color-rule)]"
        >
          <div>
            <div className="marginalia mb-1.5">Folio</div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              No. 01 · 2026 ed.
            </div>
          </div>
          <span
            aria-hidden
            className="hidden sm:block flex-1 h-px mb-1"
            style={{ background: "var(--color-rule)" }}
          />
          <div className="text-right">
            <div
              className="marginalia mb-1.5"
              style={{ color: "var(--color-claret)" }}
            >
              Standing for
            </div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              Treasurer · 2027 & 2028
            </div>
          </div>
        </motion.div>
      </div>

      {/* Row 1 — eyebrow + dateline + massive name | portrait */}
      <div className="container-edit relative mt-7 md:mt-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-y-0">
          {/* A — Text column. 3-zone vertical layout: top header, dateline,
              bottom name. Min-height ties to portrait aspect so the H1's
              bottom edge lands on the same line as the portrait's bottom. */}
          <motion.div
            style={{ opacity: nameOpacity, y: nameY }}
            className="col-span-12 md:col-span-8 md:col-start-1 md:row-start-1 md:flex md:flex-col md:min-h-[clamp(28rem,42vw,36rem)] relative"
          >
            {/* Vertical claret column-divider — the non-typographic identity
                moment. Hairline running the full height of the column. */}
            <span
              aria-hidden
              className="hidden md:block absolute top-0 bottom-0 -right-3 w-px"
              style={{ background: "var(--color-claret)", opacity: 0.18 }}
            />

            <motion.div {...fade(0.12)}>
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <span
                  aria-hidden
                  className="inline-block w-10 md:w-14 h-px"
                  style={{ background: "var(--color-claret)" }}
                />
                <span className="eyebrow">
                  A candidacy for the office of Treasurer
                </span>
              </div>

              {/* Datelined kicker — Fraunces italic, fills the gap between
                  eyebrow and H1 with editorial weight, not a void */}
              <p
                className="font-display italic text-[1.0625rem] md:text-[1.125rem] leading-[1.55] text-[color:var(--color-ink-3)] max-w-[44ch]"
                style={{
                  fontVariationSettings: '"opsz" 60, "SOFT" 90, "WONK" 1',
                }}
              >
                Filed from Alexandria, Louisiana — for the 2027 &amp; 2028 term.
              </p>
            </motion.div>

            <motion.h1
              variants={nameContainer}
              initial="hidden"
              animate="visible"
              className="display-ceiling text-[color:var(--color-ink)] -ml-[0.015em] mt-10 md:mt-auto"
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
          </motion.div>

          {/* B — Portrait column. md:col-span-4 cols 9-12; image bleeds
              slightly past the right gutter for magazine-cover hang. */}
          <motion.div
            {...fade(0.32)}
            className="col-span-12 md:col-span-4 md:col-start-9 md:row-start-1 md:flex md:flex-col"
          >
            <div className="hidden sm:flex items-baseline justify-between mb-2 md:mb-3">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: "var(--color-brass-2)" }}
              >
                Plate I · Portrait
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: "var(--color-ink-4)" }}
              >
                fig. 01
              </span>
            </div>

            <figure className="relative md:flex-1 md:-mr-2 lg:-mr-8 xl:-mr-12">
              <div
                className="relative w-full overflow-hidden shadow-[0_44px_88px_-32px_oklch(0.18_0.025_50/0.50)] md:h-full"
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
                    sizes="(min-width: 1024px) 36vw, (min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 28%" }}
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
            </figure>
          </motion.div>

          {/* C — Lede + credentials + CTAs (row 2, cols 1-7) */}
          <motion.div
            {...fade(0.55)}
            className="col-span-12 md:col-span-7 md:col-start-1 md:row-start-2 md:pt-12 lg:pt-16"
          >
            {/* Drop-cap lede: claret display "B", small-caps first phrase */}
            <p className="relative text-[1.0625rem] md:text-[1.15rem] leading-[1.65] text-[color:var(--color-ink)] max-w-[58ch]">
              <span
                aria-hidden
                className="float-left mr-3 mt-1 font-display leading-[0.82]"
                style={{
                  fontSize: "5.25rem",
                  color: "var(--color-claret)",
                  fontVariationSettings:
                    '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                B
              </span>
              <span className="font-display tracking-[0.04em] uppercase text-[0.9em]">
                roker, investor and property
                <br className="hidden sm:inline" /> manager
              </span>
              {" "}— a Louisiana practitioner with a quarter-century record at
              every tier of the industry. Standing for the Association&rsquo;s
              fiduciary office to safeguard its finances and steward its future.
            </p>

            {/* Credentials — single mono line, no grid, no rule */}
            <p className="mt-8 font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-3)] leading-[1.7]">
              25 yrs
              <span className="mx-2 text-[color:var(--color-brass-2)]">·</span>
              Broker, LA — since 2004
              <span className="mx-2 text-[color:var(--color-brass-2)]">·</span>
              FedPolCoord (Sen. Kennedy)
              <span className="mx-2 text-[color:var(--color-brass-2)]">·</span>
              Finance Cmte. VC, 2026
            </p>

            {/* CTAs — primary heavier; secondary as tertiary mono caption */}
            <div className="mt-9 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
              <a
                href="#about"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-[color:var(--color-claret)] hover:bg-[color:var(--color-claret-deep)] px-7 py-4 text-[15px] font-medium text-[color:var(--color-paper)] transition-colors"
              >
                <span className="link-draw">Read the record</span>
                <svg
                  width="15"
                  height="15"
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
                className="inline-flex items-center gap-2 py-2 sm:py-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-claret)] hover:text-[color:var(--color-claret-deep)] transition-colors"
              >
                <span className="link-draw">Digital brochure</span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
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
        </div>
      </div>

      {/* Stat ledger — 1-col résumé on mobile, 4-col on desktop */}
      <motion.div {...fade(0.85)} className="container-edit mt-14 md:mt-24">
        <hr className="rule" />
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-5 sm:gap-y-7 gap-x-5 md:gap-x-8 py-7 sm:py-8 md:py-10">
          {[
            {
              k: <Counter to={25} />,
              suffix: "years",
              vMobile: "Brokerage, investment & property mgmt",
              v: "Of brokerage, investment & property management",
            },
            {
              k: "X",
              suffix: "region",
              vMobile: "NAR VP, Region 10 (Past)",
              v: "Past NAR Vice-President, Region 10",
            },
            {
              k: <Counter to={50} prefix="$" suffix="K" />,
              suffix: "RPAC",
              vMobile: "Golden R · Hall of Fame",
              v: "Golden R · Hall of Fame · President\u2019s Circle",
            },
            {
              k: "2024 → 27",
              suffix: "finance",
              vMobile: "NAR Finance Cmte. member",
              v: "Member, NAR Finance Committee",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-row sm:flex-col items-baseline sm:items-stretch justify-between gap-3 sm:gap-2 py-2 sm:py-0 border-b border-[color:var(--color-rule)] sm:border-b-0 last:border-b-0"
            >
              <div className="flex items-baseline gap-2 shrink-0">
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
              <dd className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-3)] leading-[1.5] text-right sm:text-left">
                <span className="sm:hidden">{s.vMobile}</span>
                <span className="hidden sm:inline">{s.v}</span>
              </dd>
            </div>
          ))}
        </dl>
        <hr className="rule" />
      </motion.div>

      {/* Turn-page kicker — primes the manifesto section below */}
      <motion.div
        {...fade(1.0)}
        className="container-edit mt-12 md:mt-20 flex items-center justify-center gap-3"
      >
        <span
          aria-hidden
          className="inline-block w-10 h-px"
          style={{ background: "var(--color-claret)", opacity: 0.4 }}
        />
        <span
          className="font-mono text-[11px] uppercase tracking-[0.22em]"
          style={{ color: "var(--color-claret)" }}
        >
          § Manifesto — turn page ↓
        </span>
        <span
          aria-hidden
          className="inline-block w-10 h-px"
          style={{ background: "var(--color-claret)", opacity: 0.4 }}
        />
      </motion.div>
    </section>
  );
}
