import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../services/redux/slices/counterSlice.js";
const Decrement = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrement())}>Decrement (-)</button>;
};

export default Decrement;
