let header = document.querySelector("header");
let btn = document.querySelector(".toggle");
let menuLink = document.querySelector(".menu-search");

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? header.classList.add("shrink")
    : header.classList.remove("shrink");
});
btn.addEventListener("click", () => {
  menuLink.classList.toggle("active");
});
