import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/en.json';
import fr from './resources/fr.json';

const resources = { ...en, ...fr };
const i18n = i18next.createInstance().use(initReactI18next);

export const initI18n = (language: string) => {
    i18n.init({
        /** by default language is set to English */
        fallbackLng: 'en',
        resources,
        interpolation: {
            escapeValue: false,
        },
        keySeparator: false,
        lng: language,
    });
    return i18n;
};
