"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

type Entry = { years: string; role: string; org?: string };

const nar: Entry[] = [
  { years: "2026", role: "Vice Chair", org: "NAR Finance Committee" },
  { years: "2024 – 2027", role: "Member", org: "NAR Finance Committee" },
  {
    years: "Ongoing",
    role: "Federal Political Coordinator",
    org: "U.S. Sen. John Kennedy (LA)",
  },
  {
    years: "Lifetime",
    role: "Golden R · Hall of Fame · President\u2019s Circle",
    org: "NAR RPAC ($50K level)",
  },
  {
    years: "2024",
    role: "Chair",
    org: "NAR Real Property Operations Committee",
  },
  { years: "2021", role: "Chair", org: "NAR Commercial Committee" },
  {
    years: "2020 – 2021",
    role: "Member",
    org: "NAR Public Policy Coordinating Committee",
  },
  { years: "2019", role: "Member", org: "NAR Meeting & Conference Committee" },
  { years: "2017 – 2019", role: "Director", org: "NAR Board of Directors" },
  {
    years: "2017",
    role: "Member",
    org: "REALTOR® Party Retirement/Financial Planning PAG",
  },
  {
    years: "2016",
    role: "Region 10 Vice-President",
    org: "Representing Louisiana & Texas",
  },
  { years: "2016", role: "Member", org: "NAR Executive Committee" },
  { years: "2013", role: "Trustee", org: "RPAC Fundraising" },
  { years: "2011", role: "Graduate", org: "NAR Leadership Academy" },
];

const louisiana: Entry[] = [
  {
    years: "2017 – Present",
    role: "Commissioner (Chairman, 2022)",
    org: "Louisiana Real Estate Commission",
  },
  {
    years: "2012 – 2016",
    role: "Commissioner",
    org: "Louisiana Housing Corporation",
  },
  { years: "2017", role: "REALTOR® of the Year", org: "Louisiana REALTORS®" },
  { years: "2014", role: "President", org: "Louisiana REALTORS®" },
  { years: "2013", role: "President", org: "Louisiana CCIM Chapter" },
  {
    years: "2017 – 2022",
    role: "Director",
    org: "Central Louisiana Board of Directors",
  },
  {
    years: "2017 – 2022",
    role: "Director",
    org: "LA Central Economic Development Board",
  },
  {
    years: "2008 – 2012",
    role: "Director",
    org: "Hancock Bank CENLA Advisory Board",
  },
  {
    years: "2007",
    role: "President",
    org: "Greater Central Louisiana REALTOR® Association",
  },
];

const community = [
  {
    title: "CHRISTUS Cabrini Foundation Board",
    note: "Serving since 2011 — fourteen years in support of local healthcare.",
  },
  {
    title: "\u201CPlay It Forward\u201D Tennis Tournament",
    note: "Founder. 100% of proceeds benefit the local children\u2019s hospital.",
  },
  {
    title: "Central Louisiana Economic Update",
    note: "Host of the live call-in radio show, reaching nearly 40,000 listeners across Louisiana and Mississippi.",
  },
];

function EntryRow({ e }: { e: Entry }) {
  return (
    <li className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-5 py-4 border-b border-[color:var(--color-rule)] last:border-b-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-3)] pt-[3px]">
        {e.years}
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[1.0625rem] md:text-[1.15rem] leading-snug tracking-display-tight text-[color:var(--color-ink)]">
          {e.role}
        </span>
        {e.org ? (
          <span className="text-[0.92rem] text-[color:var(--color-ink-3)] mt-0.5 leading-[1.45]">
            {e.org}
          </span>
        ) : null}
      </span>
    </li>
  );
}

const VISIBLE = 4;

function DisclosureList({ entries, label }: { entries: Entry[]; label: string }) {
  const [open, setOpen] = useState(false);
  const head = entries.slice(0, VISIBLE);
  const tail = entries.slice(VISIBLE);
  const hasMore = tail.length > 0;

  return (
    <>
      <ul className="border-t border-[color:var(--color-rule)]">
        {head.map((e) => (
          <EntryRow key={`${e.years}-${e.role}-${e.org}`} e={e} />
        ))}
        <AnimatePresence initial={false}>
          {open && (
            <motion.li
              key="more"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden block"
              style={{ listStyle: "none" }}
            >
              <ul>
                {tail.map((e) => (
                  <EntryRow key={`${e.years}-${e.role}-${e.org}`} e={e} />
                ))}
              </ul>
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-claret)] hover:text-[color:var(--color-claret-deep)] transition-colors"
        >
          <span
            className="inline-flex w-6 h-6 items-center justify-center rounded-full border border-[color:var(--color-claret)]/40 group-hover:border-[color:var(--color-claret)] transition-colors"
            aria-hidden
          >
            <span className="relative w-2.5 h-2.5">
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-current" />
              <span
                className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "scale-y-0" : "scale-y-100"
                }`}
              />
            </span>
          </span>
          <span className="link-draw">
            {open ? `Show fewer ${label}` : `View full record · ${tail.length} more`}
          </span>
        </button>
      )}
    </>
  );
}

export function Service() {
  return (
    <section id="service" className="py-16 md:py-32 relative">
      <div className="container-edit">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-10 md:mb-16">
            <span className="eyebrow">No. 04</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              Service
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 mb-10 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <h2
              className="font-display leading-[0.94] tracking-display-tight"
              style={{
                fontSize: "var(--fs-xl)",
                fontVariationSettings: '"opsz" 144, "SOFT" 35',
              }}
            >
              <WordReveal>The record, in full.</WordReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-3 mt-5 md:mt-0">
            <Reveal delay={0.08}>
              <p className="text-[1rem] md:text-[1.0625rem] leading-[1.6] text-[color:var(--color-ink-2)] max-w-[50ch]">
                Leadership at every tier of the industry — committee, board,
                association and commission. The work is documented; the
                qualifications are earned.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-16">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <div className="flex items-baseline gap-3 mb-5 md:mb-6">
                <span
                  className="font-display text-[1.85rem] md:text-[2.25rem] leading-none"
                  style={{
                    color: "var(--color-claret)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 0',
                  }}
                >
                  I.
                </span>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
                  National — NAR
                </h3>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <DisclosureList entries={nar} label="NAR roles" />
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <div className="flex items-baseline gap-3 mb-5 md:mb-6">
                <span
                  className="font-display text-[1.85rem] md:text-[2.25rem] leading-none"
                  style={{
                    color: "var(--color-claret)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 0',
                  }}
                >
                  II.
                </span>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
                  Louisiana & Region
                </h3>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <DisclosureList entries={louisiana} label="Louisiana roles" />
            </Reveal>
          </div>

          <div className="col-span-12">
            <Reveal>
              <div className="flex items-baseline gap-3 mb-5 md:mb-6 mt-2 md:mt-8">
                <span
                  className="font-display text-[1.85rem] md:text-[2.25rem] leading-none"
                  style={{
                    color: "var(--color-claret)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 0',
                  }}
                >
                  III.
                </span>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
                  Community
                </h3>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
                {community.map((c) => (
                  <div
                    key={c.title}
                    className="bg-[color:var(--color-paper)] p-6 md:p-8"
                  >
                    <h4
                      className="font-display text-[1.25rem] md:text-[1.35rem] leading-tight tracking-display-tight mb-2.5"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                    >
                      {c.title}
                    </h4>
                    <p className="text-[0.95rem] leading-[1.55] text-[color:var(--color-ink-2)]">
                      {c.note}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
