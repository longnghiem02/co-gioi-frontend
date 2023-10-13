import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const selectLoggedInState = createSelector(
  (state: RootState) => state.auth,
  (authentication) => authentication?.isLoggedIn ?? false,
);