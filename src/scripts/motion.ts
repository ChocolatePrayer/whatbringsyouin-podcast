// One small script for the whole site: reveal-on-enter, strips, and the active frame.
// Runs on first load and after every client-side navigation (Astro ClientRouter).
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  // optional stagger: <ul data-reveal-stagger="70"> … <li data-reveal> …
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    const step = Number(group.dataset.revealStagger) || 60;
    group.querySelectorAll<HTMLElement>(':scope [data-reveal]').forEach((el, i) => el.style.setProperty('--reveal-delay', `${Math.min(i * step, 600)}ms`));
  });
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
  if (!els.length) return;
  if (reduce() || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  els.forEach((e) => io.observe(e));
}

function initStrips() {
  document.querySelectorAll<HTMLElement>('[data-strip]').forEach((strip) => {
    if (strip.dataset.ready) return;
    strip.dataset.ready = '1';
    const track = strip.querySelector<HTMLElement>('[data-strip-track]');
    if (!track) return;
    const prev = strip.querySelector<HTMLButtonElement>('[data-strip-prev]');
    const next = strip.querySelector<HTMLButtonElement>('[data-strip-next]');
    const step = () => {
      const first = track.querySelector<HTMLElement>(':scope > *:not(:empty)');
      const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
      return first ? first.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    };
    const go = (dir: number) => track.scrollBy({ left: dir * step(), behavior: reduce() ? 'auto' : 'smooth' });
    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 1;
      strip.classList.toggle('has-overflow', max > 0);
      prev?.toggleAttribute('disabled', track.scrollLeft <= 1);
      next?.toggleAttribute('disabled', track.scrollLeft >= max);
    };
    track.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update, { passive: true });
    update();

    // the frame nearest the gate (track centre) is the active one; it lights its leak
    const frames = Array.from(track.querySelectorAll<HTMLElement>('.frame'));
    if (frames.length) {
      let raf = 0;
      const pick = () => {
        raf = 0;
        const r = track.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        let best: HTMLElement | null = null, bestD = Infinity;
        for (const f of frames) {
          const b = f.getBoundingClientRect();
          const d = Math.abs(b.left + b.width / 2 - mid);
          if (d < bestD) { bestD = d; best = f; }
        }
        frames.forEach((f) => f.classList.toggle('is-active', f === best));
      };
      const schedule = () => { if (!raf) raf = requestAnimationFrame(pick); };
      track.addEventListener('scroll', schedule, { passive: true });
      addEventListener('resize', schedule, { passive: true });
      pick();
    }
  });
}

function init() {
  document.documentElement.classList.add('js');
  initReveal();
  initStrips();
}
document.addEventListener('astro:page-load', init);
document.addEventListener('astro:after-swap', () => document.documentElement.classList.add('js'));
