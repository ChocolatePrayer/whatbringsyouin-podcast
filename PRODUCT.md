# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: **Astro**, static output, deployed to **GitHub Pages** now (official Astro GitHub Actions workflow), portable to any static host (Netlify, Cloudflare Pages, Vercel, S3) later with no rework.

Why: the user asked for "whatever is most simple and flexible" for a multi-page hub (Home, Team, About, Episodes, Events, more TBD). Astro gives shared layouts for the nav/footer and Markdown content collections for episodes and events, so a student maintainer adds an episode or event by adding one `.md` file, not by editing HTML in six places. It ships zero client-side JavaScript by default and builds to plain HTML. Node is already available on the user's machine.

Alternatives considered: plain HTML/CSS (no toolchain, but nav duplicated per page and hand-edited lists), Jekyll (native to GitHub Pages, but a Ruby toolchain locally). The user may override this choice.

## Users

**Primary:** medical students and aspiring medical students (pre-meds). They listen to learn from experienced people in medicine: how senior clinicians and leaders got where they are, how specialty, admissions, and residency decisions really get made, and what is happening in medical knowledge and research.

**Inferred from requested pages (to confirm):**
- Prospective guests and faculty evaluating whether to appear on the show (About, Team, Episodes).
- Students who want to join the team or attend events (Team, Events).
- The McGill community encountering the show through its affiliation.

## Product Purpose

*What Brings You In* is a podcast in which important and experienced people in the medical field are interviewed for medical students and aspiring medical students. It is run by a university student organization affiliated with McGill.

The website is the show's **hub**: a public home for the show, its team, its story, its episodes, and its events, with room for further pages later. It launches **before the first episode**, so it must stand on its own with no episodes published and grow without a redesign as episodes and events accumulate.

Success means a med student or pre-med who lands on the site understands what the show offers them, can follow the show once it is live, and can find and attend the organization's events.

## Positioning

Three things together that a generic medical podcast or a single-host show cannot truthfully claim at once:

1. **Access to senior voices.** Department chairs, deans, leaders, and veterans that students rarely hear from directly.
2. **Career-path guidance.** Specialty choice, admissions, residency, and the real decisions along the path, asked from the student's side of the table.
3. **General medical knowledge and research**, carried by the guests' own work.

Delivered by students, for students, from within a McGill-affiliated organization.

## Operating Context

- **Pre-launch.** No episodes, no confirmed guests, no listener data yet.
- **Maintained by students**, likely non-developers, who will need to add episodes, team members, and events over time. Content workflow should be "add a file", not "edit code".
- **Events** are the student organization's own: the chosen option described live recordings, speaker talks, and mixers as examples. Exact event types are not yet confirmed.
- **Hosting:** GitHub Pages now; a cloud host is possible later.
- **Podcast distribution platform** (Spotify, Apple Podcasts, YouTube, RSS host) is not yet chosen. Follow/subscribe links cannot be real until it is.

## Capabilities and Constraints

**Confirmed pages:** Home, Team, About, Episodes, Events. The user said "etc., all sorts of pages"; additional pages (for example Contact, Get Involved, Sponsors, Resources) are **open**, not confirmed.

**Confirmed functionality:**
- Episode listing that works with zero entries and scales to many.
- Event listing (upcoming and past).
- Team roster with photos and bios (photos and bios do not exist yet).
- Static site, no backend, no database.

**Technical constraints:**
- Must build to static files deployable on GitHub Pages (and later any static host).
- Any form (contact, guest pitch, newsletter) needs a third-party endpoint; none chosen.

**Terminology:** episode, guest, host, team, events, the show. The name *What Brings You In* is the question a clinician asks at the start of a visit; treat that reference as part of the identity.

**Explicitly undecided product facts (do not invent):**
- Podcast distribution platform and RSS feed.
- Whether episodes get transcripts and show notes.
- Site language(s): English assumed; a French version for a Quebec-based organization is undecided.
- Contact / join / guest-pitch mechanism.
- Exact event types and cadence.
- Additional pages beyond the five confirmed.

## Brand Commitments

- **Name:** *What Brings You In*.
- **Logo:** exists (file not yet in the repo; the user will provide it). Preserve it as the primary mark.
- **McGill affiliation:** confirmed. The user volunteered that McGill's identity "can maybe inspire the style". Recorded as volunteered, not binding; the visual decision belongs to later design work.
- **Constraint to verify:** use of McGill's official logo, wordmark, or crest by a student group is governed by McGill's brand guidelines. Confirm permission before placing any official McGill mark on the site. Stating the affiliation in text is the safe default.

## Evidence on Hand

- Logo (to be added to the repo).
- Nothing else: **no episodes, no confirmed guests, no team photos or bios, no testimonials, no listener or download numbers, no press, no sponsors.**

Future work must not fabricate guest names, episode titles, quotes, download counts, or endorsements. Any placeholder content must be visibly labelled as placeholder and removed before launch.

## Product Principles

1. **The student is the reader.** Every page answers what a med student or pre-med gets from the show, the team, or the event.
2. **Borrow credibility honestly.** The McGill affiliation and the seniority of real guests are the trust signals. Never inflate with invented proof.
3. **Launch empty, grow full.** The site must look complete with zero episodes and need no redesign at fifty.
4. **Students can maintain it.** Adding an episode, event, or team member is adding one content file.
5. **Portable by default.** Static output that moves from GitHub Pages to any host without rework.
