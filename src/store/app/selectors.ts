import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const selectLoadingState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.loading ?? false,
);

export const selectManageMenuState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.manageMenu ?? false,
);

export const selectPageItemList = createSelector(
  (state: RootState) => state.app,
  (app) => app?.pageItemList ?? false,
);