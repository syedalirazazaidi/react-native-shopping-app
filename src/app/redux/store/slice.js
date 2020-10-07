import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'carts',
  initialState: {products: [], total: 0},
  reducers: {
    addProduct(state, action) {
      const {id, text} = action.payload;
      state.push({id, text, completed: false});
    },
    removeProduct(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
