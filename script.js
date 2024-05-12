function myMenuFunction() {
  var menu = document.getElementById("myNavMenu");
  if (menu.className === "nav-menu") {
    menu.className += " active" + " dark";
  } else {
    menu.className = "nav-menu";
  }
}

// =-==========================================

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch"),
  h3title = document.querySelector("h3"),
  btn = document.querySelector(".button"),
  abt = document.querySelector(".about-info"),
  skill = document.querySelector(".skill"),
  project1 = document.querySelector(".project-box:nth-child(1)"),
  project2 = document.querySelector(".project-box:nth-child(2)"),
  project3 = document.querySelector(".project-box:nth-child(3)"),
  contact = document.querySelector(".contact-info"),
  text = document.querySelector("textarea"),
  ipfield = document.querySelector(".input-field"),
  ipsubject = document.querySelector(".input-subject"),
  mail = document.querySelector(".mail"),
  card = document.querySelector(".content"),
  active = document.querySelector(".active"),
  names = document.querySelector(".nav-name");
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  btn.classList.toggle("dark");
  abt.classList.toggle("dark");
  skill.classList.toggle("dark");
  project1.classList.toggle("dark");
  project2.classList.toggle("dark");
  project3.classList.toggle("dark");
  contact.classList.toggle("dark");
  text.classList.toggle("dark");
  ipfield.classList.toggle("dark");
  ipsubject.classList.toggle("dark");
  mail.classList.toggle("dark");
  card.classList.toggle("dark");
  active.classList.toggle("dark");
  names.classList.toggle("dark");
});

// ===============================================

let typeEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured.name", {
  delay: 70,
});
sr.reveal(".text-info", {
  delay: 80,
});
sr.reveal(".text-btn", {
  delay: 80,
});
sr.reveal(".social-icons", {
  delay: 80,
});
sr.reveal(".featured-image", {
  delay: 100,
});

sr.reveal(".project-box", {
  interval: 80,
});
sr.reveal(".top-header", {
  delay: 200,
});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srLeft.reveal(".about-info", {
  delay: 70,
});

srLeft.reveal(".contact-info", {
  delay: 70,
});

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srRight.reveal(".skill", {
  delay: 80,
});

srRight.reveal(".skill-box", {
  delay: 80,
});

// const sections = document.querySelectorAll(".section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }

// window.addEventListener("scroll", scrollActive);

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href='#" + sectionId + "']")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href='#" + sectionId + "']")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
