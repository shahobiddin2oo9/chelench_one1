// Aksiya _1
let cardMain = document.querySelector(".Aksiya_cards");

function getCards({ name, price, description, images, images1 }) {
  return `
    <div class="aksiya_card">
      <img src="${images[0]}" alt="${description}" />
      <div class="aksiya_card-text-1">
        <h2>${price}</h2>
        <h6>50,50 ₽</h6> <!-- Ushbu qator statik qoldirildi -->
      </div>
      <div class="aksiya_card-text-2">
        <h5>С картой</h5>
        <h6>Обычная</h6>
      </div>
      <p>${description}</p>
      <img src="${images1[0]}" alt="Rating" />
      <button onClick="getCartTotal(${id})">В корзину</button>
    </div>
  `;
}

product.forEach((prdct) => {
  cardMain.innerHTML += getCards(prdct);
});

// Aksiya _2
let cardMain_1 = document.querySelector(".Aksiya_cards_1 ");

function getCards({ name, price, description, images, images1 }) {
  return `
    <div class="aksiya_card">
      <img src="${images}" alt="${description}" />
      <div class="aksiya_card-text-1">
        <h2>${price}</h2>
        <h6>50,50 ₽</h6> <!-- Ushbu qator statik qoldirildi -->
      </div>
      <div class="aksiya_card-text-2">
        <h5>С картой</h5>
        <h6>Обычная</h6>
      </div>
      <p>${description}</p>
      <img src="${images1}" alt="Rating" />
      <button >В корзину</button>
    </div>
  `;
}

product2.forEach((prdct) => {
  cardMain_1.innerHTML += getCards(prdct);
});

// Aksiya_3
let cardMain_2 = document.querySelector(".Aksiya_cards_2 ");

function getCards({ name, price, description, images, images1 }) {
  return `
    <div class="aksiya_card">
      <img src="${images}" alt="${description}" />
      <div class="aksiya_card-text-1">
        <h2>${price}</h2>
        <h6>50,50 ₽</h6> <!-- Ushbu qator statik qoldirildi -->
      </div>
      <div class="aksiya_card-text-2">
        <h5>С картой</h5>
        <h6>Обычная</h6>
      </div>
      <p>${description}</p>
      <img src="${images1}" alt="Rating" />
      <button>В корзину</button>
    </div>
  `;
}

product3.forEach((prdct) => {
  cardMain_2.innerHTML += getCards(prdct);
});

function getCartTotal(id) {
  console.log(id);
}
