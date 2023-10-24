export interface PageItemList {
	data: any[];
	meta: {
		totalItem: number;
		itemPerPage: number;
		totalPage: number;
		currentPage: number;
		hasPreviousPage: boolean;
		hasNextPage: boolean;
	};
}

export const defaultPageItemList = {
	data: [],
	meta: {
		totalItem: 0,
		itemPerPage: 0,
		totalPage: 0,
		currentPage: 0,
		hasPreviousPage: false,
		hasNextPage: false,
	},
};
