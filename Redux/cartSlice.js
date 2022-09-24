import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      state.push(action.payload);
    },
    removefromcart: (state, action) => {
      const index = state.findIndex((elm) => elm.id == action.payload.id);
      let newbasket = state;
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.log("cant remove element");
      }
      state = newbasket;
    },
  },
});
export const { addtocart, removefromcart } = cartSlice.actions;
export default cartSlice.reducer;
