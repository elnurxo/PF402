const hotelCardsParent = document.querySelector(".hotel-cards");

export function renderHotelCards(arr) {
  hotelCardsParent.innerHTML = "";
  console.log("arr: ", arr);
  arr.forEach((hotel) => {
    hotelCardsParent.innerHTML += `
          <div class="rounded-lg shadow-lg overflow-hidden bg-white">
                          <img src="${hotel.coverImage}"
                              alt="${hotel.name}" title="${
      hotel.name
    }" class="w-full h-48 object-cover">
                          <div class="p-4">
                              <a href="detail.html?id=${
                                hotel.id
                              }" class="underline">
                                  <h2 class="text-lg font-semibold text-gray-800 underline">${
                                    hotel.name
                                  }</h2>
                              </a>
                              <p class="text-yellow-500 flex items-center">${[
                                null,
                                null,
                                null,
                                null,
                                null,
                              ]
                                .map((_, idx) => {
                                  if (hotel.stars >= idx + 1) {
                                    return "★";
                                  } else {
                                    return "☆";
                                  }
                                })
                                .join("")}</p>
                              <p class="text-gray-600 mt-2">Price: $${
                                hotel.priceForNight
                              }/night</p>
                              <span class="${
                                hotel.isAvailable
                                  ? "text-green-600"
                                  : "text-red-600"
                              } text-sm font-semibold">${
      hotel.isAvailable ? "Available" : "Not Available"
    }</span>
                              <div class="mt-4 flex flex-wrap gap-2">
                                  <button
                                      class="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700"><i
                                          class="fa-solid fa-pen-to-square"></i></button>
                                  <button class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-600"><i
                                          class="fa-solid fa-trash"></i></button>
                                  <button
                                      class="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-pink-600"><i
                                          class="fa-solid fa-heart"></i></button>
                              </div>
                          </div>
                      </div>
      `;
  });
}
