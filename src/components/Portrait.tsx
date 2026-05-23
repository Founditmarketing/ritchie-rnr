import Image from "next/image";

/**
 * Portrait — renders a real photograph when `src` is supplied,
 * otherwise falls back to a deliberate monogram placeholder that
 * still reads as a finished design rather than an empty slot.
 */
export function Portrait({
  caption,
  className = "",
  aspect = "3/4",
  monogram = "MR",
  src,
  alt,
  priority = false,
}: {
  caption?: string;
  className?: string;
  aspect?: "3/4" | "4/5" | "1/1";
  monogram?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className="relative w-full overflow-hidden bg-[var(--color-paper-2)]"
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        {src ? (
          <>
            <Image
              src={src}
              alt={alt ?? "Portrait of Matt Ritchie"}
              fill
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 40vw, 100vw"
              priority={priority}
              className="object-cover"
            />
            {/* Subtle vignette to seat the image into the editorial paper ground */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 35%, transparent 55%, oklch(0.20 0.025 50 / 0.18) 100%)",
                mixBlendMode: "multiply",
              }}
            />
          </>
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.55]"
              style={{
                background:
                  "radial-gradient(120% 90% at 30% 20%, oklch(0.92 0.022 70) 0%, transparent 55%), radial-gradient(120% 90% at 80% 90%, oklch(0.88 0.030 60) 0%, transparent 55%), oklch(0.93 0.020 72)",
              }}
            />
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full opacity-[0.10] mix-blend-multiply"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="hatch"
                  width="6"
                  height="6"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="6"
                    stroke="oklch(0.36 0.135 22)"
                    strokeWidth="0.8"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hatch)" />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div
                className="font-display text-[clamp(5rem,12vw,9rem)] leading-none"
                style={{
                  color: "var(--color-claret)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                  letterSpacing: "-0.04em",
                  opacity: 0.85,
                }}
              >
                {monogram}
              </div>
            </div>
            <div
              aria-hidden
              className="absolute inset-3 border border-[color:var(--color-claret)]/25"
            />
          </>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-3)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
