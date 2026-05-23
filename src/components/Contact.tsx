"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 md:py-36 relative overflow-hidden"
      style={{ background: "var(--color-claret-deep)" }}
    >
      {/* Hairline frame */}
      <div className="absolute inset-6 md:inset-10 border border-[color:var(--color-brass)]/30 pointer-events-none" />

      <div className="container-edit relative">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-12 md:mb-16">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.16em]"
              style={{ color: "var(--color-brass)" }}
            >
              No. 07
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-paper)]/60">
              Contact
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-6">
            <h2
              className="font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-display-tight text-[color:var(--color-paper)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
            >
              <WordReveal stagger={0.09}>
                {"Let\u2019s build a stronger NAR — together."}
              </WordReveal>
            </h2>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-[color:var(--color-paper)]/75">
                Schedule a call, request an in-person meeting at an upcoming
                conference, or send a note. Every message is read personally.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <dt
                    className="font-mono text-[11px] uppercase tracking-[0.16em] mb-2"
                    style={{ color: "var(--color-brass)" }}
                  >
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:matt@ritchie4nar.com"
                      className="font-display text-[1.25rem] tracking-display-tight text-[color:var(--color-paper)] hover:opacity-80 transition-opacity"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                    >
                      matt@ritchie4nar.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt
                    className="font-mono text-[11px] uppercase tracking-[0.16em] mb-2"
                    style={{ color: "var(--color-brass)" }}
                  >
                    Office
                  </dt>
                  <dd className="font-display text-[1.25rem] tracking-display-tight text-[color:var(--color-paper)]">
                    Alexandria, Louisiana
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Reveal delay={0.12}>
              {submitted ? (
                <div className="rounded-md border border-[color:var(--color-brass)]/30 bg-[color:var(--color-claret)]/30 p-10 text-center">
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.16em] mb-3"
                    style={{ color: "var(--color-brass)" }}
                  >
                    Received
                  </div>
                  <p
                    className="font-display text-[1.5rem] tracking-display-tight text-[color:var(--color-paper)]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                  >
                    Thank you. Matt will be in&nbsp;touch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-5"
                >
                  <Field id="name" label="Name" autoComplete="name" required />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <Field
                    id="org"
                    label="Association / Organization"
                    autoComplete="organization"
                  />
                  <FieldArea id="message" label="Message" rows={4} required />

                  <button
                    type="submit"
                    className="group mt-3 relative inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-paper)] px-6 py-3.5 text-[14px] font-medium text-[color:var(--color-claret-deep)] overflow-hidden transition-[color] duration-500 hover:text-[color:var(--color-paper)] active:scale-[0.98]"
                  >
                    {/* Sweep fill on hover — brass washes left-to-right */}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[color:var(--color-brass-2)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <span className="relative">Send message</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
                      className="relative transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    >
                      <path
                        d="M3 7H11M11 7L7 3M11 7L7 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-paper)]/60 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="peer w-full bg-transparent border-0 border-b border-[color:var(--color-paper)]/25 focus:border-[color:var(--color-brass)] focus:outline-none py-2 text-[1rem] text-[color:var(--color-paper)] placeholder-[color:var(--color-paper)]/35 transition-colors"
      />
    </div>
  );
}

function FieldArea({
  id,
  label,
  rows = 3,
  required,
}: {
  id: string;
  label: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-paper)]/60 mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="w-full resize-none bg-transparent border-0 border-b border-[color:var(--color-paper)]/25 focus:border-[color:var(--color-brass)] focus:outline-none py-2 text-[1rem] text-[color:var(--color-paper)] placeholder-[color:var(--color-paper)]/35 transition-colors"
      />
    </div>
  );
}
