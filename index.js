const navbar = document.querySelector('.navbar');
const hamburgerMenuBtn = document.querySelector('.hamburger_menu');
const mobileMenu = document.querySelector('.mobile_menu');
const exitBtn = document.querySelector('.exit');
const navLink = document.querySelectorAll('.nav_link');

hamburgerMenuBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});

exitBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    mobileMenu.classList.add('hidden');
  });
});