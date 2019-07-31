import { Translation } from './types';

export const languageSelect = (langs: any, lang: string): Translation => {
	switch (lang) {
	case 'en': return langs.en;
	case 'pt': return langs.pt;
	default:
		return langs.en;
	}
};
