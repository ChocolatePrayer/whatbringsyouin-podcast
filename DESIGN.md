---
name: What Brings You In
description: A student-run medical podcast hub rendered as one hand-processed strip of 16mm film.
colors:
  leader: "#0e0f10"
  leader-2: "#141618"
  shadow-2: "#1c1f22"
  shadow: "#2a2e31"
  shadow-3: "#353a3e"
  fogged-fill: "#1a1714"
  emulsion-dim: "#8e9397"
  emulsion: "#a6abb0"
  ink: "#d8d6d0"
  ink-bright: "#eceae4"
  leak: "#ff8a33"
  leak-hot: "#ffb070"
  sepia: "#c8b089"
  sepia-dim: "#6b5a42"
  grease: "#b8b3a6"
typography:
  display:
    fontFamily: "Big Shoulders Stencil Variable, Bricolage Grotesque Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 5.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.025em"
  display-md:
    fontFamily: "Big Shoulders Stencil Variable, Bricolage Grotesque Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.8vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.025em"
  display-sm:
    fontFamily: "Big Shoulders Stencil Variable, Bricolage Grotesque Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 85"
  lede:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.18em"
    fontVariation: "'wdth' 80"
  plate:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.18em"
    fontVariation: "'wdth' 80"
  hand:
    fontFamily: "Caveat Variable, Bradley Hand, Segoe Print, cursive"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  hole: "0.125rem"
  plate: "0.25rem"
  frame: "0.375rem"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4rem"
  s-9: "6rem"
  s-10: "8rem"
  s-11: "12rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.leak}"
    textColor: "{colors.leader}"
    typography: "{typography.plate}"
    rounded: "{rounded.plate}"
    padding: "0 3rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.leak-hot}"
    textColor: "{colors.leader}"
  button-secondary:
    backgroundColor: "{colors.shadow}"
    textColor: "{colors.ink-bright}"
    typography: "{typography.plate}"
    rounded: "{rounded.plate}"
    padding: "0 3rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.shadow-3}"
    textColor: "{colors.ink-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-bright}"
    typography: "{typography.plate}"
    rounded: "{rounded.plate}"
    padding: "0 3rem"
    height: "2.75rem"
  button-sm:
    typography: "{typography.label}"
    padding: "0 1.5rem"
    height: "2.25rem"
  button-icon:
    padding: "0"
    width: "2.75rem"
    height: "2.75rem"
  input:
    backgroundColor: "{colors.shadow-2}"
    textColor: "{colors.ink-bright}"
    typography: "{typography.body}"
    rounded: "{rounded.plate}"
    padding: "0.75rem 1rem"
    height: "3rem"
  frame:
    backgroundColor: "{colors.shadow-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "1.5rem 1.5rem 2rem"
  frame-latent:
    backgroundColor: "{colors.shadow-2}"
    textColor: "{colors.emulsion}"
    rounded: "{rounded.frame}"
    padding: "1.5rem 1.5rem 2rem"
  frame-fogged:
    backgroundColor: "{colors.fogged-fill}"
    textColor: "{colors.emulsion}"
    rounded: "{rounded.frame}"
    padding: "1.5rem 1.5rem 2rem"
  placeholder:
    backgroundColor: "{colors.shadow}"
    textColor: "{colors.emulsion}"
    typography: "{typography.small}"
    padding: "1rem"
  nav-link:
    textColor: "{colors.emulsion}"
    padding: "0.5rem 0"
  nav-link-current:
    textColor: "{colors.ink-bright}"
    padding: "0.5rem 0"
  topic-chip:
    backgroundColor: "transparent"
    textColor: "{colors.emulsion-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0.4em 0.7em 0.35em"
  edge-code:
    textColor: "{colors.emulsion-dim}"
    typography: "{typography.label}"
---

# Design System: What Brings You In

## Overview

**Creative North Star: "The Hand-Processed Reel"**

The whole site is one strip of 16mm film that a student processed by hand. The page ground is film leader, type is the gray of emulsion, and every unit of content is a *frame*: a cell with perforation rails on both sides, a grease-pencil numeral in the corner, and a stamped edge code along the bottom. Frames are *latent* until something develops them (hover, focus, becoming the active frame), *projected* when they are real, and *fogged* when they belong to the past. One orange exists in the world, a light leak, and it is spent on exactly the things that are live right now: the lit frame, the current page, the primary action.

The build refuses the podcast-site defaults: no cover-art hero, no "listen on" button row, no same-size card grid. Instead each of the six page types has its own film-handling structure (a title card, a strip, a drying line, a contact sheet, a film log, a ledger, a splice bench), all made from the same Frame atom. Density is cozy on purpose: sections sit 6 to 8rem apart, groups inside them are tight, and every page is a quiet room rather than a control panel.

