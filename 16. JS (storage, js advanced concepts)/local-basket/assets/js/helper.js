const productList = document.querySelector(".products-list");

export function renderProductsList(arr) {
  productList.innerHTML = "";
  arr.forEach((product) => {
    productList.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                          <div class="card">
                              <img height="250" style="object-fit:cover;" src="${product.imageUrl}" class="card-img-top" alt="${product.title}" title="${product.title}">
                              <div class="card-body">
                                  <h5 class="card-title">${product.title}</h5>
                                  <p class="card-text">${product.salePrice}</p>
                                  <button class="btn btn-primary add-to-basket" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i></button>
                              </div>
                          </div>
                      </div>
          `;
  });
}
