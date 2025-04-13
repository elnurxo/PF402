import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "northWindApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api" }),
  endpoints: () => ({}),
});

export default baseApi;
