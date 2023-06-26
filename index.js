const menuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile_menu');

menuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('show');
});
