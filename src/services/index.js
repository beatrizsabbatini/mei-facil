import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.0.26:3333',
});

/*api.interceptors.request.use(async config => {
	const token = await AsyncStorage.getItem('token');
	let headers = { ...config.headers };
	if (token) {
		headers.authorization = `Bearer ${token}`;
	}
	return { ...config, headers };
});*/

export default api;
