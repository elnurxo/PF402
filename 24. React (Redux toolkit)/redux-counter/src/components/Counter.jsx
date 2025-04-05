import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  return <span>Counter: {counter}</span>;
};

export default Counter;
