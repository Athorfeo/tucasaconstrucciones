import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
        "last_proyect": "Piamonte",

        "address_value": "Calle 12 #23-12, Ocaña",
        "phone_value": "+57 316 471 7853",
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
            "number_apartments":"Número de viviendas",
            "location":"Locación",
            "locationMaps":"Ubicación",
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
          "phoneValue" : "+57 316 471 7853",
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
            },
            "sst": {
              "title": "Seguridad y Salud en el Trabajo",
              "subtitle": "Compromiso con la vida, la salud y la prevención",
              "paragraph1": "En TuCasa Construcciones S.A.S., la seguridad, la salud y el bienestar integral de nuestros trabajadores, contratistas y visitantes constituyen una prioridad absoluta en el desarrollo de cada uno de nuestros proyectos.",
              "paragraph2": "Implementamos rigurosamente nuestro Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) bajo los más altos estándares de calidad, normatividad legal colombiana y excelencia operativa.",
              "cta": "Ver Políticas y Cartelera Oficial SG-SST"
            }
          }
        },
        "sst": {
          "title": "Seguridad y Salud en el Trabajo",
          "subtitle": "Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) & Policy Board",
          "company": "TUCASA CONSTRUCCIONES S.A.S.",
          "comm_type": "COMUNICACIÓN INTERNA",
          "code_version": "Código: TCC-SST-R-02 | Versión 1",
          "approved_by_label": "Aprobado por",
          "approver_name": "Angie Katherine Solano Ortiz",
          "approver_title": "Representante Legal",
          "validity_label": "Vigencia",
          "validity_value": "Julio 2026",
          "format_label": "Formato Oficial de Cartelera SST",
          "lead_intro": "En TuCasa Construcciones S.A.S. garantizamos ambientes de trabajo seguros, saludables y dignos para todos nuestros colaboradores, contratistas y visitantes. Conoce nuestras políticas institucionales, directrices y compromisos vigentes.",
          "back_to_about": "Volver a Nosotros",
          "confidential_channel_title": "Canal de Reporte Confidencial",
          "confidential_channel_desc": "O reporte directo ante el jefe inmediato o el área SG-SST.",
          "policies": [
            {
              "id": "sst_general",
              "code": "TCC/INT-017",
              "title": "POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO",
              "intro": "Nos comprometemos con la prevención de incidentes, accidentes y enfermedades laborales, garantizando ambientes seguros para trabajadores, contratistas y visitantes mediante:",
              "items": [
                "Cumplimiento integral de la normatividad vigente en SST.",
                "Identificación, evaluación y control continuo de peligros y riesgos.",
                "Fortalecimiento de competencias mediante capacitaciones y charlas de inicio de turno.",
                "Asignación de recursos financieros, técnicos y humanos necesarios.",
                "Promoción del cumplimiento de normas SST en contratistas y proveedores.",
                "Mejora continua del SG-SST para alcanzar la excelencia operativa."
              ]
            },
            {
              "id": "sst_objectives",
              "code": "TCC/INT-022",
              "title": "OBJETIVOS DEL SG-SST",
              "intro": "Nuestras metas estratégicas de prevención y control operacional:",
              "items": [
                "Accidentalidad: Reducir la tasa mediante acciones de prevención y control.",
                "Enfermedades Laborales: Prevenir su aparición con vigilancia y mejoramiento del entorno.",
                "Capacitación: Fortalecer de forma continua la competencia del personal.",
                "Riesgos: Identificar y controlar peligros para evitar incidentes y accidentes.",
                "Cumplimiento: Garantizar el 100% de requisitos legales aplicables.",
                "Plan Anual: Ejecutar el Plan de Trabajo con cumplimiento mínimo del 95%."
              ]
            },
            {
              "id": "sst_vial",
              "code": "TCC/INT-021",
              "title": "POLÍTICA DE SEGURIDAD VIAL",
              "intro": "Comprometidos con la prevención y reducción de riesgos viales mediante:",
              "items": [
                "Mantenimiento preventivo y correctivo riguroso de vehículos y equipos.",
                "Capacitaciones continuas en manejo defensivo e inteligencia vial.",
                "Verificación periódica de documentación y estado mecánico.",
                "Sensibilización activa a todo el personal y contratistas sobre el riesgo vial."
              ]
            },
            {
              "id": "sst_acoso_laboral",
              "code": "TCC/INT-020",
              "title": "PREVENCIÓN DE ACOSO LABORAL",
              "intro": "Garantizamos ambientes laborales respetuosos, libres de intimidación y acoso:",
              "items": [
                "Prevención y atención oportuna conforme a la Ley 1010 de 2006.",
                "Procedimiento seguro, confidencial y accesible para quejas (Res. 3461 de 2025).",
                "Protección absoluta de la identidad de denunciantes y testigos de buena fe.",
                "Promoción de relaciones basadas en el respeto, comunicación y sana convivencia.",
                "Sanción de conductas violatorias evitando cualquier tipo de represalia."
              ]
            },
            {
              "id": "sst_acoso_sexual",
              "code": "TCC/INT-025",
              "title": "PREVENCIÓN DE ACOSO SEXUAL",
              "intro": "Rechazo absoluto a cualquier comportamiento que afecte la dignidad o libertad sexual:",
              "items": [
                "Prevención de manifestaciones verbales, físicas, escritas o digitales.",
                "Aplicación estricta del Protocolo conforme a la Ley 2365 de 2024 y Decreto 405 de 2025.",
                "Canales de denuncia 100% confidenciales, seguros y sin represalias.",
                "Investigación imparcial con medidas de protección acompañadas para las víctimas."
              ]
            },
            {
              "id": "sst_igualdad",
              "code": "TCC/INT-024",
              "title": "POLÍTICA DE IGUALDAD DE GÉNERO",
              "intro": "Entornos inclusivos y sin discriminación por sexo, género u orientación:",
              "items": [
                "Igualdad de oportunidades en selección, contratación, formación y ascensos.",
                "Decisiones empresariales basadas exclusivamente en mérito y equidad.",
                "Mecanismos de atención y acompañamiento ante vulneraciones."
              ]
            },
            {
              "id": "sst_anticorrupcion",
              "code": "TCC/INT-019",
              "title": "POLÍTICA ANTICORRUPCIÓN",
              "intro": "Cultura ética basada en la transparencia, integridad y tolerancia cero:",
              "items": [
                "Mecanismos de detección e investigación de actos de corrupción en todas las áreas.",
                "Control de riesgos en negociaciones e interacciones con terceros.",
                "Rechazo y sanción a influencias irregulares en decisiones comerciales."
              ],
              "channel": {
                "title": "Canal de Reporte Confidencial:",
                "email": "tucasaconstruccionessas@gmail.com",
                "direct": "O reporte directo ante el jefe inmediato o el área SG-SST."
              }
            },
            {
              "id": "sst_sustancias",
              "code": "TCC/INT-018",
              "title": "NO ALCOHOL, DROGAS Y TABAQUISMO",
              "intro": "Prohibición estricta para salvaguardar la seguridad y el desempeño:",
              "items": [
                "Prohibido: Consumo de alcohol, tabaco o sustancias psicoactivas durante actividades laborales.",
                "Prohibido: Ingresar o permanecer bajo efectos de alcohol o sustancias que alteren la capacidad de reacción.",
                "Desarrollo permanente de campañas de prevención y sensibilización.",
                "Aplicación de régimen disciplinario ante evidencias en investigaciones de incidentes."
              ]
            },
            {
              "id": "sst_desconexion",
              "code": "TCC/INT-023",
              "title": "POLÍTICA DE DESCONEXIÓN LABORAL",
              "intro": "Garantizamos el equilibrio entre la vida laboral, personal y el descanso:",
              "items": [
                "Respeto irrestricto por tiempos de descanso, licencias, permisos y vacaciones.",
                "Seguimiento a través del Comité de Convivencia Laboral.",
                "Fomento de prácticas eficientes durante la jornada de trabajo."
              ]
            }
          ]
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