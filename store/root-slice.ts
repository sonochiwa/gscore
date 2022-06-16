import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initial-state';
import { v4 as uuidv4 } from 'uuid';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {

    signUp(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },

    logIn(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },

    logOut(state, action: PayloadAction<any>) {
      state.token = undefined;
      state.id = '';
      state.username = 'username';
      state.email = '';
    }
  },
});

export const {
  signUp,
  logIn,
  logOut
} = rootSlice.actions;

export default rootSlice.reducer;