import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { ISetAccessToken, ISetUsername, IProducts } from "./types";

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<ISetAccessToken>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },

    logOut(state) {
      // state = initialState;
      state.token = undefined;
    },

    addProductToCart(state, action: PayloadAction<IProducts>) {
      state.products = [action.payload];
    },

    removeProductFromСart(state) {
      state.products = [];
    },

    setUsername(state, action: PayloadAction<ISetUsername>) {
      state.username = action.payload.username;
    },
  },
});

export const {
  setAccessToken,
  logOut,
  addProductToCart,
  removeProductFromСart,
  setUsername,

} = rootSlice.actions;

export default rootSlice.reducer;