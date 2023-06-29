// #region
// hamburger menu
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
// #endregion

// #region validate email lowercase
const emailInput = document.querySelector('#email');
const formtag = document.querySelector('.form2');

formtag.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    alert('Email must be lowercase');
  }
});

// #endregion

// #region firstname lastname required change

// #endregion

// projects cards
const projects = [
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: '',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: '',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: '',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: '',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: '',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: '',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
];


const popupWindow = document.querySelector('.popup_window');
popupWindow.classList.add('hide');
popupWindow.innerHTML = `
  <div class="top">
    <h1 class="popup_window_header">Multi Post Stories</h1>
    <button class="popup_window_close">X</button>
    </div>
    <div class="options">
    <ul class="popup_window_apps">
      <li class="popup_window_item">HTML</li>
      <li class="popup_window_item">BootStrap</li>
      <li class="popup_window_item">Ruby</li>
    </ul>
    </div>
    <div class="popup_window_right">
    <img src="images/Snapshoot Portfolio.jpg" alt="">
    </div>
    <div class="middle">
    <p class="popup_window_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
    <div class="pop_upbuttons">
      <div class="popup_button">
        <button class="popup_window_btn">See Live</button>
      </div>
      <div class="popup_button">
        <button class="popup_window_btn">See Source</button>
      </div>
    </div>
  </div>
`
const popupWindowCloseBtn = popupWindow.querySelector('.popup_window_close');
popupWindowCloseBtn.addEventListener('click', ()=>{
  popupWindow.classList.toggle('hide');
});

// select projects list tag from html file
const projectsListTag = document.querySelector('.projects-list');
// const project = { technologies: ['HTML', 'BootStrap', 'Ruby'] };
projects.forEach((project) => {
  // create single card html element
  const projectCard = document.createElement('section');
  projectCard.classList.add('ex1');
  projectCard.innerHTML = `
    <h2 class="header-2">${project.name}</h2>
    <p class="para-2">${project.description}</p>
    <ul class="apps-1">
      <li class="i">${project.technologies[0]}</li>
      <li class="i">${project.technologies[1]}</li>
      <li class="i">${project.technologies[2]}</li>
    </ul>
    <button class="btn-5">
      See Project
    </button>
  `;
  projectCard.querySelector('.btn-5').addEventListener('click', ()=>{
    popupWindow.classList.toggle('hide');
  });
  projectsListTag.appendChild(projectCard);
});

// const projectCardPopup = document.createElement('section');
// projectCardPopup.classList.add('project-card-popup');
// projectCardPopup.classList.add('hidden');
// projectCardPopup.innerHTML = `
//   <h2 class="header-2">${project.name}</h2>
//   <p class="para-2">${project.description}</p>
//   <ul class="apps-1">
//     <li class="i">${project.technologies[0]}</li>
//     <li class="i">${project.technologies[1]}</li>
//     <li class="i">${project.technologies[2]}</li>
//   </ul>
//   <button class="btn-5">
//     See Project
//   </button>
// `;

// projectsListTag.appendChild(projectCardPopup);
