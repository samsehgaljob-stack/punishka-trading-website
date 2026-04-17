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
})();
