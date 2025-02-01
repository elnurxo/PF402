import { BasketItems } from "./class.js";
import products from "./data.js";
const tBody = document.querySelector("tbody");
const subTotal = document.querySelector(".sub-total");
const orderBtn = document.querySelector(".order");
let basketApp;
document.addEventListener("DOMContentLoaded", function () {
  basketApp = new BasketItems();
  let priceSum = 0;
  basketApp.basketItems.forEach((basketItem) => {
    const product = products.find((x) => x.id == basketItem.id);
    tBody.innerHTML += `
       <tr data-id="${product.id}">
                                    <th scope="row">${product.id}</th>
                                    <td>${product.title}</td>
                                    <td>
                                        <img width="50" src="${
                                          product.imageUrl
                                        }" alt="${product.title}">
                                    </td>
                                    <td>${product.salePrice}</td>
                                    <td>x${basketItem.quantity}</td>
                                    <td>${
                                      product.salePrice * basketItem.quantity
                                    }</td>
                                    <td><button class="btn btn-outline-success increase"><i class="fa-solid fa-plus"></i></button></td>
                                    <td><button class="btn btn-outline-success decrease"><i class="fa-solid fa-minus"></i></button></td>
                                    <td><button class="btn btn-outline-danger remove"><i class="fa-solid fa-trash"></i></button></td>
                                </tr>
    `;
    priceSum += product.salePrice * basketItem.quantity;
  });
  subTotal.textContent = priceSum.toFixed(2) + "$";

  //remove buttons
  const removeButtons = Array.from(document.querySelectorAll(".remove"));
  removeButtons.forEach((removeBtn) => {
    removeBtn.addEventListener("click", function () {
      const id = this.parentElement.parentElement.getAttribute("data-id");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("deleting product id: ", id);
          basketApp.removeBasketItem(id);
          this.parentElement.parentElement.remove();
          //change sub total
          subTotal.textContent =
            (
              Number(subTotal.textContent.split("$")[0]) -
              this.parentElement.previousElementSibling.previousElementSibling
                .previousElementSibling.textContent
            ).toFixed(2) + "$";
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
});

orderBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tBody.innerHTML = "";
      subTotal.textContent = "no item in basket!";
      basketApp.clear();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});
