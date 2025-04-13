import {
  useFetchCategoriesQuery,
  useFetchCategoryByIdQuery,
  useDeleteCategoryMutation,
} from "./api/categoriesApi.js";
import { Info, BadgeMinus } from "lucide-react";
import { useState } from "react";

function App() {
  // get all categories
  const { data: categories, isLoading, isError } = useFetchCategoriesQuery();
  const [id, setId] = useState(null);
  const { data: category } = useFetchCategoryByIdQuery(id);
  const [deleteCategory] = useDeleteCategoryMutation();

  //modal
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setId(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 mt-2.5 text-center">
        API usage with RTK query!
      </h1>

      {/* all categories */}
      <ul className="flex flex-col mt-8 gap-3.5 w-full sm:max-w-md m-auto">
        {categories &&
          categories.map((category) => {
            return (
              <li
                key={category.id}
                className="w-full bg-gray-100 p-3 rounded-md flex justify-between items-center"
              >
                <span>{category.name}</span>
                <div className="flex gap-x-2">
                  <button
                    onClick={() => {
                      setId(category.id);
                      setIsOpen(true);
                    }}
                    class="px-2 py-1 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  >
                    <Info />
                  </button>
                  <button
                    onClick={() => {
                      deleteCategory(category.id);
                    }}
                    class="px-2 py-1 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  >
                    <BadgeMinus />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      {isLoading && (
        <div className="flex space-x-2 justify-center my-[60px] bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-5 w-5 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-blue-800 rounded-full animate-bounce"></div>
        </div>
      )}
      {isError && (
        <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 w-[30%] mx-auto text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <svg
            className="w-12 h-12 dark:text-gray-400 text-gray-700"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="File_Off">
              <g>
                <path d="M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z"></path>
                <path d="M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z"></path>
              </g>
            </g>
          </svg>
          <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">
            File not found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            The file you are looking for could not be located.
          </p>
        </div>
      )}
      {/* modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-700 mb-4">
              {category?.name} | {category?.description}
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
