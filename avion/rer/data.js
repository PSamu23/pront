/**
 * ============================================================
 *  GRUPO SOLUCIONES ÉLITE — Archivo de Configuración
 *  Edita este archivo para actualizar todo el contenido
 *  del sitio sin tocar el código fuente.
 * ============================================================
 */

const GSE = {

  /* ── EMPRESA ─────────────────────────────────────────── */
  empresa: {
    nombre:            "Grupo Soluciones Élite",
    slogan:            "Nos elevamos juntos",
    descripcion:       "Líderes en soluciones de drones para agricultura, bienes raíces, inspección de infraestructura y más. Tecnología de punta para elevar tu negocio a nuevas alturas.",
    whatsapp:          "+50212345678",          // ← EDITAR: número con código de país
    whatsappMensaje:   "Hola! Me interesa conocer más sobre sus servicios de drones. ¿Me pueden dar información?",
    email:             "info@gruposoluciones.com",  // ← EDITAR
    telefono:          "+502 1234-5678",             // ← EDITAR
    ubicacion:         "Ciudad de Guatemala, Guatemala", // ← EDITAR
    instagram:         "gruposoluciones",            // ← EDITAR (sin @)
    facebook:          "GrupoSolucionesElite",       // ← EDITAR
    logoUrl:           "",  // ← EDITAR: ruta a logo PNG/SVG (dejar vacío para usar texto)
  },

  /* ── COLORES (deben coincidir con style.css) ─────────── */
  colores: {
    principal:  "#0D2F3F",
    secundario: "#4B5320",
    acento:     "#C9A84C",
    blanco:     "#FFFFFF",
    gris:       "#A8A8A8",
  },

  /* ── HERO ─────────────────────────────────────────────── */
  hero: {
    badge:          "Tecnología de Punta en Drones",
    titulo:         "Soluciones Aéreas de",
    tituloDestacado:"Alta Precisión",
    subtitulo:      "Transformamos industrias con drones de última generación. Agricultura, bienes raíces, inspección y mapeo con resultados comprobados.",
    botonPrimario:  "Contáctanos por WhatsApp",
    botonSecundario:"Ver Servicios",
  },

  /* ── ESTADÍSTICAS ─────────────────────────────────────── */
  estadisticas: [
    { valor: "500+", etiqueta: "Proyectos Completados" },
    { valor: "50+",  etiqueta: "Clientes Satisfechos"  },
    { valor: "5",    etiqueta: "Años de Experiencia"   },
    { valor: "24/7", etiqueta: "Soporte Disponible"    },
  ],

  /* ── SERVICIOS ────────────────────────────────────────── */
  servicios: [
    {
      icono:          "camera",
      titulo:         "Fotografía y Video Aéreo",
      descripcion:    "Capturamos imágenes y videos 4K desde el aire con calidad cinematográfica. Ideal para bienes raíces, eventos, marketing y publicidad.",
      caracteristicas:["Resolución 4K Ultra HD", "Estabilización gimbal 3 ejes", "Edición profesional", "Entrega en 48 h"],
    },
    {
      icono:          "leaf",
      titulo:         "Agricultura de Precisión",
      descripcion:    "Monitoreo de cultivos con cámaras multiespectrales, análisis NDVI y fumigación aérea para maximizar el rendimiento agrícola.",
      caracteristicas:["Mapeo NDVI / NDRE", "Fumigación de precisión", "Análisis de salud vegetal", "Reportes detallados"],
    },
    {
      icono:          "inspect",
      titulo:         "Inspección de Infraestructura",
      descripcion:    "Inspección de edificios, torres, puentes y líneas eléctricas sin riesgo para el personal ni interrupciones operativas.",
      caracteristicas:["Cámara térmica", "Sin andamiaje requerido", "Reporte fotográfico HD", "Detección de anomalías"],
    },
    {
      icono:          "map",
      titulo:         "Topografía y Mapeo",
      descripcion:    "Levantamientos topográficos de alta precisión, modelos digitales de elevación, ortofotomapas y nubes de puntos.",
      caracteristicas:["Precisión centimétrica GPS RTK", "Modelos 3D", "Ortofotomapas", "Nubes de puntos"],
    },
    {
      icono:          "home",
      titulo:         "Bienes Raíces",
      descripcion:    "Tours aéreos y fotografía de propiedades que generan más atención, más consultas y ventas más rápidas.",
      caracteristicas:["Tours virtuales 360°", "Video promocional", "Fotografía de impacto", "Edición avanzada"],
    },
    {
      icono:          "shield",
      titulo:         "Vigilancia y Seguridad",
      descripcion:    "Monitoreo de perímetros, eventos masivos y zonas de difícil acceso con visión nocturna y transmisión en vivo.",
      caracteristicas:["Monitoreo en tiempo real", "Visión nocturna IR", "Cobertura de grandes áreas", "Transmisión en vivo"],
    },
  ],

  /* ── POR QUÉ NOSOTROS ─────────────────────────────────── */
  porQueNosotros: [
    {
      icono:       "award",
      titulo:      "Pilotos Certificados",
      descripcion: "Todo nuestro equipo cuenta con certificaciones oficiales de aviación civil y años de experiencia en operaciones comerciales.",
    },
    {
      icono:       "rocket",
      titulo:      "Tecnología DJI Enterprise",
      descripcion: "Operamos con los drones más avanzados del mercado: DJI Matrice 350 RTK y DJI Agras T40 para resultados superiores.",
    },
    {
      icono:       "database",
      titulo:      "Datos Procesados y Listos",
      descripcion: "No solo capturamos, también procesamos. Entregamos ortomapas, modelos 3D, análisis y reportes listos para usar.",
    },
    {
      icono:       "lightning",
      titulo:      "Respuesta Rápida",
      descripcion: "Disponibilidad para proyectos urgentes. Movilización en 24 h y respuesta a cotizaciones en menos de 2 horas.",
    },
  ],

  /* ── FAQ ─────────────────────────────────────────────── */
  preguntas: [
    {
      pregunta: "¿Qué tipos de drones utilizan?",
      respuesta: "Operamos con drones DJI Enterprise de última generación, incluyendo el DJI Matrice 350 RTK y el DJI Agras T40. Están equipados con cámaras de alta resolución, cámaras térmicas y sistemas RTK para máxima precisión en cada misión.",
    },
    {
      pregunta: "¿Gestionan los permisos de vuelo?",
      respuesta: "Sí, gestionamos todos los permisos necesarios ante las autoridades de aviación civil. Nuestros pilotos están certificados y cumplimos con todas las regulaciones vigentes en Guatemala y Centroamérica.",
    },
    {
      pregunta: "¿En qué zonas geográficas operan?",
      respuesta: "Operamos en todo el territorio nacional e internacionalmente en Centroamérica. Tenemos capacidad de movilización a cualquier zona del país, incluyendo áreas rurales y de difícil acceso.",
    },
    {
      pregunta: "¿Cuánto tiempo tarda un proyecto típico?",
      respuesta: "Depende del tipo y alcance. Una sesión fotográfica puede realizarse en pocas horas, proyectos de mapeo agrícola 1–3 días. Siempre proporcionamos un cronograma detallado al cotizar para que tengas visibilidad total.",
    },
    {
      pregunta: "¿Qué condiciones climáticas afectan las operaciones?",
      respuesta: "Nuestros drones tienen clasificación IP45 para resistencia a lluvia ligera. Vientos mayores a 15 m/s, tormentas o lluvia intensa pueden posponer operaciones. Siempre coordinamos según el pronóstico y priorizamos la seguridad.",
    },
    {
      pregunta: "¿Cómo solicito una cotización?",
      respuesta: "Contáctanos directamente por WhatsApp, email o teléfono. Respondemos en menos de 2 horas con una propuesta personalizada para tu proyecto, sin costo ni compromiso.",
    },
    {
      pregunta: "¿Ofrecen procesamiento de datos e informes?",
      respuesta: "Sí, entregamos los datos ya procesados: ortofotomapas, modelos 3D, análisis NDVI, reportes de inspección fotográficos y todos los archivos necesarios para que puedas usar los resultados directamente.",
    },
    {
      pregunta: "¿Tienen seguro para sus operaciones?",
      respuesta: "Sí, contamos con seguro de responsabilidad civil para todas nuestras operaciones. Operamos con los más altos estándares de seguridad del sector para proteger tanto a nuestro equipo como a tu propiedad.",
    },
  ],

  /* ── CONTACTO ─────────────────────────────────────────── */
  contacto: {
    titulo:    "¿Listo para Elevarte?",
    subtitulo: "Contáctanos ahora y recibe una cotización personalizada sin costo",
    boton:     "Hablar por WhatsApp ahora",
  },

  /* ── FOOTER ───────────────────────────────────────────── */
  footer: {
    texto:  "© 2026 Grupo Soluciones Élite. Todos los derechos reservados.",
    slogan: "Nos elevamos juntos",
  },
};
