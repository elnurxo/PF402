import React from "react";
import { useDispatch } from "react-redux";
import { decrementByAmount } from "../services/redux/slices/counterSlice.js";

const DecrementByAmount = ({ amount }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(decrementByAmount(amount));
      }}
    >
      decrement by {amount}
    </button>
  );
};

export default DecrementByAmount;
