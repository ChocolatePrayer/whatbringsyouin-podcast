// Content dates are written date-only (YYYY-MM-DD) and parse as UTC midnight,
// so they are formatted in UTC to avoid drifting a day in Montréal time.
const opts = (o: Intl.DateTimeFormatOptions) => ({ timeZone: 'UTC', ...o });
export const fmtDate = (d: Date) => new Intl.DateTimeFormat('en-CA', opts({ day: 'numeric', month: 'long', year: 'numeric' })).format(d);
export const fmtDateShort = (d: Date) => new Intl.DateTimeFormat('en-CA', opts({ day: 'numeric', month: 'short' })).format(d);
export const pad2 = (n: number) => String(n).padStart(2, '0');
/** Joins non-empty parts with the stamped-code separator. */
export const edgeCode = (...parts: Array<string | number | false | null | undefined>) =>
  parts.filter((p) => p !== undefined && p !== null && p !== false && p !== '').join(' · ');
