import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initial-state';
import { v4 as uuidv4 } from 'uuid';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {

    setToken(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.username = action.payload.username
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
  setToken,
  logOut
} = rootSlice.actions;

export default rootSlice.reducer;