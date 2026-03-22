/* ============================================================
   ART PORTFOLIO — script.js
   Shared JavaScript: lightbox + navigation helpers
   ============================================================ */

// ── Mark active nav link ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});

// ── Lightbox ────────────────────────────────────────────────
const overlay = document.getElementById('lightbox');
const lbImg   = document.getElementById('lb-img');
const lbTag   = document.getElementById('lb-tag');
const lbTitle = document.getElementById('lb-title');
const lbMeta  = document.getElementById('lb-meta');
const lbDesc  = document.getElementById('lb-desc');
const lbPrice = document.getElementById('lb-price');
const lbEmail = document.getElementById('lb-email');

/**
 * Open the lightbox with the given artwork data.
 * Called from onclick attributes on each card.
 *
 * @param {string} src       - Path to the (full-size) image
 * @param {string} title     - Artwork title
 * @param {string} meta      - e.g. "Oil on canvas · 2024 · 60×80 cm"
 * @param {string} desc      - Short description
 * @param {string} category  - e.g. "Painting" or "Drawing"
 * @param {string} [price]   - Price string or empty
 * @param {string} [email]   - Contact email for purchases
 */
function openLightbox(src, title, meta, desc, category, price = '', email = '') {
  if (!overlay) return;

  lbImg.src        = src;
  lbImg.alt        = title;
  lbTag.textContent   = category;
  lbTitle.textContent = title;
  lbMeta.textContent  = meta;
  lbDesc.textContent  = desc;

  if (price) {
    lbPrice.textContent = price;
    lbPrice.style.display = 'block';
  } else {
    lbPrice.style.display = 'none';
  }

  if (email) {
    lbEmail.href = `mailto:${email}?subject=Inquiry about "${title}"`;
    lbEmail.style.display = 'inline-block';
  } else {
    lbEmail.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Clear src after transition to free memory
  setTimeout(() => { lbImg.src = ''; }, 300);
}

// Close on overlay click (but not on inner click)
if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Archive filter ───────────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.card[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initFilters);
