#!/usr/bin/env node
// Screenshot a page with the installed Google Chrome (no browser download).
//   node scripts/shoot.mjs <url> <out.png> [width=1440] [height=900] [--full] [--hover="css selector"] [--click="css selector"] [--light]
// Width < 700 switches to mobile emulation (device scale 2, touch, viewport meta honoured).
// --full scrolls the whole page first so reveal-on-enter content is developed, then captures full page.
import { chromium } from 'playwright-core';

const args = process.argv.slice(2);
const flags = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => { const [k, v] = a.slice(2).split('='); return [k, v ?? true]; }));
const [url, out, w = '1440', h = '900'] = args.filter((a) => !a.startsWith('--'));
if (!url || !out) { console.error('usage: node scripts/shoot.mjs <url> <out.png> [width] [height] [--full] [--hover=selector]'); process.exit(2); }
const width = Number(w), height = Number(h), mobile = width < 700;

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile, colorScheme: flags.light ? 'light' : 'dark' });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });

let lastErr;
for (let i = 0; i < 40; i++) {
  try { await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 }); lastErr = null; break; }
  catch (e) { lastErr = e; await new Promise((r) => setTimeout(r, 400)); }
}
if (lastErr) { console.error(`could not load ${url}: ${lastErr.message}`); await browser.close(); process.exit(1); }
await page.evaluate(() => document.fonts.ready);
if (flags.full) {
  await page.evaluate(async () => {
    // the site scrolls smoothly; the pre-scroll must be instant or it never reaches the bottom
    document.documentElement.style.scrollBehavior = 'auto';
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y <= total; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 70)); }
    scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = '';
    // let the last reveal transitions (duration + stagger + any strip delay) finish
    await new Promise((r) => setTimeout(r, 1700));
  });
}
if (flags.click && typeof flags.click === 'string') { await page.click(flags.click); await page.waitForTimeout(700); }
if (flags.hover && typeof flags.hover === 'string') { await page.hover(flags.hover); await page.waitForTimeout(700); }
await page.waitForTimeout(350);
await page.screenshot({ path: out, fullPage: Boolean(flags.full) });
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
await browser.close();
console.log(`saved ${out} (${width}x${height}${flags.full ? ', full page' : ''})${overflow > 0 ? ` — HORIZONTAL OVERFLOW ${overflow}px` : ''}`);
if (errors.length) console.log(errors.map((e) => '  ' + e).join('\n'));
