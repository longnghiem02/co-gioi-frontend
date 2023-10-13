import httpRequest from "../../config/axios";

export const getAllPathService = async (data: any) => {
  const response = await httpRequest.get(`/api/get-all-path?take=${data.take}&page=${data.page}`);
  return response.data
}

export const searchPathService = async (data: any) => {
  const response = await httpRequest.get(`/api/search-path?take=${data.take}&page=${data.page}&name=${data.name}`);
  return response.data
}