// Single source of truth for site-wide facts. Anything marked `placeholder: true`
// is waiting for a real value; see README.md → "Replace the placeholders".
export const site = {
  name: 'What Brings You In',
  shortName: 'WBYI',
  tagline: 'Senior voices in medicine, in conversation with the students coming up behind them.',
  description:
    'What Brings You In is a student-run podcast affiliated with McGill University. Experienced physicians, researchers and leaders in medicine sit down with medical students and aspiring medical students to talk about how they got here, the decisions along the way, and the medicine itself.',
  affiliation: 'A student-run podcast affiliated with McGill University, Montréal.',
  launch: { label: 'First episodes coming soon', placeholder: true },
  email: { address: '', placeholder: true }, // e.g. hello@example.com
  formEndpoint: { url: '', placeholder: true }, // e.g. a Formspree / Netlify Forms / Google Forms endpoint
  socials: [
    { id: 'spotify', name: 'Spotify', href: '', placeholder: true },
    { id: 'apple', name: 'Apple Podcasts', href: '', placeholder: true },
    { id: 'youtube', name: 'YouTube', href: '', placeholder: true },
    { id: 'instagram', name: 'Instagram', href: '', placeholder: true },
    { id: 'rss', name: 'RSS feed', href: '', placeholder: true },
  ],
  nav: [
    { label: 'Episodes', href: '/episodes' },
    { label: 'Events', href: '/events' },
    { label: 'Team', href: '/team' },
    { label: 'About', href: '/about' },
    { label: 'Get involved', href: '/get-involved' },
  ],
};
export type Social = (typeof site.socials)[number];
