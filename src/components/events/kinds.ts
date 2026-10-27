// Event kinds (src/content.config.ts) in plain words, plus the icon each one takes in Icon.astro.
export type EventKind = 'live-recording' | 'talk' | 'mixer' | 'workshop' | 'other';

export const KIND_LABELS: Record<EventKind, string> = {
  'live-recording': 'Live recording',
  talk: 'Talk',
  mixer: 'Mixer',
  workshop: 'Workshop',
  other: 'Event',
};

export const KIND_ICONS: Record<EventKind, string> = {
  'live-recording': 'mic',
  talk: 'users',
  mixer: 'users',
  workshop: 'frame',
  other: 'calendar',
};

export const kindLabel = (kind: EventKind) => KIND_LABELS[kind] ?? KIND_LABELS.other;
export const kindIcon = (kind: EventKind) => KIND_ICONS[kind] ?? KIND_ICONS.other;

/** "6:00 PM–7:30 PM", "6:00 PM", or undefined when no time is set. */
export const timeRange = (time?: string, endTime?: string) =>
  time ? (endTime ? `${time}–${endTime}` : time) : undefined;

export const countLabel = (n: number) => `${n} ${n === 1 ? 'event' : 'events'}`;
