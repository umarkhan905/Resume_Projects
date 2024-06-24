import {
  deleteFromCart,
  userCart,
  setCartItems,
  calculateSubTotal,
  calculateShippingPrice,
  calculateDiscount,
  calculateTax,
  calculateCartTotal,
} from "./app.js";
const cartItems = JSON.parse(localStorage.getItem("cart"));
const tableBody = document.querySelector("table tbody");
const shoppingCartContainer = document.querySelector(
  ".shopping_cart_container"
);
const emptyCart = document.querySelector(".empty_cart");
const priceSubTotal = document.querySelector(".price_sub_total .price_value");
const shippingPriceSubTotal = document.querySelector(
  ".shipping_total .price_value"
);
const discountTotal = document.querySelector(".discount_total .price_value");
const taxTotal = document.querySelector(".tax_total .price_value");
const cartTotal = document.querySelector(".cart_total_price .price_value");

function showCartItems(cartItems) {
  cleanUp();
  cartItems.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="product_info">
                  <img
                    src="${item.imageURL}"
                    alt=""
                  />
                  <div class="product_name">
                    <p>${item.name}</p>
                    <p>${item.brand}</p>
                    <div class="size_options">
                      <div class="size_option" data-size="s">S</div>
                      <div class="size_option" data-size="m">M</div>
                      <div class="size_option" data-size="l">L</div>
                      <div class="size_option" data-size="xl">XL</div>
                    </div>
                  </div>
                </td>

                <td class="product_price">$${item.price}</td>

                <td class="product_quantity">
                  <input type="number" value="${item.quantity}" min="1" max="${
      item.items_left
    }" />
                </td>

                <td>${item.items_left} items</td>

                <td class="sub_total">$${item.quantity * item.price}</td>

                <td class="remove_product">
                  <i class="fa-solid fa-trash"></i>
                </td>`;
    const removeItemButton = tr.querySelector(".remove_product");
    const input = tr.querySelector("input");
    const sTotal = tr.querySelector(".sub_total");
    const sizes = tr.querySelectorAll(".size_option");
    removeItemButton.addEventListener("click", deleteFromCart(item.id));
    removeItemButton.addEventListener("click", removeItem);
    input.addEventListener("change", subTotal(item, input, sTotal, sizes));
    tableBody.appendChild(tr);
    sizes.forEach((size) => {
      if (size.dataset.size === item.size) {
        size.classList.add("active");
      }
      size.addEventListener("click", changeSize(item, sizes, input));
    });
  });
}
function cleanUp() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}
function removeItem(e) {
  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
    checkCartLength();
    updatePrices();
  }
}
function checkCartLength() {
  if (userCart.length === 0) {
    shoppingCartContainer.classList.add("hide");
    emptyCart.classList.remove("hide");
  } else {
    shoppingCartContainer.classList.remove("hide");
    emptyCart.classList.add("hide");
  }
}
function subTotal(product, input, sTotal, sizes) {
  return () => {
    const ind = userCart.findIndex((p) => p.id === product.id);
    const size = Array.from(sizes).find((s) => s.classList.contains("active"));
    const newProduct = {
      ...product,
      quantity: input.value,
      size: size.dataset.size,
    };
    userCart.splice(ind, 1, newProduct);
    setCartItems();
    sTotal.innerHTML = `$${input.value * newProduct.price}`;
    updatePrices();
  };
}

function updatePrices() {
  priceSubTotal.innerHTML = "$" + calculateSubTotal(userCart)?.toFixed(2);
  discountTotal.innerHTML = "$" + calculateDiscount(userCart)?.toFixed(2);
  taxTotal.innerHTML = "$" + calculateTax(userCart)?.toFixed(2);
  shippingPriceSubTotal.innerHTML =
    "$" + calculateShippingPrice(userCart)?.toFixed(2);
  cartTotal.innerHTML = "$" + calculateCartTotal(userCart)?.toFixed(2);
}

function optionCleanUp(sizes) {
  sizes.forEach((size) => {
    size.classList.remove("active");
  });
}
function changeSize(product, sizes, input) {
  return (e) => {
    optionCleanUp(sizes);
    e.target.classList.add("active");
    const ind = userCart.findIndex((p) => p.id === product.id);
    const newProduct = {
      ...product,
      size: e.target.dataset.size,
      quantity: input.value,
    };
    userCart.splice(ind, 1, newProduct);
    setCartItems();
  };
}
checkCartLength();
showCartItems(cartItems);
updatePrices();
