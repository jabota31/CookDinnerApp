import { createActions, createReducer } from 'reduxsauce';

import { saveState, loadState } from '../../util/statePersist';
import { setApiToken } from '../../services/cookDinnerApi';
import { AuthState } from './types';

const defaultState: AuthState = {
	token: '',
	remindMe: false,
};

//load initial state from local storage
let INITIAL_STATE: AuthState = defaultState;
loadState('auth', defaultState).then(state => {
	INITIAL_STATE = state;
});

//reducer handlers
const toggleRemindme = (state = INITIAL_STATE, action: any) => {
	state = { ...state, remindMe: !state.remindMe };
	saveState('auth', state);
	return state;
};

const deleteToken = (state = INITIAL_STATE, action: any) => {
	state = { ...state, token: '' };
	saveState('auth', state);
	setApiToken('');
	return state;	
};

const setToken = (state = INITIAL_STATE, action: any) => {
	state = { ...state, token: action.token };
	saveState('auth', state);
	setApiToken(action.token);
	return state;
};

//action types & creators
export const { Types, Creators } = createActions({
	toggleRemindme: null,
	deleteToken: null,
	setToken: ['token']
});

//reducer
export default createReducer(INITIAL_STATE, {
	[Types.TOGGLE_REMINDME]: toggleRemindme,
	[Types.DELETE_TOKEN]: deleteToken,
	[Types.SET_TOKEN]: setToken
});