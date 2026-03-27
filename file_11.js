/* ===================================================
   CozyNest – Landing Page Scripts
   =================================================== */

(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────────── */
  const qs  = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ── DOM Ready ───────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileNav();
    initParticles();
    initReveal();
    initProductFilters();
    initProductCards();
    initQuickView();
    initToast();
    initBackToTop();
    initNewsletter();
    initCartCounter();
    initLifestyleHover();
    initSizePicker();
    initCounterAnimation();
  });

  /* ── 1. Navbar scroll effect ─────────────────── */
  function initNavbar() {
    const navbar = qs('#navbar');
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 2. Mobile Nav ───────────────────────────── */
  function initMobileNav() {
    const hamburger = qs('.hamburger');
    const mobileNav = qs('.mobile-nav');
    const overlay   = qs('.nav-overlay');

    if (!hamburger || !mobileNav) return;

    const toggle = (open) => {
      hamburger.classList.toggle('active', open);
      mobileNav.classList.toggle('open', open);
      overlay?.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => {
      toggle(!mobileNav.classList.contains('open'));
    });

    overlay?.addEventListener('click', () => toggle(false));

    qsa('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggle(false);
    });
  }

  /* ── 3. Hero Particles ───────────────────────── */
  function initParticles() {
    const container = qs('.hero-particles');
    if (!container) return;

    const count = window.innerWidth < 768 ? 8 : 18;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 60 + 10;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const dur   = Math.random() * 15 + 10;

      Object.assign(p.style, {
        width:           `${size}px`,
        height:          `${size}px`,
        left:            `${left}%`,
        animationDuration: `${dur}s`,
        animationDelay:  `${delay}s`,
      });

      container.appendChild(p);
    }
  }

  /* ── 4. Scroll Reveal ────────────────────────── */
  function initReveal() {
    const els = q