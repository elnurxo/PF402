import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    // get pokemon by name (query => get), (post, patch, delete => mutation)
    getPokemonByName: build.query({
      query: (name) => `pokemon/${name}`,
    }),
    
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
