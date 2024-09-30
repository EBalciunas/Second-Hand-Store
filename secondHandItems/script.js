const data = {
  name: "Keyboard",
  price: 35.0,
  pictureUrl: "https://cdn.mos.cms.futurecdn.net/z4z9sNPnB7YY5X9fPeS5S3.jpg",
  productDescription:
    "The keyboard was bought from Topo centras 3 years ago, very well kept, used only a few times",
  location: "Klaipeda",
};

fetch("https://66fa40a8afc569e13a9ae9f3.mockapi.io/SecondHandStore", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
