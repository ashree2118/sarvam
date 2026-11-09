/* Sarvam page base behaviour. Load with <script src="…/page-base.js" defer>.
   Progressive enhancement only: every page must read and work without it.
   - Mobile menu: button.menu-toggle[aria-controls] toggles the sheet.
   - Tabs: [role=tablist] gets arrow-key navigation and panel switching.
   - Reveal: .reveal elements fade up once when they enter the viewport. */
(() => {
  document.documentElement.classList.add('js');

  // Mobile menu
  document.querySelectorAll('.menu-toggle[aria-controls]').forEach(btn => {
    const sheet = document.getElementById(btn.getAttribute('aria-controls'));
    if (!sheet) return;
    const set = open => {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      sheet.hidden = !open;
      document.body.classList.toggle('menu-open', open);
    };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) { set(false); btn.focus(); } });
    sheet.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
    matchMedia('(min-width: 1024px)').addEventListener('change', e => { if (e.matches) set(false); });
  });

  // Tabs
  document.querySelectorAll('[role="tablist"]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const select = tab => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const k = { ArrowRight: 1, ArrowLeft: -1, Home: -i, End: tabs.length - 1 - i }[e.key];
        if (k === undefined) return;
        e.preventDefault();
        const next = tabs[(i + k + tabs.length) % tabs.length];
        select(next); next.focus();
      });
    });
  });

  // Reveal
  const items = document.querySelectorAll('.reveal');
  if (items.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));
})();
