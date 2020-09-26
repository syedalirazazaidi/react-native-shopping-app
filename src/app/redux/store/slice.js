import {createSlice} from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  //  in couterSlice we have reducer and action
  name: 'counter',
  initialState: 0,
  reducers: {
    // increment: (state) => state + 1,
    // decrement: (state) => state - 1,
  },
});

//  we can export reducer and action
// export const {increment, decrement} = counterSlice.actions;
export const {reducers} = counterSlice.reducer;
