import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'carts',
  initialState: {products: [], total: 0},
  reducers: {
    addProduct: (state = initialState, action) => {
      const item = action.payload;
      const {id, price} = item;
      const findProductIdx = state.products.findIndex((prod) => prod.id === id);
      if (findProductIdx !== -1) {
        state.products[findProductIdx].qty += 1;
      } else {
        state.products.push({
          id: item.id,
          name: item.name,
          photo: item.photo,
          price: item.price,
          qty: 1,
        });
      }
      state.total += price;
    },

    removeProduct: (state, action) => {
      const id = action.payload;

      // return {products: state.products.filter((m) => m.id !== id).length > 0};
      console.log(state, 'UUUUUUUUUUU');
      return {products: state.products.filter((m) => m.id !== id)};
      // return stateNew;
      // return state;
      // console.log('ID: ', action.payload);
      // const findProductIdx = state.products.findIndex((prod) => prod.id === id);
      // if (findProductIdx !== -1) {
      //   const product = state.products[findProductIdx];
      //   if (product.qty > 1) {
      //     state.products[findProductIdx].qty -= 1;
      //   } else {
      //     state.products = state.products.filter((prod) => prod.id !== id);
      //   }
      //   state.total -= product.price;
      // }
    },
  },
});

export const {addProduct, removeProduct} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
