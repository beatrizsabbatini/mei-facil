import api from './index';

export const getCompanyData = () => {
	return api.request({
		method: 'GET',
		url: '/company',
	});
};