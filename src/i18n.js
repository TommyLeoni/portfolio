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
          moreAboutMeText:
            "My name is Tomaso Aurelio Domenico Leoni and I am a 16 year old application developer from Switzerland, I however grew up in Germany, where I spent the first 11 years of my life. I have always been very invested in all sorts of technologies, so I always knew I was predestined to be working in this market branch one day. During my free time, I love working on my own personal projects or help others out with their projects. Apart from technology and software development though, I am also a great fan of learning languages, motor sports, fashion, music and aesthetics.",
          skillsTitle: "Skills / CV",
          skillsInfoText: [
            "Take a look at my complete ",
            "CV",
            " or catch a glimpse of my skills below:"
          ],
          skillsLeftTitle: "Programming skills:",
          skillsRightTitle: "Language skills:",
          codingSkills: [
            "Deep knowledge of Java, C#, Dart, Python, JavaScript, Ruby, HTML & CSS",
            "Broad experience in mobile and web development using Flutter, Android Studio, Ruby on Rails, ReactJS & NodeJS",
            "Great knowledge of databases: SQLite, MySQL, Dokumentbasierte Datenbanken (MongoDB & Firebase)"
          ],
          languageSkills: [
            {
              language: "German",
              details:
                "Native language, I grew up in Germany, but I have no issues whatsoever understanding the Swiss German language"
            },
            {
              language: "Italian",
              details: "2nd Native language"
            },
            {
              language: "English",
              details:
                "Certificate of Proficiency in English (Level C2, achieved in April of 2019)"
            },
            {
              language: "French",
              details:
                "(Upcoming) Diplôme avancé de la langue française (Level C1)"
            },
            {
              language: "Swedish",
              details: "Level B1/B2, self-taught"
            }
          ],
          projects: {
            noteable: "",
          },
          projectsTitle: "Projects",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: "",
          contactTitle: "Contact"
        }
      },
      de: {
        translations: {
          title: "Hallo! Ich heisse Tomaso",
          leadingText:
            "Ich bin ein Applikationsentwickler aus der Schweiz mit einem brennendem Interesse für die Technologien der Zukunft, wie zum Beispiel Künstliche Intelligenz, Maschinelles Lernen, Medizininformatik und Biomedizinische Ingenieurwissenschaften. Zurzeit besuche ich das letzte Schuljahr der IMS (Informatikmittelschule) Bern und befinde mich inmitten der Bewerbungsphase für mein nächstjähriges Praktikum",
          moreAboutMeTitle: "Mehr über mich",
          moreAboutMeText: "Mein Name ist Tomaso Aurelio Domenico Leoni und ich bin ein 16-jähriger Applikationsentwickler aus der Schweiz, habe allerdings die ersten 11 Jahre meines Lebens in Deutschland verbracht. Seit klein auf bin ich von der gesamten Welt der Technik fasziniert: Waren es früher Lokomotiven und Baustellen, ist es heute besonders der Bereich der Software. In meiner Freizeit arbeite ich gerne an eigenen Projekten, arbeite mit anderen Leuten an anderen Projekten oder helfe ihnen bei ihren eigenen Projekten. Nebst jeglichen technologischen Interessen, bin ich ein grosser Freund von Sprachen, Motorsport, Kleidung, Musik und Ästhetik.",
          skillsTitle: "Fähigkeiten / CV",
          skillsInfoText: [
            "Laden Sie sich hier meinen ",
            "Lebenslauf",
            " herunter oder werfen Sie einen Blick auf das Wichtigste:"
          ],
          skillsLeftTitle: "Im Bereich der Programmierung:",
          skillsRightTitle: "Sprachliche Fähigkeiten:",
          codingSkills: [
            "Tiefgründiges Wissen über Java, C#, Dart, Python, JavaScript, Ruby, HTML & CSS",
            "Breite Erfahrung im Bereich der Web- und Mobilentwicklung mittels Flutter, React JS, Node JS, Android Studio und Ruby on Rails",
            "Hervorragende Beherrschung von Datenbanktechnologien: SQLite, MySQL, Dokumentbasierte Datenbanken (MongoDB & Firebase)"
          ],
          languageSkills: [
            {
              language: "Deutsch",
              details: "Muttersprache, in Deutschland aufgewachsen, habe aber keinerlei Probleme beim Verstehen von Schweizerdeutsch"
            }, {
              language: "Italienisch",
              details: "2. Muttersprache"
            }, {
              language: "Englisch",
              details: "Certificate of Proficiency in English (Level C2, im April 2019 erlangt)"
            }, {
              language: "Französisch",
              details: "(Anstehend) Diplôme avancé de la langue française (Level C1)"
            }, {
              language: "Schwedisch",
              details: "Autodidaktisches lernen, Level B1/B2"
            }
          ],
          projectsTitle: "Projekte",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: "",
          contactTitle: "Kontakt"
        }
      },
      swe: {
        translations: {
          title: "Hey! Jag heter Tomaso",
          leadingText: "Mitt namn är Tomaso Aurelio Domenico Leoni och jag är an 16 ǻr gammal programutvecklare frǻn Schweiz, men jag har levt i Tyskland för det första elva ǻren av mitt liv.",
          moreAboutMeTitle: "Mer om mig",
          moreAboutMeText: "",
          skillsTitle: "Kompetensen / CV",
          skillsInfoText: "",
          skillsLeftTitle: "",
          skillsRightTitle: "",
          languageSkills: [],
          projectsTitle: "Projekten",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: "",
          contactTitle: "Kontakt"
        }
      },
      it: {
        translations: {
          title: "Ciao! Mi chiamo Tomaso",
          leadingText: "",
          moreAboutMeTitle: "Più informazioni su di me",
          moreAboutMeText: "",
          skillsTitle: "Competenze / CV",
          skillsInfoText: "",
          skillsLeftTitle: "",
          skillsRightTitle: "",
          languageSkills: [],
          projectsTitle: "Progetti",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: "",
          contactTitle: "Contatto"
        }
      },
      fr: {
        translations: {
          title: "Bonjour! Je m'appelle Tomaso",
          leadingText: "",
          moreAboutMeTitle: "Plus d'informations sur moi",
          moreAboutMeText: "",
          skillsTitle: "Compétences / CV",
          skillsInfoText: "",
          skillsLeftTitle: "",
          skillsRightTitle: "",
          languageSkills: [],
          projectsTitle: "Projets",
          noteableText: "",
          moneylogText: "",
          matchedText: "",
          splashxText: "",
          portfolioText: "",
          contactTitle: "Contact"
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
