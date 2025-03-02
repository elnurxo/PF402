import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState("");

  //use Effect hook
  useEffect(() => {
    console.log("Counter Updated");
    //cleanup function
    return () => {
      console.log("Component Unmounted!");
    };
  }, []);

  function handleCounter(option) {
    setCounter((currentState) => {
      if (option == "+") {
        return ++currentState;
      } else {
        return --currentState;
      }
    });
  }
  return (
    <>
      <h1>Hello life cycle, useEffect hook</h1>
      <hr />
      <button onClick={() => handleCounter("-")}>-</button>
      <span>{counter}</span>
      <button onClick={() => handleCounter("+")}>+</button>

      <hr />
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <p>{query}</p>
    </>
  );
};

export default LifeCycle;
