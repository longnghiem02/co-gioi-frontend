import httpRequest from '../../config/axios';

export const getGuService = async (id: number) => {
	const response = await httpRequest.get(`/gu/get?id=${id}`);
	return response.data;
};

export const getAllGuService = async (data: any) => {
	const response = await httpRequest.get(`/gu/get-all?take=${data.take}&page=${data.page}`);
	return response.data;
};

export const searchGuService = async (data: any) => {
	const response = await httpRequest.get(`/gu/search?take=${data.take}&page=${data.page}&name=${data.name}`);
	return response.data;
};

export const addGuService = async (data: any) => {
	const response = await httpRequest.post(`/gu/add`, data);
	return response.data;
};

export const updateGuService = async (id: number, data: any) => {
	const response = await httpRequest.put(`/gu/update/${id}`, data);
	return response.data;
};

export const deleteGuService = async (id: number) => {
	const response = await httpRequest.delete(`/gu/delete/${id}`);
	return response.data;
};
