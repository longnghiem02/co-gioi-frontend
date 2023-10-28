import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';

interface AuthState {
  accessToken: string
}

const initialState: AuthState = {
  accessToken: ''
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const {
  setAccessToken
} = authSlice.actions;

export const authPersistConfig = {
  key: 'auth',
	whitelist: ['accessToken'],
}

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
