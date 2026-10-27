// Builds an iCalendar file for one event at build time, served as a data: URI.
// Times are written as given in the content file ("6:00 PM") in America/Toronto;
// an event without a parseable time becomes an all-day event.

export interface IcsEvent {
  id: string;
  title: string;
  date: Date; // UTC midnight of the calendar day (see src/lib/format.ts)
  time?: string;
  endTime?: string;
  location?: string;
  description?: string;
  url?: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** "6:00 PM" | "6 pm" | "18:30" → { h, m } in 24h, or null when not parseable. */
export const parseClock = (s?: string): { h: number; m: number } | null => {
  if (!s) return null;
  const ampm = /^\s*(\d{1,2})(?:[:.](\d{2}))?\s*([ap])\.?\s*m\.?\s*$/i.exec(s);
  if (ampm) {
    const h = Number(ampm[1]);
    const m = Number(ampm[2] ?? 0);
    if (h < 1 || h > 12 || m > 59) return null;
    return { h: (h % 12) + (ampm[3].toLowerCase() === 'p' ? 12 : 0), m };
  }
  const h24 = /^\s*(\d{1,2}):(\d{2})\s*$/.exec(s);
  if (h24) {
    const h = Number(h24[1]);
    const m = Number(h24[2]);
    if (h > 23 || m > 59) return null;
    return { h, m };
  }
  return null;
};

const esc = (s: string) =>
  s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');

const dateStamp = (d: Date) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;
const nextDay = (d: Date) => new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1));
const utcStamp = (d: Date) =>
  `${dateStamp(d)}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

// RFC 5545: lines are at most 75 octets; continuation lines start with one space.
const enc = new TextEncoder();
const fold = (line: string) => {
  const out: string[] = [];
  let cur = '';
  let bytes = 0;
  for (const ch of line) {
    const b = enc.encode(ch).length;
    if (bytes + b > 74) {
      out.push(cur);
      cur = ' ' + ch;
      bytes = 1 + b;
    } else {
      cur += ch;
      bytes += b;
    }
  }
  out.push(cur);
  return out.join('\r\n');
};

const VTIMEZONE = [
  'BEGIN:VTIMEZONE',
  'TZID:America/Toronto',
  'BEGIN:STANDARD',
  'DTSTART:19701101T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
  'TZOFFSETFROM:-0400',
  'TZOFFSETTO:-0500',
  'TZNAME:EST',
  'END:STANDARD',
  'BEGIN:DAYLIGHT',
  'DTSTART:19700308T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
  'TZOFFSETFROM:-0500',
  'TZOFFSETTO:-0400',
  'TZNAME:EDT',
  'END:DAYLIGHT',
  'END:VTIMEZONE',
];

export function buildIcs(ev: IcsEvent, now = new Date()): string {
  const start = parseClock(ev.time);
  const end = parseClock(ev.endTime);
  const day = dateStamp(ev.date);
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//What Brings You In//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];
  if (start) lines.push(...VTIMEZONE);
  lines.push('BEGIN:VEVENT', `UID:${ev.id}@what-brings-you-in`, `DTSTAMP:${utcStamp(now)}`);
  if (start) {
    lines.push(`DTSTART;TZID=America/Toronto:${day}T${pad(start.h)}${pad(start.m)}00`);
    if (end) {
      const crossesMidnight = end.h * 60 + end.m < start.h * 60 + start.m;
      const endDay = crossesMidnight ? dateStamp(nextDay(ev.date)) : day;
      lines.push(`DTEND;TZID=America/Toronto:${endDay}T${pad(end.h)}${pad(end.m)}00`);
    }
  } else {
    lines.push(`DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${dateStamp(nextDay(ev.date))}`);
  }
  lines.push(`SUMMARY:${esc(ev.title)}`);
  if (ev.location) lines.push(`LOCATION:${esc(ev.location)}`);
  if (ev.description) lines.push(`DESCRIPTION:${esc(ev.description)}`);
  if (ev.url) lines.push(`URL:${ev.url}`);
  lines.push('END:VEVENT', 'END:VCALENDAR');
  return lines.map(fold).join('\r\n') + '\r\n';
}

export const icsDataUri = (ics: string) => `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
