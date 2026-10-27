# Build contract — What Brings You In

Read this whole file, then PRODUCT.md, then the direction comment at the top of `<body>` in
`src/layouts/Base.astro`, then `~/.claude/skills/impeccable/reference/craft-floor.md`. Look at
`.impeccable/quality-bar/film-board.png` and `film-hero.png` once: they set the craft level and
material of the world, never the composition. Ours is roomier and quieter than that render.

## Goal
A multi-page Astro hub for a student-run medical podcast affiliated with McGill University
(product truth: PRODUCT.md). The site launches before the first episode: no episodes, photos,
links, names or dates exist yet, and every such thing is an honest, visible placeholder.
The user's brief, verbatim: "Use placeholders for anything to manually add (pictures, social
media links, executives photos, etc.). Aim for a cozy style by avoiding packing elements too
densely. Page structures should differ and with exotic layouts. Sophisticated UX with
meticulous display/transition/interaction details for everything, but do not overstimulate
the user."

## The world (fixed; do not reinterpret or soften)
A hand-processed strip of 16mm film.
- Ground is leader black; type is emulsion gray; the one orange (`--leak`) is a light leak
  reserved for the active or lit frame, the current nav page, the primary action, and tiny
  emphasis. Never paint a section orange; never put orange glows on arbitrary elements.
- Sepia (`--sepia`, `--sepia-dim`) is wear, placeholders, and the past.
- Perforations are structure: frames carry rails, strips carry rails, header and footer carry
  rails. Do not add perforations to random boxes, and do not nest frames in frames.
- Titles: `.display` (condensed stencil caps). Metadata: `.edge-code`. Hand numerals:
  `.grease`. Body copy: the default face. Never monospace.
- Frames develop: latent → projected on hover/focus/active; fogged = the past.
- Every page is a quiet room, not a control panel.

## What you build with (use these; never redefine them)
- Tokens `src/styles/tokens.css`: colours, type scale, spacing `--s-1…--s-11`, `--gutter`,
  `--container`, motion `--dur-1…4` + `--ease-out`, perforation geometry, shadows.
- Global classes `src/styles/global.css`: `.container` (+`--narrow`, `--wide`), `.section`,
  `.stack`, `.measure`, `.display` (+`--lg/--md/--sm`), `.title` (+`--lg`), `.lede`, `.muted`,
  `.faint`, `.small`, `.edge-code` (+`--bright/--leak/--sepia`), `.grease` (+`--lg/--leak/
  --circled`), `.prose` (rendered Markdown), `.perf`/`.perf--h`, `.btn` (+`--primary/--ghost/
  --sm/--icon`), `.field` (labels, inputs, textarea, select, hint, error), `[data-reveal]` and
  `[data-reveal-stagger="ms"]`, `.visually-hidden`, `.skip-link`.
- Components in `src/components/` (read each file's header comment for props):
  `Frame` (the atom: states latent/projected/fogged, `leak`, `numeral`, `code`, `wear`, `as`,
  `class="is-interactive"` for clickable frames, `class="is-lit"` for an always-on leak),
  `Strip` (horizontal run of frames with rails, prev/next, keyboard, active frame),
  `Placeholder` (photo/logo/audio/cover/image), `Button` (primary/secondary/ghost, sm, icons,
  href→`<a>`), `Icon` (one stroke set; add icons there, never inline SVG in pages),
  `SocialLinks` (honest "soon" marks for missing links), `Mark` (the logo stand-in).
- Layout `src/layouts/Base.astro`: `<Base title="…" description="…">…</Base>`. It provides
  header, footer, skip link, fonts, grain, ClientRouter view transitions and the motion script.
- Helpers `src/lib/url.ts`: `withBase(href)` is REQUIRED for every internal href/src (the site
  deploys under a sub-path); `isCurrent`. `src/lib/format.ts`: `fmtDate`, `fmtDateShort`,
  `fmtMonth`, `fmtWeekday`, `isoDate`, `pad2`, `isUpcoming`, `edgeCode(...parts)`.
- Site facts `src/site.ts` (name, tagline, description, affiliation, launch note, email,
  formEndpoint, socials, nav). Anything with `placeholder: true` is not real yet.
- Content: `import { getCollection, render } from 'astro:content'`; collections `episodes`,
  `events`, `team` (schemas in `src/content.config.ts`; entries with `placeholder: true` are
  fake and must render as honestly latent/coming-soon, never as real). `render(entry)` gives
  `{ Content }` for the Markdown body. Entry ids are the file names (`01`, `co-host-1`, …).
- A living reference of all of the above: `src/pages/kit.astro` (temporary; never link to it).
- Screenshots: `node scripts/shoot.mjs <url> <out.png> [w] [h] [--full] [--hover=selector]`.

## Rules
1. **Ownership.** Touch only your page file(s) and your own folder `src/components/<page>/`.
   Page-specific CSS lives in your files' `<style>` (Astro-scoped; use `:global()` sparingly
   and only inside a wrapper class you own). Never edit shared files (layout, global styles,
   tokens, shared components, content, site.ts, config, scripts). Need something shared?
   Solve it locally and report it in `open_issues`.
