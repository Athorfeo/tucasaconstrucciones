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
        "available_projects": "Disponibles",
        "sold_projects": "Vendidos",
        "project":{
            "status":"Estado",
            "description":"Descripción del proyecto",
            "city":"Ciudad",
            "price": "Precio",
            "initial_price": "Cuota Inicial",
            "credit": "Valor restante / crédito",
            "sale_from": "Desde",
            "price": "Precio",
            "number_apartments":"Número de viviendas",
            "location":"Locación",
            "deadline":"Año de entrega",
            "type_apartments":"Tipologías",
            "type":"Vivienda",
            "total_area":"Área total",
            "free_area":"Área libre",
            "built_area":"Área construida",
            "rooms":"Habitaciones",
            "bathrooms":"Baños",
            "balconies":"Balcones",
            "garage_seat":"Garaje",
            "dining_room":"Sala comedor",
            "kitchen":"Cocina",
            "clothes_zone":"Zona de ropas",
            "download_layout":"Descargar diseño (PDF)",
            "contact":"Contáctanos"
        },
        "status":{
          "sale":"En venta",
          "sold":"Vendido",
          "finalized":"Entregado"
        },
        "about":{
          "title" : "Nosotros",
          "subtitle" : "Conoce más acerca de la constructora!",
          "contact" : "Contáctanos!",
          "location" : "Ubicación",
          "locationValue" : "Calle 12 #23-12, Ocaña",
          "phone" : "Teléfono",
          "phoneValue" : "+57 316 270 5465",
          "email" : "Email",
          "emailValue" : "tucasaconstruccionessas@gmail.com",
          "content":{
            "us": {
              "title":"Quienes somos",
              "paragraph-1":"En TuCasa Construcciones, somos más que constructores; somos arquitectos de sueños.",
              "paragraph-2":"Desde nuestra fundación, nos hemos dedicado a materializar las aspiraciones de las familias, construyendo hogares que reflejen calidad, confort y seguridad."
            },
            "mission": {
              "title":"Misión",
              "paragraph1":"Nuestra misión es crear espacios habitables que no solo satisfagan las necesidades básicas de las familias, sino que también promuevan un estilo de vida saludable y feliz.",
              "paragraph2":"Nos esforzamos por superar las expectativas de nuestros clientes, construyendo hogares donde se puedan forjar recuerdos inolvidables y un legado duradero."
            },
            "vision": {
              "title":"Visión",
              "paragraph":"Nos proyectamos como líderes en el sector de la construcción de viviendas, siendo reconocidos por nuestra constante innovación, compromiso con el medio ambiente y el bienestar integral de todas las partes involucradas en nuestros proyectos."
            }
          }
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