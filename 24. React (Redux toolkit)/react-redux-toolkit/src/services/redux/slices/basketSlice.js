import { createSlice } from "@reduxjs/toolkit";
// import { useLocalStorage } from "@uidotdev/usehooks";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const duplicateBasketItem = state.basket.find(
        (x) => x.id == action.payload.id
      );
      if (duplicateBasketItem) {
        duplicateBasketItem.quantity += 1;
      } else {
        state.basket.push({
          id: action.payload.id,
          name: action.payload.name,
          imageURL: action.payload.imageURL,
          price: action.payload.price,
          quantity: 1,
        });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeFromBasket: (state, action) => {
      const idx = state.basket.findIndex((item) => {
        return item.id == action.payload;
      });
      state.basket.splice(idx, 1);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decrementFromBasket: (state, action) => {
      const basketItem = state.basket.find((x) => x.id == action.payload);
      if (basketItem.quantity > 1) {
        basketItem.quantity -= 1;
      } else {
        const idx = state.basket.findIndex((item) => {
          return item.id == action.payload;
        });
        state.basket.splice(idx, 1);
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    clearBasket: (state) => {
      state.basket = [];
      localStorage.setItem("basket", JSON.stringify([]));
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  decrementFromBasket,
  clearBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
