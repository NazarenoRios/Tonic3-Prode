import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      //translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    //disabled in production
    debug: false,
    //can have multime namespaces, if case i want to divide a huge translation into smaller pieces and load on demand
    ns: ["common", "home","profile"],

    interpolation: {
        escapeValue: false,
        formatSeparator: ",",
    },

    react: {
        wait:true
    },

  });


  export default i18n;