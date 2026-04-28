const CART_KEY = 'booknest_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(bookId) {
  const cart = getCart();
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  const existing = cart.find(item => item.id === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...book, qty: 1 });
  }

  saveCart(cart);
  updateCartCount();
  alert(`"${book.title}" added to cart!`);
}

function removeFromCart(bookId) {
  const cart = getCart().filter(item => item.id !== bookId);
  saveCart(cart);
  displayCart();
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  displayCart();
  updateCartCount();
}

function updateCartCount() {
  const cart  = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const el    = document.getElementById('cart-count');
  if (el) el.textContent = total;
}

function displayCart() {
  const cart      = getCart();
  const container = document.getElementById('cart-items');
  const totalEl   = document.getElementById('cart-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="color:#888; text-align:center; padding:30px;">Your cart is empty. <a href="books.html">Browse books →</a></p>';
    if (totalEl) totalEl.textContent = '0';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span>${item.cover} <strong>${item.title}</strong> × ${item.qty}</span>
      <span class="item-price">₹${item.price * item.qty}</span>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (totalEl) totalEl.textContent = total;
}
