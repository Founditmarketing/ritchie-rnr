import { Reveal } from "./Reveal";
import { StaggerGrid } from "./StaggerGrid";
import { WordReveal } from "./WordReveal";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative py-16 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--color-paper) 0%, var(--color-paper-2) 50%, var(--color-paper) 100%)",
      }}
    >
      <div className="container-edit">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-12 md:mb-16">
            <span className="eyebrow">No. 03</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              Vision
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <p
              className="font-display text-[clamp(2rem,5.5vw,4.75rem)] leading-[1.05] tracking-display-tight text-[color:var(--color-ink)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 25' }}
            >
              <span
                aria-hidden
                className="font-display select-none mr-2 align-baseline"
                style={{
                  color: "var(--color-claret)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                “
              </span>
              <WordReveal stagger={0.09}>I will</WordReveal>{" "}
              <span style={{ color: "var(--color-claret)" }}>
                <WordReveal stagger={0.09} delay={0.32}>
                  guard our finances
                </WordReveal>
              </span>{" "}
              <WordReveal stagger={0.09} delay={0.62}>and</WordReveal>{" "}
              <span style={{ color: "var(--color-claret)" }}>
                <WordReveal stagger={0.09} delay={0.74}>
                  guide our future.
                </WordReveal>
              </span>
              <span
                aria-hidden
                className="font-display select-none ml-1 align-baseline"
                style={{
                  color: "var(--color-claret)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                ”
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 mt-16 md:mt-24">
          <Reveal
            as="div"
            delay={0.12}
            className="col-span-12 md:col-span-6 md:col-start-2"
          >
            <p className="text-[1.125rem] md:text-[1.25rem] leading-[1.65] text-[color:var(--color-ink-2)] max-w-[58ch]">
              If elected as your 2027 & 2028 NAR Treasurer, I will safeguard our
              finances and prioritize smart investments that strengthen our
              industry and guide us forward.
            </p>
          </Reveal>

          <Reveal
            as="div"
            delay={0.22}
            className="col-span-12 md:col-span-4 md:col-start-8"
          >
            <p className="text-[1rem] leading-[1.65] text-[color:var(--color-ink-2)] max-w-[42ch]">
              I will ensure our financial resources are managed with precision
              and foresight, and invested wisely and efficiently in the programs
              and services that keep the NAR member relevant, successful and
              supported. I am committed to sustaining NAR&rsquo;s strength as
              a premier voice on Capitol Hill and a champion for our
              industry&rsquo;s future.
            </p>
          </Reveal>
        </div>

        <StaggerGrid
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]"
          itemStagger={0.12}
        >
            {[
              {
                n: "i",
                title: "Stewardship",
                body: "Manage dues and reserves with the precision and accountability members expect of a fiduciary.",
              },
              {
                n: "ii",
                title: "Foresight",
                body: "Invest in the programs and infrastructure that keep members relevant, competitive and supported.",
              },
              {
                n: "iii",
                title: "Voice",
                body: "Sustain NAR\u2019s strength as a premier voice on Capitol Hill — a champion for the industry\u2019s future.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="bg-[color:var(--color-paper)] p-8 md:p-10 lg:p-12 flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-7">
                  <span
                    className="font-display italic leading-none"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--color-brass-2)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 0',
                    }}
                  >
                    {p.n}.
                  </span>
                  <span className="marginalia">Pillar</span>
                </div>
                <h3
                  className="font-display leading-[0.98] tracking-display-tight mb-5"
                  style={{
                    fontSize: "var(--fs-l)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 30',
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-[1rem] md:text-[1.0625rem] leading-[1.62] text-[color:var(--color-ink-2)] max-w-[34ch]">
                  {p.body}
                </p>
              </div>
            ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
