import httpRequest from '../../config/axios';

export const getAllPathService = async (data: any) => {
	const response = await httpRequest.get(`/api/path/get-all?take=${data.take}&page=${data.page}`);
	return response.data;
};

export const searchPathService = async (data: any) => {
	const response = await httpRequest.get(`/api/path/search?take=${data.take}&page=${data.page}&name=${data.name}`);
	return response.data;
};

export const getPathService = async (id: number) => {
	const response = await httpRequest.get(`/api/path/get?id=${id}`);
	return response.data;
};

export const getAllPathNameService = async () => {
	const response = await httpRequest.get(`/api/path/get-all-name`);
	return response.data;
};
