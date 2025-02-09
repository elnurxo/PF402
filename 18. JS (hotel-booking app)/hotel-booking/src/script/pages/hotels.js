import controller from "../services/request.js";
import { endpoints } from "../services/api.js";
import { renderHotelCards } from "../helpers/renderHotelCards.js";

let apiResponseHotels = undefined;
document.addEventListener("DOMContentLoaded", async function () {
  apiResponseHotels = await controller.getAll(endpoints.hotels);
  renderHotelCards(apiResponseHotels.data);
});

//search hotels
const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function (e) {
  const searchQuery = e.target.value.trim().toLowerCase();
  const searchHotels = apiResponseHotels.data.filter((x) => {
    return x.name.trim().toLowerCase().includes(searchQuery);
  });
  renderHotelCards(searchHotels);
});

//filter by stars
const filterSelectOption = document.querySelector("#filter");

filterSelectOption.addEventListener("change", function (e) {
  const selectedStar = e.target.value;
  if (selectedStar === "all") {
    renderHotelCards(apiResponseHotels.data);
    return;
  } else {
    const filteredHotels = apiResponseHotels.data.filter((x) => {
      return x.stars == selectedStar;
    });
    renderHotelCards(filteredHotels);
  }
});

//sort hotels - price
const sortSelectOption = document.querySelector("#sort");

sortSelectOption.addEventListener("change", function (e) {
  const selectedOption = e.target.value;
  let sortedHotels = [...apiResponseHotels.data];
  switch (selectedOption) {
    case "asc":
      //low to high
      sortedHotels = [
        ...apiResponseHotels.data.sort((x, y) => {
          return x.priceForNight - y.priceForNight;
        }),
      ];
      break;
    case "desc":
      sortedHotels = [
        ...apiResponseHotels.data.sort((x, y) => {
          return y.priceForNight - x.priceForNight;
        }),
      ];
      break;
    //high to low
    default:
      sortedHotels = [...apiResponseHotels.data];
      break;
  }

  renderHotelCards(sortedHotels);
});
