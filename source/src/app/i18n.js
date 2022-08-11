import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
        "last_proyect": "Piamonte",

        "address_value": "Calle 12 #23-12, Ocaña",
        "phone_value": "+57 316 270 5465",
        "instagram_value": "@tucasa_construcciones",

        "slogan": "¡Construimos sueños!",
        "sub_slogan": "Mi casa, tu casa",
        "see_proyects": "Ver proyectos",
        "home": "Inicio",
        "proyects": "Proyectos",
        "aboutLabel": "Nosotros",
        "follow_us": "Síguenos",
        "copyright_year": "© 2021 Copyright",
        "developed_by": "Desarrollador por",
        "developer_value": "@Athorfeo",
        "connect_with_us": "Conéctate con nosotros en las redes sociales",
        "scroll_down": "Desliza hacia abajo",
        "press_for_detail": " Presiona para ir al detalle",
        "project":{
            "status":"Estado",
            "description":"Descripción del proyecto",
            "city":"Ciudad",
            "price": "Precio",
            "initial_price": "Cuota Inicial",
            "credit": "Valor restante / crédito",
            "sale_from": "Desde",
            "number_apartments":"Número de apartamentos",
            "location":"Locación",
            "deadline":"Año de entrega",
            "type_apartments":"Tipologías",
            "type":"Apto",
            "total_area":"Área total",
            "free_area":"Área libre",
            "built_area":"Área construida",
            "rooms":"Habitaciones",
            "bathrooms":"Baños",
            "balconies":"Balcones",
            "garage_seat":"Garaje",
            "dining_room":"Sala comedor",
            "kitchen":"Cocina",
            "clothes_zone":"Zona de ropas"
        },
        "status":{
          "sale":"En venta",
          "sold":"Vendido",
          "finalized":"Entregado"
        },
        "about":{
          "title" : "Nosotros",
          "subtitle" : "Contáctanos!",
          "location" : "Ubicación",
          "locationValue" : "Calle 12 #23-12, Ocaña",
          "phone" : "Teléfono",
          "phoneValue" : "+57 316 270 5465",
          "email" : "Email",
          "emailValue" : "tucasaconstrucciones@gmail.com"
        }
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