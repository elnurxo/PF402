import React, { useState } from "react";

const Counter = () => {
  // useState hook
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter((prevState) => {
              return --prevState;
            });
          } else {
            window.alert("minimum is zero!");
          }
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((prevState) => ++prevState);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
    </>
  );
};

export default Counter;
