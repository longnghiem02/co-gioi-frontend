export interface PageItemList {
	data: any[];
	meta: {
		totalItems: number;
		itemsPerPage: number;
		totalPages: number;
		currentPage: number;
		hasPreviousPage: boolean;
		hasNextPage: boolean;
	};
}

export const defaultPageItemList = {
	data: [],
	meta: {
		totalItems: 0,
		itemsPerPage: 0,
		totalPages: 0,
		currentPage: 0,
		hasPreviousPage: false,
		hasNextPage: false,
	},
};
