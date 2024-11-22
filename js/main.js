let cardMain = document.querySelector(".card_main");

function getCards({ name, description, images, images1 }) {
  return `
  <div class="cards_main_1">
    <div class="cards--body">
      <img src=${images} />
    </div>
    <div class="cards--footer">
      <div class="cards_one-trex">
        <h1>44,50</h1>
        <p>50,50</p>
      </div>
      <div class="cards_two-trex">
        <h1>С картой</h1>
        <p>Обычная</p>
      </div>
      <p>${description}</p>
      <img src=${images1} />
      <button>В корзину</button>
    </div>
  </div>`;
}

products.forEach((products) => {
  cardMain.innerHTML += getCards(products);
});
