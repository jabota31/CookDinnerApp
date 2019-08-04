import I18n from 'react-native-i18n';

import en from './locales/en';
import pt from './locales/pt';
import jp from './locales/jp';

I18n.fallbacks = true;

I18n.translations = {
	en,
	pt,
	jp
};

I18n.defaultLocale = 'en-US';

export default I18n;