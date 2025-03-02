import React from "react";

const UpdateCategory = ({ updating, setUpdating, setData }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //fetch update
        fetch(`https://northwind.vercel.app/api/categories/${updating.id}`, {
          method: "PATCH",
          body: JSON.stringify(updating),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        //state update
        setData((currentData) => {
          const found = currentData.find((x) => x.id == updating.id);
          found.name = updating.name;
          found.description = updating.description;
          return currentData;
        });
        setUpdating(null);
      }}
    >
      <input
        type="text"
        value={updating.name}
        onChange={(e) => {
          setUpdating((currentState) => {
            return { ...currentState, name: e.target.value };
          });
        }}
        placeholder="category name"
      />
      <input
        type="text"
        onChange={(e) => {
          setUpdating((currentState) => {
            return { ...currentState, description: e.target.value };
          });
        }}
        value={updating.description}
        placeholder="category description"
      />
      <button type="submit">update</button>
      <button
        onClick={() => {
          setUpdating(null);
        }}
        type="reset"
      >
        cancel
      </button>
    </form>
  );
};

export default UpdateCategory;
