import api from './index';

export const authenticateUser = ({cpf, password}) => {
	return api.request({
		method: 'POST',
		url: '/authentication',
		data: {
			cpf: cpf,
			password: password
		}
	})
};
