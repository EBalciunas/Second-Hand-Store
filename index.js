const cardItemWrapper = document.getElementById("itemCard-wrapper");

const getSecondHandItems = async () => {
  const response = await fetch(
    "https://66fa40a8afc569e13a9ae9f3.mockapi.io/SecondHandStore"
  );

  const data = await response.json();
  return data;
};

const buildItemCards = (items) => {
  items.forEach((i) => {
    const itemCard = document.createElement("a");
    itemCard.href = `./secondHandItem/index.html?id=${i.id}`;
    itemCard.setAttribute("class", "itemCard");

    const name = document.createElement("h3");
    const img = document.createElement("img");
    const price = document.createElement("h3");

    name.innerText = i.name;
    img.src = i.pictureUrl;
    img.setAttribute("class", "card-img");
    price.innerText = ` ${i.price}€`;
    itemCard.append(name, img, price);
    cardItemWrapper.append(itemCard);
  });
};

const initApp = async () => {
  const items = await getSecondHandItems();

  items.sort((a, b) => a.price - b.price);

  buildItemCards(items);
};

initApp();
