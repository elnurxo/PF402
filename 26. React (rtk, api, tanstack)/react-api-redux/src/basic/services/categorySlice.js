import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => `categories`,
    }),
    getCategoryById: build.query({
      query: (id) => `categories/${id}`,
    }),
    getCategoryByName: build.query({
      query: (name) => `categories?name=${name}`,
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => ({
        message: "category deleted successfully",
        response: response.data,
      }),
      invalidatesTags: ["Category"],
    }),
    postCategory: build.mutation({
      query: ({ ...payload }) => ({
        url: `categories`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => ({
        message: "category posted successfully",
        response: response.data,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetCategoryByNameQuery,
  useDeleteCategoryMutation,
  usePostCategoryMutation
} = categoryApi;
