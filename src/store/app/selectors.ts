import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';
import { defaultPageItemList } from '../../common/interface/PageItemList.interface';

export const selectLoadingState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.loading ?? false,
);

export const selectTheme = createSelector(
  (state: RootState) => state.app,
  (app) => app?.theme ?? false,
);

export const selectManageMenuState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.manageMenu ?? false,
);

export const selectSettingMenuState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.settingMenu ?? false,
);

export const selectInfoModalState = createSelector(
  (state: RootState) => state.app,
  (app) => app?.infoModal ?? false,
);

export const selectPageItemListData = createSelector(
  (state: RootState) => state.app,
  (app) => app?.pageItemList?.data ?? defaultPageItemList.data,
);

export const selectPageItemListMeta = createSelector(
  (state: RootState) => state.app,
  (app) => app?.pageItemList?.meta ?? defaultPageItemList.meta,
);

export const selectFilter = createSelector(
  (state: RootState) => state.app,
  (app) => app?.filter ?? false,
);

export const selectItemData = createSelector(
  (state: RootState) => state.app,
  (app) => app?.itemData ?? false,
);