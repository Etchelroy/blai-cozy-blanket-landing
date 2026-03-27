SUMMARY: Design a premium landing page for a cozy blanket company using white and blue tones that communicates comfort, quality, and lifestyle aspirations through strategic imagery, typography, and conversion-focused layout.

APPROACH: 
Static site built with HTML5/CSS3 and vanilla JavaScript (no framework overhead for a landing page). Use a modern CSS grid/flexbox layout with smooth animations. Implement a CDN for optimized image delivery. Consider Next.js or 11ty only if future blog/product catalog is planned. Focus on semantic HTML for SEO. Use a font pairing like Poppins (headings, modern feel) + Inter/Lato (body, readable and warm). Implement lazy loading for hero imagery and testimonial images.

REQUIREMENTS:
• Hero section with full-width background image (folded/draped blanket, warm lighting, lifestyle shot) with headline, subheading, and primary CTA button ("Shop Now" or "Explore Collection")
• Trust indicators: customer review count, star rating, or "Trusted by X+ customers" badge in hero or immediately below
• Product showcase section (3–4 featured blankets) with product images, brief descriptions, price, and secondary CTA
• "Why Choose Us" section with 3–4 value propositions (material quality, warmth rating, sustainability, customer service) using icons or supporting imagery
• Customer testimonials carousel or grid (4–6 testimonials with names, photos, and ratings)
• Newsletter signup section with simple form (email input + submit button) positioned before or after testimonials
• FAQ accordion addressing common questions (material, care, sizing, returns, shipping)
• Footer with links, social media icons, contact info, and brand mission statement
• Smooth scroll navigation menu (sticky or collapse-on-scroll) with Home, Products, About, FAQ, Contact links
• Mobile-responsive design (tested down to 375px width)
• Contact/inquiry form modal or dedicated section with email validation

CONSTRAINTS:
• Color palette: Primary white (#FFFFFF or #F8F9FA), primary blue (#2C5AA0 or #4A90E2), accent blue (#87CEEB or softer slate blue #5B8FC4), neutral grays (#E8E8E8, #555555) for text
• File size budget: hero image <150KB (use WebP + fallback), total page <2MB
• No external component libraries (Bootstrap, Tailwind CDN) — write custom CSS or use utility-first approach inline to maintain design control
• Browser support: Chrome, Firefox, Safari, Edge (last 2 versions); basic support for IE11 not required
• Accessibility: WCAG 2.1 AA standard (alt text on all images, semantic HTML, sufficient color contrast, keyboard navigation)
• Performance: Lighthouse score target minimum 80; Core Web Vitals optimization (LCP <2.5s, CLS <0.1, FID <100ms)

NOTES:
• Hero image should feature real lifestyle photography (blanket in use, cozy interior setting, warm mood lighting) — stock photo authenticity matters for premium positioning
• Avoid bright blue; use muted, sophisticated blue-gray tones that feel cozy rather than corporate
• Typography hierarchy: H1 should be large (48–64px desktop, 32–40px mobile) with generous line-height for warmth
• Testimonials must include authentic-looking photos and specific details (e.g., "Perfect for my Sunday reading" vs. generic praise) to build credibility
• CTA buttons: use white text on blue background for primary actions; consider soft-hover transitions (0.3s ease) rather than sharp changes
• Imagery: use consistent warm color grading (golden-hour lighting, cream/beige furniture) across all photos to maintain cohesive aesthetic
• Consider lazy-loading for below-the-fold images and testimonial carousel to improve LCP
• Add subtle micro-interactions: button hover states, form focus states, smooth section transitions
• Avoid animation overload — limit to entrance animations on scroll or button hovers; keep page feel calm and restful
• Mobile consideration: stack sections vertically; ensure touch targets are ≥44px; simplify testimonials carousel to 1 visible at a time
• SEO meta tags: craft meta description emphasizing "premium cozy blankets" and unique value prop