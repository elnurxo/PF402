const categoriesList = document.querySelector(".categories");

export function renderCategoryList(arr) {
  categoriesList.innerHTML = "";
  if (arr.length === 0) {
    categoriesList.innerHTML = `
  <li class="list-group-item d-flex text-danger text-center">
     no such category found!
  </li>
  `;
  } else {
    arr.forEach((category) => {
      categoriesList.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <a href="detail.html?id=${category.id}" class="text-dark">
            ${category.name}
        </a>
        <div>
        <a href="edit.html?id=${category.id}" class="btn btn-outline-warning update"><i class="fa-solid fa-pen-to-square"></i></a>
        <button data-id=${category.id} class="btn btn-outline-danger delete"><i class="fa-solid fa-delete-left"></i></button>
        </div>
    </li>
    `;
    });
  }
}
