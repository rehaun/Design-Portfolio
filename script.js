// ===== Portfolio interactions =====
// Vanilla JS only — no framework needed for this static site.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Scroll-reveal (fade + rise on enter) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: no IntersectionObserver support, just show everything
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Sticky header state on scroll ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Section title chevrons: gentle bounce on click ---------- */
  document.querySelectorAll('.section-title').forEach((btn) => {
    btn.addEventListener('click', () => {
      const chevron = btn.querySelector('.chevron');
      chevron.classList.remove('bounce');
      // restart animation
      void chevron.offsetWidth;
      chevron.classList.add('bounce');

      // scroll to the next section's content smoothly
      const section = btn.closest('.section');
      const content = section.querySelector('.projects, .experiences, .dribbble-card');
      if (content) {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
