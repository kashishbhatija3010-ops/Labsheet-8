/* Toggle mobile navigation menu */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

/* Navbar shrinks on scroll */
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '10px 50px';
  } else {
    navbar.style.padding = '16px 50px';
  }
});
