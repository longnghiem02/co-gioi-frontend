import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  setLoginState,
} = authSlice.actions;

export const authPersistConfig = {
  key: 'auth',
	whitelist: ['isLoggedIn'],
}

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
