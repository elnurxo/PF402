const id = new URLSearchParams(window.location.search).get("id");
const editForm = document.querySelector("#update");
const updateNameInp = document.querySelector("#name");
const updateDescInp = document.querySelector("#description");
const updateBtn = document.querySelector(".update-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const API_URL = "https://northwind.vercel.app/api/categories";
const HOME_PAGE_URL = 'http://127.0.0.1:5500/fetch-with-ui/index.html';

document.addEventListener("DOMContentLoaded", function () {
  fetch(API_URL + `/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((category) => {
      if (category.name && category.description) {
        updateNameInp.value = category.name;
        updateDescInp.value = category.description;
      } else {
        window.location.replace(HOME_PAGE_URL);
      }
    });
});

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //fetch - patch
  fetch(API_URL + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: updateNameInp.value,
      description: updateDescInp.value,
    }),
  }).then(() => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "category updated successfully!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace(HOME_PAGE_URL);
    });
  });
});
