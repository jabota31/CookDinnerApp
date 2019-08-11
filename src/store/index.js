import { createStore, combineReducers } from 'redux';

import config, { Types as ConfigTypes } from './config';
import auth, { Types as AuthTypes } from './auth';


const store = createStore(combineReducers({
	config,
	auth,
}));

export const Types = { ...AuthTypes, ...ConfigTypes };

export default store;
