const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Reveal on scroll ──────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Stagger children inside grids
document.querySelectorAll('.problem-grid, .pricing-grid, .metrics-row').forEach((grid) => {
  grid.querySelectorAll('.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});

// ── Nav: solidify once the hero starts scrolling past ─────────────
const nav = document.querySelector('.site-nav');
if (nav) {
  const setNavState = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  setNavState();
  window.addEventListener('scroll', setNavState, { passive: true });
}

// ── Log in menu: dismiss on outside click or Escape ───────────────
const loginMenu = document.querySelector('.nav-login');
if (loginMenu) {
  document.addEventListener('click', (e) => {
    if (loginMenu.open && !loginMenu.contains(e.target)) loginMenu.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginMenu.open) {
      loginMenu.open = false;
      loginMenu.querySelector('summary').focus();
    }
  });
}

// ── Metric count-up ───────────────────────────────────────────────
// Numbers tick up once, the first time the strip is scrolled into view.
const countEls = document.querySelectorAll('[data-count]');
if (countEls.length) {
  const runCount = (el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, soft landing on the real number
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCount(entry.target);
        countObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  countEls.forEach((el) => countObserver.observe(el));
}
