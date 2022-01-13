import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
        "last_proyect": "Gran Reserva II",

        "address_value": "Calle 12 #23-12, Ocaña",
        "phone_value": "+57 316 270 5465",
        "instagram_value": "@tucasa_construcciones",

        "slogan": "¡Construimos sueños!",
        "sub_slogan": "Mi casa, tu casa",
        "see_proyects": "Ver proyectos",
        "home": "Inicio",
        "proyects": "Proyectos",
        "about": "Nosotros",
        "follow_us": "Síguenos",
        "copyright_year": "© 2021 Copyright",
        "developed_by": "Desarrollador por",
        "developer_value": "@Athorfeo",
        "connect_with_us":"Conéctate con nosotros en las redes sociales",
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