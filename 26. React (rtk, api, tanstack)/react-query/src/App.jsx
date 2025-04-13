import { useCategories } from "./api/services/categories/categoryServices.js";

function App() {
  const { categoriesQuery, deleteCategoryMutation } = useCategories();

  if (categoriesQuery.isLoading) return <p>Loading...</p>;
  if (categoriesQuery.isError) return <p>Error loading categories</p>;

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Tanstack React Query!
      </h1>
      <button
        onClick={() => {
          categoriesQuery.refetch();
        }}
      >
        fetch all categories
      </button>
      <ul className="space-y-4 w-[25%] mx-auto mt-3">
        {categoriesQuery.data &&
          categoriesQuery.data.map((category) => (
            <li
              key={category.id}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <span className="font-medium text-gray-700">{category.name}</span>
              <button
                onClick={() => deleteCategoryMutation.mutate(category.id)}
                disabled={deleteCategoryMutation.isLoading}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  deleteCategoryMutation.isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {deleteCategoryMutation.isLoading ? "Deleting..." : "Delete"}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
