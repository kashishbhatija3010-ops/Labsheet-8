// All books data
const allBooks = [
  { id: 1, title: "The Alchemist",     author: "Paulo Coelho",      genre: "Fiction",   price: 299, cover: "📖" },
  { id: 2, title: "Atomic Habits",     author: "James Clear",       genre: "Self-Help", price: 399, cover: "⚛️" },
  { id: 3, title: "A Brief History",   author: "Stephen Hawking",   genre: "Science",   price: 449, cover: "🌌" },
  { id: 4, title: "Sapiens",           author: "Yuval Noah Harari", genre: "History",   price: 499, cover: "🦴" },
  { id: 5, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki",   genre: "Self-Help", price: 349, cover: "💰" },
  { id: 6, title: "1984",              author: "George Orwell",     genre: "Fiction",   price: 249, cover: "🏙️" },
  { id: 7, title: "Cosmos",            author: "Carl Sagan",        genre: "Science",   price: 399, cover: "🔭" },
  { id: 8, title: "Ikigai",            author: "H. Garcia",         genre: "Self-Help", price: 299, cover: "🌸" },
];

// First 4 shown on home page
const featuredBooks = allBooks.slice(0, 4);

// Render books into a grid
function renderBooks(books, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  if (books.length === 0) {
    grid.innerHTML = '<p style="color:#888;">No books found.</p>';
    return;
  }

  grid.innerHTML = books.map(book => `
    <div class="book-card">
      <div class="cover">${book.cover}</div>
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <span class="genre-badge">${book.genre}</span>
      <p class="price">₹${book.price}</p>
      <button class="btn" onclick="addToCart(${book.id})">Add to Cart</button>
    </div>
  `).join('');
}
