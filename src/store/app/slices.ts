import { createSlice } from '@reduxjs/toolkit';

import { ItemData, defaultItemData } from '../../common/interface/ItemData.interface';
import { PageItemList, defaultPageItemList } from '../../common/interface/PageItemList.interface';
import type { RootState } from '../index';

interface AppState {
	loading: boolean;
	manageMenu: boolean;
	pageItemList: PageItemList;
	searchValue: string;
	itemData: ItemData;
}

const initialState: AppState = {
	loading: false,
	manageMenu: false,
	pageItemList: defaultPageItemList,
	searchValue: '',
	itemData: defaultItemData,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoadingState: (state, action) => {
			state.loading = action.payload;
		},
		setManageMenuState: (state, action) => {
			state.manageMenu = action.payload;
		},
		setPageItemList: (state, action) => {
			state.pageItemList = action.payload;
		},
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		setItemData: (state, action) => {
			state.itemData = action.payload;
		},
	},
});

export const { setLoadingState, setManageMenuState, setPageItemList, setSearchValue, setItemData } = appSlice.actions;

export const appPersistConfig = {
	key: 'app',
	whitelist: [],
};

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
