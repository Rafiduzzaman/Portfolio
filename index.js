const navbar = document.querySelector('.navbar');
const hamburgerMenuBtn = document.querySelector('.hamburger_menu');
const mobileMenu = document.querySelector('.mobile_menu');
const exitBtn = document.querySelector('.exit');

hamburgerMenuBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});

exitBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});
