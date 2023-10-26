import httpRequest from '../../config/axios';

export const getPathService = async (id: number) => {
	const response = await httpRequest.get(`/path/get?id=${id}`);
	return response.data;
};

export const getAllPathService = async (data: any) => {
	const response = await httpRequest.get(`/path/get-all?take=${data.take}&page=${data.page}`);
	return response.data;
};

export const searchPathService = async (data: any) => {
	const response = await httpRequest.get(`/path/search?take=${data.take}&page=${data.page}&name=${data.name}`);
	return response.data;
};

export const addPathService = async (data: any) => {
	const response = await httpRequest.post(`/path/add`, data);
	return response.data;
};

export const updatePathService = async (id: number, data: any) => {
	const response = await httpRequest.put(`/path/update/${id}`, data);
	return response.data;
};

export const deletePathService = async (id: number) => {
	const response = await httpRequest.delete(`/path/delete/${id}`);
	return response.data;
};

export const getAllPathNameService = async () => {
	const response = await httpRequest.get(`/path/get-all-name`);
	return response.data;
};
