import React from "react";
import { useReducer } from "react";
import Button from "@mui/material/Button";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      if (state.counter > 0) {
        return { counter: state.counter - 1 };
      } else {
        return { ...state };
      }
    case "reset":
      return { counter: 0 };
    case "increment-by-number":
      return { counter: state.counter + action.payload };
    default:
      return { ...state };
  }
}
const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </Button>
      <span>{state.counter}</span>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: "increment-by-number", payload: 5 });
        }}
      >
        increment by 5
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </Button>
    </>
  );
};

export default CounterReducer;
