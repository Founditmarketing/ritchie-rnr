# Ritchie for NAR Treasurer

A campaign site for **Matt Ritchie**, eligible candidate for the 2027 & 2028 Treasurer of the National Association of REALTORS®. Built as a world-class Next.js app: editorial, considered, deliberately not-a-political-template.

## Stack

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | Next.js 15 · App Router · React 19      |
| Language     | TypeScript (strict)                     |
| Styling      | Tailwind CSS v4 (`@theme` tokens, OKLCH) |
| Motion       | Framer Motion (reduced-motion aware)    |
| Fonts        | Fraunces (display) + Inter (body) + IBM Plex Mono (labels) — via `next/font` |
| Icons        | Lucide (loaded only if imported)        |
| Deploy       | Static / Vercel-ready                   |

## Design direction

- **Register:** Brand. The design is the product.
- **Anti-references:** flag-waving political sites, navy-and-gold finance, teal-and-stock-photo realty.
- **Color strategy:** *Committed* — a deep oxblood claret carries the identity, grounded in warm parchment.
- **Theme:** Light, warm broadsheet — a public-facing candidate, not a moody dashboard.
- **Type:** Editorial serif display (Fraunces, opsz / SOFT / WONK axes) against a workhorse sans.

Design tokens live in [`src/app/globals.css`](./src/app/globals.css) under `@theme`. Update there to evolve the system; sections consume tokens, never raw hex.

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Deploy

Push to a Vercel-connected repository, or run `vercel` locally. No server features required — the page is fully static.

## Replacing placeholder content

| Placeholder              | File                                       | What to swap                                            |
| ------------------------ | ------------------------------------------ | ------------------------------------------------------- |
| Portrait monogram        | `src/components/Portrait.tsx`              | Drop a real `<Image>` and remove the SVG placeholder.   |
| Brochure link            | `src/components/{Nav,Hero,Media}.tsx`      | Update the `https://ritchie4nar.com/...` URL.           |
| Intro video / radio      | `src/components/Media.tsx`                 | Wire real `href`s and embeds.                           |
| Support graphics         | `src/components/Support.tsx`               | Point each `href` at an asset (PNG / PDF / ZIP).        |
| Contact form action      | `src/components/Contact.tsx`               | Replace optimistic submit with Formspree / Resend / Vercel form. |

## Accessibility

- Focus rings are claret on a 2px outline with 3px offset.
- Color contrast is verified against ink-on-paper at body sizes.
- Reduced motion respected throughout (Framer Motion `useReducedMotion`, CSS `prefers-reduced-motion`).
- Headings nest correctly: `h1` once in the hero, `h2` per section, `h3` for sub-blocks.

## Project structure

```
src/
├── app/
│   ├── globals.css       Design tokens + base + components
│   ├── layout.tsx        Metadata, fonts, html shell
│   └── page.tsx          Composed homepage
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── Media.tsx
│   ├── Nav.tsx
│   ├── Portrait.tsx
│   ├── Reveal.tsx
│   ├── Service.tsx
│   ├── Support.tsx
│   └── Vision.tsx
└── lib/
    └── fonts.ts          next/font setup
```
