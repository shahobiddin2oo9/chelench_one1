const toggle = document.getElementById("togel");
const savedTheme = localStorage.getItem("theme") || "light-mode";
document.body.className = savedTheme;

if (savedTheme === "dark-mode") {
  toggle.classList.add("active");
}
toggle.onclick = function () {
  toggle.classList.toggle("active");
  const newTheme = document.body.classList.contains("light-mode")
    ? "dark-mode"
    : "light-mode";
  document.body.className = newTheme;

  localStorage.setItem("theme", newTheme);
};
