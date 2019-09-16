import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en: {
        translations: {
          title: "Hi! My name's Tomaso"
        }
      },
      de: {
        translations: {
          title: "Hallo! Ich heisse Tomaso"
        }
      },
      it: {
        translations: {
          title: "Ciao! Mi chiamo Tomaso"
        }
      },
      fr: {
        translations: {
          title: "Bonjour! Je m'appelle Tomaso"
        }
      },
      swe: {
        translations: {
          title: "Hey! Jag heter Tomaso"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: ["translations"],

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },

    react: {
      wait: true
    }
  });

export default i18n;
