// ===== Portfolio interactions =====
// Powered by Motion (motion.dev) — the same animation engine as Framer
// Motion, in its vanilla JS build. Loaded from CDN, no build step needed.

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasMotion = typeof Motion !== 'undefined';

  if (hasMotion && !prefersReducedMotion) {

    const { animate, inView, scroll, stagger } = Motion;

    // Springs give that signature Framer Motion feel
    const springSoft = { type: 'spring', stiffness: 120, damping: 20 };
    const springSnappy = { type: 'spring', stiffness: 220, damping: 24 };
    const springMagnet = { type: 'spring', stiffness: 300, damping: 18 };

    /* ---------- Signature move #1: hero title splits into letters ---------- */
    // Wraps each character of the hero title's own text (not the emoji span)
    // in its own <span>, then springs them in one by one with a tiny random
    // rotation so it feels hand-tossed rather than mechanical.
    function splitIntoChars(el) {
      const spans = [];
      Array.from(el.childNodes).forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          node.textContent.split('').forEach((ch) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.style.display = 'inline-block';
            span.textContent = ch === ' ' ? '\u00A0' : ch;
            frag.appendChild(span);
            spans.push(span);
          });
          el.replaceChild(frag, node);
        }
      });
      return spans;
    }

    const heroTitleEl = document.querySelector('.hero-title');
    let heroChars = [];
    if (heroTitleEl) {
      heroChars = splitIntoChars(heroTitleEl);
      heroChars.forEach((c) => { c.style.opacity = '0'; });
    }

    /* ---------- Signature move #2: magnetic nav links & avatar ---------- */
    // The element leans gently toward the cursor while hovered, then
    // springs back to rest on mouseleave — a classic "magnetic button".
    function makeMagnetic(el, strength = 0.35) {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        animate(el, { x: relX * strength, y: relY * strength }, springMagnet);
      });
      el.addEventListener('mouseleave', () => {
        animate(el, { x: 0, y: 0 }, springMagnet);
      });
    }

    document.querySelectorAll('.nav-link').forEach((el) => makeMagnetic(el, 0.3));
    const avatarEl = document.querySelector('.avatar');
    if (avatarEl) makeMagnetic(avatarEl, 0.25);

    /* ---------- Signature move #3: 3D cursor-tilt on project thumbnails ---------- */
    document.querySelectorAll('.thumb').forEach((thumb) => {
      if (thumb.parentElement) {
        thumb.parentElement.style.perspective = '600px';
      }
      thumb.addEventListener('mousemove', (e) => {
        const rect = thumb.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        animate(thumb, {
          rotateY: px * 18,
          rotateX: py * -18
        }, { type: 'spring', stiffness: 200, damping: 20 });
      });
      thumb.addEventListener('mouseleave', () => {
        animate(thumb, { rotateY: 0, rotateX: 0 }, springSoft);
      });
    });

    /* ---------- Hero entrance sequence (on page load) ---------- */
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDesc = document.querySelector('.hero-desc');

    [heroSubtitle, heroDesc].forEach((el) => {
      if (el) el.style.opacity = '0';
    });

    // Letters spring in one by one, each with a small random rotation
    heroChars.forEach((ch, i) => {
      const rand = (Math.random() - 0.5) * 30;
      animate(ch,
        { opacity: [0, 1], y: [24, 0], rotate: [rand, 0] },
        { ...springSnappy, delay: 0.05 + i * 0.025 }
      );
    });
    const emojiEl = heroTitleEl ? heroTitleEl.querySelector('.emoji') : null;
    if (emojiEl) {
      emojiEl.style.opacity = '0';
      animate(emojiEl,
        { opacity: [0, 1], scale: [0, 1], rotate: [-40, 0] },
        { ...springSnappy, delay: 0.05 + heroChars.length * 0.025 + 0.1 }
      );
    }

    const heroTitleDelay = 0.3 + heroChars.length * 0.025;
    if (heroSubtitle) {
      animate(heroSubtitle,
        { opacity: [0, 1], y: [30, 0] },
        { ...springSoft, delay: heroTitleDelay }
      );
    }
    if (heroDesc) {
      animate(heroDesc,
        { opacity: [0, 1], y: [30, 0] },
        { ...springSoft, delay: heroTitleDelay + 0.15 }
      );
    }

    /* ---------- Scroll reveals ---------- */

    // Section titles + standalone reveal elements
    document.querySelectorAll('.section-title, .dribbble-card, .quote, .contact-block').forEach((el) => {
      el.style.opacity = '0';
      inView(el, () => {
        animate(el,
          { opacity: [0, 1], y: [32, 0] },
          springSoft
        );
      }, { margin: '0px 0px -80px 0px' });
    });

    // Project cards: stagger within the group, alternating slide direction
    const projects = document.querySelectorAll('.project');
    projects.forEach((card, i) => {
      card.style.opacity = '0';
      const fromX = i % 2 === 0 ? -36 : 36;
      inView(card, () => {
        animate(card,
          { opacity: [0, 1], x: [fromX, 0] },
          { ...springSoft, delay: 0.05 }
        );
      }, { margin: '0px 0px -100px 0px' });
    });

    // Experience rows: quick upward stagger as the list enters view
    const expList = document.querySelector('.experiences');
    if (expList) {
      const rows = expList.querySelectorAll('.experience');
      rows.forEach((r) => { r.style.opacity = '0'; });
      inView(expList, () => {
        animate(rows,
          { opacity: [0, 1], y: [24, 0] },
          { ...springSoft, delay: stagger(0.09) }
        );
      }, { margin: '0px 0px -80px 0px' });
    }

    // Tags inside each project pop in with a tiny stagger
    projects.forEach((card) => {
      const tags = card.querySelectorAll('.tag');
      if (!tags.length) return;
      tags.forEach((t) => { t.style.opacity = '0'; });
      inView(card, () => {
        animate(tags,
          { opacity: [0, 1], scale: [0.8, 1] },
          { ...springSnappy, delay: stagger(0.06, { startDelay: 0.25 }) }
        );
      }, { margin: '0px 0px -100px 0px' });
    });

    /* ---------- Scroll-linked hero parallax ---------- */
    const hero = document.querySelector('.hero');
    if (hero && heroTitleEl) {
      scroll(
        animate(heroTitleEl, { y: [0, -28] }, { ease: 'linear' }),
        { target: hero, offset: ['start start', 'end start'] }
      );
    }

    /* ---------- Footer wave-in ---------- */
    const footerThanks = document.querySelector('.footer-thanks');
    if (footerThanks) {
      footerThanks.style.opacity = '0';
      inView(footerThanks, () => {
        animate(footerThanks,
          { opacity: [0, 1], y: [16, 0], rotate: [-2, 0] },
          springSnappy
        );
      });
    }

  }
  // Without Motion or with reduced-motion preference, everything simply
  // stays visible in its normal state.

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

  /* ---------- Section title chevrons: bounce on click ---------- */
  document.querySelectorAll('.section-title').forEach((btn) => {
    btn.addEventListener('click', () => {
      const chevron = btn.querySelector('.chevron');
      if (chevron && typeof Motion !== 'undefined') {
        Motion.animate(chevron,
          { y: [0, 7, -2, 0] },
          { duration: 0.5, ease: 'easeOut' }
        );
      }

      const section = btn.closest('.section');
      const content = section.querySelector('.projects, .experiences, .dribbble-card');
      if (content) {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});