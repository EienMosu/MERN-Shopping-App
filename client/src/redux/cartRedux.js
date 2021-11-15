import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
    found: false,
  },
  reducers: {
    addProduct: (state, action) => {
      for (var i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === action.payload._id) {
          state.found = true;
          break;
        }
      }
      if (!state.found) {
        state.cartQuantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
      state.found = action.payload.found;
    },
    deleteProduct: (state, action) => {
      state.cartQuantity -= 1;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    successOrder: (state) => {
      state.cartQuantity = 0;
      state.total = 0;
      state.products = [];
    },
  },
});

export const { addProduct, deleteProduct, successOrder } = cartSlice.actions;
export default cartSlice.reducer;
