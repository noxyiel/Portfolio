/* ─────────────────────────────────────────────────────────────────────────
   DHRUV AGARWAL PORTFOLIO — script.js
──────────────────────────────────────────────────────────────────────────── */

// ── Theme Toggle ──────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'dark';
if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── Hamburger ─────────────────────────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Terminal typewriter ───────────────────────────────────────────────────
const fields = [
  { id: 't-name',  text: 'Dhruv Agarwal' },
  { id: 't-role',  text: 'Operations Analyst — Finance & Reporting' },
  { id: 't-firm',  text: 'DeltaX' },
  { id: 't-focus', text: 'Valuation · M&A · FP&A · Strategy' },
  { id: 't-stack', text: 'Excel / Power BI / SAP S/4HANA / Bloomberg' },
];

function typeText(el, text, speed = 28) {
  return new Promise(resolve => {
    let i = 0;
    el.textContent = '';
    const timer = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) { clearInterval(timer); resolve(); }
    }, speed);
  });
}

async function runTypewriter() {
  for (let f of fields) {
    const el = document.getElementById(f.id);
    if (el) await typeText(el, f.text, 22);
  }
}

// Start when page loads
window.addEventListener('load', () => {
  setTimeout(runTypewriter, 400);
});

// ── Project Filters ───────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projCards  = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projCards.forEach(card => {
      const tags = card.dataset.tags || '';
      if (filter === 'all' || tags.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Scroll fade-up ────────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.tl-item, .proj-card, .skill-card, .cred-item, .edu-block, .hero-left > *, .terminal-card'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 40);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => observer.observe(el));

// ── Active nav link on scroll ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + entry.target.id) {
          a.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => navObserver.observe(s));
