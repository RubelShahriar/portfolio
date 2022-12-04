const cursorPointed = document.querySelector(".cursor-main-small");
const cursorRounded = document.querySelector(".cursor-main-big");
const themeDiv = document.querySelector(".theme");
const themeIcon = document.querySelector(".theme-icon");
const overlay = document.querySelector(".overlay");

function toggleTheme() {
  document.querySelector("body").classList.toggle("dark-theme");
}

// modal selection
const closeModal = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");
const carModal = document.querySelector(".modal-carshop");
const galleryModal = document.querySelector(".modal-gallery");
const dashboardModal = document.querySelector(".modal-dashboard");
const youtubeModal = document.querySelector(".modal-youtube");
const gadgetsModal = document.querySelector(".modal-gadgetspro");
const foodModal = document.querySelector(".modal-foodapp");

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
  console.log(e.target);
});

// modal functions
// modal's close btn now its display hidden
// closeModal.addEventListener("click", function () {
//   modalCarshop.classList.add("hidden");
//   modalOverlay.classList.add("hidden");
// });

modalOverlay.addEventListener("click", function () {
  modalOverlay.classList.add("hidden");
  carModal.classList.add("hidden");
  galleryModal.classList.add("hidden");
  dashboardModal.classList.add("hidden");
  youtubeModal.classList.add("hidden");
  gadgetsModal.classList.add("hidden");
  foodModal.classList.add("hidden");
});

function openModal(name) {
  name.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
}
