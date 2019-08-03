import { AsyncStorage } from 'react-native';

export async function saveState(key: string, state: any): Promise<void> {
	try {
		AsyncStorage.setItem(key, JSON.stringify(state));
	} catch (err) {
		console.log(err);
	}
}

export async function loadState(key:string, defaultState: any): Promise<any> {
	let state: any = defaultState;
	try {
		let json = await AsyncStorage.getItem(key);
		if (json !== null) state = JSON.parse(json);
		else throw Error;
	} catch (err) {
		console.log(err);
	}
	return state;
}