import { AsyncStorage } from 'react-native';

export async function saveState(key, state) {
	AsyncStorage.setItem(key, JSON.stringify(state));
}

export async function loadState(key, defaultState) {
	const json = await AsyncStorage.getItem(key);
	return json ? JSON.parse(json) : defaultState;
}

export async function destroyState(key) {
	AsyncStorage.removeItem(key);
}
