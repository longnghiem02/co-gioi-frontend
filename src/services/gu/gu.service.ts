import httpRequest from '../../config/axios';

export const getGuService = async (id: number) => {
	const response = await httpRequest.get(`/gu/${id}`);
	return response.data;
};

export const getAllGuService = async (data: any) => {
	const response = await httpRequest.get(
		`/gu?page=${data.page}&limit=${data.limit}&search=${data.search ? data.search : ''}${
			data.pathId ? `&pathId=` + data.pathId : ''
		}`,
	);
	return response.data;
};

export const addGuService = async (data: any) => {
	const response = await httpRequest.post(`/gu`, data);
	return response.data;
};

export const updateGuService = async (id: number, data: any) => {
	const response = await httpRequest.put(`/gu/${id}`, data);
	return response.data;
};

export const deleteGuService = async (id: number) => {
	const response = await httpRequest.delete(`/gu/${id}`);
	return response.data;
};
