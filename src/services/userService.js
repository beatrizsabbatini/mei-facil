import api from './index';

export const getUserPersonalData = () => {

	return api.request({
		method: 'GET',
		url: '/user',
		params: {
			cpf: '410.729.308-46'
		}
		
	});
};