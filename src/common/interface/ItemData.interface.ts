export interface ItemData {
	id: number;
	name: string;
	path?: {
		id: number;
		name: string;
	};
	type?: {
		id: number;
		name: string;
	};
	rank?: {
		id: number;
		name: string;
	};
	description?: string;
	detail?: string;
}

export const defaultItemData = {
	id: 0,
	name: '',
	path: {
		id: 0,
		name: '',
	},
	type: {
		id: 0,
		name: '',
	},
	rank: {
		id: 0,
		name: '',
	},
	description: '',
	detail: '',
}
