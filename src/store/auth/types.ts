//State Type
export interface AuthState {
	token: string;
	remindMe: boolean;
}

//Action types
export enum AuthTypes {
	TOGGLE_REMINDME = '@auth/TOGGLE_REMINDME',
	DELETE_TOKEN = '@auth/DELETE_TOKEN',
	SET_TOKEN = '@auth/SET_TOKEN'
}