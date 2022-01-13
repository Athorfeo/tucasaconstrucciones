import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "hello_world": "Welcome to React and react-i18next"
    }
  },
  es: {
    translation: {
      "hello_world": "Welcome to React and react-i18next"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;