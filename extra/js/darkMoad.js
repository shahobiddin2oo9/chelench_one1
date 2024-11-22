let darkMoad = document.querySelector(".dark");
console.log(darkMoad);

darkMoad.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.classList.replace("fa-moon", "fa-sun");
  } else {
    this.classList.replace("fa-sun", "fa-moon");
  }
  document.body.classList.toggle("dark");
});
