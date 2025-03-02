import React, { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import axios from "axios";
import SearchCategory from "./SearchCategory";
import SortCategory from "./SortCategory";
import CategoryItem from "./CategoryItem";
import UpdateCategory from "./UpdateCategory";
import CategoryList from "./CategoryList";

const Category = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [updating, setUpdating] = useState(null);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  //fetch data on page load
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((categories) => {
        setData([...categories.data]);
        setFilteredData([...categories.data]);
      })
      .catch((err) => {
        if (err.message) {
          setError(err.message);
        } else {
          setError("failed to fetch!");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //search
  useEffect(() => {
    setFilteredData(() => {
      return data.filter((x) =>
        x?.name?.toLowerCase().trim().includes(searchQuery)
      );
    });
  }, [searchQuery, data]);
  return (
    <>
      <h1>Fetching data with useEffect</h1>
      <AddCategory
        data={data}
        newCategory={newCategory}
        setData={setData}
        setNewCategory={setNewCategory}
      />
      <hr />

      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <SearchCategory setSearchQuery={setSearchQuery} />
          <SortCategory setData={setData} />
          <CategoryList>
            {filteredData &&
              filteredData.map((category) => {
                return (
                  <CategoryItem
                    key={category.id}
                    category={category}
                    setUpdating={setUpdating}
                    setData={setData}
                  />
                );
              })}
          </CategoryList>
          {/* update form */}
          {updating && (
            <UpdateCategory
              updating={updating}
              setUpdating={setUpdating}
              setData={setData}
            />
          )}
        </>
      )}

      <hr />
    </>
  );
};

export default Category;
