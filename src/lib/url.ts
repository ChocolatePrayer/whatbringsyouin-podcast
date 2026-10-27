// Every internal href must go through withBase() so the site works under
// https://<owner>.github.io/<repo>/ as well as at a domain root.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const withBase = (path: string) => `${base}${path.startsWith('/') ? '' : '/'}${path}`;

const strip = (p: string) => (p.replace(/\/+$/, '') || '/');
export const isCurrent = (pathname: string, href: string) => {
  const p = strip(pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname);
  const h = strip(href);
  return h === '/' ? p === '/' : p === h || p.startsWith(h + '/');
};
