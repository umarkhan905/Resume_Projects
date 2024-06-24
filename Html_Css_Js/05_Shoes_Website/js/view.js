import {
  addToCart,
  saveToWishlist,
  createCard,
  userCart,
  userWishlist,
} from "./app.js";
import products from "./data.js";

const heading = document.querySelector(".product_info h1");
const category = document.querySelector(".product_info h2");
const textRating = document.querySelector(".product_info .text_rating span");
const price = document.querySelector(".product_info .price .new_price");
const input = document.querySelector(".product_info input");
const image = document.querySelector(".product_images .image");
const otherImages = document.querySelector(".product_images .more_images");
const starRatingContainer = document.querySelector(".stars_rating");
const description = document.querySelector(".description");
const addToCartBtn = document.querySelector(".add_to_cart");
const sizeOptions = document.querySelectorAll(".size_options .size_option");
const saveToWishlistBtn = document.querySelector(".save_to_wishlist");
const coverImg = document.createElement("img");
const availableStock = document.querySelector(".available_stock p span");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const relatedItemsContainer = document.querySelector(
  ".related_products .cards_container"
);
const productReviewsContainer = document.querySelector(".product_reviews");
const outOfStock = document.querySelector(".out_of_stock");
const prod = JSON.parse(localStorage.getItem("currentProduct"));
let newProduct = { ...prod, size: "s", quantity: 1 };

const relatedProducts = products.filter(
  (p) => p.id !== prod.id && p.category === prod.category
);
newProduct.reviews.forEach((review) => {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review");
  reviewCard.innerHTML = `<div class="user_info">
              <img src="${review.avatar}" width="60" height="60" alt="" />
              <div class="user_info_wrapper">
                <div class="stars_rating">
                  <div class="stars"></div>
                  <span class="rating">(${review.rating.toFixed(1)})</span>
                </div>
                <div class="username">${review.name}</div>
              </div>
            </div>

            <div class="user_review">${review.comment}</div>`;
  productReviewsContainer.appendChild(reviewCard);
  const starsContainer = reviewCard.querySelector(".stars");
  starRating(review.rating, starsContainer);
});
relatedProducts.forEach((product) => {
  const card = createCard(product);
  card.setAttribute("data-gender", product.gender);
  card.setAttribute("data-brand", product.brand);
  relatedItemsContainer.appendChild(card);
});

coverImg.src = newProduct.imageURL;
heading.innerHTML = newProduct.name;
category.innerHTML = newProduct.gender;
textRating.innerHTML = newProduct.rating.toFixed(1);
price.innerHTML = `$${newProduct.price.toFixed(2)}`;
input.max = newProduct.items_left;
input.value = newProduct.quantity;
image.appendChild(coverImg);
description.innerHTML = newProduct.description;
availableStock.innerHTML = newProduct.items_left + " items";
newProduct.otherImages.forEach((image) => {
  const img = document.createElement("img");
  img.src = image;

  otherImages.appendChild(img);

  img.addEventListener("click", () => {
    coverImg.src = image;
  });
});

function elementCreator(star, ratingContainer) {
  const span = document.createElement("span");
  span.innerHTML = star;
  ratingContainer.appendChild(span);
}
function starRating(rating, ratingContainer) {
  const stars = rating.toString().split(".");

  //For Filled Stars
  for (let i = 0; i < stars[0]; i++) {
    elementCreator("<i class='fa-solid fa-star'></i>", ratingContainer);
  }

  //For Half Stars
  if (stars[1] && stars[0] < 5) {
    elementCreator(
      "<i class='fa-solid fa-star-half-stroke'></i>",
      ratingContainer
    );
  }

  // for empty stars
  let remaining;
  stars[1] ? (remaining = 4) : (remaining = 5);
  for (let i = 0; i < remaining - stars[0]; i++) {
    elementCreator("<i class='fa-regular fa-star'></i>", ratingContainer);
  }
}

sizeOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    newProduct.size = e.target.dataset.size;
    optionCleanUp(sizeOptions);
    e.target.classList.add("active");
  });
});

function optionCleanUp(options) {
  options.forEach((option) => {
    option.classList.remove("active");
  });
}

addToCartBtn.addEventListener("click", addToCart(newProduct));
saveToWishlistBtn.addEventListener("click", saveToWishlist(newProduct));
saveToWishlistBtn.addEventListener("click", () => {
  saveToWishlistBtn.classList.toggle("red");
});
plusBtn.addEventListener("click", () => {
  let value = parseInt(input.value);
  if (input.value < input.max) {
    value++;
  }
  input.value = value;
  newProduct.quantity = value;
});
minusBtn.addEventListener("click", () => {
  let value = parseInt(input.value);
  if (input.value > input.min) {
    value--;
  }
  input.value = value;
  newProduct.quantity = value;
});

if (newProduct.items_left === 0) {
  addToCartBtn.classList.add("disabled");
  addToCartBtn.setAttribute("disabled", "");
  newProduct.quantity = 0;
  input.value = 0;
  outOfStock.classList.remove("hide");
}
function cartItemExists(userCart) {
  const item = userCart.find((p) => p.id === newProduct.id);

  if (item) {
    addToCartBtn.classList.add("btn_success");
    addToCartBtn.setAttribute("disabled", "");
    addToCartBtn.innerHTML = `<i class='fa-solid fa-check'></i> Item added successfully`;
  }
}
function wishlistItemExists(userWishlist) {
  const item = userWishlist.find((p) => p.id === newProduct.id);

  if (item) {
    saveToWishlistBtn.classList.add("red");
  }
}
cartItemExists(userCart);
wishlistItemExists(userWishlist);
starRating(newProduct.rating, starRatingContainer);
