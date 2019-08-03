import { createActions, createReducer } from 'reduxsauce';

import { saveState, loadState } from '../../util/statePersist';
import I18n from '../../i18n';
import { ConfigState } from './types';

const defaultState: ConfigState = {
	lang: 'en',
	darkMode: false,
};

//load initial state from local storage
let INITIAL_STATE: ConfigState = defaultState;
loadState('config', defaultState).then(cfg => {
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
	saveState('config', state);
	return state;
};

const toggleDarkmode = (state = INITIAL_STATE, action: any) => {
	state = { ...state, darkMode: !state.darkMode };
	saveState('config', state);
	return state;
};

//action types & creators
export const { Types, Creators } = createActions({
	changeLang: null,
	toggleDarkmode: null
});

//reducer
export default createReducer(INITIAL_STATE, {
	[Types.CHANGE_LANG]: changeLang,
	[Types.TOGGLE_DARKMODE]: toggleDarkmode,
});