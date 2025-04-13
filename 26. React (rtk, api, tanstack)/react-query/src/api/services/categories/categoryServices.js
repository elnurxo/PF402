import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import controller from "../../endpoints/index.js";

export const useCategories = () => {
  const queryClient = useQueryClient();

  // Get all categories
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: controller.category.getAll,
    enabled: true,
    // refetchInterval: 5000, // Poll every 5 seconds
    // refetchIntervalInBackground: false, // Continue polling even if the tab is inactive
  });

  // Add a new category
  const addCategoryMutation = useMutation({
    mutationFn: controller.category.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Error adding category:", error);
    },
  });

  // Update a category
  const updateCategoryMutation = useMutation({
    mutationFn: ({ id, data }) => controller.category.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: (error) => {
      console.error("Error updating category:", error);
    },
  });

  // Delete a category
  const deleteCategoryMutation = useMutation({
    mutationFn: controller.category.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Error deleting category:", error);
    },
  });

  return {
    categoriesQuery,
    addCategoryMutation,
    updateCategoryMutation,
    deleteCategoryMutation,
  };
};

// Custom Hook: Get category by ID
export const useCategoryById = (id) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => controller.category.getById(id),
    enabled: !!id, // Prevent query execution if ID is falsy
  });
};
