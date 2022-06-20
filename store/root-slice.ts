import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { IAddProductToCart, ISetAccessToken, IRemoveProductFromСart, ISetUsername, ISetEmail } from "./types";

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<ISetAccessToken>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },

    logOut(state) {
      state.cartProducts = [];
      state.token = undefined;
      state.username = "username";
      state.email = "example@email.com";
    },

    addProductToCart(state, action: PayloadAction<IAddProductToCart>) {
      state.cartProducts.push(action.payload);
    },

    removeProductFromСart(state, action: PayloadAction<IRemoveProductFromСart>) {
      state.cartProducts.splice(action.payload.index, 1);
    },

    setUsername(state, action: PayloadAction<ISetUsername>) {
      state.username = action.payload.username
    },

    setEmail(state, action: PayloadAction<ISetEmail>) {
      state.email = action.payload.email
    },
  },
});

export const {
  setAccessToken,
  logOut,
  addProductToCart,
  removeProductFromСart,
  setUsername,
  setEmail,

} = rootSlice.actions;

export default rootSlice.reducer;