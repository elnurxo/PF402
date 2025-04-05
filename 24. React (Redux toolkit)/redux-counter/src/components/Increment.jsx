import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../services/redux/slices/counterSlice.js";

const Increment = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(increment());
      }}
    >
      Increment (+)
    </button>
  );
};

export default Increment;
