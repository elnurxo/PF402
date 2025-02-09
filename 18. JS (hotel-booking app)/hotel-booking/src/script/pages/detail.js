const id = new URLSearchParams(window.location.search).get("id");
import controller from "../services/request.js";
import { endpoints } from "../services/api.js";

document.addEventListener("DOMContentLoaded", async function () {
  const hotelAPIResponse = await controller.getByID(endpoints.hotels, id);
  if (hotelAPIResponse.data) {
    //ok
    const coverImageHTML = document.querySelector("#cover-image");
    coverImageHTML.src = hotelAPIResponse.data.coverImage;
    coverImageHTML.setAttribute("alt", hotelAPIResponse.data.name);
    coverImageHTML.setAttribute("title", hotelAPIResponse.data.name);

    const hotelNameHTML = document.querySelector("#hotel-name");
    hotelNameHTML.textContent = hotelAPIResponse.data.name;

    const hotelLocationHTML = document.querySelector("#location");
    hotelLocationHTML.textContent = hotelAPIResponse.data.location;

    const hotelPriceHTML = document.querySelector("#price");
    const hotelOldPriceHTML = document.querySelector("#old-price");

    const hotelPriceCurrencyHTML = document.querySelector("#currency");
    hotelPriceCurrencyHTML.textContent = hotelAPIResponse.data.currency;

    if (hotelAPIResponse.data.discount > 0) {
      hotelPriceHTML.textContent =
        "$" +
        (
          hotelAPIResponse.data.priceForNight -
          (hotelAPIResponse.data.priceForNight *
            hotelAPIResponse.data.discount) /
            100
        ).toFixed(2);
      hotelOldPriceHTML.textContent =
        "$" + hotelAPIResponse.data.priceForNight.toFixed(2);
    } else {
      hotelPriceHTML.textContent =
        "$" + hotelAPIResponse.data.priceForNight.toFixed(2);
      hotelOldPriceHTML.style.display = "none";
    }

    const hotelStars = document.querySelector(".hotel-stars");
    const averageStar =
      hotelAPIResponse.data.reviews.reduce((acc, currentVal) => {
        return (acc += currentVal.star);
      }, 0) / hotelAPIResponse.data.reviews.length;
    for (let i = 1; i <= 5; i++) {
      if (averageStar >= i) {
        hotelStars.innerHTML += `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="size-6 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd" />
              </svg>`;
      } else {
        hotelStars.innerHTML += `
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                class="size-6 text-yellow-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd" />
              </svg>
            `;
      }
    }
    hotelStars.innerHTML += `<span class="ml-2 text-gray-600">(${hotelAPIResponse.data.reviews.length} reviews)</span>`;

    const hotelInfoHTML = document.querySelector("#info");
    hotelInfoHTML.textContent = hotelAPIResponse.data.info;

    const reserveBtn = document.querySelector("#reserve-btn");
    if (!hotelAPIResponse.data.isAvailable) {
      reserveBtn.setAttribute("disabled", true);
      reserveBtn.style.background = "red";
      reserveBtn.style.cursor = "not-allowed";
    }

    const hotelServicesList = document.querySelector(".amenities");
    hotelAPIResponse.data.amenities.forEach((service) => {
      hotelServicesList.innerHTML += `<li>${service}</li>`;
    });
  } else {
    window.location.replace("http://localhost:5173/hotels.html");
  }
});
