import { createStore, Store, combineReducers } from 'redux';

import { ConfigState } from './config/types';
import { AuthState } from './auth/types';
import config from './config';
import auth from './auth';

export interface AppState {
	config: ConfigState;
	auth: AuthState;
}

const store: Store<AppState> = createStore(combineReducers({
	config,
	auth
}));

export default store;





