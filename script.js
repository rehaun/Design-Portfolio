// ===== Portfolio interactions =====
// GSAP + ScrollTrigger (via CDN) handles scroll-driven animation.
// Everything else stays plain JS — no build step needed for GitHub Pages.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Scroll-reveal (fade + rise on enter), via GSAP ScrollTrigger ---------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Generic fade-up reveal for anything marked .reveal
    // (project cards & experience rows are excluded here — they get a
    // staggered group reveal below instead, so each item doesn't get
    // animated twice)
    document.querySelectorAll('.reveal:not(.project):not(.experience)').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Staggered reveal within groups (project cards, experience rows, tags)
    gsap.utils.toArray('.projects, .experiences').forEach((group) => {
      gsap.from(group.children, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Subtle parallax on the hero heading for a bit of scroll depth
    gsap.to('.hero-title', {
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }
  // If GSAP didn't load or the person prefers reduced motion, elements
  // stay in their normal (visible) state — nothing extra needed.

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
