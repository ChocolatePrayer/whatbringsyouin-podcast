# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Static Astro 7 site for *What Brings You In*, a student-run McGill UGME podcast. Deployed to GitHub Pages. Node 22.12+.

## Commands

```sh
npm run dev       # http://localhost:4321 (shows Astro's dev toolbar)
npm run build     # outputs dist/; the only automated check (no tests, no linter)
npm run preview   # serves dist/; use this for screenshots
node scripts/shoot.mjs <url> <out.png> [width] [height] [--full] [--hover=sel] [--click=sel] [--wait=ms] [--light]
```

- `npm run check` (`astro check`) is not set up: `@astrojs/check` and `typescript` are not installed.
- `scripts/shoot.mjs` drives the locally installed Chrome through `playwright-core`.
  - A width under 700 switches to mobile emulation.
  - `--full` pre-scrolls the page, so reveal-on-enter frames have developed before the capture.
  - Its flag parser splits on `=`, so a `--hover` or `--click` selector cannot contain `=`.
  - Shots go in `.impeccable/shots/`, which git ignores.

## Architecture

**Content.**
- Episodes, events and team members are Markdown collections defined in `src/content.config.ts`.
  - The glob loader skips files starting with `_`, so each folder's `_template.md` is never rendered.
- Site-wide facts live in `src/site.ts`: name, tagline, affiliation, email, socials, form endpoint and nav.
- Placeholder convention: anything not real yet is marked, so it can be found and replaced. Keep it when adding content.
  - `placeholder: true` in front matter or in `site.ts`.
  - `data-placeholder` in markup.
  - `[bracketed]` copy.
  - README.md lists the grep commands and the remaining checklist.

**URLs and dates.**
- The base path is `/<repo>/` on GitHub Pages and is derived in `astro.config.mjs`. Override it with the `SITE_URL` and `BASE_PATH` environment variables.
- Every internal href and every `/public` asset path must go through `withBase()` in `src/lib/url.ts`.
  - `Button.astro` applies it automatically to hrefs that start with `/`.
- Content dates are date-only and parse as UTC midnight. `src/lib/format.ts` therefore formats in UTC.
  - `isUpcoming()` splits upcoming events from past ones. Past events render "fogged" automatically.

**Visual system.**
- Read DESIGN.md before any visual change. Product context is in PRODUCT.md.
- The world is a 16mm reel on a McGill archive table: white prints held in perforated film stock, beige folder bands, and one McGill red (`#af2825`, the logo's).
- `src/styles/tokens.css` holds raw values. `src/styles/global.css` holds:
  - **Surfaces:** `.surface-paper`, `.surface-beige`, `.surface-stock` and `.surface-red` remap the role tokens (`--bg`, `--fg*`, `--line*`, `--mark`). Style with the role tokens rather than raw colours.
  - **`.band`:** makes a section's surface full-bleed.
  - **`.perf`:** perforation rails. They are CSS masks, so the holes show whatever lies beneath.
  - **`.btn` plates:** buttons drawn as short lengths of film stock.
  - **Reveal styles:** the CSS side of the motion described below.
- Film colour is the `--stock` token.
  - `.stock-red` and `.stock-brown` re-point it on a frame, strip or hanging strip. Graphite is the default.
  - Buttons read `--plate` instead. It resolves on `:root`, so buttons stay graphite inside tinted film.
- `src/components/Frame.astro` is the atom. Every piece of content is a Frame, never a card. Its props:
  - `state`: `latent` (coming soon), `projected` (default) or `fogged` (the past).
  - `leak`: a red light leak, clipped to the print so the stock never reddens. `.is-lit` marks the one frame that matters per view and adds a drawn red ring around its numeral.
  - `numeral`, `code` (stamped edge-code metadata built with `edgeCode()`) and `wear`.
- Inside `Strip.astro`, `HangingStrip.astro` (About) and the episodes film log, frames drop their own rails (`--rail: 0px`) and share the container's rails.

**Motion.**
- `src/scripts/motion.ts` is the only client script. It re-runs after every `ClientRouter` navigation.
- It wires three data attributes:
  - `data-reveal`: adds `.is-in` on enter.
  - `data-reveal-stagger="ms"`: sets per-child delays.
  - `data-strip*`: scroll buttons and the active frame for a Strip.
- An inline script in `Base.astro` adds `.js` to `<html>`. Reveal styles only apply under `.js`.
- Only frames (prints) animate: they "develop" out of white paper. Type never moves.
- Each page has at most one authored moment, and everything is static under `prefers-reduced-motion`.

**Design records.**
- These files track the design and must stay in sync with it:
  - DESIGN.md and its sidecar `.impeccable/design.json`.
  - The surface brief in `.impeccable/surfaces/`.
  - `.impeccable/finish-log.md`.
  - The direction-contract comment in `src/layouts/Base.astro`.
- When a visual change alters a documented rule or value, update DESIGN.md too.

**Brand assets.**
- The files in `src/assets/brand/` (logo, microphone mark, script "in", McGill seal) were derived from `WBYI-podcast-logo.jpeg` and `mcgill-faculty-of-medicine-logo.png` at the repo root.
- Regenerate them if those sources change. Permission to show the seal is confirmed.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (`withastro/action`) and publishes to GitHub Pages. Merging a branch into `main` is therefore a production deploy.
