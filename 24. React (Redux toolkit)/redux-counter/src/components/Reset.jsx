import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../services/redux/slices/counterSlice.js";

const Reset = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(reset())}>Reset</button>;
};

export default Reset;
