import Image from "next/image";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";
import { StaggerGrid } from "./StaggerGrid";

const paragraphs = [
  "With more than 25 years of experience as a broker, investor and property manager in Louisiana, I have earned the trust of clients, colleagues and leaders both in my state and across the real estate industry.",
  "I\u2019ve always had a passion for real estate. I purchased my first rental property at the age of 23, while still in college, then graduated from the University of Louisiana at Lafayette with a degree in business administration and became a licensed broker five years later.",
  "Over the years, I\u2019ve gained a deep understanding of personal investments, brokerage operations, detailed real estate budgets and large-scale developments that have resulted in complex commercial deals.",
  "I especially enjoy opportunities to reposition overlooked properties into high-value assets.",
];

const proofPoints = [
  {
    label: "Amazon · Alexandria, LA",
    body: "Led the effort to develop an industrial site that secured Amazon as an anchor business.",
  },
  {
    label: "Lowe's · Class A warehouse",
    body: "Converted a defunct indoor rodeo arena into a Class A distribution warehouse anchored by Lowe's.",
  },
  {
    label: "Louisiana Real Estate Commission",
    body: "Commissioned by two governors — Democrat and Republican — currently serving since 2017, chairman in 2022.",
  },
  {
    label: "Federal Political Coordinator",
    body: "Appointed NAR Federal Political Coordinator for U.S. Senator John Kennedy.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-32 relative">
      <div className="container-edit">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-12 md:mb-16">
            <span className="eyebrow">No. 02</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              About
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5 md:sticky md:top-28 md:self-start">
            <h2
              className="font-display leading-[0.94] tracking-display-tight"
              style={{
                fontSize: "var(--fs-xl)",
                fontVariationSettings: '"opsz" 144, "SOFT" 40',
              }}
            >
              <WordReveal>A Louisiana broker, a national voice.</WordReveal>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[42ch] text-[1.0625rem] text-[color:var(--color-ink-2)] leading-[1.6]">
                Three decades in the field. A track record measurable in
                buildings standing, deals closed, and offices held. The
                evidence is the work.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-6 lg:pl-12">
            <div className="space-y-6 md:space-y-7 max-w-[68ch]">
              {paragraphs.map((p, i) => (
                <Reveal as="p" key={i} delay={0.05 + i * 0.06}>
                  <span className="text-[1.0625rem] md:text-[1.125rem] leading-[1.65] md:leading-[1.7] text-[color:var(--color-ink)]">
                    {i === 0 ? (
                      <>
                        <span
                          aria-hidden
                          className="hidden md:inline-block float-left mr-3 mt-1 font-display leading-none"
                          style={{
                            fontSize: "4.5rem",
                            color: "var(--color-claret)",
                            fontVariationSettings:
                              '"opsz" 144, "SOFT" 100, "WONK" 1',
                          }}
                        >
                          W
                        </span>
                        <span className="md:hidden">{p}</span>
                        <span className="hidden md:inline">{p.slice(1)}</span>
                      </>
                    ) : (
                      p
                    )}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <figure className="mt-14 md:mt-20 grid grid-cols-12 gap-x-5 md:gap-x-8 items-center border-y border-[color:var(--color-rule)] py-10 md:py-12">
                <div className="col-span-5 sm:col-span-4 md:col-span-4">
                  <div
                    className="relative w-full overflow-hidden shadow-[0_24px_60px_-20px_oklch(0.20_0.025_50/0.30)]"
                    style={{ aspectRatio: "3 / 4" }}
                  >
                    <Image
                      src="/matt-create-cover.png"
                      alt="CREATE Magazine, Fall 2022 — Matt Ritchie cover feature, Getting Creative: Brokers find new life for underused spaces."
                      fill
                      sizes="(min-width: 768px) 25vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="col-span-7 sm:col-span-8 md:col-span-8 pl-1 md:pl-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-claret)] mb-3">
                    Featured · NAR CREATE Magazine
                  </div>
                  <p
                    className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-display-tight text-[color:var(--color-ink)]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                  >
                    <span
                      aria-hidden
                      className="select-none mr-1"
                      style={{
                        color: "var(--color-claret)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                      }}
                    >
                      “
                    </span>
                    Brokers find new life for underused spaces.
                    <span
                      aria-hidden
                      className="select-none ml-0.5"
                      style={{
                        color: "var(--color-claret)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                      }}
                    >
                      ”
                    </span>
                  </p>
                  <p className="mt-4 text-[0.97rem] md:text-[1rem] leading-[1.6] text-[color:var(--color-ink-2)] max-w-[52ch]">
                    Matt&rsquo;s effort to convert a defunct indoor rodeo arena
                    into a Class A distribution warehouse for Lowe&rsquo;s
                    became the cover story of NAR&rsquo;s quarterly for
                    commercial practitioners.
                  </p>
                  <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
                    Fall 2022 · CREATE — for commercial practitioners
                  </div>
                </figcaption>
              </figure>
            </Reveal>

            <StaggerGrid>
              {proofPoints.map((p) => (
                <div
                  key={p.label}
                  className="bg-[color:var(--color-paper)] p-6 md:p-7"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-claret)] mb-2">
                    {p.label}
                  </div>
                  <div className="text-[0.97rem] leading-[1.55] text-[color:var(--color-ink-2)]">
                    {p.body}
                  </div>
                </div>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
