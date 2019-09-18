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
            "I am an Application developer from Switzerland, with a current major interest in technologies of the future such as artificial intelligence, machine learning, medical informatics and biomechanical engineering. Currently, I am in my last year at the School for Information Technology of Berne, about to head into a one year internship",
          moreAboutMeTitle: "More about me",
          moreAboutMeText: "My name is Tomaso Aurelio Domenico Leoni and I am a 16 year old application developer from Switzerland, I however grew up in Germany, where I spent the first 11 years of my life. I have always been very invested in all sorts of technologies, so I always knew I was predestined to be working in this market branch one day. During my free time, I love working on my own personal projects or help others out with their projects. Apart from technology and software development though, I am also a great fan of learning languages, motor sports, fashion, music and aesthetics.",
          skillsTitle: "Skills / CV",
          skillsInfoText: "Take a look at my complete CV or catch a glimpse of my skills below:",
          skillsLeftTite: "Programming skills:",
          skillsRightTitle: "Language skills:",
          codingSkills: [
            "• Deep knowledge of Java, C#, Dart, Python, JavaScript, Ruby, HTML & CSS",
            "• Broad experience in mobile and web development using Flutter, Android Studio, Ruby on Rails, ReactJS & NodeJS",
            "• Great knowledge of databases: SQLite, MySQL, Dokumentbasierte Datenbanken (MongoDB & Firebase)"
          ],
          german: "",
          italian: "",
          english: "",
          french: "",
          swedish: "",
          projectsTitle: "",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: ""
        }
      },
      de: {
        translations: {
          title: "Hallo! Ich heisse Tomaso",
          leadingText:
            "Ich bin ein Applikationsentwickler aus der Schweiz mit einem brennendem Interesse für die Technologien der Zukunft, wie zum Beispiel Künstliche Intelligenz, Maschinelles Lernen, Medizininformatik und Biomedizinische Ingenieurwissenschaften. Zurzeit besuche ich das letzte Schuljahr der IMS (Informatikmittelschule) Bern und befinde mich inmitten der Bewerbungsphase für mein nächstjähriges Praktikum",
          moreAboutMeTitle: "Mehr über mich",
          moreAboutMeText: "",
          skillsTitle: "Fähigkeiten / CV",
          skillsInfoText: "",
          skillsLeftTite: "",
          skillsRightTitle: "",
          codingFirstPoint: "",
          codingSecondPoint: "",
          codingThirdPoint: "",
          german: "",
          italian: "",
          english: "",
          french: "",
          swedish: "",
          projectsTitle: "",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: ""
        }
      },
      swe: {
        translations: {
          title: "Hey! Jag heter Tomaso",
          leadingText: "",
          moreAboutMeTitle: "",
          moreAboutMeText: "",
          skillsTitle: "",
          skillsInfoText: "",
          skillsLeftTite: "",
          skillsRightTitle: "",
          codingFirstPoint: "",
          codingSecondPoint: "",
          codingThirdPoint: "",
          german: "",
          italian: "",
          english: "",
          french: "",
          swedish: "",
          projectsTitle: "",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: ""
        }
      },
      it: {
        translations: {
          title: "Ciao! Mi chiamo Tomaso",
          leadingText: "",
          moreAboutMeTitle: "",
          moreAboutMeText: "",
          skillsTitle: "",
          skillsInfoText: "",
          skillsLeftTite: "",
          skillsRightTitle: "",
          codingFirstPoint: "",
          codingSecondPoint: "",
          codingThirdPoint: "",
          german: "",
          italian: "",
          english: "",
          french: "",
          swedish: "",
          projectsTitle: "",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: ""
        }
      },
      fr: {
        translations: {
          title: "Bonjour! Je m'appelle Tomaso",
          leadingText: "",
          moreAboutMeTitle: "",
          moreAboutMeText: "",
          skillsTitle: "",
          skillsInfoText: "",
          skillsLeftTite: "",
          skillsRightTitle: "",
          codingFirstPoint: "",
          codingSecondPoint: "",
          codingThirdPoint: "",
          german: "",
          italian: "",
          english: "",
          french: "",
          swedish: "",
          projectsTitle: "",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: ""
        }
      }
    },
    fallbackLng: "en",
    debug: true,
    returnObjects: true,

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
