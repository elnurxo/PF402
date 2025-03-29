import React, { useState, useMemo } from "react";

function FilterListExample() {
  const [query, setQuery] = useState("");
  //store all fruits
  const [list] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Melons",
  ]);

  // Filter the list based on the query
  const filteredList = useMemo(() => {
    console.log("Filtering list...");
    return list.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, list]); // Recalculate only when "query" or "list" changes

  return (
    <div>
      <h1>Filter List Example</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterListExample;
