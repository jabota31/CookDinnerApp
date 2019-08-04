import { sha256 } from 'react-native-sha256';
import axios from 'axios';

import store from '../store';
import { AuthTypes } from '../store/auth/types';

const api = axios.create({
	baseURL: 'https://cookdinnerapi.herokuapp.com/',
});


export async function login(username: string, password: string): Promise<boolean>{
	//FIXME: login request
	let sha = sha256(password);
	try {
		let response = await api.post('login', {
			username: username,
			password: sha
		});
		store.dispatch({ type: AuthTypes.SET_TOKEN, token: response.data });
		return true;

	} catch{
		return false;
	}
}

export function setApiToken(token: string) {
	api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export async function register(name: string, email: string, password: string) {
	//FIXME: register request
	let sha = sha256(password);
	try {
		let response = await api.post('sign_in', {
			password: sha,
			email,
			name
		});
		store.dispatch({ type: AuthTypes.SET_TOKEN, token: response.data });
		return true;

	} catch{
		return false;
	}
}

export default api;