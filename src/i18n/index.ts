import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/en.json';
import fr from './resources/fr.json';
/**
 * you can add your languages here.
 */
const resources = { ...en, ...fr };
const i18n = i18next.createInstance().use(initReactI18next);

const fallbackLng = 'en';

export const getI18n = (language = fallbackLng) => {
    i18n.init({
        fallbackLng,
        resources,
        interpolation: {
            escapeValue: false,
        },
        keySeparator: false,
        lng: language,
    });
    return i18n;
};
