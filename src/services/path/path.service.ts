import httpRequest from '../../config/axios';

export const getPathService = async (id: number) => {
	const response = await httpRequest.get(`/path/${id}`);
	return response.data;
};

export const getAllPathService = async (data: any) => {
	const response = await httpRequest.get(`/path?page=${data.page}&limit=${data.limit}&search=${data.search ? data.search : ''}`);
	return response.data;
};

export const addPathService = async (data: any) => {
	const response = await httpRequest.post(`/path`, data);
	return response.data;
};

export const updatePathService = async (id: number, data: any) => {
	const response = await httpRequest.put(`/path/${id}`, data);
	return response.data;
};

export const deletePathService = async (id: number) => {
	const response = await httpRequest.delete(`/path/${id}`);
	return response.data;
};

export const getAllPathNameService = async () => {
	const response = await httpRequest.get(`/path/all/name`);
	return response.data;
};
