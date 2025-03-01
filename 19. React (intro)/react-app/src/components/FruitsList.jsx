import React from "react";

const FruitsList = ({ fruits }) => {
  return (
    <ul>
      {fruits &&
        fruits.map((fruit, idx) => {
          return <li key={idx}>{fruit}</li>;
        })}
    </ul>
  );
};

export default FruitsList;
