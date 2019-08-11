import { createActions, createReducer } from 'reduxsauce';

import { saveState, loadState } from '../../util/statePersist';
import { setApiToken } from '../../services/cookDinnerApi';

const defaultState = {
	token: '',
	remindMe: false,
};

// load initial state from local storage
let INITIAL_STATE = defaultState;
loadState('auth', defaultState).then((state) => {
	INITIAL_STATE = state;
});

// reducer handlers
const toggleRemindme = (state = INITIAL_STATE, action) => {
	const newState = { ...state, remindMe: !state.remindMe };
	saveState('auth', newState);
	return newState;
};

const deleteToken = (state = INITIAL_STATE, action) => {
	const newState = { ...state, token: '' };
	saveState('auth', newState);
	setApiToken('');
	return newState;
};

const setToken = (state = INITIAL_STATE, action) => {
	const newState = { ...state, token: action.token };
	saveState('auth', newState);
	setApiToken(action.token);
	return newState;
};

// action types & creators
export const { Types, Creators } = createActions({
	toggleRemindme: null,
	deleteToken: null,
	setToken: ['token'],
});

// reducer
export default createReducer(INITIAL_STATE, {
	[Types.TOGGLE_REMINDME]: toggleRemindme,
	[Types.DELETE_TOKEN]: deleteToken,
	[Types.SET_TOKEN]: setToken,
});
