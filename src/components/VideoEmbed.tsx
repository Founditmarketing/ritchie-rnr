"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  youtubeId: string;
  title: string;
  posterSrc?: string;
  className?: string;
};

/**
 * VideoEmbed — facade-pattern YouTube player. Renders a custom poster
 * with a serif play marker; only loads the actual iframe (and YouTube's
 * heavy JS) on click. Keeps the page light and the editorial feel
 * intact until the user opts in.
 */
export function VideoEmbed({ youtubeId, title, posterSrc, className = "" }: Props) {
  const [playing, setPlaying] = useState(false);

  const thumb =
    posterSrc ?? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <figure
      className={`relative w-full overflow-hidden bg-[color:var(--color-paper-3)] ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full block"
        >
          {/* Poster */}
          <Image
            src={thumb}
            alt=""
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            unoptimized
          />

          {/* Editorial scrim */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.18 0.020 50 / 0.0) 35%, oklch(0.18 0.020 50 / 0.55) 100%)",
            }}
          />

          {/* Marginalia top-left */}
          <div className="absolute top-4 left-5 md:top-6 md:left-7 flex items-center gap-3">
            <span
              className="marginalia"
              style={{ color: "var(--color-brass)" }}
            >
              Plate II · Address
            </span>
            <span
              aria-hidden
              className="w-7 h-px"
              style={{ background: "var(--color-brass)", opacity: 0.4 }}
            />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-paper)]/70">
              fig. 02
            </span>
          </div>

          {/* Play marker — center */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <span
                aria-hidden
                className="block w-20 h-20 md:w-28 md:h-28 rounded-full border border-[color:var(--color-paper)]/40 group-hover:border-[color:var(--color-paper)]/80 transition-colors duration-500"
              />
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center"
              >
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                  className="md:scale-125 transition-transform duration-500 group-hover:scale-[1.18] md:group-hover:scale-[1.45]"
                  aria-hidden
                >
                  <path
                    d="M0 1.5L22 13L0 24.5V1.5Z"
                    fill="var(--color-paper)"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Title — bottom */}
          <div className="absolute bottom-4 left-5 right-5 md:bottom-7 md:left-7 md:right-7 flex items-end justify-between gap-6">
            <h3
              className="font-display text-[1.35rem] md:text-[2rem] leading-[1.05] tracking-display-tight text-[color:var(--color-paper)] max-w-[20ch]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
            >
              {title}
            </h3>
            <span
              className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-paper)]/80 whitespace-nowrap mb-1"
              style={{ color: "var(--color-brass)" }}
            >
              Play ↗
            </span>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </figure>
  );
}
