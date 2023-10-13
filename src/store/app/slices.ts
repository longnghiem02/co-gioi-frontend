import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';

interface AppState {
	loading: boolean;
	manageMenu: boolean;
	pageItemList: {
		data: [];
		meta: {
			totalItem: number;
			itemPerPage: number;
			totalPage: number;
			currentPage: number;
			hasPreviousPage: boolean;
			hasNextPage: boolean;
		};
	};
}

const initialState: AppState = {
	loading: false,
	manageMenu: false,
	pageItemList: {
		data: [],
		meta: {
			totalItem: 0,
			itemPerPage: 0,
			totalPage: 0,
			currentPage: 0,
			hasPreviousPage: false,
			hasNextPage: false,
		},
	},
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
	},
});

export const { setLoadingState, setManageMenuState, setPageItemList } = appSlice.actions;

export const appPersistConfig = {
	key: 'app',
	whitelist: ['pageItemList'],
};

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
