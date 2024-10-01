const name = document.getElementById("name");
const price = document.getElementById("price");
const pictureUrl = document.getElementById("pictureUrl");
const productDescription = document.getElementById("productDescription");
const locations = document.getElementById("locations");
const successMessage = document.createElement("h3");
successMessage.innerText = "You have added item successfully";
successMessage.setAttribute("class", "success");
const backBtn = document.getElementById("back-btn");

const insertSecondHandItem = async () => {
  const data = {
    name: name.value,
    price: price.value,
    pictureUrl: pictureUrl.value,
    productDescription: productDescription.value,
    locations: locations.value,
  };

  const response = await fetch(
    "https://66fa40a8afc569e13a9ae9f3.mockapi.io/SecondHandStore",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (response.status === 201) {
    document.body.append(successMessage);
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  }
};

const btn = document.getElementById("add-btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  insertSecondHandItem();
});

backBtn.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(() => {
    window.location.replace("../index.html");
  }, 1000);
});
