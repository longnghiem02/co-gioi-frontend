import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';
import { defaultPageItemList } from '../../common/interface/PageItemList.interface';

export const selectLoadingState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.loading ?? false,
);

export const selectManageMenuState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.manageMenu ?? false,
);

export const selectPageItemListData = createSelector(
  (state: RootState) => state.app,
  (app) => app?.pageItemList?.data ?? defaultPageItemList.data,
);

export const selectPageItemListMeta = createSelector(
  (state: RootState) => state.app,
  (app) => app?.pageItemList?.meta ?? defaultPageItemList.meta,
);

export const selectSearchValue = createSelector(
  (state: RootState) => state.app,
  (app) => app?.searchValue ?? false,
);

export const selectItemData = createSelector(
  (state: RootState) => state.app,
  (app) => app?.itemData ?? false,
);