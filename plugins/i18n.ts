import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';


Vue.use(VueI18n);

//array of loaded languages
const loadedLanguages = [
	//preloaded languages
	process.env.VUE_APP_I18N_LOCALE
];

//array of avaible languages (non dinamico perché sarebbe async)
export const availableLanguages = [ "en", "it" ];

//DEFAULTS
export const i18n = new VueI18n({
	locale: process.env.VUE_APP_I18N_LOCALE,
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || process.env.VUE_APP_I18N_LOCALE,
	//default
	messages: {
		[(process.env.VUE_APP_I18N_LOCALE as string)]: require('../locales/'+process.env.VUE_APP_I18N_LOCALE+'.json')
	}
})


//setto il linguaggio e avverto la SEO (?) TODO route seo
function setI18nLanguage (lang:string) {
	i18n.locale = lang;
	(document.querySelector('html') as HTMLElement).setAttribute('lang', lang);
	return lang;
}



export function loadLanguageAsync(lang:string) {
	// If the same language
	if (i18n.locale === lang)
		return Promise.resolve(
			setI18nLanguage(lang)
		);
	// If the language was already loaded
	if (loadedLanguages.includes(lang))
		return Promise.resolve(
			setI18nLanguage(lang)
		);
	// If the language hasn't been loaded yet
	// @ts-ignore
	return import('../locales/'+lang+'.json').then(
		messages => {
			i18n.setLocaleMessage(lang, messages.default)
			loadedLanguages.push(lang)
			return setI18nLanguage(lang)
		}
	)
}

function loadLocaleMessages (): LocaleMessages {

	// @ts-ignore
	import('../locales/it.json').then(module => {
		console.log("AAAAAAAAAA", module);
	});

	// @ts-ignore
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
	const messages: LocaleMessages = {};
	locales.keys().forEach((key :string) => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);
		}
	});
	return messages
}
