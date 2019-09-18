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
          title: "Hi! My name's Tomaso",
          leadingText:
            "I am an Application developer from Switzerland, with a current major interest in technologies of the future such as artificial intelligence, machine learning, medical informatics and biomechanical engineering. Currently, I am in my last year at the School for Information Technology of Berne, about to head into a one year internship"
        }
      },
      de: {
        translations: {
          title: "Hallo! Ich heisse Tomaso",
          leadingText:
            "Ich bin ein Applikationsentwickler aus der Schweiz mit einem brennendem Interesse für die Technologien der Zukunft, wie zum Beispiel Künstliche Intelligenz, Maschinelles Lernen, Medizininformatik und Biomedizinische Ingenieurwissenschaften. Zurzeit besuche ich das letzte Schuljahr der IMS (Informatikmittelschule) Bern und befinde mich inmitten der Bewerbungsphase für mein nächstjähriges Praktikum"
        }
      },
      swe: {
        translations: {
          title: "Hey! Jag heter Tomaso"
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
