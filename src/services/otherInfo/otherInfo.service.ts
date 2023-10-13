import httpRequest from "../../config/axios";

export const getAllOtherInfoService = async (data: any) => {
  const response = await httpRequest.get(`/api/get-all-other-info?take=${data.take}&page=${data.page}&type=${data.type ? data.type : ''}`);
  return response.data
}