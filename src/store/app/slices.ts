import { createSlice } from '@reduxjs/toolkit';
import { ItemData, defaultItemData } from '../../common/interface/ItemData.interface';
import { PageItemList, defaultPageItemList } from '../../common/interface/PageItemList.interface';
import { Filter, defaultFilter } from '../../common/interface/Filter.interface';
import type { RootState } from '../index';

interface AppState {
	loading: boolean;
	theme: string;
	manageMenu: boolean;
	settingMenu: boolean;
	infoModal: boolean;
	pageItemList: PageItemList;
	filter: Filter;
	itemData: ItemData;
}

const initialState: AppState = {
	loading: false,
	theme: 'light',
	manageMenu: false,
	settingMenu: false,
	infoModal: false,
	pageItemList: defaultPageItemList,
	filter: defaultFilter,
	itemData: defaultItemData,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoadingState: (state, action) => {
			state.loading = action.payload;
		},
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setManageMenuState: (state, action) => {
			state.manageMenu = action.payload;
		},
		setSettingMenuState: (state, action) => {
			state.settingMenu = action.payload;
		},
		setInfoModalState: (state, action) => {
			state.infoModal = action.payload;
		},
		setPageItemList: (state, action) => {
			state.pageItemList = action.payload;
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		setItemData: (state, action) => {
			state.itemData = action.payload;
		},
	},
});

export const {
	setLoadingState,
	setTheme,
	setManageMenuState,
	setSettingMenuState,
	setInfoModalState,
	setPageItemList,
	setFilter,
	setItemData,
} = appSlice.actions;

export const appPersistConfig = {
	key: 'app',
	whitelist: ['theme'],
};

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
