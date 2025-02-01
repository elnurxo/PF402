import { BasketItems } from "./class.js";
import products from "./data.js";
import { renderProductsList } from "./helper.js";
const badge = document.querySelector(".badge");

let basketApp = undefined;
document.addEventListener("DOMContentLoaded", function () {
  renderProductsList(products);
  basketApp = new BasketItems();

  //load dynamic basket count
  badge.textContent = basketApp.basketItems.length;

  const basketButtons = Array.from(document.querySelectorAll(".add-to-basket"));
  basketButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const newBasketItem = { id: this.getAttribute("data-id"), quantity: 1 };
      const result = basketApp.add(newBasketItem);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 1500,
      });
      if (result.isNew) {
        badge.textContent = Number(badge.textContent) + 1;
      }
    });
  });
});
