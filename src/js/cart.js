import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const productList = document.querySelector(".product-list");

  if (!productList) {
    console.error("Elemento .product-list no encontrado");
    return;
  }

  if (cartItems.length === 0) {
    productList.innerHTML = "<p>Tu carrito está vacío</p>";
    return;
  }

  productList.innerHTML = cartItems.map(cartItemTemplate).join("");
}

function cartItemTemplate(item) {
  if (!item) return "";

  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image || "#"}" alt="${item.Name || "Producto"}">
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name || "Nombre no disponible"}</h2>
    </a>
    <p class="cart-card__color">${item.Colors?.[0]?.ColorName || "Sin color"}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice?.toFixed(2) || "0.00"}</p>
  </li>`;
}

renderCartContents();
