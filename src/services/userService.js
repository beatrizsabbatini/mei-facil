import api from './index';

export const getUserPersonalData = ({cpf, token}) => {

	return api.request({
		method: 'GET',
		url: '/user',
		params: {
			cpf: cpf
		},
		headers: {
			authorization: `Bearer ${token}`
		}
		
	});
};