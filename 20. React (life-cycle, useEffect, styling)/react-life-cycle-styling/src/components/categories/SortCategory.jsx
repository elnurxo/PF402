import React from "react";

const SortCategory = ({setData}) => {
  return (
    <select
      onChange={(e) => {
        if (e.target.value == "a-z") {
          setData((currentData) => {
            return [
              ...currentData.sort((a, b) => a.name?.localeCompare(b.name)),
            ];
          });
        } else {
          setData((currentData) => {
            return [
              ...currentData.sort((a, b) => b.name?.localeCompare(a.name)),
            ];
          });
        }
      }}
      name="sort"
      id="sort"
    >
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </select>
  );
};

export default SortCategory;
