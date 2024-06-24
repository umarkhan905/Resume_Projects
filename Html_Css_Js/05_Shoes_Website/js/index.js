import { createCard, insertPaginationButtons } from "./app.js";
import products from "./data.js";
const featuredItems = document.querySelector(
  ".featured_items .cards_container"
);
const timer = document.querySelector(".timer_container h1");
const topRatedItemsContainer = document.querySelector(
  ".top_rated .cards_container"
);

const filters = document.querySelectorAll(".product_filter img");
const allProductsCards = document.querySelector(
  ".all_products .cards_container"
);
const countingPagination = document.querySelector(
  ".all_products .counting_button"
);

const topRatedItems = products.filter((product) => product.rating >= 4.5);
let [days, hours, minutes, seconds] = [4, 23, 59, 60];

function salesTimer() {
  let timerInterval = setInterval(() => {
    seconds--;
    timer.innerHTML = ` ${days < 9 ? "0" + days : days}<span>days</span> : ${
      hours < 9 ? "0" + hours : hours
    }<span>hours</span> : ${
      minutes < 9 ? "0" + minutes : minutes
    }<span>minutes</span> :
          ${seconds < 9 ? "0" + seconds : seconds}<span>seconds</span>`;
    if (seconds === 0) {
      minutes--;
      seconds = 59;
      if (minutes === 0) {
        hours--;
        minutes = 59;
        if (hours === 0) {
          days--;
          hours = 23;
          if (days === 0) {
            [days, minutes, hours, seconds] = 0;
            clearInterval(timerInterval);
          }
        }
      }
    }
  }, 1000);
}

products.forEach((product, i) => {
  const card = createCard(product);
  const card1 = createCard(product);
  card1.setAttribute("data-brand", product.brand);
  if (product.isFeatured) {
    featuredItems.appendChild(card);
  }
  if (i < 8) {
    allProductsCards.appendChild(card1);
  }
});
topRatedItems.forEach((product) => {
  const card = createCard(product);
  topRatedItemsContainer.appendChild(card);
});

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    Array.from(allProductsCards.children).forEach((product) => {
      product.classList.add("hide");
      if (
        product.dataset.brand === e.target.dataset.brand ||
        e.target.dataset.brand === "all"
      ) {
        product.classList.remove("hide");
      }
    });
    filterCleanUp();
    filter.classList.toggle("active");
  });
});

function filterCleanUp() {
  filters.forEach((filter) => {
    filter.classList.remove("active");
  });
}

salesTimer();
insertPaginationButtons(allProductsCards, countingPagination);
