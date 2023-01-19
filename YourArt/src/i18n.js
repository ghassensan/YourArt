import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// eslint-disable-next-line camelcase
import translation_en_US from "./locales/en/translation.json";

const currentLanguage = "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,

    lang: currentLanguage,
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    nsSeparator: false, // allow keys to be phrases having `:`, `.`

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      en: {
        translations: translation_en_US,
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
  });
