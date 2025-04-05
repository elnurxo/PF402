import React from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../services/redux/slices/counterSlice.js";

const IncrementByAmount = ({ amount }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(incrementByAmount(amount));
      }}
    >
      increment by {amount}
    </button>
  );
};

export default IncrementByAmount;
