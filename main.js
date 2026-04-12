/* ═══════════════════════════════════════
   TRATTORIA DA ENNIO — JAVASCRIPT
   ═══════════════════════════════════════ */

'use strict';

/* ───────────────────────────────────────────
   MENU DATA — da menu fisico reale
─────────────────────────────────────────── */

// ANTIPASTI
const menuAntipasti = [
  { name: 'Salumi misti con torta fritta',  desc: 'Selezione di salumi nostrani con pasta fritta croccante',              price: '€ 9,00',  badge: '★ Top' },
  { name: 'Solo Culatello con torta fritta', desc: 'Culatello selezionato servito con torta fritta',                      price: '€ 9,00'  },
  { name: 'Pesce in carpione',              desc: 'Con salsa piccante al prezzemolo e aglio — marinatura tradizionale',   price: '€ 9,00'  },
];

// PRIMI
const menuPrimi = [
  { name: 'Pisarei e fasò',               desc: 'Gnocchetti di pane e farina con sugo di fagioli — ricetta storica',   price: '€ 10,00' },
  { name: 'Tortelli di ricotta ed erbette', desc: 'Pasta fresca ripiena di ricotta e erbette, burro e salvia',            price: '€ 10,00' },
  { name: 'Tortelli di zucca',              desc: 'Pasta fresca ripiena di zucca, burro e salvia',                        price: '€ 10,00' },
  { name: 'Tortelli della casa',            desc: 'Pasta fresca della casa, burro e salvia',                              price: '€ 10,00' },
  { name: 'Anolini in brodo',              desc: 'Pasta ripiena di stracotto nel classico brodo di terza piacentino',    price: '€ 11,00', badge: 'Classico' },
];

// SECONDI
const menuSecondi = [
  { name: 'Fritto d’acqua dolce',          desc: 'Filetto di pesce gatto, anguilla e rane',                           price: '€ 16,00', badge: '★ Specialità' },
  { name: 'Solo Anguilla',                  desc: 'Anguilla di fiume fritta',                                             price: '€ 18,00' },
  { name: 'Solo Rane',                      desc: 'Rane fritte in pastella',                                              price: '€ 18,00' },
  { name: 'Alborelle fritte',               desc: 'Piccoli pesci di fiume fritti',                                        price: '€ 15,00' },
  { name: 'Fritto misto di mare',           desc: 'Selezione di pesce di mare fritto',                                    price: '€ 16,00' },
  { name: 'Solo Gamberi',                   desc: 'Gamberi fritti',                                                       price: '€ 17,00' },
  { name: 'Costata alla Piastra',           desc: 'Costata di manzo cotta alla piastra',                                  price: '€ 18,00' },
];

// DOLCI
const menuDolci = [
  { name: 'Crostata di marmellata',  desc: 'Frolla artigianale con marmellata di frutta',      price: '€ 5,00' },
  { name: 'Torta al cioccolato',     desc: 'Torta morbida al cioccolato fondente',              price: '€ 5,00' },
  { name: 'Panna cotta',             desc: 'Panna cotta classica',                              price: '€ 5,00' },
  { name: 'Sorbetto al limone',      desc: 'Sorbetto artigianale al limone',                    price: '€ 5,00' },
  { name: 'Semifreddi',              desc: 'Selezione di semifreddi',                           price: '€ 5,00' },
];

// FORMAGGI
const menuFormaggi = [
  { name: 'Grana Padano',    desc: 'In scaglie',  price: '€ 5,00' },
  { name: 'Gorgonzola Dolce', desc: 'Cremoso',    price: '€ 5,00' },
];

// CONTORNI
const menuContorni = [
  { name: 'Insalata verde o mista', price: '€ 4,00' },
  { name: 'Pomodori',               price: '€ 4,00' },
  { name: 'Patatine fritte',        price: '€ 4,00' },
  { name: 'Cipolline in aceto balsamico', price: '€ 5,00' },
  { name: 'Peperoni in agrodolce',  price: '€ 5,00' },
  { name: 'Giardiniera',            price: '€ 5,00' },
];

/* ───────────────────────────────────────────
   HELPERS
─────────────────────────────────────────── */
function badge(text) {
  return text
    ? `<span style="font-size:0.6rem;padding:2px 8px;background:rgba(127,29,29,0.1);color:#7f1d1d;border-radius:999px;border:1px solid rgba(127,29,29,0.25);white-space:nowrap;">${text}</span>`
    : '';
}

function renderRows(items, container) {
  if (!container) return;
  let html = '';
  items.forEach(item => {
    html += `
      <div class="menu-item-row">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="menu-item-name">${item.name}</span>
            ${badge(item.badge)}
            ${item.note ? `<span style="font-size:0.6rem;padding:2px 8px;background:rgba(180,83,9,0.1);color:#b45309;border-radius:999px;border:1px solid rgba(180,83,9,0.25);">${item.note}</span>` : ''}
          </div>
          <span class="menu-item-desc hidden md:block">${item.desc || ''}</span>
        </div>
        ${item.price ? `<span class="menu-item-price shrink-0">${item.price}</span>` : ''}
      </div>`;
  });
  container.innerHTML = html;
}

