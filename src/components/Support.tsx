import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

const formats = [
  { label: "Social — square", size: "1080 × 1080", id: "sq" },
  { label: "Social — vertical", size: "1080 × 1350", id: "vt" },
  { label: "Social — story", size: "1080 × 1920", id: "st" },
  { label: "Email signature", size: "600 × 200", id: "em" },
  { label: "Zoom background", size: "1920 × 1080", id: "zm" },
  { label: "Letterhead PDF", size: "Letter / A4", id: "lh" },
];

export function Support() {
  return (
    <section id="support" className="py-16 md:py-32 relative">
      <div className="container-edit">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-12 md:mb-16">
            <span className="eyebrow">No. 06</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              Support
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-end mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <h2
              className="font-display leading-[0.94] tracking-display-tight"
              style={{
                fontSize: "var(--fs-xl)",
                fontVariationSettings: '"opsz" 144, "SOFT" 35',
              }}
            >
              <WordReveal>Lend your voice.</WordReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Reveal delay={0.08}>
              <p className="text-[1.0625rem] leading-[1.65] text-[color:var(--color-ink-2)] max-w-[48ch]">
                Endorsement graphics for socials, email, video calls and print.
                Download what you need — encourage your network to do the same.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.05}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
            {formats.map((f) => (
              <li
                key={f.id}
                className="group bg-[color:var(--color-paper)] hover:bg-[color:var(--color-paper-2)] transition-colors"
              >
                <a
                  href={`#download-${f.id}`}
                  className="flex items-center justify-between p-6 md:p-7 gap-4"
                >
                  <div>
                    <div className="font-display text-[1.3rem] leading-tight tracking-display-tight text-[color:var(--color-ink)]">
                      {f.label}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)] mt-1.5">
                      {f.size}
                    </div>
                  </div>
                  <span
                    className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[color:var(--color-rule)] text-[color:var(--color-ink-2)] group-hover:bg-[color:var(--color-claret)] group-hover:border-[color:var(--color-claret)] group-hover:text-[color:var(--color-paper)] transition-colors"
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1V10M7 10L3 6M7 10L11 6M2 13H12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14 md:mt-20 rounded-lg border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-claret)] mb-3">
                Pledge of support
              </div>
              <h3
                className="font-display text-[1.6rem] md:text-[1.9rem] leading-tight tracking-display-tight"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
              >
                Stand on the record. Speak up for the future.
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.6] text-[color:var(--color-ink-2)] max-w-[58ch]">
                Add your name to the list of REALTORS® supporting Matt for 2027
                & 2028 NAR Treasurer. We&apos;ll never share your details
                without your consent.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-claret)] hover:bg-[color:var(--color-claret-deep)] px-6 py-3 text-[14px] font-medium text-[color:var(--color-paper)] transition-colors whitespace-nowrap"
            >
              Add my name
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
