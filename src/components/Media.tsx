import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";
import { StaggerGrid } from "./StaggerGrid";
import { VideoEmbed } from "./VideoEmbed";

type MediaItem = {
  kind: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  external?: boolean;
};

const items: MediaItem[] = [
  {
    kind: "Brochure",
    title: "Digital campaign brochure",
    body: "The case for 2027 & 2028 — qualifications, vision and a forward plan, in print.",
    href: "https://ritchie4nar.com/ritchie-nar-digital-brochure/",
    cta: "View brochure",
    external: true,
  },
  {
    kind: "Radio",
    title: "Central Louisiana Economic Update",
    body: "Live call-in show reaching nearly 40,000 listeners across Louisiana and Mississippi.",
    href: "#radio",
    cta: "Recent episodes",
  },
  {
    kind: "Press",
    title: "CREATE Magazine, cover feature",
    body: "NAR\u2019s quarterly for commercial practitioners — Fall 2022 cover story on the Lowe\u2019s warehouse conversion.",
    href: "#about",
    cta: "Read the story",
  },
];

export function Media() {
  return (
    <section
      id="media"
      className="relative py-16 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--color-paper) 0%, var(--color-paper-2) 100%)",
      }}
    >
      <div className="container-edit">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-12 md:mb-16">
            <span className="eyebrow">No. 05</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
              Media
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <h2
              className="font-display leading-[0.94] tracking-display-tight max-w-[18ch]"
              style={{
                fontSize: "var(--fs-xl)",
                fontVariationSettings: '"opsz" 144, "SOFT" 35',
              }}
            >
              <WordReveal stagger={0.11}>Read it. Watch it. Hear it.</WordReveal>
            </h2>
          </div>
        </div>

        {/* Featured video — facade-pattern YouTube; iframe loads on click */}
        <Reveal>
          <div className="mb-14 md:mb-20">
            <VideoEmbed
              youtubeId="ls0-5W9hBrc"
              title="Matt Ritchie — Introductory address"
            />
          </div>
        </Reveal>

        <StaggerGrid
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]"
          itemStagger={0.11}
        >
          {items.map((it, i) => (
              <a
                key={it.title}
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noopener" : undefined}
                className="group bg-[color:var(--color-paper)] p-8 md:p-10 flex flex-col gap-6 hover:bg-[color:var(--color-paper-2)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-claret)]">
                    {String(i + 1).padStart(2, "0")} · {it.kind}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden
                    className="text-[color:var(--color-ink-3)] group-hover:text-[color:var(--color-claret)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M5 13L13 5M13 5H6M13 5V12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3
                  className="font-display text-[1.85rem] md:text-[2rem] leading-[1.05] tracking-display-tight mt-2"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                >
                  {it.title}
                </h3>

                <p className="text-[0.97rem] leading-[1.65] text-[color:var(--color-ink-2)]">
                  {it.body}
                </p>

                <div className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-claret)] transition-colors">
                  {it.cta} →
                </div>
              </a>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
