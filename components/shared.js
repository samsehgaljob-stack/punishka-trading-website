/**
 * PUNISHKA TRADING — Shared Components
 * Injects consistent header, footer, sticky bar on all static pages.
 * Update this file → changes apply across ALL pages automatically.
 */
(function () {
  'use strict';

  /* ── 1. Inject shared CSS (skip if already in page) ── */
  if (!document.querySelector('link[href*="shared.css"]')) {
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/css/shared.css';
    document.head.appendChild(cssLink);
  }

  /* ── 1a. Inject Google Analytics GA4 (skip if already loaded) ── */
  if (!document.querySelector('script[src*="googletagmanager"]') && !window.gtag) {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-2PMT5H8T6N';
    document.head.appendChild(gaScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-2PMT5H8T6N', { send_page_view: true });
  }

  /* ── 1b. Inject favicon & manifest (skip if already set) ── */
  if (!document.querySelector('link[rel="icon"]')) {
    var favLink = document.createElement('link');
    favLink.rel = 'icon';
    favLink.href = '/favicon.svg';
    favLink.type = 'image/svg+xml';
    document.head.appendChild(favLink);
  }
  if (!document.querySelector('link[rel="manifest"]')) {
    var manLink = document.createElement('link');
    manLink.rel = 'manifest';
    manLink.href = '/manifest.json';
    document.head.appendChild(manLink);
  }

  /* ── 2. Inject Google Fonts if not already loaded ── */
  if (!document.querySelector('link[href*="Barlow+Condensed"]')) {
    var fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'style';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800;900&family=DM+Sans:wght@400;500;600;700&display=swap';
    fontLink.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(fontLink);
  }

  /* ── 3. Header HTML ── */
  var HEADER_HTML = [
    '<header class="pt-hdr" id="pt-hdr">',
    '  <a href="/" class="pt-hdr-logo">',
    '    <span class="pt-logo-text">Punishka<span> Trading</span></span>',
    '  </a>',
    '  <nav class="pt-hdr-nav">',
    '    <a href="/" class="pt-nav-a">Home</a>',
    '    <a href="/#products" class="pt-nav-a">Products</a>',
    '    <a href="/dj-equipment-delhi/" class="pt-nav-a">Delhi Store</a>',
    '    <a href="/#about" class="pt-nav-a">About Us</a>',
    '    <a href="/#contact" class="pt-nav-a">Contact</a>',
    '    <a href="/blog/" class="pt-nav-a">Blog</a>',
    '  </nav>',
    '  <a href="tel:+919315820632" class="pt-hdr-call">',
    '    <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.35 1.02-.21 1.12.46 2.33.71 3.58.71.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.99c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.21 1.02L6.6 10.8z"/></svg>',
    '    Call Now',
    '  </a>',
    '</header>'
  ].join('\n');

  /* ── 4. Footer HTML ── */
  var FOOTER_HTML = [
    '<footer class="ft2" id="pt-footer-el">',
    '  <div class="ft2-inner">',
    '    <div class="ft2-col ft2-brand">',
    '      <div class="ft2-logo">',
    '        <span class="ft2-logo-n">Punishka <span>Trading</span></span>',
    '      </div>',
    '      <p class="ft2-desc">Your trusted DJ &amp; audio equipment store. Amplifiers, mixers, mics &amp; more &mdash; serving Delhi since 2018.</p>',
    '      <div class="ft2-gst"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> GST Verified Business</div>',
    '      <div class="ft2-gst-num">GSTIN: 07DVJPP6642A1ZJ</div>',
    '    </div>',
    '    <div class="ft2-col">',
    '      <div class="ft2-heading">Quick Links</div>',
    '      <div class="ft2-links-wrap">',
    '        <ul class="ft2-links">',
    '          <li><a href="/">Home</a></li>',
    '          <li><a href="/#products">Products</a></li>',
    '          <li><a href="/#about">About Us</a></li>',
    '          <li><a href="/#contact">Contact</a></li>',
    '          <li><a href="/terms.html">Terms &amp; Conditions</a></li>',
    '          <li><a href="/shipping.html">Shipping Policy</a></li>',
    '          <li><a href="/return.html">Return Policy</a></li>',
    '          <li><a href="/privacy.html">Privacy Policy</a></li>',
    '        </ul>',
    '        <ul class="ft2-links">',
    '          <li><a href="/category/amplifiers/">DJ Amplifiers</a></li>',
    '          <li><a href="/category/mixers/">DJ Mixers</a></li>',
    '          <li><a href="/category/microphones/">Microphones</a></li>',
    '          <li><a href="/category/pa-systems/">PA Systems</a></li>',
    '          <li><a href="/dj-equipment-delhi/">Delhi Store</a></li>',
    '          <li><a href="/blog/">Blog &amp; Guides</a></li>',
    '          <li><a href="/best-dj-wholesaler-delhi/">DJ Wholesaler Delhi</a></li>',
    '          <li><a href="/best-dj-wholesaler-india/">DJ Wholesaler India</a></li>',
    '          <li><a href="/dj-shop-delhi/">DJ Shop Delhi</a></li>',
    '          <li><a href="/dj-shop-near-me/">DJ Shop Near Me</a></li>',
    '        </ul>',
    '      </div>',
    '    </div>',
    '    <div class="ft2-col">',
    '      <div class="ft2-heading">Contact Us</div>',
    '      <ul class="ft2-contact-list">',
    '        <li><div class="ft2-ci"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.35 1.02-.21 1.12.46 2.33.71 3.58.71.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.99c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.21 1.02L6.6 10.8z"/></svg></div><div><div class="ft2-cl">Phone</div><a href="tel:+919315820632">+91 9315820632</a></div></li>',
    '        <li><div class="ft2-ci ft2-ci-wa"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L.057 23.885a.5.5 0 00.611.632l6.218-1.63A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.42l-.37-.22-3.83 1.004.98-3.72-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></div><div><div class="ft2-cl">WhatsApp</div><a href="https://wa.me/919315820632" target="_blank">Chat with us</a></div></li>',
    '        <li><div class="ft2-ci"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div><div><div class="ft2-cl">Email</div><a href="mailto:info@punishkatrading.com">info@punishkatrading.com</a></div></li>',
    '        <li><div class="ft2-ci"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div><div><div class="ft2-cl">Address</div><span>A1-41, Rohini Sector 17,<br>New Delhi &ndash; 110089</span></div></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '  <div class="ft2-bottom">',
    '    <div class="ft2-social">',
    '      <a href="https://wa.me/919315820632" target="_blank" class="ft2-soc ft2-soc-wa" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L.057 23.885a.5.5 0 00.611.632l6.218-1.63A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.42l-.37-.22-3.83 1.004.98-3.72-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>',
    '      <a href="https://facebook.com/punishkatrading" target="_blank" class="ft2-soc ft2-soc-fb" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>',
    '      <a href="https://instagram.com/punishkatrading" target="_blank" class="ft2-soc ft2-soc-ig" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>',
    '      <a href="https://youtube.com/@punishkatrading" target="_blank" class="ft2-soc ft2-soc-yt" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>',
    '    </div>',
    '    <div class="ft2-copy">&copy; 2018 Electronic Punishka Trading &mdash; All Rights Reserved</div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  /* ── 5. Sticky Bar HTML ── */
  var STICKY_HTML = [
    '<nav class="pt-sticky" id="pt-sticky">',
    '  <a href="/" class="pt-sb" aria-label="Home">',
    '    <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>Home',
    '  </a>',
    '  <a href="/#products" class="pt-sb" aria-label="Products">',
    '    <svg viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>Products',
    '  </a>',
    '  <a href="tel:+919315820632" class="pt-sb pt-sb-call" aria-label="Call Now">',
    '    <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.35 1.02-.21 1.12.46 2.33.71 3.58.71.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.99c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.21 1.02L6.6 10.8z"/></svg>Call Now',
    '  </a>',
    '  <a href="https://wa.me/919315820632" target="_blank" class="pt-sb" aria-label="WhatsApp">',
    '    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L.057 23.885a.5.5 0 00.611.632l6.218-1.63A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.42l-.37-.22-3.83 1.004.98-3.72-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>WhatsApp',
    '  </a>',
    '  <a href="/#contact" class="pt-sb" aria-label="Contact">',
    '    <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>Contact',
    '  </a>',
    '</nav>'
  ].join('\n');

  /* ── 6. Inject into DOM ── */
  function inject() {
    /* Header */
    var hdrSlot = document.getElementById('pt-header');
    if (hdrSlot) {
      hdrSlot.outerHTML = HEADER_HTML;
    } else if (!document.getElementById('pt-hdr')) {
      document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
    }

    /* Footer */
    var ftSlot = document.getElementById('pt-footer');
    if (ftSlot) {
      ftSlot.outerHTML = FOOTER_HTML;
    } else if (!document.getElementById('pt-footer-el')) {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }

    /* Sticky bar */
    if (!document.getElementById('pt-sticky')) {
      document.body.insertAdjacentHTML('beforeend', STICKY_HTML);
    }

    /* Wrap comparison tables for scroll */
    document.querySelectorAll('.specs-table').forEach(function (tbl) {
      if (!tbl.parentElement.classList.contains('table-scroll')) {
        var wrap = document.createElement('div');
        wrap.className = 'table-scroll';
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
      }
    });

    /* Highlight active nav link */
    var path = window.location.pathname;
    document.querySelectorAll('.pt-nav-a').forEach(function (a) {
      if (a.getAttribute('href') === path || (path.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
        a.classList.add('active');
      }
    });

    /* Blog swap in sticky bar for static pages */
    var BLOG_SVG = '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>';
    var sbLinks = document.querySelectorAll('.pt-sticky .pt-sb:not(.pt-sb-call)');
    // On blog page: show normal nav (no swap needed)
    if (!path.startsWith('/blog/')) {
      // Find last non-call button and swap with Blog
      var last = sbLinks[sbLinks.length - 1];
      if (last) {
        last.innerHTML = BLOG_SVG + 'Blog';
        last.setAttribute('href', '/blog/');
      }
    } else {
      // On blog page: highlight Blog button
      if (sbLinks[sbLinks.length - 1]) {
        sbLinks[sbLinks.length - 1].classList.add('active');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  /* ══════════════════════════════════════════════════════════════════
     7. AI CHATBOT WIDGET — Punishka Trading Assistant (DISABLED)
     ══════════════════════════════════════════════════════════════════ */
  function initChatbot() {
    return; // Disabled — remove this line to re-enable
    if (document.getElementById('pt-chatbot-wrap')) return; // already injected

    /* ── CSS ── */
    var style = document.createElement('style');
    style.textContent = [
      '#pt-chatbot-wrap{position:fixed;bottom:72px;right:16px;z-index:9999;font-family:"DM Sans",sans-serif}',
      '@media(min-width:768px){#pt-chatbot-wrap{bottom:24px}}',

      /* Toggle button */
      '#pt-chat-btn{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#ff6b00,#ff9500);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255,107,0,.45);transition:transform .2s;position:relative}',
      '#pt-chat-btn:hover{transform:scale(1.08)}',
      '#pt-chat-btn svg{width:26px;height:26px;fill:#fff}',
      '#pt-chat-badge{position:absolute;top:-3px;right:-3px;background:#e53935;color:#fff;font-size:10px;font-weight:700;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #fff}',

      /* Chat window */
      '#pt-chat-win{position:absolute;bottom:68px;right:0;width:320px;max-height:480px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);display:none;flex-direction:column;overflow:hidden}',
      '@media(max-width:360px){#pt-chat-win{width:290px}}',
      '#pt-chat-win.open{display:flex}',

      /* Header */
      '#pt-chat-hdr{background:linear-gradient(135deg,#ff6b00,#ff9500);padding:14px 16px;display:flex;align-items:center;gap:10px}',
      '#pt-chat-hdr-av{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0}',
      '#pt-chat-hdr-av svg{width:20px;height:20px;fill:#fff}',
      '#pt-chat-hdr-info{flex:1}',
      '#pt-chat-hdr-name{color:#fff;font-weight:700;font-size:14px;line-height:1.2}',
      '#pt-chat-hdr-status{color:rgba(255,255,255,.85);font-size:11px}',
      '#pt-chat-close{background:none;border:none;cursor:pointer;color:#fff;opacity:.8;padding:4px;display:flex;align-items:center;justify-content:center}',
      '#pt-chat-close:hover{opacity:1}',
      '#pt-chat-close svg{width:18px;height:18px;fill:currentColor}',

      /* Messages */
      '#pt-chat-msgs{flex:1;overflow-y:auto;padding:14px 12px;display:flex;flex-direction:column;gap:10px;background:#f8f8f8}',
      '.pt-msg{max-width:82%;font-size:13px;line-height:1.5;padding:10px 12px;border-radius:12px;word-break:break-word}',
      '.pt-msg-bot{background:#fff;color:#222;border-bottom-left-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.08);align-self:flex-start}',
      '.pt-msg-user{background:linear-gradient(135deg,#ff6b00,#ff9500);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}',
      '.pt-msg a{color:#ff6b00;text-decoration:underline}',
      '.pt-msg-bot a{color:#ff6b00}',
      '.pt-msg-user a{color:#fff}',

      /* Quick replies */
      '#pt-chat-quick{padding:8px 10px;display:flex;flex-wrap:wrap;gap:6px;background:#f8f8f8;border-top:1px solid #efefef}',
      '.pt-qr{background:#fff;border:1.5px solid #ff6b00;color:#ff6b00;border-radius:20px;padding:5px 11px;font-size:11.5px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .15s}',
      '.pt-qr:hover{background:#ff6b00;color:#fff}',

      /* Input */
      '#pt-chat-input-row{display:flex;gap:8px;padding:10px 12px;border-top:1px solid #efefef;background:#fff}',
      '#pt-chat-inp{flex:1;border:1.5px solid #e0e0e0;border-radius:20px;padding:8px 14px;font-size:13px;outline:none;font-family:inherit}',
      '#pt-chat-inp:focus{border-color:#ff6b00}',
      '#pt-chat-send{width:36px;height:36px;border-radius:50%;background:#ff6b00;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}',
      '#pt-chat-send:hover{background:#e55a00}',
      '#pt-chat-send svg{width:16px;height:16px;fill:#fff}',

      /* Typing indicator */
      '.pt-typing{display:flex;gap:4px;align-items:center;padding:10px 12px;background:#fff;border-radius:12px;border-bottom-left-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.08);align-self:flex-start;width:52px}',
      '.pt-dot{width:7px;height:7px;background:#ccc;border-radius:50%;animation:ptBounce 1.2s infinite}',
      '.pt-dot:nth-child(2){animation-delay:.2s}',
      '.pt-dot:nth-child(3){animation-delay:.4s}',
      '@keyframes ptBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}'
    ].join('');
    document.head.appendChild(style);

    /* ── Knowledge Base ── */
    var KB = [
      {
        keys: ['namaste','namaskar','hello','hi','helo','hii','hey','salam','hy','hlo','hanji','haan','kya hal','kaise ho'],
        reply: 'Namaste! 🙏 Main Punishka Trading ka AI Assistant hoon. Aap kya jaanna chahte hain?\n\n✅ Products & Prices\n✅ Delivery & Shipping\n✅ Store Location\n✅ Bulk / Wholesale Orders'
      },
      {
        keys: ['amplifier','amp','ampli','class h','pu8000','pu7800','3u8800','dj 1600','dj1600','power amp'],
        reply: '🎚️ <b>DJ Amplifiers</b><br>Hamare paas Class-H professional amplifiers hain:<br>• PU8000 — 4-ch, 8000W<br>• PU7800 — 4-ch, 7800W<br>• 3U-8800 — Heavy Duty<br>• DJ-1600 — Made in India<br><br>Price range: ₹15,000 – ₹55,000+<br><a href="/category/amplifiers/">View All Amplifiers →</a>'
      },
      {
        keys: ['mixer','mixing','mg24','mg p32','32 channel','24 channel','dsp mixer','digital mixer','analog mixer'],
        reply: '🎛️ <b>DJ Mixers</b><br>• MG-P32X — 32-ch Analog<br>• MG24-14FX — 24-ch with effects<br>• 16-ch DSP Digital Mixer<br><br>Sabhi mixers professional grade hain with EQ & effects.<br><br><a href="/category/mixers/">View All Mixers →</a>'
      },
      {
        keys: ['mic','microphone','wireless','uhf','kmc8','urx','vm860','u6600','cordless','condenser'],
        reply: '🎤 <b>Wireless Microphones</b><br>• KMC8 — Dual UHF<br>• URX9900 — Dual wireless<br>• VM860 — Dual UHF professional<br>• U6600 — 4-mic system<br><br>Sab UHF range, long battery life, interference-free.<br><br><a href="/category/microphones/">View All Mics →</a>'
      },
      {
        keys: ['speaker','pa system','pa speaker','line array','passive','active speaker','subwoofer','sub','woofer'],
        reply: '🔊 <b>PA Systems & Speakers</b><br>Hamare paas passive & active PA speakers hain — weddings, events, DJ shows sab ke liye suitable.<br><br><a href="/category/pa-systems/">View PA Systems →</a>'
      },
      {
        keys: ['network plate','crossover','passive crossover','400w','d-750','d750','frequency crossover'],
        reply: '⚡ <b>Network Plates / Crossovers</b><br>• Crossover Network Plate 400W<br>• D-750 HF Network Plate Deluxe<br><br>Professional frequency dividers for clean audio separation.<br><br><a href="/product/crossover-network-plate-400w/">View Network Plates →</a>'
      },
      {
        keys: ['price','kitna','cost','rate','kitne ka','budget','quote','dam','daam','mehnga','sasta','cheap','costly'],
        reply: '💰 <b>Price / Rate</b><br>Hamare products ki range hai:<br>• Amplifiers: ₹15,000 – ₹55,000<br>• Mixers: ₹18,000 – ₹75,000<br>• Wireless Mics: ₹5,000 – ₹25,000<br>• PA Systems: ₹8,000 – ₹1,20,000<br><br>Exact quote ke liye WhatsApp karo — <a href="https://wa.me/919315820632">+91 93158 20632</a>'
      },
      {
        keys: ['delivery','ship','shipping','courier','kab milega','kitne din','fast','dispatch','order karna'],
        reply: '🚚 <b>Delivery</b><br>• Delhi NCR: Same day / Next day<br>• Pan India: 3–7 business days<br>• Trusted couriers: Delhivery, BlueDart, DTDC<br><br>GST invoice ke saath delivery hoti hai. Cash on Delivery bhi available (Delhi only).<br><br><a href="/shipping.html">Full Shipping Policy →</a>'
      },
      {
        keys: ['location','address','store','shop','kaha','kahaan','rohini','delhi','visit','aa sakta','aana','showroom','office'],
        reply: '📍 <b>Store Location</b><br>A1-41, Rohini Sector 17<br>New Delhi – 110089<br><br>🕐 Timing: Mon–Sat, 10 AM – 7 PM<br>📞 <a href="tel:+919315820632">+91 93158 20632</a><br><br><a href="https://maps.google.com/?q=Punishka+Trading+Rohini+Delhi" target="_blank">Open in Google Maps →</a>'
      },
      {
        keys: ['wholesale','bulk','reseller','dealer','distributor','quantity','lot','stock','bulk order','trade'],
        reply: '📦 <b>Wholesale / Bulk Orders</b><br>Haan! Hum wholesale dealers hain. Bulk order pe special discount milta hai.<br><br>WhatsApp pe requirements bhejein:<br><a href="https://wa.me/919315820632?text=Bulk%20order%20inquiry%20-%20">Chat on WhatsApp →</a>'
      },
      {
        keys: ['warranty','guarantee','repair','service','broken','kharab','return','replacement','exchange'],
        reply: '🛡️ <b>Warranty & Service</b><br>• Most products: 1 Year manufacturer warranty<br>• Repair & service available at store<br>• Return within 7 days if defective<br><br>Details ke liye: <a href="/return.html">Return Policy</a> | <a href="/shipping.html">Shipping Policy</a>'
      },
      {
        keys: ['payment','pay','upi','gpay','phonepe','paytm','card','cash','emi','neft','rtgs','bank transfer','online payment'],
        reply: '💳 <b>Payment Options</b><br>✅ UPI (GPay, PhonePe, Paytm)<br>✅ Net Banking / NEFT / RTGS<br>✅ Debit / Credit Card<br>✅ Cash on Delivery (Delhi NCR only)<br>✅ Bank Transfer (for bulk orders)<br><br>GST invoice provided on all orders.'
      },
      {
        keys: ['gst','invoice','bill','gst invoice','b2b','business purchase','company','firm'],
        reply: '🧾 <b>GST & Invoice</b><br>Hum GST registered business hain.<br>GSTIN: 07DVJPP6642A1ZJ<br><br>Sabhi orders pe proper GST invoice milti hai. B2B orders welcome hain!'
      },
      {
        keys: ['contact','call','phone','whatsapp','number','helpline','support','help','baat karna','connect'],
        reply: '📞 <b>Contact Us</b><br>• Call: <a href="tel:+919315820632">+91 93158 20632</a><br>• WhatsApp: <a href="https://wa.me/919315820632">Chat Now</a><br>• Email: <a href="mailto:info@punishkatrading.com">info@punishkatrading.com</a><br><br>🕐 Mon–Sat, 10 AM – 7 PM'
      },
      {
        keys: ['wedding','shaadi','event','function','party','birthday','conference','stage','sound system'],
        reply: '🎊 <b>Event Sound Setup</b><br>Wedding / Events ke liye complete packages available hain:<br>• Amplifier + Mixer + Mics + Speakers<br>• Budget ke hisaab se customize kar sakte hain<br><br>WhatsApp pe event details bhejein: <a href="https://wa.me/919315820632?text=Event%20sound%20system%20inquiry">Chat Now →</a>'
      },
      {
        keys: ['thank','thanks','shukriya','dhanyawad','bye','goodbye','ok thanks','theek','thik'],
        reply: 'Shukriya! 🙏 Koi bhi sawaal ho toh dobara poochein. Punishka Trading mein aapka swagat hai! 😊'
      }
    ];

    /* ── Quick Replies ── */
    var QUICK_REPLIES = [
      { label: '🎚️ Amplifiers', msg: 'amplifier' },
      { label: '🎛️ Mixers', msg: 'mixer' },
      { label: '🎤 Microphones', msg: 'mic' },
      { label: '💰 Price List', msg: 'price' },
      { label: '🚚 Delivery', msg: 'delivery' },
      { label: '📍 Location', msg: 'location' },
      { label: '📦 Wholesale', msg: 'wholesale' },
      { label: '📞 Contact', msg: 'contact' }
    ];

    /* ── Build HTML ── */
    var wrap = document.createElement('div');
    wrap.id = 'pt-chatbot-wrap';
    wrap.innerHTML = [
      '<button id="pt-chat-btn" aria-label="Chat with us">',
      '  <span id="pt-chat-badge">1</span>',
      '  <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>',
      '</button>',
      '<div id="pt-chat-win" role="dialog" aria-label="Chat assistant">',
      '  <div id="pt-chat-hdr">',
      '    <div id="pt-chat-hdr-av">',
      '      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>',
      '    </div>',
      '    <div id="pt-chat-hdr-info">',
      '      <div id="pt-chat-hdr-name">Punishka AI Assistant</div>',
      '      <div id="pt-chat-hdr-status">● Online — Ask me anything!</div>',
      '    </div>',
      '    <button id="pt-chat-close" aria-label="Close chat">',
      '      <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
      '    </button>',
      '  </div>',
      '  <div id="pt-chat-msgs"></div>',
      '  <div id="pt-chat-quick">',
      QUICK_REPLIES.map(function(q){ return '<button class="pt-qr" data-msg="'+q.msg+'">'+q.label+'</button>'; }).join(''),
      '  </div>',
      '  <div id="pt-chat-input-row">',
      '    <input id="pt-chat-inp" type="text" placeholder="Type your question..." autocomplete="off" maxlength="200"/>',
      '    <button id="pt-chat-send" aria-label="Send">',
      '      <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>',
      '    </button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(wrap);

    /* ── State ── */
    var msgs = document.getElementById('pt-chat-msgs');
    var inp  = document.getElementById('pt-chat-inp');
    var win  = document.getElementById('pt-chat-win');
    var btn  = document.getElementById('pt-chat-btn');
    var badge = document.getElementById('pt-chat-badge');
    var isOpen = false;

    /* ── Helpers ── */
    function addMsg(text, isUser) {
      var div = document.createElement('div');
      div.className = 'pt-msg ' + (isUser ? 'pt-msg-user' : 'pt-msg-bot');
      div.innerHTML = isUser ? escHtml(text) : text;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      return div;
    }

    function escHtml(t) {
      return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function showTyping(cb) {
      var t = document.createElement('div');
      t.className = 'pt-typing';
      t.innerHTML = '<div class="pt-dot"></div><div class="pt-dot"></div><div class="pt-dot"></div>';
      msgs.appendChild(t);
      msgs.scrollTop = msgs.scrollHeight;
      setTimeout(function(){
        t.remove();
        cb();
        msgs.scrollTop = msgs.scrollHeight;
      }, 700 + Math.random() * 400);
    }

    function getBotReply(text) {
      var t = text.toLowerCase().trim();
      for (var i = 0; i < KB.length; i++) {
        for (var j = 0; j < KB[i].keys.length; j++) {
          if (t.indexOf(KB[i].keys[j]) !== -1) {
            return KB[i].reply;
          }
        }
      }
      // Fallback
      return 'Yeh mujhe pata nahi, par aap directly WhatsApp kar sakte hain — seedha jawab milega! 😊<br><br><a href="https://wa.me/919315820632?text='+encodeURIComponent(text)+'">WhatsApp Now →</a>';
    }

    function handleSend(text) {
      text = text.trim();
      if (!text) return;
      inp.value = '';
      addMsg(text, true);
      showTyping(function(){
        addMsg(getBotReply(text), false);
      });
    }

    /* ── Toggle chat window ── */
    btn.addEventListener('click', function(){
      isOpen = !isOpen;
      win.classList.toggle('open', isOpen);
      if (isOpen) {
        badge.style.display = 'none';
        inp.focus();
        if (msgs.children.length === 0) {
          // Welcome message
          showTyping(function(){
            addMsg('Namaste! 🙏 Main Punishka Trading ka AI Assistant hoon. Amplifiers, mixers, mics, PA systems — kuch bhi poochein!<br><br>Neeche buttons se quick reply kar sakte hain ya apna sawaal type karein.', false);
          });
        }
      }
    });

    document.getElementById('pt-chat-close').addEventListener('click', function(e){
      e.stopPropagation();
      isOpen = false;
      win.classList.remove('open');
    });

    /* ── Send on button / enter ── */
    document.getElementById('pt-chat-send').addEventListener('click', function(){
      handleSend(inp.value);
    });
    inp.addEventListener('keydown', function(e){
      if (e.key === 'Enter') handleSend(inp.value);
    });

    /* ── Quick replies ── */
    document.getElementById('pt-chat-quick').addEventListener('click', function(e){
      var qr = e.target.closest('.pt-qr');
      if (!qr) return;
      handleSend(qr.getAttribute('data-msg'));
    });

    /* ── Show badge after 3s if not opened ── */
    setTimeout(function(){
      if (!isOpen) badge.style.display = 'flex';
    }, 3000);
  }

  // Init chatbot after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }

})();
