import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBr from "./locales/pt/pt-br.json";
import enUs from "./locales/en/en-us.json";

  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: navigator.language,
    fallbackLng: 'ptBr',
    // debug: true,
    //detection: {
     //order: ['queryString', 'cookie'],
     //caches: ['cookie'],
    //},
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        ...ptBr
      },
      en: {
        ...enUs
      }
    },
    // returnNull: false
  });
  
  export default i18n;
