const cursorPointed = document.querySelector(".cursor-main-small");
const cursorRounded = document.querySelector(".cursor-main-big");
const themeDiv = document.querySelector(".theme");
const themeIcon = document.querySelector(".theme-icon");
const overlay = document.querySelector(".overlay");

function toggleTheme() {
  document.querySelector("body").classList.toggle("dark-theme");
}

// portfolio modal selection
const closeModal = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");
const redux = document.querySelector(".redux");
const asynchornous = document.querySelector(".asynchornous");
const roadmap = document.querySelector(".roadmap");
const promises = document.querySelector(".promises");
const errorHandling = document.querySelector(".error-handling");

// overlay function
window.addEventListener("load", function () {
  overlay.classList.add("overlay-height");
});

// cursor function
window.addEventListener("mousemove", function (e) {
  cursorPointed.style.top = `${e.clientY}px`;
  cursorPointed.style.left = `${e.clientX}px`;
  cursorPointed.style.opacity = 1;
  cursorPointed.style.transition = "0.15s";
  cursorRounded.style.top = `${e.clientY}px`;
  cursorRounded.style.left = `${e.clientX}px`;
  cursorRounded.style.opacity = 1;
  cursorRounded.style.transition = "0.25s";
});

// toggle theme
themeDiv.addEventListener("click", function (e) {
  if (e.target.className.includes("bx-moon")) {
    e.target.className = "bx bx-sun theme-icon";
  } else if (e.target.className.includes("bx-sun")) {
    e.target.className = "bx bx-moon theme-icon";
  }
});

modalOverlay.addEventListener("click", function () {
  modalOverlay.classList.add("hidden");
  redux.classList.add("hidden");
  asynchornous.classList.add("hidden");
  roadmap.classList.add("hidden");
  promises.classList.add("hidden");
  errorHandling.classList.add("hidden");
});

function openModal(name) {
  name.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
}
