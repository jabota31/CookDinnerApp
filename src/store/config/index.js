import { createActions, createReducer } from 'reduxsauce';

import { saveState, loadState } from '../../util/statePersist';
import I18n from '../../i18n';

const defaultState = {
	lang: 'en',
	darkMode: false,
};

// load initial state from local storage
let INITIAL_STATE = defaultState;
loadState('config', defaultState).then((cfg) => {
	INITIAL_STATE = cfg;
});

// reducer handlers
const changeLang = (state = INITIAL_STATE, action) => {
	let { lang } = state;
	if (lang === 'en') lang = 'pt';
	else if (lang === 'pt') lang = 'fr';
	else if (lang === 'fr') lang = 'jp';
	else lang = 'en';
	const newState = { ...state, lang };
	I18n.locale = lang;
	saveState('config', newState);
	return newState;
};

const toggleDarkmode = (state = INITIAL_STATE, action) => {
	const newState = { ...state, darkMode: !state.darkMode };
	saveState('config', newState);
	return newState;
};

// action types & creators
export const { Types, Creators } = createActions({
	changeLang: null,
	toggleDarkmode: null,
});

// reducer
export default createReducer(INITIAL_STATE, {
	[Types.CHANGE_LANG]: changeLang,
	[Types.TOGGLE_DARKMODE]: toggleDarkmode,
});
