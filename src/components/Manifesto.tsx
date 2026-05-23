import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

/**
 * Manifesto — a quiet editorial transition between Hero and About.
 * Mobile: stacks flush left at smaller scale (no off-screen indent).
 * Desktop: asymmetric three-line statement with brass signature block.
 */
export function Manifesto() {
  return (
    <section
      aria-label="Standing manifesto"
      className="relative border-y border-[color:var(--color-rule)] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-paper-2) 0%, var(--color-paper) 100%)",
      }}
    >
      <div className="container-edit py-12 md:py-24 grid grid-cols-12 gap-x-6 items-start">
        {/* Left marginalia */}
        <Reveal as="div" className="col-span-12 md:col-span-2 mb-5 md:mb-0">
          <div className="marginalia">§ Manifesto</div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)] mt-1.5">
            Set in standing type
          </div>
        </Reveal>

        {/* The statement — per-word mask reveals */}
        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <p
            className="font-display block leading-[1] tracking-display-tight text-[color:var(--color-ink)]"
            style={{
              fontSize: "var(--fs-xl)",
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            <WordReveal stagger={0.12}>Two governors.</WordReveal>
          </p>
          <p
            className="font-display block leading-[1] tracking-display-tight md:ml-[0.8em]"
            style={{
              fontSize: "var(--fs-xl)",
              color: "var(--color-claret)",
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            <WordReveal stagger={0.12} delay={0.18}>
              Two parties.
            </WordReveal>
          </p>
          <p
            className="font-display block leading-[1.08] tracking-display-tight text-[color:var(--color-ink)] mt-3 md:mt-4"
            style={{
              fontSize: "var(--fs-m)",
              fontVariationSettings: '"opsz" 80, "SOFT" 50',
            }}
          >
            <WordReveal stagger={0.05} delay={0.42}>
              {"One trusted voice for the National Association of REALTORS\u00AE."}
            </WordReveal>
          </p>
        </div>

        {/* Right margin signature — desktop only */}
        <Reveal
          as="div"
          delay={0.24}
          className="hidden md:block md:col-span-1 md:text-right"
        >
          <div
            className="marginalia mb-2"
            style={{ color: "var(--color-claret)" }}
          >
            Standing for
          </div>
          <div
            className="font-display text-[1.5rem] leading-none tracking-display-tight"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
          >
            2027
            <br />
            &amp; 2028
          </div>
          <div className="marginalia mt-3">Treasurer · NAR</div>
        </Reveal>
      </div>
    </section>
  );
}
