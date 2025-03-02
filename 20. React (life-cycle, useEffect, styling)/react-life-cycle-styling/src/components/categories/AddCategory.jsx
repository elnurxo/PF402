import React from "react";

const AddCategory = ({ data, newCategory, setData, setNewCategory }) => {
  return (
    <>
      <h2>Add New Category</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://northwind.vercel.app/api/categories", {
            method: "POST",
            body: JSON.stringify(newCategory),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((newCat) => {
              setData([...data, newCat]);
              setNewCategory({ name: "", description: "" });
            });
        }}
      >
        <input
          onChange={(e) => {
            setNewCategory({ ...newCategory, name: e.target.value });
          }}
          value={newCategory.name}
          type="text"
          placeholder="category name"
          required
        />
        <input
          onChange={(e) => {
            setNewCategory({ ...newCategory, description: e.target.value });
          }}
          value={newCategory.description}
          type="text"
          placeholder="category description"
          required
        />
        <button type="submit">add category</button>
      </form>
    </>
  );
};

export default AddCategory;
