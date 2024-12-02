let AboutRow = document.querySelector(".serch_cards");
let SerachEl = document.querySelector(".search-products");

function getProduct({ name, images }) {
  return `
   <div class=card>
    <div class="cardinbox">
<img src="${images[1]}" alt="${name}">
<div class="bla">
    <h1>${name}</h1>
</div>
    </div>
</div>
  `;
}

function getelempro(data = products) {
  AboutRow.innerHTML = "";
  if (data.length !== 0) {
    data.forEach((product) => {
      AboutRow.innerHTML += getProduct(product);
    });
  } else {
    AboutRow.innerHTML = `
     <style>
     img {
    width:40%;
    }
    </style> 
     <img src="../images/header_img/serch_no.gif" alt="No img?" />
     <p>No card?</p>
`;
  }
}
getelempro();

SerachEl.addEventListener("keyup", function () {
  let search = this.value.trim().toLowerCase();
  let SerachEl = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  getelempro(SerachEl);
});
