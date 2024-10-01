const name = document.getElementById("name");
const itemImg = document.getElementById("item-img");
const productDescription = document.getElementById("product-description");
const price = document.getElementById("price");
const itemLocation = document.getElementById("item-location");
const deleteBtn = document.getElementById("delete-btn");
const warningMessage = document.getElementById("warning-message");
const backBtn = document.getElementById("back-btn");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const getSecondHandItem = async () => {
  const response = await fetch(
    `https://66fa40a8afc569e13a9ae9f3.mockapi.io/SecondHandStore/${id}`
  );

  const data = await response.json();

  return data;
};

const deleteSecondHandItem = async () => {
  const response = await fetch(
    `https://66fa40a8afc569e13a9ae9f3.mockapi.io/SecondHandStore/${id}`,
    {
      method: "DELETE",
    }
  );

  return response;
};

const screenBuild = (data) => {
  name.innerText = data.name;
  itemImg.src = data.pictureUrl;
  productDescription.innerText = `Product description: ${data.productDescription}`;
  price.innerText = `Product price: ${data.price}€`;
  itemLocation.innerText = `Location: ${data.location}`;
};

const initPage = async () => {
  const item = await getSecondHandItem();
  screenBuild(item);
};

initPage();

deleteBtn.addEventListener("click", async () => {
  const response = await deleteSecondHandItem();

  if (response.status === 200)
    warningMessage.innerText = "This item deleted successfully!";
  setTimeout(() => {
    window.location.replace("../index.html");
  }, 2000);
});

backBtn.addEventListener("click", () => {
  setTimeout(() => {
    window.location.replace("../index.html");
  }, 1000);
});