2. **Links.** `withBase('/episodes')`, never `"/episodes"`. Episode detail routes are
   `/episodes/<id>`, event detail routes `/events/<id>`.
3. **Placeholders.** `<Placeholder>` for any image/audio; `<SocialLinks>` for follow links;
   `data-placeholder="<kind>"` on anything else a maintainer must replace (copy you cannot
   know, endpoints, dates). Never invent guest names, episode titles, real event dates,
   quotes, statistics, partners, sponsors, or a founding story. The McGill affiliation is
   stated in text only; no McGill logos, crests or wordmarks.
4. **Density.** Cozy. Sections separated by `--s-9`/`--s-10`; tight groups inside; more space
   above a heading than below it. No same-size card grid as the page structure. No eyebrow or
   kicker label above a heading. No decorative 01/02/03 (frame numerals are fine when they ARE
   the episode number, date, or a step the reader needs). Body measure ≤ 70ch.
5. **Motion.** One authored moment per page (named in your brief). Otherwise quiet: `data-reveal`
   on sections (it "develops" content from faint and blurred; stagger lists with
   `data-reveal-stagger`), hover develops frames, focus rings. No loops, no parallax, no
   auto-play, no hover effects that move layout. Reduced motion is already respected by the
   shared CSS; do not add animations that bypass it.
6. **States.** Hover, focus-visible, current page, empty collections (render a single latent
   frame that says what is coming), placeholder vs real (branch on `placeholder` and missing
   fields; design the real state too), and both breakpoints (≥48em has the desktop nav, <48em
   the menu). Check 1440 and 390 wide.
7. **Semantics.** One `h1` per page, real landmarks (`section` with headings), lists as lists,
   buttons for actions and links for navigation, alt text or `aria-label` on anything visual,
   text contrast ≥ 4.5:1 (tokens are pre-checked on `--leader`; keep text off the orange bloom
   core), visible focus, keyboard-operable everything.
8. **Copy.** The product's own language from PRODUCT.md: warm, specific, short. Pre-launch
   truth is "first episodes coming soon". No hype, no claims, no invented numbers.
9. **Self-check (bounded).** Start your own dev server in the background:
   `npx astro dev --port <your port> --host 127.0.0.1 > /tmp/wbyi-<page>.log 2>&1 &`
   then `node scripts/shoot.mjs http://127.0.0.1:<port><route> <out>.png 1440 900`,
   `… <out>-full.png 1440 900 --full`, and `… <out>-mobile.png 390 844 --full`. Read the
   screenshots once, fix everything they show in one batch, re-shoot once, stop. The script
   prints "HORIZONTAL OVERFLOW" if the page is wider than the viewport: fix that. Kill your
   server when done. Do NOT run `astro build` (other agents' pages may be mid-edit).
10. Return exactly the schema you were given. No essays.
