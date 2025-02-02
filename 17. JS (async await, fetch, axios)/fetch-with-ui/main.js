import { renderCategoryList } from "./helper.js";

const categoriesList = document.querySelector(".categories");
const API_URL = "https://northwind.vercel.app/api/categories";
const loading = document.querySelector(".loading");
const addForm = document.querySelector("form");
const categoryNameInput = document.querySelector("#name");
const categoryDescriptionInput = document.querySelector("#description");
let globalCategories = [];
document.addEventListener("DOMContentLoaded", function () {
  fetch(API_URL, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((data) => {
      renderCategoryList(data);
      globalCategories = [...data];
      //delete buttons
      const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", function () {
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
              //delete from HTML - UI
              this.parentElement.parentElement.remove();
              //delete from API - fetch
              const id = this.getAttribute("data-id");
              fetch(API_URL + `/${id}`, {
                method: "DELETE",
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  window.alert(err);
                });
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        });
      });
    })
    .catch(() => {
      categoriesList.innerHTML =
        '<li class="list-group-item text-danger">Failed to fetch data!</li>';
    })
    .finally(() => {
      loading.style.display = "none";
    });
});

//post new category on form submit (fetch, UI)
addForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const newCategory = {
    name: categoryNameInput.value,
    description: categoryDescriptionInput.value,
  };
  //form reset
  categoryNameInput.value = "";
  categoryDescriptionInput.value = "";

  //fetch post
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newCategory),
  }).then(() => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "category posted successfully",
      showConfirmButton: false,
      timer: 1200,
    }).then(() => {
      window.location.reload();
    });
  });
});

//search category feature
const searchInp = document.querySelector("#search");
searchInp.addEventListener("keyup", function (e) {
  const searchQuery = e.target.value.trim().toLowerCase();
  const searchedCategories = globalCategories.filter((x) => {
    return x.name.toLowerCase().trim().includes(searchQuery);
  });
  renderCategoryList(searchedCategories);
});
