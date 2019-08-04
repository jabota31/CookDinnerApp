import { AsyncStorage } from 'react-native';

export async function saveState(key: string, state: any): Promise<void> {
	AsyncStorage.setItem(key, JSON.stringify(state));
}

export async function loadState(key:string, defaultState: any): Promise<any> {
	let json = await AsyncStorage.getItem(key);
	return json ? JSON.parse(json) : defaultState;
}

export async function destroyState(key: string): Promise<void> {
	AsyncStorage.removeItem(key);	
}