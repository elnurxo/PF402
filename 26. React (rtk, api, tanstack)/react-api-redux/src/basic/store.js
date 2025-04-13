import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemonSlice.js";
import { categoryApi } from "./services/categorySlice.js";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(categoryApi.middleware),
});
