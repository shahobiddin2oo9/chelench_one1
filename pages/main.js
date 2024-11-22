let allProduct = document.querySelector(".all-products");
let searchproducts = document.querySelector(".searchproducts");

function getAllProduct({ id, name, description: desc, price, images }) {
  return `
  <div class="card">
          <div class="card--body">
            <img src=${images[0]} alt="" />
          </div>
          <div class="card--foter">
            <b>${name}</b>
            <p class="card--foter_desc">${desc}</p>
            <p class="card--foter_price">${price}</p>
            <button>Add to card: ${id}</button>
          </div>
        </div>
        `;
}
function getProducts(data = products) {
  allProduct.innerHTML = "";
  data.forEach((product) => {
    allProduct.innerHTML += getAllProduct(product);
  });
}
getProducts();
searchproducts.addEventListener("keyup", function () {
  let search = this.value.trim().toLowerCase();
  let searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  getProducts(searchProducts);
});
