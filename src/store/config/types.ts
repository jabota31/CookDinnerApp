//State type
export interface ConfigState {
	lang: string;
	darkMode: boolean;
}

//Action types
export enum ConfigTypes {
	CHANGE_LANG = '@config/CHANGE_LANG',
	TOGGLE_DARKMODE = '@config/TOGGLE_DARKMODE',
}