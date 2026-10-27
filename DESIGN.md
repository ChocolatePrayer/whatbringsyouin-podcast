---
name: What Brings You In
description: A McGill UGME student podcast hub laid out as a reel on an archive table, with white prints held in graphite perforated stock and one McGill red.
colors:
  red: "#af2825"
  red-deep: "#8e1f1d"
  red-bright: "#d2453c"
  on-red: "#ffffff"
  brand-red-on-stock: "#ec7f77"
  paper: "#faf9f7"
  paper-2: "#f3f1ec"
  print: "#ffffff"
  beige: "#ece5d8"
  sepia: "#715e42"
  sepia-dim: "#c4b394"
  sepia-on-stock: "#d6c4a3"
  stock: "#33312e"
  stock-2: "#46433f"
  on-stock: "#efece6"
  on-stock-muted: "#b9b3aa"
  on-stock-faint: "#a29c93"
  ink-strong: "#171614"
  ink: "#2a2825"
  ink-muted: "#55514b"
  ink-faint: "#66625a"
  grease: "#4f4b45"
typography:
  display:
    fontFamily: "Cinzel Variable, Trajan Pro, Times New Roman, serif"
    fontSize: "clamp(2.125rem, 1.35rem + 3.2vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Cinzel Variable, Trajan Pro, Times New Roman, serif"
    fontSize: "clamp(1.625rem, 1.15rem + 2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "0.02em"
  wordmark:
    fontFamily: "Cinzel Variable, Trajan Pro, Times New Roman, serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.03em"
  title:
    fontFamily: "Source Serif 4 Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Source Serif 4 Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Source Serif 4 Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.62
  body-sm:
    fontFamily: "Source Serif 4 Variable, Iowan Old Style, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Libre Franklin Variable, Franklin Gothic Medium, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.16em"
    fontFeature: "'tnum' 1, 'lnum' 1"
  label-plate:
    fontFamily: "Libre Franklin Variable, Franklin Gothic Medium, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
  numeral:
    fontFamily: "Caveat Variable, Bradley Hand, Segoe Print, cursive"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  numeral-lg:
    fontFamily: "Caveat Variable, Bradley Hand, Segoe Print, cursive"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  hole: "0.125rem"
  frame: "0.1875rem"
  plate: "0.1875rem"
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
  gutter: "clamp(1rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.label-plate}"
    rounded: "{rounded.plate}"
    padding: "0 3rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.on-red}"
  button-secondary:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.on-stock}"
    typography: "{typography.label-plate}"
    rounded: "{rounded.plate}"
    padding: "0 3rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.stock-2}"
    textColor: "{colors.on-stock}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-strong}"
    typography: "{typography.label-plate}"
    rounded: "{rounded.plate}"
    padding: "0 3rem"
    height: "2.75rem"
  button-sm:
    typography: "{typography.label}"
    padding: "0 1.5rem"
    height: "2.25rem"
  frame:
    backgroundColor: "{colors.print}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "1.5rem 1.5rem 2rem"
  frame-latent:
    backgroundColor: "{colors.print}"
    textColor: "{colors.ink-muted}"
  frame-fogged:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-muted}"
  placeholder:
    backgroundColor: "{colors.beige}"
    textColor: "{colors.ink-muted}"
  input:
    backgroundColor: "{colors.print}"
    textColor: "{colors.ink-strong}"
    rounded: "{rounded.plate}"
    padding: "0.75rem 1rem"
    height: "3rem"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label-plate}"
    padding: "0.5rem 0"
  nav-link-current:
    textColor: "{colors.ink-strong}"
  topic-chip:
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0.4em 0.7em 0.35em"
  footer:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.on-stock}"
---

# Design System: What Brings You In

## Overview

**Creative North Star: "The Reel on the Archive Table"**

The site is a reel of 16mm film laid out on a McGill archive table. The page is near-white archive paper. Every episode, event, team member and statement is a white print held between graphite perforated stock. Whole sections sit in beige archive-folder bands, and the reel's tail is a closing band of graphite stock that runs straight into the footer. One McGill red, the logo's own, marks the frame that matters: it burns in from the right edge as a light leak, shows through the perforations, and comes with a red china-marker ring drawn around the frame's numeral. Prints develop out of white paper as they scroll into view. Type never moves.

