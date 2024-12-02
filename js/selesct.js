let btn = document.querySelector(".a_select");
let navCategory = document.querySelector(".select_img_li");

btn.addEventListener("click", () => {
  navCategory.classList.toggle("active");
  if (navCategory.classList.contains("active")) {
    btn.innerHTML = `❌ `;
  } else {
    btn.innerHTML = `<p style="color: rgb(182, 182, 182); font-size:14px;">Алексей</p> 🔽`;
  }
});
let navDiv_btn = document.querySelector(".nav-div_btn");
let navDiv = document.querySelector(".nav-div");
navDiv_btn.addEventListener("click", () => {
  navDiv.classList.toggle("active");
  if (navDiv.classList.contains("active")) {
    navDiv_btn.innerHTML = `❌ `;
  } else {
    navDiv_btn.innerHTML = `🟰`;
  }
});
//
let btn_1 = document.querySelector(".button_div_img");
let navCategory_1 = document.querySelector(".button_div_one");

btn_1.addEventListener("click", () => {
  navCategory_1.classList.toggle("active");
});
