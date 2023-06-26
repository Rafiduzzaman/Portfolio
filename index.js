const menuButton = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const hamburgerMenuBtn = document.querySelector('.hamburger_menu');
const mobileMenu = document.querySelector('.mobile_menu');

hamburgerMenuBtn.addEventListener('click', function() {
  navbar.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});
