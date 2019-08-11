import { sha256 } from 'react-native-sha256';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://cookdinnerapi.herokuapp.com/',
});

export async function login(username, password) {
	// FIXME: login request
	const sha = sha256(password);
	try {
		const response = await api.post('login', {
			username,
			password: sha,
		});
		return response.data;
	} catch {
		return false;
	}
}

export function setApiToken(token) {
	api.defaults.headers.Authorization = `Bearer ${token}`;
}

export async function register(name, email, password) {
	// FIXME: register request
	const sha = sha256(password);
	try {
		const response = await api.post('sign_in', {
			password: sha,
			email,
			name,
		});
		return response.data;
	} catch {
		return false;
	}
}

export default api;