Material is literal, not implied. Grain sits over the whole page and inside the stencil letterforms; rails are sooted at their edges; the light leak is masked through grain and chemical blotches; media slots carry authored scratches; placeholders carry an unfixed chemistry stain. Motion is "developing": content arrives faint and blurred and resolves into projection, once, with an expo ease-out. Nothing loops.

**Key Characteristics:**
- One dark world only (`color-scheme: dark`); there is no light theme.
- Frame grammar everywhere: rails, numeral, edge code, media gate, body.
- Orange is a semantic signal (live / current / primary), never decoration.
- Sepia marks wear, placeholders, and the past; placeholders are visible to maintainers and honest to visitors.
- Three faces with fixed jobs: stencil caps for titles, one grotesque for everything read, one hand for numerals.
- Pages differ structurally; the atom does not.

## Colors

A near-monochrome darkroom palette: five grays of leader and shadow, four grays of emulsion and ink, one orange that leaks in, and a sepia pair for chemistry stains.

### Primary
- **Light Leak** (`leak`, #ff8a33): the only saturated color. Spent on the lit frame's leak bloom (through the right rail), the current nav page underline and mobile-menu item, the primary button plate, link underline color, focus rings (`2px solid`, offset `3px`), text selection, the skip link, the field focus border, the checked topic plate's inset underline, and the single orange cell of the mark. Never a section background, never an arbitrary glow.
- **Leak Hot** (`leak-hot`, #ffb070): the bright core of the bloom and the primary button's hover plate; also link underline on hover.

### Secondary
- **Chemical Sepia** (`sepia`, #c8b089): the stain of emulsion that never fixed. Placeholder stamps ("Add photo"), bracketed placeholder copy, "soon" marks, invalid field borders and error text, the launch note, past-event counts, the "already happened" line.
- **Sepia Dim** (`sepia-dim`, #6b5a42): dashed placeholder outlines and the border of "soon" tags.

### Tertiary
- **Grease Pencil** (`grease`, #b8b3a6): the hand-written numeral on every frame and the step counters on Get involved. Brightens to `ink-bright` when it sits over media.

### Neutral
- **Leader** (`leader`, #0e0f10): the page ground (`--bg`), perforation holes on plates, and the text color on orange.
- **Leader 2** (`leader-2`, #141618): the slightly raised ground of the footer and the mobile menu panel.
- **Shadow 2** (`shadow-2`, #1c1f22): frame fill (`--frame-bg`), input fill, the audio player plate, inline code.
- **Shadow** (`shadow`, #2a2e31): rails (`--rail`), secondary button plates, placeholder fill, media-slot fill behind images.
- **Shadow 3** (`shadow-3`, #353a3e): the hovered plate.
- **Fogged Fill** (`fogged-fill`, #1a1714): a warm-black frame fill used only by the fogged state (a literal in `Frame.astro`, not a root token).
- **Emulsion Dim** (`emulsion-dim`, #8e9397): faint text (`--fg-faint`); edge codes, hints, input placeholder text, meta icons. 5.9:1 on leader.
- **Emulsion** (`emulsion`, #a6abb0): muted text (`--fg-muted`); ledes, nav links at rest, latent frame copy, the drying-line wire and clips. 7.6:1 on leader.
- **Ink** (`ink`, #d8d6d0): body text (`--fg`). 12.9:1 on leader.
- **Ink Bright** (`ink-bright`, #eceae4): headings, titles, display ink (`--fg-strong`), plate text, link text.
- **Hairlines**: `--line` is emulsion at 16% (`color-mix(in oklab, var(--emulsion) 16%, transparent)`) for dividers, header/footer borders and topic chips; `--line-strong` is emulsion at 32% for input borders, ghost-button rings and blockquote bars.

### Named Rules
**The One Leak Rule.** Orange means *live*: the one lit frame per strip, the current page, the primary action, and the small emphasis marks listed above. A strip has at most one `.is-lit` frame, and the lit frame always means something that can be named in its edge code ("Next to develop", "Latest", "Next screening", "Open frame", "Tail"). Hover and focus only *preview* the leak; they never make a second frame permanently lit.

**The Sepia Is Wear Rule.** Anything that is not real yet, or no longer current, reads in sepia: placeholder stamps and bracketed copy, "soon" marks, past events, invalid input. Sepia never decorates a live element.

**The Pre-Checked Contrast Rule.** Text colors are checked on `leader`: use `emulsion-dim` and up for any text; keep text off the orange bloom core (bodies inside lit frames stop before the right rail with extra right padding).

## Typography

**Display Font:** Big Shoulders Stencil Variable (fallback Bricolage Grotesque Variable, Arial Narrow)
**Body Font:** Bricolage Grotesque Variable (fallback Helvetica Neue, Arial), optical sizing on
**Hand Font:** Caveat Variable (fallback Bradley Hand, Segoe Print)

**Character:** Stencil caps are the lettering sprayed on a film can; the grotesque is set narrow (85% width for headings, 80% for codes and plates) so it reads as print on the strip's margin; the hand is a grease pencil, always slightly rotated. There is no monospace anywhere.

### Hierarchy
- **Display** (`.display`, 700, uppercase, `--display-lg` clamp(2.75rem, 1.6rem + 5.6vw, 6rem), line-height 0.95, tracking 0.025em): the home h1 only. `.display--md` (clamp(2.25rem, 1.4rem + 3.8vw, 4rem)) is every other page h1 and the "Join the reel" h2. `.display--sm` (clamp(1.75rem, 1.2rem + 2.4vw, 2.75rem)) is section h2s, sticky ledger markers, the episode detail h1 inside its frame, and the footer wordmark (1.5rem there).
- **Title** (`.title`, 700, width 85%, line-height 1.2; `.title--lg` 1.5rem): frame headings (h2/h3 inside frames), guest names, team names. Default `h1–h4` share the weight, width and `ink-bright`.
- **Lede** (`.lede`, 400, 1.25rem / 1.5, `emulsion`, max 55ch): the one paragraph under every page title and section title.
- **Body** (400, 1.0625rem / 1.6, `ink`): paragraphs and `.prose`. `--measure` is 65ch; `.lede` ≤ 55ch; frame descriptions are capped at 46–60ch by their pages. About's frame copy drops to 0.9375rem / 1.55 (`.copy`) so a narrow strip still holds a line.
- **Small** (`.small`, 0.8125rem): meta lines, hints, privacy note, bios on the team sheet.
- **Label / Edge code** (`.edge-code`, 600, width 80%, 0.6875rem / 1.25, tracking 0.18em, uppercase, tabular numerals, `emulsion-dim`): the film's margin print. Used for frame codes, section markers, field labels, strip counts, footer column heads, topic chips. Variants: `--bright` (`emulsion`), `--leak`, `--sepia`. Parts are joined with ` · ` by `edgeCode()` in `src/lib/format.ts`.
- **Plate** (`.btn`, 600, width 80%, 0.8125rem / 1, tracking 0.18em, uppercase): button lettering; `.btn--sm` drops to 0.6875rem. Desktop nav links are the same voice at 0.14em tracking.
- **Hand** (`.grease`, Caveat 600, 1.75rem / 1, rotate −3deg, `grease`; `.grease--lg` 2.75rem): frame numerals (episode number, day of month, sheet position), the hero's "What brings you in?" line (clamp to 3.75rem), the Next-screening day (clamp 3.25–5rem), Get-involved step counters (1.5rem). `.grease--circled` draws a wobbly 2px orange ellipse around it; `.grease--leak` colors it orange.

### Named Rules
**The Grain-In-The-Letterform Rule.** `.display` paints `grain-dark.png` (256px tile) through `background-clip: text` over `--display-ink` so the stencil letters carry emulsion grain. Recolor display type by setting `--display-ink`, never `color`. Browsers without `background-clip: text` get solid `--display-ink` via `@supports`.

**The Edge Code Is Metadata Rule.** `.edge-code` carries dates, counts, states, kinds and labels. It is never used for prose, and never placed above a heading as an eyebrow; it sits at the bottom of a frame, beside a list, or as a column head.

**The Numeral Must Mean Something Rule.** A grease numeral is the episode number, the day of the month, a position on the sheet, or a step the reader takes. "TBC" is the only non-numeric numeral and marks an unconfirmed date. There are no decorative 01/02/03.

## Layout

**Container.** `.container` is `min(100% − 2·gutter, 80rem)` centered, gutter `clamp(1rem, 4vw, 3rem)`. `.container--narrow` sets 56rem (About head and story), `.container--wide` 96rem (the drying line). The Events page overrides `--container` to 72rem for its ledger.

**Vertical rhythm.** 4px base (`--s-1` 0.25rem … `--s-11` 12rem). Sections are separated by `--s-9` (6rem) and `--s-10` (8rem) at ≥60em; `.section` applies that as block padding. Inside a section: head to content `--s-7`/`--s-8`, title to lede `--s-4`/`--s-5`, groups `--s-3`, flow `--s-4`. More space sits above a heading than below it (`.prose h2`: `--s-8` above, `--s-3` below). The footer stands off by `--s-10`.

**Breakpoints in use.** 40em (team sheet goes two-up), 48em / 47.99em (desktop nav vs. menu; horizontal frames; two-column grids; ledger margin column), 60em (hero two columns, 12-column pages, larger section padding), 64em (wider ledger margin), 80em (four-strip drying line). Check 1440 and 390 wide.

**Grids that break the grid.** Pages lay frames on a 12-column light table and then offset individual cells with `margin-block-start` (`--s-4`, `--s-7`, `--s-8`, `--s-9`) so no two rows read as a card grid. Sticky margin markers (`position: sticky; top: var(--s-6)`) ride alongside long lists.

**Page structures (all distinct; the atom is shared).**
1. **Home — title card + strip + trio.** Hero is an 11fr/13fr split at ≥60em with the show's name in `.display--lg` left and one oversized always-lit frame right (min-height clamp(28rem, 60vh, 40rem)) that overhangs the container by up to 10rem like a strip leaving the gate; below 60em the copy dissolves (`display: contents`) so the frame sits between the actions and the follow marks. Then "The first reel" (a horizontal `Strip` of episode frames), "Three things at once" (three frames at columns 1/8, 8/13 offset `--s-8`, 3/12), "Next screening" (one wide frame with a 9rem date column), and "Join the reel" (one wide lit frame, the tail).
2. **About — the drying line.** Narrow head, then a `ul` of `HangingStrip`s: 1 column, 2 at ≥48em, 4 at ≥80em (5.5fr 7fr 5.75fr 5.75fr). Each strip draws a full-bleed 1px wire at its top (emulsion at 52%), a drawn clip, a leader of `--s-7` plus its own offset (0, `--s-7`, `--s-4`, `--s-9`; scaled ×0.34 under 48em), and a flush column of frames that share one pair of rails, separated by 2px of leader. The longer story follows in a narrow `.prose`.
3. **Team — the contact sheet.** Head splits h1 (cols 1–6) and lede (cols 7–11) on one baseline. A soft radial backlight sits under the sheet; the sheet's edge code runs vertically (`writing-mode: vertical-rl`, rotated 180°, sticky) in a 2.5rem margin pulled left of the container. Frames span 6 columns at ≥40em (even ones offset `--s-7`) and 4 at ≥60em (3n+2 offset `--s-8`, 3n+3 offset `--s-4`). Every member frame is latent with alternating wear. The close is a lit "open frame" numbered one past the roster.
4. **Episodes — the film log.** Head: h1 left, lede + count right, baseline-aligned. One centered 56rem column carries its own two vertical rails (fade-masked over `--s-8` at both ends); frames stack with `--s-3` gaps and drop their own rails. At ≥48em each frame turns horizontal: cover 34fr left, body 66fr right with right padding `clamp(--s-6, 22%, 10rem)` reserved for the leak; under 48em the cover is capped at 13rem and the leak is pulled onto the picture. Multiple reels become groups with a `Reel 02` edge-code heading. Below: a suggest-a-guest line and "Where to listen" as soon marks.
5. **Episode detail — the frame in the gate.** Back link, then one lit hero frame: body left (11fr), cover right (9fr) at ≥60em so the leak floods the picture. Body is a 1fr / 16–22rem grid (column gap `--s-10`) of Listen, Show notes, and an aside with a latent guest frame and topics. Prev/next are two interactive frames, the next one right-aligned with its numeral on the right rail.
6. **Events — the screening ledger.** A margin column (11rem; 14rem at ≥64em) holds the h1, a sticky month marker per group with its year and count, and the "Already screened" marker; frames run down the right with `--s-6` gaps. The first upcoming event is lit and its leak blooms in after its frame develops. Placeholder events group under "To be scheduled" with a "TBC" numeral. Past events are fogged, wear 2, in a two-up grid. The close sits in column 2.
7. **Event detail.** One wide frame, body 7fr / image 5fr at ≥60em, fogged with no leak when past. Facts are a `dl` with icon + edge-code terms. Details and the close are indented to the frame's text column (`perf-w + --s-6`).
8. **Get involved — the splice bench.** Head splits h1 (cols 1–7) and lede (8–12). Three entry frames span 5/4/3 columns with offsets 0, `--s-7`, `--s-9`, all wear 0. One lit bench frame holds the form (max 54rem) with topic radios rendered as ghost plates; topic-specific fields develop in through `:has()` (grid rows 0fr→1fr plus blur), and the chosen topic lights its entry frame above. A coda pairs grease-numbered next steps with the follow marks.

**Chrome.** Header: a horizontal rail, then a 4.5rem bar with the mark and stencil wordmark (1.25rem, tracking 0.08em) left and the five nav links right at ≥48em; under 48em a native `<details>` menu drops a `leader-2` panel of 1.75rem stencil links. Footer: a rail, `leader-2` ground, a 1.6fr 1fr 1fr 1.2fr grid at ≥48em (brand, Reels, Follow, Write to us) and a colophon row.

## Elevation & Depth

Depth is physical: a frame is a piece of film lying on a black table, so it casts an offset, soft shadow, and the light leak is a glow only because it is light. There are no flat halos, no borders-as-elevation, and no hard offset shadows. Tonal steps (`leader` → `leader-2` → `shadow-2` → `shadow` → `shadow-3`) do the rest: the footer and menu are one step up, frames two, rails and plates three, hover four.

### Shadow Vocabulary
- **Frame** (`--shadow-frame`: `0 1.5rem 3rem -1.5rem rgb(0 0 0 / 0.8), 0 0.25rem 0.5rem -0.25rem rgb(0 0 0 / 0.5)`): every Frame, HangingStrip column, and the audio player plate.
- **Frame, lifted** (`0 2rem 3.5rem -1.5rem rgb(0 0 0 / 0.85), 0 0.25rem 0.5rem -0.25rem rgb(0 0 0 / 0.5)` with `translate: 0 -2px`): `.is-interactive` frames on hover.
- **Plate** (`--shadow-plate`: `0 0.5rem 1rem -0.6rem rgb(0 0 0 / 0.7)`): buttons and checked topic plates.
- **Leak** (`--shadow-leak`: `0 1rem 3rem -1rem color-mix(in oklab, var(--leak) 55%, transparent)`): the primary button on hover only, layered over the plate shadow. The current nav underline carries a smaller leak glow (`0 0.25rem 0.75rem -0.125rem`, leak at 70%); focused inputs carry `0 0.5rem 1.5rem -0.75rem` leak at 60%.
- **Menu panel** (`0 2rem 3rem -2rem rgb(0 0 0 / 0.9)`): the mobile nav panel.

### Named Rules
**The Light Is The Only Glow Rule.** Colored shadows exist only where orange is already present and live (primary hover, current page, focused field). Nothing else glows.

**The Grain Over Everything Rule.** `.grain` is a fixed, pointer-transparent overlay at `z-index: 90`, opacity 0.3, `mix-blend-mode: screen`, tiling `grain-light.png` at 512px. It is removed under `prefers-reduced-transparency: reduce`. Texture is layered, never faked with opacity on content.

## Shapes

The form language is cut film and stamped metal: small radii, straight edges, masked holes.

- **Frame corners** (`--radius-frame`, 0.375rem): frames, the audio plate, the HangingStrip column.
- **Plate corners** (`--radius-plate`, 0.25rem): buttons, inputs, chips, placeholder label plates, the skip link, the menu toggle, inline code.
- **Hole corners** (`--radius-hole`, 0.125rem): the perforation holes on plates. Focus rings use 2px.
- **Perforation rail** (`.perf` / `.perf--h`): a `--perf-w` (1.25rem) band of `shadow`, grained with `grain-dark.png` and sooted with a 55%-black edge gradient, with holes `--perf-hole-w` × `--perf-hole-h` (0.5625rem × 0.875rem) on a `--perf-period` (1.5rem) pitch masked out by a repeating-linear-gradient mask. Because the holes are masked rather than painted, whatever sits behind the rail shows through (the page ground, or a light leak). Vertical rails on frames and film logs, horizontal rails on strips, the header and the footer.
- **Plate holes**: buttons carry two small leader-colored holes at each end (`0.375rem × 0.4375rem`, duplicated 1.0625rem below with `box-shadow`), drawn by `::before`/`::after`; ghost plates draw them in `--line-strong`; icon buttons drop them.
- **Dashed outline**: placeholders inset a 1px dashed `sepia-dim` rectangle (`inset: var(--s-3)`, 2px radius): the registration edge of an unexposed frame.
- **Grease circle**: `border-radius: 50% 45% 55% 50% / 55% 50% 45% 50%`, 2px, hand-drawn ellipse around a numeral.
- **Wire and clip**: 1px hairline (emulsion at 52%) and a 28×24 stroke-drawn clip at 1.5px, on About only.

**The No Nested Frames Rule.** Frames do not sit inside frames. Inside a `Strip`, `HangingStrip` or the film log, a frame drops its own rails (`grid-template-columns: 0 1fr 0; .frame__rail { display: none }`) and the parent's single pair of rails carries the perforations.

## Components

### Frame (the atom; `src/components/Frame.astro`)
A cell of 16mm film: left rail, media gate, body, edge code, right rail, light-leak layer, numeral. Rendered as any tag (`as="article" | "a" | "figure" | "section" | "div"`).
- **Anatomy:** CSS grid `perf-w | 1fr | perf-w` × `media | body | code`. Fill `shadow-2`, `--radius-frame`, `--shadow-frame`, `overflow: clip`, `isolation: isolate`. Body: `gap --s-3`, padding `--s-5 --s-5 --s-6` (pages open this up to `--s-7`–`--s-9` for wide frames); a numeral with no media pushes the body down to `--s-8`. Code sits at `0 --s-5 --s-4`. Numeral is absolute at `top --s-2, left perf-w + --s-3` with a 1px black text-shadow, bright over media. Rails are `z-index: 3`, the leak `2`, media and body `1`.
- **Media gate:** `shadow` fill, images `object-fit: cover`; `::after` lays `scratches.svg` with `mix-blend-mode: screen` at opacity 0 / 0.6 / 1 for `wear` 0 / 1 / 2 (wear 2 also shifts the scratch position). Use `wear={0}` for text-only frames that should read clean (the Get involved frames).
- **Leak (`leak` prop):** a layer inset `-25% -10% -25% 30%` painting `leak-hot` → `leak` → transparent from the right edge, `mix-blend-mode: screen`, masked by `grain-alpha.png` (256px) intersected with `blotch-alpha.png` (640px). Opacity 0 at rest; **0.85 on `:hover` / `:focus-within`; 0.95 when `.is-lit`**; transition `--dur-4` (1200ms). It lives above media and body and below the rails, so it floods the perforations.
- **States:** `state="latent"` sets copy to `emulsion` and desaturates media (`grayscale(1) brightness(0.7) contrast(0.95)`); on hover, focus-within or `.is-active` it develops to `ink` and `grayscale(0.15) brightness(0.95)` over `--dur-4`. `state="projected"` is the default, full strength. `state="fogged"` uses `fogged-fill`, `emulsion` copy, `sepia(0.7) brightness(0.6) contrast(0.9)` media, and a multiplied sepia-stain layer. **`.is-active` (set by `Strip` on the centred frame) develops a latent frame; it does not light the leak.** `.is-lit` lights it permanently; `.is-interactive` adds the pointer, the hover lift and a 4px focus-ring offset.
- **Titles develop with the frame:** pages set `.frame.is-latent .title { color: inherit }` and brighten it to `--fg-strong` on hover/focus so the heading resolves with the frame.
- **Horizontal frames:** at ≥48em / ≥60em pages re-grid `.frame.has-media` to four columns (`perf-w | body | media | perf-w` or `0 | media | body | 0`) so the cover sits on the leak side. Keep the rails in columns 1 and 4.

### Strip (`src/components/Strip.astro`)
A horizontal run between two `.perf--h` rails: a flex track with `scroll-snap-type: x mandatory`, `--s-6` gaps, `--s-6 gutter` padding, item width `--strip-item-w` (default `min(78vw, 26rem)`), hidden scrollbar, and leader spacers before and after so the first frame aligns with the container. `tabindex="0"` region labelled by `label`. Controls: an edge-code count left, ghost icon plates right, hidden until `.has-overflow`, disabled at the ends. `src/scripts/motion.ts` scrolls by one frame plus gap and marks the frame nearest the track centre `.is-active` on a `requestAnimationFrame`.

### Buttons (`.btn`, `src/components/Button.astro`)
Stamped metal plates with two perforation holes at each end; `<a>` when `href` is given (internal hrefs pass through `withBase`), else `<button>`.
- **Shape:** plate corners (0.25rem), `min-height 2.75rem`, padding `0 --s-7` (3rem), inline-flex with `--s-2` gap for 16px icons, grained with `grain-dark.png`, `--shadow-plate`.
- **Secondary (default):** `shadow` plate, `ink-bright` lettering; hover `shadow-3` and `translate: 0 -1px`; active `translate: 0 1px` at `--dur-1`.
- **Primary:** `leak` plate, `leader` lettering; hover `leak-hot` with `--shadow-leak` layered over the plate shadow. One primary action per view.
- **Ghost:** transparent, `inset 0 0 0 1px --line-strong` ring, holes in `--line-strong`; hover a 60% `shadow` wash and an `emulsion-dim` ring. Used for "All episodes", "Event details", back-and-forward actions, and the Strip controls.
- **Sizes:** `--sm` 2.25rem high, `--s-5` padding, 0.6875rem lettering; `--icon` a 2.75rem square with no holes.
- **Disabled / `aria-disabled="true"`:** opacity 0.45, `not-allowed`, no lift. The Get involved submit stays focusable while the endpoint is a placeholder and is described by the notice.
- **Checked topic plate** (Get involved): a ghost plate that, when its hidden radio is checked, takes the `shadow` fill, `ink-bright` lettering and an `inset 0 -2px 0 var(--leak)` underline; focus-visible on the radio draws the orange ring on the plate.

### Fields (`.field`)
- **Label:** edge-code voice in `emulsion` (`.field__label`); optional marker `.gi-opt` in `emulsion-dim` at weight 500.
- **Input / textarea / select:** `shadow-2` fill, 1px `--line-strong` border, plate corners, `min-height 3rem`, padding `--s-3 --s-4`, `ink-bright` text, `emulsion-dim` placeholder; textarea `min-height 9rem`, vertical resize.
- **Hover:** border `emulsion-dim`. **Focus:** outline off, border `leak`, soft leak shadow. **Invalid (`:user-invalid`):** border `sepia`; `.field__error` (0.8125rem, `sepia`) shows only after interaction. **Hint:** `.field__hint` in `emulsion-dim`.

### Placeholder (`src/components/Placeholder.astro`)
A latent frame where a real asset will go: `shadow` fill with a faint radial lift, a dashed `sepia-dim` inset rectangle, `stain.png` at 0.8 (position by kind), a centered label on an 80% leader plate (0.8125rem, width 90%, ≤18ch), and a sepia edge-code stamp ("Add photo / logo / audio / cover / image") bottom-left. `role="img"` with `aria-label="Placeholder for …"`, a `title` hint for the maintainer, and `data-placeholder="<kind>"` for the README grep. Kinds: `photo` (4/5 default), `cover`, `image`, `logo` (3/1), `audio` (a horizontal 3.5rem bar).

**Placeholder discipline (as built).** Text that is not real yet is bracketed in the content file, colored `sepia` with `cursor: help`, and carries `data-placeholder="<what>"` plus a `title` naming the file to edit. Follow links with `placeholder: true` in `src/site.ts` render as an edge-code name plus a bordered sepia **soon** tag, never as a dead link. Placeholder episodes and events are stamped "Undated" / "Date to confirm" with a "TBC" numeral and get no weekday, clock or calendar file; counts read "Placeholder frames" and never count them as real. Empty collections render one latent frame that says what is coming. The founding story is one bracketed sepia paragraph in About. The mark (`Mark.astro`, `favicon.svg`) is a stand-in: one orange cell between two rails.

### Edge code and chips
`.edge-code` is the metadata voice everywhere (see Typography). `Topics` renders a quiet row of edge-code chips: 1px `--line` border, plate corners, `0.4em 0.7em 0.35em` padding, border brightening to `--line-strong` when the frame is hovered. Chips are never interactive.

### Navigation
- **Desktop (≥48em):** plate-voice links at 0.14em tracking in `emulsion`; a 2px orange underline scales in from the left on hover (recolored `emulsion`) and stays orange with a small leak glow for `aria-current="page"`, whose text turns `ink-bright`. Current page is computed by `isCurrent()` in `src/lib/url.ts` and includes child routes.
- **Mobile (<48em):** a `<details>` disclosure with a "Menu" edge code and swapped menu/close icons. The panel is `leader-2` with a hairline bottom border, 1.75rem stencil links separated by hairlines, the current page in `leak`, and the affiliation as a footer edge code. Items fade down in with a 40ms stagger under `prefers-reduced-motion: no-preference` only.
- **Brand:** the mark rotates −4deg on hover (`--dur-3`).

### Social follow marks (`SocialLinks.astro`)
A wrapping row (or column) of edge-code names. Real links get `edge-code--bright`, an arrow-up-right icon and `rel="me noopener"`; placeholders get the sepia **soon** tag. Always introduced by an edge code such as "Follow, once the reel is live".

### Icons (`Icon.astro`)
One stroke set, 24-grid, 1.5px stroke, round caps, `currentColor`; default 20px, 16px inside buttons and meta rows, 12–14px beside edge codes. Decorative unless `label` is passed. Add icons to the set; never inline SVG in a page.

### Motion (`src/scripts/motion.ts`, `global.css`)
- **Develop on enter:** `[data-reveal]` starts at opacity 0, `translate 0 0.75rem`, `blur(6px)` only once `html.js` is set, and resolves over `--dur-3` (640ms) with `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`) when an IntersectionObserver (`rootMargin 0 0 -8% 0`, threshold 0.05) sees it. `data-reveal-stagger="ms"` on a parent sets `--reveal-delay` per child (default 60ms step, capped at 600ms). Frames that also reveal merge the reveal properties into their own transition so the delay survives.
- **One authored moment per page:** Home, the hero leak blooms in once (`hero-bloom`, `--dur-4`, 200ms delay) while the title-card lines develop at 140ms steps. About, strips develop one after another (0 / 140 / 280 / 420ms) and top-down inside (160ms). Team, the sheet reveals at 70ms steps and a hovered frame's numeral is circled in grease pencil. Episodes, the log reveals at 70ms steps. Events, the next screening's leak blooms in `--dur-2` after its frame develops. Get involved, topic fields develop in and the chosen entry frame lights.
- **Durations:** `--dur-1` 160ms (press), `--dur-2` 320ms (color, underline, lift), `--dur-3` 640ms (reveal, shadow, rotate), `--dur-4` 1200ms (leak, media develop). `--ease-out` is the only easing in use.
- **Reduced motion:** `[data-reveal]` is shown immediately, the hero bloom is removed, strips scroll `auto`, menu items do not animate, and a global rule sets every animation and transition to 0.01ms. `prefers-reduced-transparency` removes the page grain. Smooth scroll is opt-in under `no-preference` only.
- **Nothing loops, nothing parallaxes, nothing auto-plays, and hover never moves layout** (lifts are `translate`, underlines are `scale`).
- **View transitions:** `ClientRouter` is on; episode and event titles carry `transition:name` so a title travels from list to detail. The motion script re-runs on `astro:page-load`.

## Do's and Don'ts

### Do:
- **Do** build every unit of content as a `Frame` and give it a real state: `latent` for coming-soon or undiscovered, `projected` for real, `fogged` for the past.
- **Do** light at most one frame per strip with `.is-lit`, and name why in its edge code ("Next to develop", "Latest", "Next screening", "Open frame", "Tail").
- **Do** keep copy out of the leak: bodies inside lit or horizontal frames stop before the right rail (`padding-inline-end` of 8–22% or `clamp(--s-6, 22%, 10rem)`).
- **Do** set titles with `.display` and recolor them through `--display-ink`; set frame headings with `.title`; set metadata with `.edge-code` joined by `edgeCode()`; set numerals with `.grease`.
- **Do** separate sections by `--s-9` / `--s-10`, keep groups at `--s-3` / `--s-4`, and offset cells on the 12-column table so no row reads as a card grid.
- **Do** route every internal `href` and `src` through `withBase()`.
- **Do** use `<Placeholder>` for any missing image or audio, `<SocialLinks>` for follow links, and `data-placeholder="<what>"` plus a `title` hint on any copy, endpoint or date a maintainer must replace; render placeholder text in `sepia`.
- **Do** branch on `placeholder: true` and missing fields, and design the real state too (real image → `<img>` in the media slot; real link → bright edge-code link).
- **Do** put `data-reveal` on sections and `data-reveal-stagger` on lists, and keep any further motion inside one authored moment per page that is static under `prefers-reduced-motion: reduce`.
- **Do** keep one `h1` per page, real landmarks with `aria-labelledby`, lists as `role="list"`, buttons for actions and links for navigation, a `visually-hidden` label before every numeral, `alt` or `aria-label` on anything visual, and text at `emulsion-dim` or brighter on `leader`.
- **Do** add new icons to `Icon.astro` and new site facts to `src/site.ts`.

### Don't:
- **Don't** paint a section, card or background orange, and don't add orange glows to anything that is not live (the primary hover, the current page and a focused field are the only glows).
- **Don't** use sepia on a live element; it marks wear, placeholders and the past only.
- **Don't** nest a frame inside a frame, and don't add perforation rails to arbitrary boxes; rails belong to frames, strips, the film log, the header and the footer.
- **Don't** build a same-size card grid, a cover-art hero, or a "listen on" button row.
- **Don't** put an eyebrow, kicker or label above a heading; edge codes sit at the bottom of a frame, beside a list, or as a column head.
- **Don't** add decorative 01 / 02 / 03; a numeral is an episode number, a date, a sheet position or a step.
- **Don't** use monospace, a system display face, or inline SVG in pages.
- **Don't** invent guest names, episode titles, dates, times, quotes, counts, partners or a founding story; don't count placeholder entries as real; don't place McGill marks (affiliation is text only).
- **Don't** add loops, parallax, auto-play, hover effects that move layout, or any animation that bypasses the shared reduced-motion rules.
- **Don't** redefine tokens or shared classes locally; page CSS stays scoped in the page and its `src/components/<page>/` folder, with `:global()` only inside a wrapper the page owns.
- **Don't** use `--base` (#6e7377) for text; it fails body contrast and is currently unused.

## Known Gaps

Recorded from the built code; none of these is a system rule.

- **Image-less upcoming event frames render an empty media gate.** `src/pages/events/index.astro` passes `{d.image && <img slot="media" …/>}` straight into `Frame`, and a conditional slot inside an expression still counts as filled, so each "To be scheduled" frame gets a `has-media` layout with an empty right-hand gate (visible in `.impeccable/shots/final-events-desktop.png`). `src/components/events/EventFrame.astro` exists to branch at the Frame and avoid exactly this, but nothing imports it.
- **Stale comments about `.is-active`.** The `Frame.astro` header and `Strip.astro` say the centred frame "lights its leak"; the CSS lights the leak only on `:hover`, `:focus-within` and `.is-lit`, and `.is-active` only develops a latent frame. The CSS is the rule recorded above.
- **Reserved, unused tokens:** `--accent`, `--base`, `--leak-deep` (#c4521a), `--ease-in-out`, `--wdth-condensed`. They are defined in `tokens.css` and consumed nowhere.
- **Fogged fill is a literal.** `#1a1714` lives in `Frame.astro`, not in `tokens.css`.
- **Stand-ins awaiting real assets:** the mark (`Mark.astro`, `public/favicon.svg`), every team photo, episode cover and event image (`public/images/` does not exist yet), the contact email, the form endpoint, all five follow links, the launch note, the founding story, and the three placeholder entries in each content collection.
- **No light theme and no theme toggle;** `color-scheme: dark` is the only scheme. Grain and the `background-clip: text` lettering are built for a dark ground.
- **`src/pages/kit.astro`** (the living reference named in the build contract) no longer exists; this file is the reference.
