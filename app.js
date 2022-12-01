const cursorPointed = document.querySelector(".cursor-main-small");
const cursorRounded = document.querySelector(".cursor-main-big");
const themeDiv = document.querySelector(".theme");
const themeIcon = document.querySelector(".theme-icon");
const overlay = document.querySelector(".overlay");

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