The density is cozy rather than airy. Sections are 6–8rem apart and groups inside them are tight (0.75–1.5rem), so each frame reads as a dense object on an open table. Composition is loose and asymmetric: a twelve-column table with frames offset, staggered, hung at different heights or run in a strip. It is never a uniform card grid. The show's own logo is the title card. The McGill Faculty of Medicine seal (displayed with permission) appears only in the footer colophon, reversed to white. The system rejects two defaults by name: the university-template banner-crest-card-grid page, and the cream-paper, serif-headline editorial look.

The material vocabulary is literal and consistent. Perforation holes are real holes, so the surface beneath shows through them. Edge codes are printed in the film margin. Numerals are written by hand in graphite. Unfinished content is an unexposed print, and finished events are fogged and sepia-toned. Every device on the page comes from the darkroom or the contact sheet.

**Key Characteristics:**
- White prints on near-white paper, held by graphite stock with masked perforations
- One McGill red (the logo's #af2825), reserved for meaning, never laid down as a field
- Four type voices with strict roles: Roman capitals, reading serif, Franklin edge codes, china-marker numerals
- At most one lit frame per view: red leak plus drawn red ring
- Motion only develops prints; one authored moment per page; reduced motion is fully static
- Honest placeholders that look unexposed, never fake content

## Colors

The palette is restrained: warm near-white paper, beige folders, warm graphite stock and ink, plus a single saturated McGill red that appears only where something means something.

### Primary
- **McGill Red** (`red`): the logo's own red. It is used for the lit frame's light leak, its drawn ring and its numeral; the current-page stroke in the navigation; the primary plate; and the wordmark's "Brings" and script "in" on paper. It measures 6.3:1 on paper and 6.7:1 on print, so it can carry text.
- **Pressed Red** (`red-deep`): hover and pressed state of the primary plate, field error text, and the link and focus mark on beige bands, where it holds 7.1:1.
- **Leak Core** (`red-bright`): appears only at the hot core of the light-leak gradient, never as a fill or text colour.
- **On Red** (`on-red`): label colour on the primary plate (6.7:1), the skip link, and text selection.
- **Wordmark Red on Stock** (`brand-red-on-stock`): the wordmark's red lifted for legibility on graphite (4.9:1; the base red would be 1.95:1). Used only by the footer wordmark.

### Neutral
- **Archive Paper** (`paper`): the page ground and the theme colour. It is near-white, not cream. It also shows through the perforations of a frame lying on stock.
- **Raised Paper** (`paper-2`): the mobile menu panel, the fogged print, and the hover of the white primary plate.
- **Print White** (`print`): the inside of every frame, plus inputs and the audio player. It is the brightest surface on the page, so a frame always reads as a print lying on paper.
- **Archive Folder Beige** (`beige`): whole-section bands (Premise, the About drying line, the Team light table, the Get Involved form), placeholder fills, and the media slot behind an image.
- **Sepia Toning** (`sepia`): toned text for placeholders, launch notes and the past, at 5.0:1 on beige. **Faded Sepia** (`sepia-dim`) is decorative only: dashed placeholder borders and fogged-print stains. **Sepia on Stock** (`sepia-on-stock`) is the toned role on graphite (7.6:1).
- **Film Stock** (`stock`): rails, strips, plates (secondary buttons), the frame lines above and below each print, the closing band and the footer. **Raised Stock** (`stock-2`) is the hover plate.
- **On Stock** (`on-stock`, 11:1), **On Stock Muted** (`on-stock-muted`, 6.2:1), **On Stock Faint** (`on-stock-faint`, 4.8:1): the text ladder on graphite.
- **Ink Strong** (`ink-strong`, 17:1 on paper): headings. **Ink** (`ink`, 14:1): body. **Ink Muted** (`ink-muted`, 7.5:1): ledes and secondary copy. **Ink Faint** (`ink-faint`, ≥4.85:1 on every light surface): edge codes and hints.
- **Graphite** (`grease`): china-marker numerals and step numbers, at 8.7:1 on print.

### Surfaces
Five surfaces remap the same role tokens (background, foreground ladder, line, toned, mark), so components never need to know where they sit. **Paper** is the default. **Beige** keeps paper's text and switches the mark to pressed red. **Stock** inverts the text ladder, turns the mark white, and sets `color-scheme: dark`. **Print** is set by every frame, and it resets the roles to light whatever lies beneath, so a frame reads the same on paper, beige or stock. A fifth surface, **red**, is defined in the global stylesheet but used on no page (see the No Red Field Rule).

### Named Rules
**The One Red Rule.** McGill red is reserved for the lit frame (leak, ring, numeral), the current page, the primary action and the brand wordmark. Beyond those four, it appears only at hairline scale: the 1px underline of an inline link, and interaction state (link hover, the focus ring, a focused field's border, a ghost plate's perforation dots on hover, the selected topic plate's 3px underline, error text). Hover and focus may also preview a frame's leak at reduced strength.

**The No Red Field Rule.** Red is never laid down as a field: no full-bleed red bands, red section backgrounds or red cards. A red surface exists in the global stylesheet but no page uses it, and new work should not start.

**The One Wordmark Red Rule.** The wordmark carries exactly one red per surface. "Brings" and the script "in" (the logo's own script, used as a mask) share it: McGill red on paper, Wordmark Red on Stock on graphite.

**The Print Resets Rule.** A frame is always a print. It resets every role token to the light set, so its contents never inherit stock or beige colours from the band it sits in.

## Typography

**Display Font:** Cinzel (with Trajan Pro, Times New Roman, serif)
**Body Font:** Source Serif 4, optical sizing on (with Iowan Old Style, Georgia, serif)
**Label Font:** Libre Franklin (with Franklin Gothic Medium, Helvetica Neue, Arial)
**Numeral Font:** Caveat (with Bradley Hand, Segoe Print, cursive)

**Character:** Cinzel's Roman capitals come straight from the logo. It is set in mixed case, so lowercase renders as small capitals and "What Brings You" sets exactly like the logo: a full capital, then small capitals. Source Serif 4 carries every sentence a student actually reads. Libre Franklin plays the film's printed margin, small, uppercase and widely tracked. Caveat is the china marker on the contact sheet, used only for numerals.

### Hierarchy
- **Display** (Cinzel 600, `display`, line-height 1.04, tracking 0.02em): page titles ("Episodes", "The team", "About the show") and the closing "Join the reel".
- **Headline** (Cinzel 600, `headline`): section titles on a page ("The first reel", "Three things at once", "Next screening") and episode or event titles in detail-page hero frames.
- **Title** (Source Serif 4 600, `title`, 1.22): the heading inside a frame, such as an episode, event, member or premise facet. The same face at body size (1.125rem) is the compact title in narrow frames and the prev/next frames.
- **Lede** (Source Serif 4 400, `lede`, 1.5, muted, max 52ch): the one-paragraph introduction under a page or section title. The hero tagline is the single larger instance (fluid 1.25–1.625rem, line-height 1.4, max 26ch).
- **Body** (Source Serif 4 400, `body`, 1.62, measure 66ch): all reading text, rendered Markdown included. **Small** (`body-sm`) is used for meta rows, hints and frame descriptions.
- **Label / Edge Code** (Libre Franklin 600, `label`, uppercase, tracking 0.16em, tabular lining figures): metadata stamped along a frame's bottom margin ("REEL 01 · TITLE CARD · 16 MM"), counts, dates, group labels, field labels and the follow links. The plate size (`label-plate`, 0.75rem) is used for buttons and the primary navigation.
- **Numeral** (Caveat 600, `numeral`, rotated −3°, graphite): the episode number, step or day written top-left on a frame. `numeral-lg` is used for the day on the home page's next-screening frame.

### Named Rules
**The Logo Capitals Rule.** Cinzel is always set in mixed case and never forced to uppercase. The small capitals are the point.

**The Edge Code Rule.** Libre Franklin uppercase is metadata only: stamps, counts, dates, labels, buttons, navigation. It never carries a sentence of prose.

**The China Marker Rule.** Caveat is used only for numerals (frame numbers, days, form steps). It is graphite at rest and turns red only when its frame is lit or held under the loupe (hover on the team sheet).

## Layout

The spatial model is a light table: a centred container of 80rem (narrow rooms 56rem, wide rows 96rem; Events tightens to 72rem) with a fluid gutter, on which frames are laid loose. From 60em up, the key compositions use twelve columns:

- **Home hero:** the title-card frame spans columns 1–8 and the tagline, actions and follow marks take 9–12, vertically centred, at viewport height minus the header (capped at 52rem).
- **Premise:** three frames of different sizes, offset (1–7, then 8–12 dropped 4rem, then 3–11).
- **Team:** the contact sheet sits in thirds, with every second and third frame dropped (4rem and 1rem) so the sheet reads as hand-laid. The sheet's edge code runs vertically down its left margin and stays sticky.

Other pages use their own one-off structures rather than a shared grid. Events is a ledger with a sticky margin column (13rem, then 17rem from 64em) holding month markers, with frames running down the right. The Episodes log is one centred strip at most 56rem wide, its frames turning horizontal (cover left, body right) from 48em. About is a drying line where four strips hang from a wire at different heights (one column, two from 48em, four from 80em). The home reel is a horizontal strip with scroll-snap, each frame min(78vw, 26rem) wide, with prev/next plates that appear only when it overflows.

Rhythm is cozy. Sections are separated by `s-9` (6rem), rising to `s-10` (8rem) from 60em. Heads to content take `s-7`/`s-8`, groups inside take `s-3`–`s-5`, and frame bodies pad `s-5`–`s-8` depending on frame size. Bands (beige or stock) bleed to the viewport edge behind contained content without extra markup. A page that ends on a band runs straight into the footer's perforations.

Responsive behaviour is a stack: under 60em everything is one column, with the hero frame above its copy. The primary navigation collapses into a native disclosure menu (no JS) at 52em, set in large Cinzel. The wordmark shrinks below 26em. A perforation rail runs along the top edge of every page, and the footer's rail opens onto the page above it.

## Elevation & Depth

Depth means a print lying on paper. Shadows are warm (the brown-black rgb 40 32 24), offset downward with negative spread, and never a halo. Surfaces are otherwise flat. A frame inside a strip or the episode log loses its own shadow, because the strip carries one shadow for the whole run. The page also carries a faint fixed paper tooth: a grain texture at 12% opacity, multiplied, hidden under reduced transparency.

### Shadow Vocabulary
- **Print on paper** (`box-shadow: 0 1px 1px rgb(40 32 24 / 0.06), 0 1.25rem 2.5rem -1.5rem rgb(40 32 24 / 0.32)`): every standalone frame, the episode log, a hanging strip, the audio player.
- **Lifted print** (`box-shadow: 0 1px 1px rgb(40 32 24 / 0.06), 0 1.75rem 3rem -1.5rem rgb(40 32 24 / 0.4)`): an interactive frame on hover, together with a 3px rise.
- **Plate** (`box-shadow: 0 0.5rem 1rem -0.6rem rgb(40 32 24 / 0.45)`): every button plate at rest.
- **Leak under plate** (`box-shadow: 0 0.75rem 2rem -1rem color-mix(in oklab, var(--red) 70%, transparent)`): only under a hovered primary plate. It is the one coloured shadow in the system.
- **Field focus** (`box-shadow: 0 0 0 1px var(--red), 0 0.5rem 1.25rem -0.75rem color-mix(in oklab, var(--red) 55%, transparent)`): a focused input, sitting beneath a faint inset (`inset 0 1px 2px rgb(40 32 24 / 0.06)`) that every field carries at rest.

### Named Rules
**The Print on Paper Rule.** Shadows fall down and away, warm and soft, with negative spread. There are no zero-offset glows, no grey drop shadows, and no hard offset shadows.

**The Light Leak Is Light Rule.** The red leak is light, not paint. It is a radial red gradient, multiply-blended and masked through grain and blotch textures. It sits above the print and below the rails, so ink stays ink, only the paper turns red, and the red shows through the perforations.

## Shapes

The form language is the film itself. Frames and plates are rectangles with barely softened corners (`rounded.frame` and `rounded.plate`, 3px). Nothing is pill-shaped, and the only round form is the hand-drawn ring.

- **Perforation rail:** a band of stock 1.25rem across, punched with 0.5625 × 0.875rem holes at a 1.5rem pitch. The holes are cut with a CSS mask, never painted, so whatever lies beneath (paper, beige, the leak) shows through. The mask repeats with `round`, so a rail of any length ends on whole holes. Rails run vertically on each side of a frame or hanging strip, and horizontally on strips, the header and the footer.
- **Frame:** a print between two rails, with 0.3125rem stock frame lines above and below. Its edge code is separated from the body by a dashed hairline. On stock, a frame paints paper under its rails so its holes still read as holes.
- **Plate:** a short length of stock with two pairs of punched holes (0.375 × 0.4375rem, 2px corners) inset 0.625rem from each end. On a ghost plate the holes are outlined dots.
- **China-marker ring:** an open, double-pass ellipse with overlapping ends, drawn as an SVG stroke (4.2 and 1.6 units, round caps) and roughened by a shared turbulence displacement filter. Three hand-authored ring paths exist, and the numeral picks one, so a sheet never repeats a stroke.
- **Placeholder:** an unexposed print in beige with a dashed sepia border inset 0.75rem, a toning stain, a centred label chip and an "Add photo" stamp.

**The Whole Hole Rule.** Perforations always end on whole holes and always open onto the surface beneath. Never crop a rail mid-hole and never paint a hole white.

## Components

### Buttons (plates)
A plate is a short length of film stock, tactile and quiet.
- **Shape:** near-square (3px corners), 2.75rem tall, 3rem side padding, with two pairs of perforations punched at the ends. Labels are Libre Franklin 0.75rem uppercase, tracked 0.16em.
- **Primary:** McGill red with white label, the one action that matters on a section ("Hear the first reel", "Suggest a guest", "Send it in"). On hover it presses to red-deep, rises 1px and gains the leak shadow. On a stock band a primary plate turns white with a stock label, except when it sits on a print (a frame), where it stays red.
- **Secondary (default):** a graphite stock plate with paper showing through its holes. On hover it becomes raised stock.
- **Ghost:** transparent with a 1px strong-line outline and outlined holes. On hover it gains a 6% wash, the outline darkens and the holes turn the mark colour. It is used for "All episodes", "Event details" and strip prev/next.
- **Small:** 2.25rem tall and 1.5rem padding, with label-size type. **Icon:** a square 2.75rem plate without holes.
- **Focus / Active:** a 2px mark-colour outline at a 3px offset. Pressing sinks the plate 1px over 160ms. Disabled plates sit at 50% opacity.

### Topic chips
- **Style:** an edge-code label in a 1px hairline box with 3px corners. Hairlines strengthen when the parent frame is hovered. Chips never carry red.

### Frames (the atom)
Everything that is content is a Frame: a white print between graphite rails with a stamped edge code. It is not a card.
- **States:** a *projected* frame is the full print (default). A *latent* frame is underexposed, with muted text and media pale and half grey; it develops on hover, on focus, or when it is the centred frame of a strip, and is used for anything coming soon. A *fogged* frame is raised paper with sepia-toned media and warm stains; it is used for the past (finished events).
- **Media slot:** sits on top, on a beige ground, with procedural dust and scratches at three densities. A numeral over a real photograph is written in white marker.
- **Numeral:** written top-left in graphite china marker.
- **Edge code:** the bottom margin, as metadata only.
- **Leak:** at rest, a frame shows no leak. Hover or focus previews it at 60%. A lit frame burns at 85%.
- **Lit:** the frame that means something right now: the hero title card, the next episode to develop (or the latest once anything is released), the next screening, an upcoming event's detail frame, or the team's open frame. Its numeral turns red and the ring draws itself around it.
- **Interactive:** a frame that is a link rises 3px on hover onto the lifted shadow, with a 2px red focus outline.
- **In a strip:** a frame drops its own rails, frame lines and shadow, and the strip's rails carry the perforations.

**The One Lit Frame Rule.** At most one frame is lit per view. A lit frame with a numeral always carries the drawn ring. The centred frame in a strip is only *active*: it develops but never lights.

### Strips and the episode log
- **Strip:** a run of graphite stock between two horizontal perforation rails, with frames riding inside as prints. It scrolls horizontally with snap, keyboard focus and ghost icon plates for prev/next, and the leader before the first frame aligns with the page container.
- **Episode log:** one vertical strip down the page. Its rails sit on the paper and its frames are flush prints between them.
- **Hanging strip (About):** a strip clipped to a full-bleed graphite wire by a drawn darkroom clip on a leader of varying length. Its frames share one pair of rails, and hovering any frame lights the whole strip's leak.

### Inputs / Fields
- **Style:** a print-white field with a 1px strong-line border, 3px corners, 3rem minimum height, 0.75 × 1rem padding and a faint inset. Labels are edge codes above the field; hints are small and faint.
- **Hover:** the border darkens to faint ink.
- **Focus:** the border turns McGill red with a 1px red ring and a soft red under-shadow, and the default outline is removed.
- **Error:** after user interaction, the border and the error text turn red-deep.
- **Choice plates:** radio options are ghost plates. When selected, a plate becomes a stock plate with a 3px red underline.

### Navigation
- **Header:** a perforation rail runs across the top. Below it sit the mic mark and the wordmark in Cinzel (21px, tracking 0.03em, with a red "Brings" and the logo's red script "in" swinging below the baseline), and on the right the primary links in muted edge-code type at plate size.
- **States:** hover darkens a link to strong ink and draws a grey stroke under it. The current page is strong ink with a hand-drawn McGill red double stroke beneath it, the only red in the header besides the wordmark.
- **Mobile (≤52em):** a native disclosure labelled "Menu" opens a raised-paper panel of large Cinzel links (current page in red). The links fade in with a 40ms stagger when motion is allowed.

### Footer
- **Style:** a graphite stock field whose top rail opens onto the page above. It holds the reversed mark and the wordmark (in Wordmark Red on Stock), the affiliation line, the nav, follow marks and contact. The colophon carries the McGill Faculty of Medicine seal reversed to white at 92% opacity beside "A McGill UGME podcast."

### Placeholders
Placeholders are honest by construction: an unexposed beige print, a sepia "Add …" stamp, sepia italic bracketed copy for text that is not real yet, and a boxed "soon" chip on follow links without a URL. Every one carries a data marker and a maintainer tooltip, so a maintainer can find and replace it.

### Motion
Motion is restrained. Prints develop out of white paper: a frame, or anything holding one, enters from 0.75rem below, overexposed (brightness 1.45, contrast 0.55, grayscale 0.6). It fades in over 640ms and its print darkens last over 1.8s on the out-curve (`cubic-bezier(0.16, 1, 0.3, 1)`), with optional staggers capped at 600ms. Each page has one authored moment. On the home page it is the hero: the logo develops (1.8s), then the leak burns in (1.4s at 1s), the numeral turns red, and the ring draws itself (1.1s at 1.6s). On Events the next screening's leak blooms after its frame develops, and on About the strips develop one after another. Under reduced motion all of this is static and complete.

**The Only Prints Develop Rule.** Only prints animate on scroll. Headings, ledes and action rows are type on paper and stay still, even where a reveal attribute sits on them.

## Do's and Don'ts

### Do:
- **Do** put every piece of content (an episode, event, person or premise) in a Frame: a white print between graphite rails, with its metadata in the edge code.
- **Do** light at most one frame per view, and only one that means something (next to develop, latest, next screening, the open frame). Give it the leak at 85%, and if it has a numeral, the drawn red ring.
- **Do** keep McGill red to the lit frame, the current page, the primary action and the wordmark, plus hairlines: link underlines, the focus ring, field focus and error text.
- **Do** use one red per surface for the wordmark: McGill red on paper, Wordmark Red on Stock on graphite, shared by "Brings" and the script "in".
- **Do** lay pages on archive paper, give whole sections beige folder bands, and keep graphite stock for rails, strips, plates, the closing band and the footer.
- **Do** cut perforations with a mask, repeat them with `round` so they end on whole holes, and let the surface beneath show through.
- **Do** keep each type voice to its role: Cinzel in mixed case for titles, Source Serif 4 for reading (66ch measure), Libre Franklin uppercase at 0.16em for metadata and controls, Caveat for numerals only.
- **Do** keep sections 6–8rem apart and groups tight, and lay frames loose and offset on the twelve-column table.
- **Do** keep shadows warm and falling (rgb 40 32 24, negative spread).
- **Do** make unfinished content visibly unexposed: a beige placeholder print with a dashed sepia border and an "Add …" stamp, sepia bracketed copy, and "soon" chips.
- **Do** develop only prints on scroll, keep one authored motion moment per page, and make reduced motion fully static.

### Don't:
- **Don't** lay red down as a field: no full-bleed red bands, red section backgrounds or red cards. The red surface in the global stylesheet is unused; leave it that way.
- **Don't** use red for headings, icons, decoration or secondary actions, and don't put a second red-filled plate next to the primary.
- **Don't** light two frames in one view, and don't light a numbered frame without its ring.
- **Don't** animate headings, ledes or button rows, and don't add parallax or scroll-linked motion beyond the develop.
- **Don't** paint perforation holes, crop a rail mid-hole, or let a rail sit on a surface its holes can't show.
- **Don't** build the university-template page: no banner hero, no crest-led header, no uniform card grid. The Faculty of Medicine seal stays in the footer colophon, reversed to white.
- **Don't** drift into the cream-paper, serif-headline editorial look: the paper is near-white and display type is the logo's Roman capitals.
- **Don't** force Cinzel to uppercase, set prose in Libre Franklin capitals, or use Caveat for anything but numerals.
- **Don't** round corners past 3px or use pills, and don't use zero-offset glows or grey drop shadows. The only coloured shadow is the leak under a hovered primary plate.
- **Don't** fabricate guests, episodes, dates or counts to fill a frame. Use a latent frame or a placeholder print.
