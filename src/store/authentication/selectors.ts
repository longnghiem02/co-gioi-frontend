import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const selectAccessToken = createSelector(
  (state: RootState) => state.auth,
  (authentication) => authentication?.accessToken ?? false,
);