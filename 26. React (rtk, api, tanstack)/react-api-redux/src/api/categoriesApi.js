import { baseApi } from "./baseApi.js";

export const categoriesApi = baseApi.injectEndpoints({
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    // Fetch all categories
    fetchCategories: builder.query({
      query: () => "/categories",
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Category", id })), "Category"]
          : ["Category"], // Dynamically provides tags for cache updates
    }),
    // Fetch one category
    fetchCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ["Category"],
    }),
    // Add a new category
    addCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/categories",
        method: "POST",
        body: newCategory,
      }),
      invalidatesTags: ["Category"], // Invalidates the cache for a full refetch
    }),
    // Update an existing category
    updateCategory: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Category", id }], // Invalidates only the updated item
    }),
    // Delete a category by ID
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Category", id }], // Invalidates only the deleted item
    }),
    // Refetch categories automatically when needed
    refetchCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Category"],
      keepUnusedDataFor: 5, // Keeps unused data for 5 seconds to minimize redundant requests
    }),
  }),
});

export const {
  useFetchCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoryByIdQuery,
  useLazyFetchCategoriesQuery, // Provides on-demand refetching functionality
} = categoriesApi;
