# What Brings You In — website

The hub for *What Brings You In*, a student-run medical podcast affiliated with McGill University.
Static site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run preview   # serves dist/
```

Requires Node 22.12+ (Node 24 recommended).

## Add content (no code needed)

Each item is one Markdown file. Copy the `_template.md` in the folder, remove the leading
underscore, fill in the front matter, write the body. Files starting with `_` are ignored.

| What | Folder | Notes |
|---|---|---|
| Episode | `src/content/episodes/` | `number` orders them; `status: coming-soon` shows a latent frame; add `audioUrl` / `links` when published |
| Event | `src/content/events/` | `date` is `YYYY-MM-DD`; put times in `time` / `endTime`; past events fog automatically |
| Team member | `src/content/team/` | `order` sorts; `photo` points to a file under `public/images/team/` |

Site-wide facts (name, tagline, affiliation, email, follow links, form endpoint, nav) live in `src/site.ts`.

## Replace the placeholders

Everything fake is marked. To list what is left:

```sh
grep -rn "placeholder: true" src/content src/site.ts
grep -rn "data-placeholder" src --include=*.astro | grep -v "components/Placeholder.astro"
grep -rn "\[" src/content --include=*.md | grep -v _template
```

Checklist:
- [ ] Logo: replace `src/components/Mark.astro` with the real mark (keep the component name) and `public/favicon.svg`.
- [ ] Follow links, contact email and the launch note in `src/site.ts` (`placeholder: false` once real).
- [ ] Form endpoint for Get involved in `src/site.ts` (Formspree, Netlify Forms, Google Forms…).
- [ ] Team photos, names, programs and bios in `src/content/team/`.
- [ ] Real episodes (delete the three placeholder files `01.md`–`03.md`) and real events (delete the three placeholder event files).
- [ ] Copy marked `data-placeholder` in the pages.
- [ ] Guest photos: add `photo:` under `guest:` in an episode file (`/images/guests/...`). Event images: add `image:` to an event file (`/images/events/...`). Drop the files under `public/`.

## Deploy

**GitHub Pages:** push to `main`. `.github/workflows/deploy.yml` builds and deploys; in the repo
settings set *Pages → Source* to *GitHub Actions*. The site URL and base path are derived from the
repository name automatically (project sites live under `/<repo>/`; a `<user>.github.io` repo lives at the root).

**Anywhere else (Netlify, Cloudflare Pages, Vercel, any static host):** build command `npm run build`,
output `dist/`. Set `SITE_URL=https://your.domain` and `BASE_PATH=/` as environment variables.

## Design

The visual system is documented in `DESIGN.md` (world, tokens, components, rules). Product context is in `PRODUCT.md`.
Shared tokens: `src/styles/tokens.css`. Shared components: `src/components/`.
