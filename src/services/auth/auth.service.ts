import httpRequest from '../../config/axios';

export const signUpService = async (data: any) => {
	const response = await httpRequest.post(`/auth/sign-up`, data);
	return response.data;
};

export const signInService = async (data: any) => {
	const response = await httpRequest.post(`/auth/sign-in`, data);
	return response.data;
};

export const changePasswordService = async (data: any) => {
	const response = await httpRequest.post(`/auth/change-password`, data);
	return response.data;
};

