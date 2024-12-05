const newArrival = [
  {
    name: "SAVAGE TOP",
    price: "10,000",
    image: "styles/Assets/new-arrival-top.jpg",
  },
  {
    name: "SAVAGE CAP",
    price: "10,000",
    image: "styles/Assets/new-collection-3.jpg",
  },
  {
    name: "SAVAGE HOODIE",
    price: "10,000",
    image: "styles/Assets/new-arrival-hoodie.jpg",
  },
  {
    name: "SAVAGE SHIRT",
    price: "10,000",
    image: "styles/Assets/new-arrival-shirt.jpg",
  },
  {
    name: "SAVAGE SOCKS",
    price: "10,000",
    image: "styles/Assets/new-arrival-socks.jpg",
  },
  {
    name: "SAVAGE SHORT",
    price: "10,000",
    image: "styles/Assets/new-arrival-short.jpg",
  },
  {
    name: "SAVAGE UNDERWEAR",
    price: "10,000",
    image: "styles/Assets/category-underwear.jpg",
  },
  {
    name: "SAVAGE HOODIE",
    price: "10,000",
    image: "styles/Assets/new-arrival-hoodie.jpg",
  },
];

const newArrivalDiv = document.getElementById("newArrivalDiv");

const productDiv = newArrival.map((product) => {
   return `
    <div class="new-arrival-box" >
            <img src="${product.image}" alt="${product.image}">
            <span class="d-block text-secondary">${product.name}</span>
            <span class="d-block text-secondary b">&#8358;${product.price}</span>
    </div>
    `
    
}).join('');
newArrivalDiv.innerHTML = productDiv