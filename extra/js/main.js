let allProducts = document.querySelector(".all-products");
let serachProducts = document.querySelector(".serach-products");
let productsCount = document.querySelector(".products-count");
let navMenu = document.querySelector(".nav-menu");

function getCategoriesMenu({ name }) {
  return `
  <li>
            <a class="nav-menu__link" href="#">${name}</a>
  </li>
  `;
}

categories.forEach((el) => {
  navMenu.innerHTML += getCategoriesMenu(el);
});

function getAllProductsCard({ id, name, description: desc, price, images }) {
  return `
  <div class="card">
    <div class="card--body">
      <img src=${images[0]} alt=${name} />
    </div>
    <div class="card--footer">
      <h2>${name}</h2>
      <p class="card--footer__desc">${desc}</p>
      <p class="card--footer__price">${price}$</p>
      <button class="card--footer__btn">add to card: ${id}</button>
    </div>
  </div>
  `;
}

function getProducts(data = products) {
  allProducts.innerHTML = "";
  data.forEach((product) => {
    allProducts.innerHTML += getAllProductsCard(product);
  });
  productsCount.innerText = data.length;
}
getProducts();

serachProducts.addEventListener("keyup", function () {
  let search = this.value.trim().toLowerCase();
  let searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  getProducts(searchProducts);
});
