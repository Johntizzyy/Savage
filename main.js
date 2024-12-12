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
let count = 0;
const wishlistCount = document.getElementById("wishlist-count");

const productDiv = newArrival
  .map((product) => {
    return `
    <div class="new-arrival-box" >
            <img src="${product.image}" alt="${product.image}">
            <div>
             <span class="d-block text-secondary">${product.name}</span>
            <ion-icon size="large" name="heart-outline" onclick="handleHeartClick(this)"></ion-icon>

            </div>
            <span class="d-block text-secondary b">&#8358;${product.price}</span>
    </div>
    `;
  })
  .join("");
newArrivalDiv.innerHTML = productDiv;

// WISHLIST ICONS FUNCTION
function handleHeartClick(icon) {
  // icon.getAttribute('name')=="heart" && icon.setAttribute('name','heart-outline') ||
  // icon.getAttribute('name')=="heart-outline" && icon.setAttribute('name','heart')

  if (icon.getAttribute("name") == "heart") {
    count -= 1;
    icon.setAttribute("name", "heart-outline");
  } else if (icon.getAttribute("name") == "heart-outline") {
    icon.setAttribute("name", "heart");
    count += 1;
    console.log(icon.parentElement);
  }
  wishlistCount.innerHTML = count;
}

// YOU MAY ALSO LIKE

const ymal = [
  {
    name: "STYLISH TOP",
    price: 15000,
    image: "styles/Assets/stylish-top.jpg",
  },
  {
    name: "SAVAGE CAP",
    price: 5000,
    image: "styles/Assets/savage-cap.jpg",
  },
  {
    name: "SAVAGE TOP",
    price: 5000,
    image: "styles/Assets/savage-top.jpg",
  },
  {
    name: "SAVAGE HOODIE",
    price: 5000,
    image: "styles/Assets/savage-hoodie.jpg",
  },
];

const ymalDiv = document.getElementById("ymalDiv");

const ymalItems = ymal
  .map((item) => {
    return `
                <div id="ymalBoxDiv">
            <img src="${item.image}" alt="${item.name}" class="pb-2"/>
            <div>
              <span >${item.name}</span>
              <ion-icon size="large" name="heart-outline" onclick="handleHeartClick(this)"></ion-icon>
            </div>
            <span class="pb-">&#8358;${item.price}</span>
          </div>


  `;
  })
  .join("");

ymalDiv.innerHTML = ymalItems
