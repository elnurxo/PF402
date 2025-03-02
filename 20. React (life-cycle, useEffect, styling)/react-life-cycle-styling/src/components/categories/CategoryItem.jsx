import React from "react";

const CategoryItem = ({ category, setUpdating, setData }) => {
  return (
    <li key={category.id}>
      <span>{category?.name}</span>
      {/* edit button */}
      <button
        onClick={() => {
          setUpdating(category);
        }}
      >
        edit
      </button>
      {/* delete button */}
      <button
        onClick={() => {
          if (window.confirm("are you sure to delete?")) {
            //delete from API
            fetch(
              `https://northwind.vercel.app/api/categories/${category.id}`,
              {
                method: "DELETE",
              }
            );
            //state update for UI change
            setData((currentData) => {
              return currentData.filter((x) => x.id != category.id);
            });
          }
        }}
      >
        delete
      </button>
    </li>
  );
};

export default CategoryItem;
