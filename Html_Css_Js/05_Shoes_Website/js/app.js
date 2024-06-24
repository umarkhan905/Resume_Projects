import products from "./data.js";
const shoppingBag = document.querySelector(".shopping_bag span");
const wishlistBag = document.querySelector(".wishlist_bag span");
const hamShoppingBag = document.querySelector(".ham_shopping_bag span");
const hamWishlistBag = document.querySelector(".ham_wishlist_bag span");
const hamburgerBtn = document.querySelector(".hamburger_btn");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

let userCart = [];
let userWishlist = [];

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<img
              src="${product.imageURL}"
              width="220"
              alt=""
            />
            <div class="row">
              <div class="col">
                <h5>${product.name}</h5>
                <p>${product.gender}</p>
              </div>
              <div class="col">
                <h5>$${product.price}</h5>
                <p>${product.brand}</p>
              </div>
            </div>
            <a href="view.html">View Details</a>`;
  card.children[2].addEventListener("click", () => {
    localStorage.setItem("currentProduct", JSON.stringify(product));
  });
  return card;
}

function addToCart(product) {
  return () => {
    const isExist = userCart.find((p) => p.id === product.id);
    if (!isExist) {
      userCart.push(product);
      setCartItems();
      shoppingBag.innerHTML = userCart.length;
      hamShoppingBag.innerHTML = userCart.length;
    } else {
      console.log("Item Already Exists In Cart");
    }
  };
}

function deleteFromCart(id) {
  return () => {
    const index = userCart.findIndex((p) => p.id === id);
    userCart.splice(index, 1);
    setCartItems();
    shoppingBag.innerHTML = userCart.length;
    hamShoppingBag.innerHTML = userCart.length;
  };
}

function setCartItems() {
  localStorage.setItem("cart", JSON.stringify(userCart));
}

function getCartItems() {
  const data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    userCart = [];
  } else {
    userCart = data;
  }
}

function saveToWishlist(prod) {
  return () => {
    const isExist = userWishlist.find((p) => p.id === prod.id);

    if (!isExist) {
      userWishlist.push(prod);
      setWishlistItems();
      wishlistBag.innerHTML = userWishlist.length;
      hamWishlistBag.innerHTML = userWishlist.length;
    } else {
      const index = userWishlist.findIndex((p) => p.id === prod.id);
      userWishlist.splice(index, 1);
      setWishlistItems();
      wishlistBag.innerHTML = userWishlist.length;
      hamWishlistBag.innerHTML = userWishlist.length;
    }
  };
}

function deleteFromWishlist(id) {
  return () => {
    const index = userWishlist.findIndex((p) => p.id === id);
    userWishlist.splice(index, 1);
    setWishlistItems();
    wishlistBag.innerHTML = userWishlist.length;
    hamWishlistBag.innerHTML = userWishlist.length;
  };
}

function setWishlistItems() {
  localStorage.setItem("wishlist", JSON.stringify(userWishlist));
}
function getWishlistItems() {
  const data = localStorage.getItem("wishlist");
  if (!data) {
    userWishlist = [];
  } else {
    userWishlist = JSON.parse(data);
  }
}

function calculateSubTotal(array) {
  if (array.length !== 0) {
    const total = array.reduce((acc, cv) => acc + cv.quantity * cv.price, 0);
    return total;
  }
}

function calculateShippingPrice(array) {
  if (array.length !== 0) {
    const total = array.reduce(
      (acc, cv) => acc + cv.shippingPrice * cv.quantity,
      0
    );
    return total;
  }
}

function calculateDiscount(array) {
  if (array.length !== 0) {
    const total = array.reduce(
      (acc, cv) => acc + cv.price * cv.quantity * 0.08,
      0
    );
    return total;
  }
}

function calculateTax(array) {
  if (array.length !== 0) {
    const total = array.reduce(
      (acc, cv) => acc + cv.price * cv.quantity * 0.05,
      0
    );
    return total;
  }
}

function calculateCartTotal() {
  const total =
    calculateSubTotal(userCart) +
    calculateShippingPrice(userCart) -
    calculateDiscount(userCart) +
    calculateTax(userCart);
  return total;
}

function getProducts(start, end, elementContainer) {
  for (let i = start; i < end; i++) {
    if (products[i]) {
      const card = createCard(products[i]);
      card.setAttribute("data-brand", products[i].brand);
      elementContainer.appendChild(card);
    }
  }
}

function insertPaginationButtons(elementContainer, countingPagination) {
  const noOfButtons = Math.ceil(products.length / 8);
  for (let i = 0; i < noOfButtons; i++) {
    const pgButton = document.createElement("div");
    pgButton.classList.add("pagination_btn");
    pgButton.setAttribute("data-start", i * 8);
    pgButton.setAttribute("data-end", (i + 1) * 8);
    pgButton.innerHTML = i + 1;

    if (i === 0) {
      pgButton.classList.add("active");
    }
    countingPagination.appendChild(pgButton);

    pgButton.addEventListener("click", (e) => {
      const start = parseInt(e.target.dataset.start);
      const end = parseInt(e.target.dataset.end);
      classCleanUp();
      e.target.classList.add("active");
      elementContainer.innerHTML = "";
      getProducts(start, end, elementContainer);
    });
  }
}

function classCleanUp() {
  document
    .querySelectorAll(".pagination_btn")
    .forEach((btn) => btn.classList.remove("active"));
}
hamburgerBtn.addEventListener("click", () => {
  document.querySelector(".hamburger_menu").classList.toggle("active");
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset <= 38) {
    hamburger.classList.remove("sticky");
    navbar.classList.remove("sticky");
    navbar.classList.add("container");
  } else {
    hamburger.classList.add("sticky");
    navbar.classList.add("sticky");
    navbar.classList.remove("container");
  }
});
getProducts();
getWishlistItems();
getCartItems();
shoppingBag.innerHTML = userCart.length;
wishlistBag.innerHTML = userWishlist.length;
hamShoppingBag.innerHTML = userCart.length;
hamWishlistBag.innerHTML = userWishlist.length;

export {
  createCard,
  addToCart,
  saveToWishlist,
  deleteFromCart,
  deleteFromWishlist,
  userCart,
  userWishlist,
  calculateSubTotal,
  setCartItems,
  calculateShippingPrice,
  calculateDiscount,
  calculateTax,
  calculateCartTotal,
  setWishlistItems,
  insertPaginationButtons,
};
