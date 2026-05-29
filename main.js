// Reveal on scroll
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
document.querySelectorAll('.problem-grid, .pricing-grid').forEach((grid) => {
  grid.querySelectorAll('.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});