function renderContorni(container) {
  if (!container) return;
  let html = `<div class="menu-category-header">Contorni</div>`;
  menuContorni.forEach(item => {
    html += `
      <div class="menu-item-row">
        <span class="menu-item-name">${item.name}</span>
        <span class="menu-item-price shrink-0">${item.price}</span>
      </div>`;
  });
  html += `
    <div class="menu-category-header mt-6">Formaggi</div>`;
  menuFormaggi.forEach(item => {
    html += `
      <div class="menu-item-row">
        <div class="flex-1"><span class="menu-item-name">${item.name}</span><span class="menu-item-desc hidden md:block">${item.desc}</span></div>
        <span class="menu-item-price shrink-0">${item.price}</span>
      </div>`;
  });
  container.innerHTML = html;
}

/* ───────────────────────────────────────────
   RENDER MENU
─────────────────────────────────────────── */
function renderMenu() {
  renderRows(menuAntipasti, document.getElementById('menu-antipasti'));
  renderRows(menuPrimi,    document.getElementById('menu-primi'));
  renderRows(menuSecondi,  document.getElementById('menu-secondi'));
  renderRows(menuDolci,    document.getElementById('menu-dolci'));

  const secondiEl = document.getElementById('menu-secondi');
  if (secondiEl) {
    const contorniContainer = document.createElement('div');
    contorniContainer.className = 'mt-10';
    secondiEl.appendChild(contorniContainer);
    renderContorni(contorniContainer);
    
    secondiEl.innerHTML += `<p class="text-xs text-muted text-right mt-4 px-1 italic">* I piatti indicati “su prenotazione” richiedono prenotazione anticipata</p>`;
  }
}

/* ─────────────────────────────────────────
   MENU TABS
───────────────────────────────────────── */
function showTab(name) {
  ['antipasti', 'primi', 'secondi', 'dolci'].forEach(key => {
    const section = document.getElementById(`menu-${key}`);
    const tab     = document.getElementById(`tab-${key}`);
    if (!section || !tab) return;
    if (key === name) {
      section.classList.remove('hidden');
      tab.classList.add('active-tab');
    } else {
      section.classList.add('hidden');
      tab.classList.remove('active-tab');
    }
  });
}
window.showTab = showTab;

/* ─────────────────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─────────────────────────────────────────
   MOBILE MENU TOGGLE
───────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────
   HERO VIDEO — autoplay fallback
───────────────────────────────────────── */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  const tryPlay = () => {
    video.play().catch(() => {});
    document.removeEventListener('touchstart', tryPlay);
    document.removeEventListener('click', tryPlay);
  };

  if (video.paused) {
    document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
    document.addEventListener('click', tryPlay, { once: true });
  }
}

/* ─────────────────────────────────────────
   SCROLL FADE-IN
───────────────────────────────────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-scroll');
  if (!elements.length) return;

  elements.forEach(el => el.classList.add('js-ready'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll('.fade-in-scroll');
        let delay = 0;
        siblings.forEach((el, i) => { if (el === entry.target) delay = i * 80; });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '80px 0px 0px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   BOOKING FORM — WHATSAPP REDIRECT
───────────────────────────────────────── */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  const feedback = document.getElementById('booking-feedback');
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById('data');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const nome = formData.get('nome');
    const telefono = formData.get('telefono');
    const dataStr = formData.get('data');
    const ora = formData.get('ora');
    const persone = formData.get('persone');
    const note = formData.get('note') || 'Nessuna nota';

    if (feedback) {
      feedback.textContent = "Stiamo aprendo WhatsApp per inviare la tua richiesta!";
      feedback.classList.remove('hidden');
      feedback.classList.add('text-bordeaux', 'animate-pulse');
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Apertura WhatsApp...';
      btn.disabled = true;
    }

    const basePhone = "393489237921";
    const message = `Prenotazione Ennio:
- Nome: ${nome}
- Telefono: ${telefono}
- Persone: ${persone}
- Giorno: ${dataStr}
- Orario: ${ora}
- Note: ${note}`;
    
    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${basePhone}?text=${encodedMsg}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      if (feedback) {
        feedback.textContent = "Richiesta preparata su WhatsApp!";
        feedback.classList.remove('animate-pulse');
        feedback.classList.add('text-green-600');
      }
      if (btn) {
        btn.textContent = 'Prenota via WhatsApp';
        btn.disabled = false;
      }
    }, 800);
  });
}

/* ─────────────────────────────────────────
   SMOOTH SCROLL & ACTIVE NAV
───────────────────────────────────────── */
function initNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('text-gold');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('text-gold');
          }
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

/* ─────────────────────────────────────────
   INIT ALL
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initNavbar();
  initMobileMenu();
  initHeroVideo();
  initScrollAnimations();
  initBookingForm();
  initNavigation();
  console.log('%c🍷 Trattoria Da Ennio — Benvenuto!', 'color:#800020; font-size:14px; font-weight:bold;');
});
