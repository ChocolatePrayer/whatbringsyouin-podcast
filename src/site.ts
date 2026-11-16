// Single source of truth for site-wide facts. Anything marked `placeholder: true`
// is waiting for a real value; see README.md → "Replace the placeholders".
export const site = {
  name: 'What Brings You In',
  shortName: 'WBYI',
  tagline: 'Senior voices in medicine, in conversation with the students coming up behind them.',
  description:
    'What Brings You In is a student-run podcast affiliated with McGill University. Experienced physicians, researchers and leaders in medicine sit down with medical students and aspiring medical students to talk about how they got here, the decisions along the way, and the medicine itself.',
  affiliation: 'A student-run podcast affiliated with McGill University, Montréal.',
  launch: { label: 'Now streaming', placeholder: false },
  email: { address: '', placeholder: true }, // e.g. hello@example.com
  socials: [
    { id: 'youtube', name: 'YouTube', href: 'https://www.youtube.com/@WhatBringsYouIn.McGill/?sub_confirmation=1', placeholder: false },
    { id: 'instagram', name: 'Instagram', href: 'https://www.instagram.com/whatbringsyouin.mcgill/', placeholder: false },
    { id: 'spotify', name: 'Spotify', href: 'https://open.spotify.com/show/0WmSJyxiE13goWjU1cFJea?si=388067effec14cd9', placeholder: false },
    { id: 'apple', name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/what-brings-you-in/id6833498881', placeholder: false },
    { id: 'amazon', name: 'Amazon Music', href: 'https://music.amazon.ca/podcasts/9ba30adc-7d52-4807-a6a8-df1e2abd1f03/what-brings-you-in?ref=dm_sh_W3ArFPZueqo0ACz2R9pCKh1hg', placeholder: false },
    { id: 'rss', name: 'RSS feed', href: 'https://feeds.redcircle.com/97c90994-a807-4a64-9d07-a2fa1509caee', placeholder: false },
  ],
  nav: [
    { label: 'Episodes', href: '/episodes' },
    { label: 'Team', href: '/team' },
    { label: 'About', href: '/about' },
  ],
};
export type Social = (typeof site.socials)[number];
