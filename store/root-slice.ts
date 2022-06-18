import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initial-state';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {

    signUp(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },

    addProductToCart(state, action: PayloadAction<any>) {
      state.cartProducts.push(action.payload);
    },

    removeProductFromcart(state, action: PayloadAction<any>) {
      state.cartProducts.splice(action.payload.index, 1);
    },

    clearLisence(state) {
      state.cartProducts = [];
    },

    logIn(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },

    logOut(state, action: PayloadAction<any>) {
      state.cartProducts = [];
      state.token = undefined;
      state.id = '';
      state.username = 'username';
      state.email = '';
    }
  },
});

export const {
  signUp,
  addProductToCart,
  removeProductFromcart,
  logIn,
  logOut
} = rootSlice.actions;

export default rootSlice.reducer;