import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  total: 0,
  cartItems: [],
  orderMessage: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addtoCart(state, action) {
      if (state.cartItems.find((item) => item.id === action.payload.item.id)) {
        state.cartItems.forEach((item) => {
          if (item.id === action.payload.item.id) {
            state.total += action.payload.input;
            item.count += action.payload.input;
            item.price += action.payload.price;
          }
        });
      } else {
        state.total += action.payload.input;
        const cloneItems = { ...action.payload.item };
        state.cartItems.splice(state.cartItems.length, 0, cloneItems);
        state.cartItems.forEach((item) => {
          if (item.id === action.payload.item.id) {
            item.count += action.payload.input;
            item.price *= action.payload.input;
          }
        });
      }
    },
    clearCart(state) {
      state.cartItems.splice(0, state.cartItems.length);
      state.total = 0;
    },
    setOrderMessage(state, action) {
      state.orderMessage = action.payload;
    },
    increaseCart(state, action) {
      state.total++;
      if (state.cartItems.find((item) => item.id === action.payload.item.id)) {
        state.cartItems.forEach((item) => {
          if (item.id === action.payload.item.id) {
            item.count++;
            item.price += action.payload.price;
          }
        });
      }
    },
    decreaseCart(state, action) {
      state.total--;
      if (state.cartItems.find((item) => item.id === action.payload.item.id)) {
        state.cartItems.forEach((item, i) => {
          if (item.id === action.payload.item.id) {
            if (item.count <= 1) {
              state.cartItems.splice(i, 1);
            }
            item.count--;
            item.price -= action.payload.price;
          }
        });
      }
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice;
