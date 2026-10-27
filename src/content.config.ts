import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" (e.g. _template.md) are ignored.
const md = (dir: string) => glob({ pattern: '**/[^_]*.md', base: `./src/content/${dir}` });

const episodes = defineCollection({
  loader: md('episodes'),
  schema: z.object({
    title: z.string(),
    number: z.number().int().positive(),
    reel: z.number().int().positive().default(1), // season
    date: z.coerce.date(), // YYYY-MM-DD
    status: z.enum(['published', 'coming-soon']).default('coming-soon'),
    guest: z
      .object({ name: z.string(), role: z.string().optional(), affiliation: z.string().optional(), photo: z.string().optional() })
      .optional(),
    description: z.string(),
    duration: z.string().optional(), // e.g. "48 min"
    audioUrl: z.string().url().optional(),
    cover: z.string().optional(), // path under /public, e.g. /images/episodes/01.jpg
    links: z
      .object({ spotify: z.string().url().optional(), apple: z.string().url().optional(), youtube: z.string().url().optional() })
      .default({}),
    topics: z.array(z.string()).default([]),
    placeholder: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: md('events'),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['live-recording', 'talk', 'mixer', 'workshop', 'other']).default('other'),
    date: z.coerce.date(), // YYYY-MM-DD (date only; times go in `time`)
    time: z.string().optional(), // e.g. "6:00 PM"
    endTime: z.string().optional(),
    location: z.string(),
    description: z.string(),
    rsvpUrl: z.string().url().optional(),
    image: z.string().optional(), // path under /public, e.g. /images/events/live-recording.jpg
    placeholder: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: md('team'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    program: z.string().optional(), // e.g. "MDCM, Class of 2028"
    photo: z.string().optional(), // path under /public
    order: z.number().int().default(99),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { episodes, events, team };
