export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-rule)] py-12 md:py-16">
      <div className="container-edit">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2 mb-3">
              <span
                className="font-display text-[1.75rem] leading-none tracking-display-tight"
                style={{
                  color: "var(--color-claret)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                }}
              >
                Ritchie
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-3)]">
                for NAR Treasurer
              </span>
            </div>
            <p className="text-[0.95rem] leading-[1.65] text-[color:var(--color-ink-3)] max-w-[44ch]">
              Eligible Candidate for the 2027 & 2028 Treasurer of the National
              Association of REALTORS®.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)] mb-4">
              Explore
            </div>
            <ul className="space-y-2.5">
              {[
                ["#about", "About"],
                ["#vision", "Vision"],
                ["#service", "Service"],
                ["#media", "Media"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-[0.95rem] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-claret)] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)] mb-4">
              Reach out
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:matt@ritchie4nar.com"
                  className="text-[0.95rem] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-claret)] transition-colors"
                >
                  matt@ritchie4nar.com
                </a>
              </li>
              <li>
                <a
                  href="https://ritchie4nar.com/ritchie-nar-digital-brochure/"
                  target="_blank"
                  rel="noopener"
                  className="text-[0.95rem] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-claret)] transition-colors"
                >
                  Digital brochure ↗
                </a>
              </li>
              <li>
                <span className="text-[0.95rem] text-[color:var(--color-ink-3)]">
                  Alexandria, Louisiana
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule my-10 md:my-12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
            © {year} Matt Ritchie · All rights reserved
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
            REALTOR® is a registered collective membership mark of NAR.
          </p>
        </div>
      </div>
    </footer>
  );
}
