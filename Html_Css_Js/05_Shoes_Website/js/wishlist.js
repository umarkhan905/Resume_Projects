import {
  deleteFromWishlist,
  setCartItems,
  userWishlist,
  calculateSubTotal,
  setWishlistItems,
  userCart,
} from "./app.js";
const wishlistItems = JSON.parse(localStorage.getItem("wishlist"));
const tableBody = document.querySelector("table tbody");
const wishlistContainer = document.querySelector(".wishlist_container");
const emptyWishlist = document.querySelector(".empty_wishlist");
const shoppingBag = document.querySelector(".shopping_bag span");

function showWishlistItems(wishlistItems) {
  cleanUp();
  wishlistItems.forEach((item) => {
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
              <td class="${
                item.items_left === 0 ? "in_stock red" : "in_stock green"
              }">${item.items_left === 0 ? "OUT OF STOCK" : "IN STOCK"}</td>
              <td class="available_stock"><span>${
                item.items_left
              }</span> Items</td>
              <td class="product_quantity">
                <input type="number" value="${item.quantity}" min="1" max="${
      item.items_left
    }" />
              </td>

              <td class="sub_total">$${item.quantity * item.price}</td>
              <td class="actions">
                  <button class="add_cart">
                    Add to cart <i class="fa-solid fa-bag-shopping"></i>
                  </button>
                  <button class="remove_wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </button>
              </td>`;
    const removeBtn = tr.querySelector(".remove_wishlist");
    const addTOCartBtn = tr.querySelector(".add_cart");
    const input = tr.querySelector("input");
    const sizes = tr.querySelectorAll(".size_option");
    const subTotal = tr.querySelector(".sub_total");
    removeBtn.addEventListener("click", deleteFromWishlist(item.id));
    removeBtn.addEventListener("click", removeItem(removeBtn));
    addTOCartBtn.addEventListener(
      "click",
      addToCart(userWishlist, item, userCart)
    );
    input.addEventListener(
      "change",
      changeQuantity(item, input, subTotal, sizes)
    );
    tableBody.appendChild(tr);
    sizes.forEach((size) => {
      if (item.size === size.dataset.size) {
        size.classList.add("active");
      }
      size.addEventListener("click", changeProductSize(item, sizes, input));
    });
    if (item.items_left === 0) {
      addTOCartBtn.classList.add("disabled");
      addTOCartBtn.setAttribute("disabled", "");
    }
    cartItemExists(userCart, addTOCartBtn, item);
  });
}
function cleanUp() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}
function removeItem(button) {
  return () => {
    button.parentElement.parentElement.remove();
    checkWishlistLength();
  };
}
function checkWishlistLength() {
  if (userWishlist.length === 0) {
    wishlistContainer.classList.add("hide");
    emptyWishlist.classList.remove("hide");
  } else {
    wishlistContainer.classList.remove("hide");
    emptyWishlist.classList.add("hide");
  }
}
function changeQuantity(product, input, subTotal, sizes) {
  return () => {
    const ind = userWishlist.findIndex((p) => p.id === product.id);
    const item = Array.from(sizes).find((s) => s.classList.contains("active"));
    userWishlist.splice(ind, 1, {
      ...product,
      quantity: input.value,
      size: item.dataset.size,
    });
    setWishlistItems();
    subTotal.innerHTML = `$${input.value * product.price}`;
  };
}

function changeProductSize(item, sizes, input) {
  return (e) => {
    classCleanUp(sizes);
    e.target.classList.add("active");
    const ind = userWishlist.findIndex((p) => p.id === item.id);
    userWishlist.splice(ind, 1, {
      ...item,
      size: e.target.dataset.size,
      quantity: input.value,
    });

    setWishlistItems();
  };
}
function classCleanUp(sizes) {
  sizes.forEach((s) => {
    s.classList.remove("active");
  });
}
function cartItemExists(userCart, addTOCartBtn, product) {
  const item = userCart.find((p) => p.id === product.id);

  if (item) {
    addTOCartBtn.classList.add("btn_success");
    addTOCartBtn.setAttribute("disabled", "");
    addTOCartBtn.innerHTML = `<i class='fa-solid fa-check'></i> Already in cart`;
  }
}
function addToCart(userWishlist, item, userCart) {
  return () => {
    const p = userWishlist.find((p) => p.id === item.id);
    const i = userCart.find((i) => i.id === p.id);
    if (!i) {
      userCart.push(p);
      setCartItems();
      shoppingBag.innerHTML = userCart.length;
    }
  };
}
checkWishlistLength();
showWishlistItems(wishlistItems);
calculateSubTotal(userWishlist);
