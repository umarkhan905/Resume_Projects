import products from "./data.js";
import { createCard } from "./app.js";

const productsContainer = document.querySelector(
  ".shop_container .products_container"
);
const categoryFilters = document.querySelector(".category_filter");
const brandFilters = document.querySelector(".brand_filter");
const genderFilters = document.querySelector(".gender_filter");
const activeFilters = document.querySelector(".active_filters");
const categories = [...new Set(products.map((p) => p.category))];
const brands = [...new Set(products.map((p) => p.brand))];
const genders = [...new Set(products.map((p) => p.gender))];

function cardsFilter(allFilters = []) {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const card = createCard(product);
    card.setAttribute("data-gender", product.gender);
    card.setAttribute("data-brand", product.brand);

    if (allFilters.length === 0) {
      allFilters = [...brands, ...genders, ...categories];
    }
    if (allFilters.includes(product.category)) {
      productsContainer.appendChild(card);
    } else if (allFilters.includes(product.brand)) {
      productsContainer.appendChild(card);
    } else if (allFilters.includes(product.gender)) {
      productsContainer.appendChild(card);
    }
  });
}

function placeFilter(filters, filterContainer) {
  filters.forEach((f) => {
    const filter = document.createElement("li");
    filter.innerHTML = `
    <input type="checkbox" value="${f}"/>${f.charAt(0)}${f
      .slice(1)
      .toLowerCase()}
    `;
    filterContainer.appendChild(filter);

    filter.addEventListener("click", () => {
      const allFilters = [];
      const f = document.querySelectorAll('input[type="checkbox"]');
      f.forEach((e) => {
        if (e.checked) {
          allFilters.push(e.value);
          showFilters(allFilters);
        }
      });
      cardsFilter(allFilters);
    });
  });
}

function showFilters(filters) {
  activeFilters.innerHTML = "";
  console.log(filters);
  filters.forEach((filter) => {
    const div = document.createElement("div");
    div.classList.add("active_filter");
    div.innerHTML = `
             ${filter} <i class="fa-solid fa-xmark"></i>
            `;
    activeFilters.appendChild(div);
  });
}
placeFilter(categories, categoryFilters);
placeFilter(brands, brandFilters);
placeFilter(genders, genderFilters);
cardsFilter();
