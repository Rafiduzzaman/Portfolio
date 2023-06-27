const projects = [
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: "",
    technologies: ["HTML", "BootStrap", "Ruby"],
    linktoliveversion: "",
    linktosource: "",
  },
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: "",
    technologies: ["HTML", "BootStrap", "Ruby"],
    linktoliveversion: "",
    linktosource: "",
  },
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: "",
    technologies: ["HTML", "BootStrap", "Ruby"],
    linktoliveversion: "",
    linktosource: "",
  },
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: "",
    technologies: ["HTML", "BootStrap", "Ruby"],
    linktoliveversion: "",
    linktosource: "",
  },
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: "",
    technologies: ["HTML", "BootStrap", "Ruby"],
    linktoliveversion: "",
    linktosource: "",
  },
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImages: "",
    technologies: ["HTML", "BootStrap", "Ruby"],
    linktoliveversion: "",
    linktosource: "",
  },
];

// hamburger menu
const navbar = document.querySelector(".navbar");
const hamburgerMenuBtn = document.querySelector(".hamburger_menu");
const mobileMenu = document.querySelector(".mobile_menu");
const exitBtn = document.querySelector(".exit");
const navLink = document.querySelectorAll(".nav_link");

hamburgerMenuBtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

exitBtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    mobileMenu.classList.add("hidden");
  });
});

// projects cards

// select projects list tag from html file
const projectsListTag = document.querySelector(".projects-list");

projects.forEach((project) => {
  // create single card html element
  const projectCard = document.createElement("section");
  projectCard.classList.add("ex1");
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
  projectsListTag.appendChild(projectCard);
});

const projectCardPopup = document.createElement("section");
projectCardPopup.classList.add("project-card-popup");
projectCardPopup.classList.add("hidden");
projectCardPopup.innerHTML = `
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

projectsListTag.appendChild(projectCardPopup);
