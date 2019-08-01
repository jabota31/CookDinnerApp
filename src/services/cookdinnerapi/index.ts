import api from './api';
import { sha256 } from 'react-native-sha256';

export async function login(username: string, password: string): Promise<Object>{
	let sha = sha256(password);
	return api.post('sign_in', {
		username: username,
		password: sha
	});
}