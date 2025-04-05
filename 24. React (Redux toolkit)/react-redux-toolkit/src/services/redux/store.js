import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice.js";
import categoriesReducer from "./slices/categorySlice.js";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    categories: categoriesReducer,
  },
});
