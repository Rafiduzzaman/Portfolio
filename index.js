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
    name: 'Profesional Art Printing Data 6',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: 'images/exc.png',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data 5',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: 'images/sada1.png',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data 4',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: 'images/sada2.png',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art Printing Data 3',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: 'images/sada.png',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art 2',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: 'images/sada1.png',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
  {
    name: 'Profesional Art 1',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: 'images/sada2.png',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    linktoliveversion: '',
    linktosource: '',
  },
];

const popupWindow = document.querySelector('.popup_window');
popupWindow.classList.add('hide');
popupWindow.innerHTML = `
<div class="parent_pop">
    <div class="top">
      <h1 class="popup_window_header">Multi Post Stories</h1>
      <button class="popup_window_close">X</button>
    </div>
    
    <div class="options">
    <ul class="popup_window_apps">
      <li class="popup_window_item">HTML</li>
      <li class="popup_window_item">BootStrap</li>
      <li class="popup_window_item">Ruby on Rails</li>
    </ul>
    </div>
    <div class="popup_window_left">
    <div class="popup_window_right">
    <img src="images/Snapshoot Portfolio.jpg" alt="" class="popup-img">
    </div>
    <div class="middle">
    <p class="popup_window_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
    <div class="pop_upbuttons">
      <div class="popup_button">
        <button class="popup_window_btn">See Live <img src="images/Icon.png" alt="icon"></button>
      </div>
      <div class="popup_button">
        <button class="popup_window_btn">See Source<img src="images/Frame23.png" alt="icon"></button>
      </div>
    </div>
    </div>
  </div>
  </div>
`;

const populatePopupData = (project) => {
  popupWindow.querySelector('.popup_window_header').innerHTML = project.name;
  popupWindow.querySelector('.popup_window_para').innerHTML = project.description;
  popupWindow.querySelector('.popup-img').src = project.featuredImage;
};

// select projects list tag from html file
const projectsListTag = document.querySelector('.projects-list');
projects.forEach((project, index) => {
  // create single card html element
  const projectCard = document.createElement('section');
  projectCard.classList.add('ex1');
  if (index === 0) {
    projectCard.innerHTML = `
    <div class="project_card_container">
    <h2 class="header-2">${project.name}</h2>
    <p class="para-2">${project.description}</p>
    <ul class="apps-1">
      <li class="i">${project.technologies[0]}</li>
      <li class="i">${project.technologies[1]}</li>
      <li class="i">${project.technologies[2]}</li>
    </ul>
    </div>
      <button class="btn-5">
      See Project
    </button>
  `;
    projectCard.querySelector('.btn-5').classList.add('card1');
  } else {
    projectCard.innerHTML = `
    <div >
    <h2 class="header-2">${project.name}</h2>
    <p class="para-2">${project.description}</p>
    <ul class="apps-1">
      <li class="i">${project.technologies[0]}</li>
      <li class="i">${project.technologies[1]}</li>
      <li class="i">${project.technologies[2]}</li>
    </ul>
    </div>
      <button class="btn-5">
      See Project
    </button>
  `;
  }
  projectCard.style.backgroundImage = `url(${project.featuredImage})`;

  projectsListTag.appendChild(projectCard);
});

const popupExitBtn = document.querySelector('.popup_window_close');
const projectCards = document.querySelectorAll('.ex1');

const togglePopupWindow = (e) => {
  const projectCard = e.target.closest('.ex1');
  if (projectCard) {
    const projectName = projectCard.querySelector('.header-2').textContent;
    const project = projects.find((proj) => proj.name === projectName);
    populatePopupData(project);
    popupWindow.classList.toggle('hide');
  }
};

popupExitBtn.addEventListener('click', () => {
  popupWindow.classList.toggle('hide');
});

projectCards.forEach((card) => {
  card.querySelector('.btn-5').addEventListener('click', togglePopupWindow);
});

document.querySelectorAll('.btn-5.desktop').forEach((btn) => {
  btn.addEventListener('click', () => {
    togglePopupWindow();
  });
});
