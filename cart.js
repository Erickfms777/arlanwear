// ── ARLANWEAR CART SYSTEM ──────────────────────────────────────────
const Cart = {
  items: JSON.parse(localStorage.getItem('arlanwear_cart') || '[]'),

  save() {
    localStorage.setItem('arlanwear_cart', JSON.stringify(this.items));
  },

  add(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this.save();
    this.render();
    this.updateBadge();
    showToast(`${product.name} agregado al carrito`);
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    this.render();
    this.updateBadge();
  },

  changeQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.remove(id);
    else { this.save(); this.render(); this.updateBadge(); }
  },

  total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const badge = document.querySelector('.cart-count');
    if (!badge) return;
    const count = this.count();
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  },

  render() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛍</div>
          <p>Tu carrito está vacío</p>
        </div>`;
    } else {
      container.innerHTML = this.items.map(item => `
        <div class="cart-item" id="cart-item-${item.id}">
          <img class="cart-item-img" src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="Cart.changeQty('${item.id}', -1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="Cart.changeQty('${item.id}', 1)">+</button>
              <button class="cart-item-remove" onclick="Cart.remove('${item.id}')" title="Eliminar">✕</button>
            </div>
          </div>
        </div>`).join('');
    }

    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `$${this.total().toFixed(2)}`;
  }
};

// ── CART SIDEBAR TOGGLE ────────────────────────────────────────────
function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── TOAST ─────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── HEADER SCROLL ─────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 50);
});

// ── REVEAL ON SCROLL ──────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  Cart.render();
  Cart.updateBadge();
});
