import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    incrementByAmount: (state, action)=>{
        state.counter += action.payload;
    },
    decrementByAmount: (state, action)=>{
        state.counter -= action.payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;
