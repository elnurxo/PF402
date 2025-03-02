import React from "react";

const SearchCategory = ({setSearchQuery}) => {
  return (
    <input
      onChange={(e) => {
        setSearchQuery(e.target.value.trim().toLowerCase());
      }}
      type="text"
      placeholder="search category"
    />
  );
};

export default SearchCategory;
