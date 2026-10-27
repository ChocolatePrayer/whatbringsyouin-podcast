// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites live at https://<owner>.github.io/<repo>/; user sites at the root.
// Both are derived automatically on GitHub Actions. Override with SITE_URL / BASE_PATH for any other host.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const userSite = repo?.endsWith('.github.io');
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS && repo && !userSite ? `/${repo}` : '/');

export default defineConfig({ site, base });
