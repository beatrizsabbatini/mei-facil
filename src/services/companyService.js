import api from './index';

export const getCompanyData = ({token}) => {
	return api.request({
		method: 'GET',
		url: '/company',
		headers: {
			authorization: `Bearer ${token}`
		}
	});
};