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
# filename: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CloudNest — Premium Cozy Blankets</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
</head>
<body>

  <!-- ───────────── NAVIGATION ───────────── -->
  <header class="nav-header" id="navbar">
    <div class="nav-container">
      <a href="#" class="logo">
        <span class="logo-icon">☁</span>
        <span class="logo-text">CloudNest</span>
      </a>
      <nav class="nav-links" id="navLinks">
        <a href="#collections">Collections</a>
        <a href="#about">Our Story</a>
        <a href="#materials">Materials</a>
        <a href="#reviews">Reviews</a>
        <a href="#" class="nav-cta">Shop Now</a>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- ───────────── HERO ───────────── -->
  <section class="hero" id="hero">
    <div class="hero-bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
    <div class="hero-content">
      <span class="hero-badge">✦ Handcrafted with Love</span>
      <h1 class="hero-headline">
        Wrap Yourself<br />
        <em>in Pure Comfort</em>
      </h1>
      <p class="hero-subtext">
        Ultra-soft, sustainably sourced blankets that turn any moment into a sanctuary.
        Because you deserve warmth that feels like home.
      </p>
      <div class="hero-actions">
        <a href="#collections" class="btn btn-primary">Explore Collections</a>
        <a href="#about" class="btn btn-ghost">Our Story ↓</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><span class="stat-num">50k+</span><span class="stat-label">Happy Customers</span></div>
        <div class="stat-divider"></div>
        <div class="stat"><span class="stat-num">4.9★</span><span class="stat-label">Average Rating</span></div>
        <div class="stat-divider"></div>
        <div class="stat"><span class="stat-num">100%</span><span class="stat-label">Sustainable</span></div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-img-wrapper">
        <img src="https://picsum.photos/seed/cozyblanket/620/720" alt="Cozy blanket lifestyle" class="hero-img" />
        <div class="hero-img-badge">
          <span class="badge-emoji">🏆</span>
          <span>Best Seller 2024</span>
        </div>
      </div>
      <div class="floating-card card-left">
        <span>🌿</span>
        <div>
          <strong>Eco Certified</strong>
          <small>OEKO-TEX® Standard</small>
        </div>
      </div>
      <div class="floating-card card-right">
        <span>📦</span>
        <div>
          <strong>Free Shipping</strong>
          <small>Orders over $75</small>
        </div>
      </div>
    </div>
  </section>

  <!-- ───────────── TRUST BAR ───────────── -->
  <div class="trust-bar">
    <div class="trust-bar-inner">
      <div class="trust-item"><span>🚚</span> Free Shipping Over $75</div>
      <div class="trust-sep">·</div>
      <div class="trust-item"><span>♻️</span> 100% Sustainable Materials</div>
      <div class="trust-sep">·</div>
      <div class="trust-item"><span>↩️</span> 60-Day Free Returns</div>
      <div class="trust-sep">·</div>
      <div class="trust-item"><span>🛡️</span> Lifetime Quality Guarantee</div>
      <div class="trust-sep">·</div>
      <div class="trust-item"><span>🌱</span> 1 Tree Planted Per Order</div>
    </div>
  </div>

  <!-- ───────────── COLLECTIONS ───────────── -->
  <section class="collections" id="collections">
    <div class="section-header reveal">
      <span class="section-badge">Our Collections</span>
      <h2>Find Your Perfect Blanket</h2>
      <p>From silky throws to chunky knits — every texture, every mood, every moment.</p>
    </div>

    <div class="collection-filters reveal">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="throw">Throws</button>
      <button class="filter-btn" data-filter="weighted">Weighted</button>
      <button class="filter-btn" data-filter="knit">Chunky Knit</button>
      <button class="filter-btn" data-filter="sherpa">Sherpa</button>
    </div>

    <div class="product-grid" id="productGrid">

      <div class="product-card reveal" data-category="throw">
        <div class="product-img-wrap">
          <img src="https://picsum.photos/seed/blanketsoftblue/400/480" alt="Azure Dream Throw" loading="lazy" />
          <div class="product-overlay">
            <button class="quick-view-btn" data-product="0">Quick View</button>
          </div>
          <span class="product-tag">Best Seller</span>
        </div>
        <div class="product-info">
          <span class="product-type">Throw Blanket</span>
          <h3>Azure Dream</h3>
          <div class="product-stars">★★★★★ <span>(312)</span></div>
          <div class="product-footer">
            <span class="product-price">$89</span>
            <button class="add-cart-btn" data-product="0">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="product-card reveal" data-category="weighted">
        <div class="product-img-wrap">
          <img src="https://picsum.photos/seed/heavyblanket/400/480" alt="Serenity Weighted" loading="lazy" />
          <div class="product-overlay">
            <button class="quick-view-btn" data-product="1">Quick View</button>
          </div>
          <span class="product-tag new">New</span>
        </div>
        <div class="product-info">
          <span class="product-type">Weighted Blanket</span>
          <h3>Serenity 15lb</h3>
          <div class="product-stars">★★★★★ <span>(198)</span></div>
          <div class="product-footer">
            <span class="product-price">$149</span>
            <button class="add-cart-btn" data-product="1">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="product-card reveal" data-category="knit">
        <div class="product-img-wrap">
          <img src="https://picsum.photos/seed/knitwhite/400/480" alt="Snowdrift Knit" loading="lazy" />
          <div class="product-overlay">
            <button class="quick-view-btn" data-product="2">Quick View</button>
          </div>
          <span class="product-tag sale">Sale</span>
        </div>
        <div class="product-info">
          <span class="product-type">Chunky Knit</span>
          <h3>Snowdrift Knit</h3>
          <div class="product-stars">★★★★☆ <span>(87)</span></div>
          <div class="product-footer">
            <span class="product-price">$119 <s>$159</s></span>
            <button class="add-cart-btn" data-product="2">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="product-card reveal" data-category="sherpa">
        <div class="product-img-wrap">
          <img src="https://picsum.photos/seed/sherpafluffy/400/480" alt="Cloud Nine Sherpa" loading="lazy" />
          <div class="product-overlay">
            <button class="quick-view-btn" data-product="3">Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-type">Sherpa Blanket</span>
          <h3>Cloud Nine</h3>
          <div class="product-stars">★★★★★ <span>(254)</span></div>
          <div class="product-footer">
            <span class="product-price">$109</span>
            <button class="add-cart-btn" data-product="3">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="product-card reveal" data-category="throw">
        <div class="product-img-wrap">
          <img src="https://picsum.photos/seed/mintblanket/400/480" alt="Mist & Mellow Throw" loading="lazy" />
          <div class="product-overlay">
            <button class="quick-view-btn" data-product="4">Quick View</button>
          </div>
          <span class="product-tag">Limited</span>
        </div>
        <div class="product-info">
          <span class="product-type">Throw Blanket</span>
          <h3>Mist &amp; Mellow</h3>
          <div class="product-stars">★★★★★ <span>(143)</span></div>
          <div class="product-footer">
            <span class="product-price">$95</span>
            <button class="add-cart-btn" data-product="4">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="product-card reveal" data-category="weighted">
        <div class="product-img-wrap">
          <img src="https://picsum.photos/seed/navyblanket/400/480" alt="Deep Sleep 20lb" loading="lazy" />
          <div class="product-overlay">
            <button class="quick-view-btn" data-product="5">Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-type">Weighted Blanket</span>
          <h3>Deep Sleep 20lb</h3>
          <div class="product-stars">★★★★★ <span>(209)</span></div>
          <div class="product-footer">
            <span class="product-price">$169</span>
            <button class="add-cart-btn" data-product="5">Add to Cart</button>
          </div>
        </div>
      </div>

    </div>

    <div class="collections-cta reveal">
      <a href="#" class="btn btn-primary">View All 40+ Styles</a>
    </div>
  </section>

  <!-- ───────────── ABOUT / STORY ───────────── -->
  <section class="about" id="about">
    <div class="about-image reveal">
      <img src="https://picsum.photos/seed/cozyhome/560/640" alt="Our story" />
      <div class="about-img-accent"></div>
      <div class="about-years">
        <strong>12</strong>
        <span>Years of<br/>Warmth</span>
      </div>
    </div>
    <div class="about-content reveal">
      <span class="section-badge">Our Story</span>
      <h2>Born from a Love of<br /><em>Simple Comforts</em></h2>
      <p class="lead">CloudNest began in a small workshop in Vermont, where founder Elara Moss stitched her first blanket during a snowstorm — just to feel a little cozier.</p>
      <p>What started as a personal project became a movement. We believe that comfort is a form of self-care, and that every home deserves a little extra warmth. Every CloudNest blanket is crafted with intention, using only the softest, most sustainable fibers available.</p>
      <ul class="about-values">
        <li><span class="val-icon">🌿</span><div><strong>Sustainably Sourced</strong><small>Our fibers are OEKO-TEX® certified and ethically produced.</small></div></li>
        <li><span class="val-icon">🤝</span><div><strong>Fair Trade Partners</strong><small>We work exclusively with certified fair-trade artisans.</small></div></li>
        <li><span class="val-icon">🌳</span><div><strong>1 Tree, 1 Blanket</strong><small>Every purchase plants a tree through our reforestation program.</small></div></li>
      </ul>
      <a href="#" class="btn btn-primary">Read Full Story</a>
    </div>
  </section>

  <!-- ───────────── MATERIALS ───────────── -->
  <section class="materials" id="materials">
    <div class="section-header reveal">
      <span class="section-badge">Craftsmanship</span>
      <h2>What Makes Us Different</h2>
      <p>Every thread tells a story of quality, care, and conscience.</p>
    </div>
    <div class="materials-grid">

      <div class="material-card reveal">
        <div class="material-icon">🐑</div>
        <h3>Merino Wool</h3>
        <p>Ultra-fine fibres from free-range Merino sheep. Temperature-regulating, naturally soft, and long-lasting.</p>
        <span class="material-tag">Premium Tier</span>
      </div>

      <div class="material-card reveal">
        <div class="material-icon">🌱</div>
        <h3>Organic Cotton</h3>
        <p>GOTS-certified cotton grown without harmful pesticides. Breathable, hypoallergenic, and machine washable.</p>
        <span class="material-tag">Everyday Favourite</span>
      </div>

      <div class="material-card reveal">
        <div class="material-icon">☁️</div>
        <h3>Bamboo Velvet</h3>
        <p>Silky-smooth bamboo-derived fabric that is naturally antibacterial, moisture-wicking, and incredibly plush.</p>
        <span class="material-tag">Luxury Feel</span>
      </div>

      <div class="material-card reveal">
        <div class="material-icon">❄️</div>
        <h3>Sherpa Fleece</h3>
        <p>Double-sided fleece with a classic sherpa texture. Maximum warmth with minimum weight.</p>
        <span class="material-tag">Winter Special</span>
      </div>

    </div>

    <div class="process-strip reveal">
      <div class="process-step">
        <span class="step-num">01</span>
        <strong>Sourced</strong>
        <small>Ethical farms &amp; mills worldwide</small>
      </div>
      <div class="process-arrow">→</div>
      <div class="process-step">
        <span class="step-num">02</span>
        <strong>Woven</strong>
        <small>By skilled artisan weavers</small>
      </div>
      <div class="process-arrow">→</div>
      <div class="process-step">
        <span class="step-num">03</span>
        <strong>Tested</strong>
        <small>Rigorous softness &amp; durability checks</small>
      </div>
      <div class="process-arrow">→</div>
      <div class="process-step">
        <span class="step-num">04</span>
        <strong>Delivered</strong>
        <small>To your door, beautifully packaged</small>
      </div>
    </div>
  </section>

  <!-- ───────────── LIFESTYLE GALLERY ───────────── -->
  <section class="gallery">
    <div class="section-header reveal">
      <span class="section-badge">As Seen In Real Homes</span>
      <h2>The CloudNest Life</h2>
    </div>
    <div class="gallery-grid reveal">
      <div class="gallery-item tall"><img src="https://picsum.photos/seed/homecozy1/400/600" alt="Cozy home 1" loading="lazy" /></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/homecozy2/400/300" alt="Cozy home 2" loading="lazy" /></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/homecozy3/400/300" alt="Cozy home 3" loading="lazy" /></div>
      <div class="gallery-item wide"><img src="https://picsum.photos/seed/homecozy4/800/400" alt="Cozy home 4" loading="lazy" /></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/homecozy5/400/300" alt="Cozy home 5" loading="lazy" /></div>
    </div>
    <p class="gallery-caption reveal">Share your moments with <strong>#CloudNestHome</strong> for a chance to be featured</p>
  </section>

  <!-- ───────────── REVIEWS ───────────── -->
  <section class="reviews" id="reviews">
    <div class="section-header reveal">
      <span class="section-badge">Customer Love</span>
      <h2>50,000+ Happy Customers</h2>
      <div class="overall-rating">
        <span class="big-stars">★★★★★</span>
        <span class="rating-num">4.9 / 5</span>
        <span class="rating-count">based on 3,842 reviews</span>
      </div>
    </div>

    <div class="reviews-track-wrapper">
      <div class="reviews-track" id="reviewsTrack">

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p>"I bought the Azure Dream throw as a gift for my mother and she hasn't let it go since. The quality is absolutely exceptional — softer than anything I've felt in a store."</p>
          <div class="reviewer">
            <img src="https://picsum.photos/seed/person1/48/48" alt="Sarah M." />
            <div><strong>Sarah M.</strong><small>Verified Buyer · Vermont</small></div>
          </div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p>"The Serenity weighted blanket genuinely changed my sleep. I fall asleep faster and wake up feeling more rested. Worth every single penny. Already ordering a second one."</p>
          <div class="reviewer">
            <img src="https://picsum.photos/seed/person2/48/48" alt="James K." />
            <div><strong>James K.</strong><small>Verified Buyer · Oregon</small></div>
          </div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p>"Packaging was stunning — it arrived like a luxury gift even though I bought it for myself! The Snowdrift Knit looks gorgeous on my sofa and the texture is incredibly cozy."</p>
          <div class="reviewer">
            <img src="https://picsum.photos/seed/person3/48/48" alt="Priya L." />
            <div><strong>Priya L.</strong><small>Verified Buyer · New York</small></div>
          </div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p>"I was hesitant ordering online but the return policy gave me confidence. Turns out I didn't need it — the Cloud Nine sherpa is unbelievably soft. My whole family wants one now."</p>
          <div class="reviewer">
            <img src="https://picsum.photos/seed/person4/48/48" alt="Michelle T." />
            <div><strong>Michelle T.</strong><small>Verified Buyer · Colorado</small></div>
          </div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p>"After washing five times it still feels exactly the same. That's rare. Most blankets pill and lose their softness fast — this one hasn't budged. Incredible quality control."</p>
          <div class="reviewer">
            <img src="https://picsum.photos/seed/person5/48/48" alt="David R." />
            <div><strong>David R.</strong><small>Verified Buyer · Texas</small></div>
          </div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★☆</div>
          <p>"Beautiful product and fast shipping! Docked one star only because I wish there were more colour options in the weighted line. But the quality itself is genuinely five stars."</p>
          <div class="reviewer">
            <img src="https://picsum.photos/seed/person6/48/48" alt="Anna W." />
            <div><strong>Anna W.</strong><small>Verified Buyer · Washington</small></div>
          </div>
        </div>

      </div>

      <button class="review-nav prev" id="reviewPrev" aria-label="Previous review">‹</button>
      <button class="review-nav next" id="reviewNext" aria-label="Next review">›</button>
    </div>

    <div class="review-dots" id="reviewDots"></div>
  </section>

  <!-- ───────────── BUNDLE / PROMO ───────────── -->
  <section class="promo-section">
    <div class="promo-inner reveal">
      <div class="promo-content">
        <span class="promo-badge">Limited Time Offer</span>
        <h2>The Ultimate Cozy Bundle</h2>
        <p>Get the Azure Dream Throw + Cloud Nine Sherpa + a hand-poured soy candle — everything you need for the perfect night in.</p>
        <ul class="promo-includes">
          <li>✓ Azure Dream Throw ($89 value)</li>
          <li>✓ Cloud Nine Sherpa ($109 value)</li>
          <li>✓ Vanilla & Cedar Soy Candle ($35 value)</li>
          <li>✓ Premium gift packaging included</li>
        </ul>
        <div class="promo-price-row">
          <span class="promo-price">$179</span>
          <span class="promo-original">$233</span>
          <span class="promo-save">Save $54</span>
        </div>
        <a href="#" class="btn btn-white">Grab the Bundle →</a>
      </div>
      <div class="promo-image">
        <img src="https://picsum.photos/seed/blanketbundle/520/480" alt="Cozy Bundle" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- ───────────── NEWSLETTER ───────────── -->
  <section class="newsletter">
    <div class="newsletter-inner reveal">
      <span class="newsletter-icon">✉️</span>
      <h2>Stay Wrapped in the Loop</h2>
      <p>Join 25,000+ subscribers for early access, exclusive discounts, and cozy inspiration delivered to your inbox.</p>
      <form class="newsletter-form" id="newsletterForm" novalidate>
        <input type="email" placeholder="Your email address" id="emailInput" required />
        <button type="submit" class="btn btn-primary">Subscribe &amp; Save 10%</button>
      </form>
      <p class="newsletter-fine">No spam, ever. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.</p>
      <div class="newsletter-success" id="newsletterSuccess">
        🎉 You're in! Check your inbox for your 10% discount code.
      </div>
    </div>
  </section>

  <!-- ───────────── FOOTER ───────────── -->
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="#" class="logo"><span class="logo-icon">☁</span><span class="logo-text">CloudNest</span></a>
        <p>Crafting warmth since 2012. Every blanket made with intention, love, and the finest sustainable materials on earth.</p>
        <div class="social-links">
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="Pinterest">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.56 1.9-2.56.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.4 3.11-5.24 0-2.16-1.45-3.67-3.53-3.67-2.41 0-3.82 1.81-3.82 3.67 0 .73.28 1.51.63 1.93.07.08.08.16.06.24l-.24.96c-.04.15-.12.18-.27.11C7.5 13.4 6.88 11.5 6.88 10c0-2.83 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.65 5.59-.91 0-1.76-.47-2.05-1.03l-.56 2.08c-.2.78-.75 1.76-1.12 2.36.84.26 1.74.4 2.66.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.09a4.85 4.85 0 01-1-.4z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-links">
        <h4>Shop</h4>
        <ul>
          <li><a href="#">All Blankets</a></li>
          <li><a href="#">Throw Blankets</a></li>
          <li><a href="#">Weighted Blankets</a></li>
          <li><a href="#">Chunky Knit</a></li>
          <li><a href="#">Sherpa Collection</a></li>
          <li><a href="#">Gift Sets</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Company</h4>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Materials</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Support</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping &amp; Returns</a></li>
          <li><a href="#">Care Guide</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Wholesale</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 CloudNest. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Settings</a>
      </div>
      <div class="payment-icons">
        <span class="pay-icon">VISA</span>
        <span class="pay-icon">MC</span>
        <span class="pay-icon">AMEX</span>
        <span class="pay-icon">PP</span>
        <span class="pay-icon">⬛ Pay</span>
      </div>
    </div>
  </footer>

  <!-- ───────────── QUICK VIEW MODAL ───────────── -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close" id="modalClose" aria-label="Close modal">×</button>
      <div class="modal-body">
        <div class="modal-img">
          <img src="" alt="" id="modalImg" />
        </div>
        <div class="modal-info">
          <span class="product-type" id="modalType"></span>
          <h2 id="modalTitle"></h2>
          <div class="product-stars" id="modalStars"></div>
          <p class="modal-desc" id="modalDesc"></p>
          <div class="modal-price" id="modalPrice"></div>
          <div class="modal-options">
            <div class="option-group">
              <label>Size</label>
              <div class="option-btns">
                <button class="opt-btn active">Throw (50×60")</button>
                <button class="opt-btn">Full (60×80")</button>
                <button class="opt-btn">Queen (90×90")</button>
              </div>
            </div>
            <div class="option-group">
              <label>Color</label>
              <div class="color-swatches">
                <button class="swatch active" style="background:#BFD7ED;" title="Sky Blue"></button>
                <button class="swatch" style="background:#E8F0F7;" title="Cloud White"></button>
                <button class="swatch" style="background:#4A90BF;" title="Ocean"></button>
                <button class="swatch" style="background:#D4E8C2;" title="Sage"></button>
                <button class="swatch" style="background:#F5ECD7;" title="Sand"></button>
              </div>
            </div>
          </div>
          <button class="btn btn-primary btn-full" id="modalAddCart">Add to Cart</button>
          <p class="modal-shipping">🚚 Free shipping · ↩️ 60-day returns</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ───────────── CART TOAST ───────────── -->
  <div class="cart-toast" id="cartToast">
    <span class="toast-icon">🛒</span>
    <span id="toastMsg">Item added to cart!</span>
  </div>

  <!-- ───────────── BACK TO TOP ───────────── -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>

  <script src="script.js"></script>
</body>
</html>