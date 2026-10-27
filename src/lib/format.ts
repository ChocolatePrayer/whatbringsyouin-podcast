// Content dates are written date-only (YYYY-MM-DD) and parse as UTC midnight,
// so they are formatted in UTC to avoid drifting a day in Montréal time.
const opts = (o: Intl.DateTimeFormatOptions) => ({ timeZone: 'UTC', ...o });
export const fmtDate = (d: Date) => new Intl.DateTimeFormat('en-CA', opts({ day: 'numeric', month: 'long', year: 'numeric' })).format(d);
export const fmtDateShort = (d: Date) => new Intl.DateTimeFormat('en-CA', opts({ day: 'numeric', month: 'short' })).format(d);
export const fmtMonth = (d: Date) => new Intl.DateTimeFormat('en-CA', opts({ month: 'long', year: 'numeric' })).format(d);
export const fmtWeekday = (d: Date) => new Intl.DateTimeFormat('en-CA', opts({ weekday: 'long' })).format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const pad2 = (n: number) => String(n).padStart(2, '0');
/** Upcoming = today (UTC date) or later. */
export const isUpcoming = (d: Date, now = new Date()) => isoDate(d) >= isoDate(now);
/** Joins non-empty parts with the stamped-code separator. */
export const edgeCode = (...parts: Array<string | number | false | null | undefined>) =>
  parts.filter((p) => p !== undefined && p !== null && p !== false && p !== '').join(' · ');
