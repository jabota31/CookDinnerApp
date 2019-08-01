import { createActions, createReducer } from 'reduxsauce';
import { AsyncStorage } from 'react-native';

import I18n from '../../i18n';

const defaultConfig = {
	lang: 'en',
	darkMode: false,
};

async function saveCfg(state: any) {
	try {
		AsyncStorage.setItem('config', JSON.stringify(state));
	} catch (err) {
		console.log(err);
	}
}

async function loadCfg(): Promise<any> {
	let state = {};
	try {
		let json = await AsyncStorage.getItem('config');
		if (json !== null) state = JSON.parse(json);
		else throw Error;
	} catch (err) {
		console.log(err);
	}
	return state;
}

//load initial state from local storage
let INITIAL_STATE: any = defaultConfig;
loadCfg().then(cfg => {
	INITIAL_STATE = cfg;
});

//reducer handlers
const changeLang = (state = INITIAL_STATE, action: any) => {
	let lang = state.lang;
	if (lang == 'en') lang = 'pt';
	else if (lang == 'pt') lang = 'fr';
	else if (lang == 'fr') lang ='jp';
	else lang = 'en';
	state = { ...state, lang };
	I18n.locale = lang;
	saveCfg(state);
	return state;
};

const toggleDarkmode = (state = INITIAL_STATE, action: any) => {
	state = { ...state, darkMode: !state.config.darkMode };
	saveCfg(state);
	return state;
};

//action types & creators
export const { Types, Creators } = createActions({
	changeLang: [],
	toggleDarkmode: []
});

//reducer
export default createReducer(INITIAL_STATE, {
	[Types.CHANGE_LANG]: changeLang,
	[Types.TOGGLE_DARKMODE]: toggleDarkmode,
});