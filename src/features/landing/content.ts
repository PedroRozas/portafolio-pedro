export const landingContent = {
  name: "Pedro Rozas",
  headline: {
    lead: "Desarrollador Full Stack",
    accent: "& Creador de Soluciones Digitales",
  },
  heroBadge: "Desarrollo web, sistemas y soluciones digitales",
  bio: "Ayudo a convertir ideas en productos digitales funcionales, claros y escalables. Desarrollo sitios web, ecommerce, sistemas internos y herramientas personalizadas con foco en resultados reales.",

  projectIntro:
    "Estos son algunos de los proyectos en los que he trabajado, desde sitios corporativos y ecommerce hasta herramientas internas y productos digitales con integraciones reales.",

  projects: {
    featured: {
      eyebrow: "Proyecto destacado",
      title: "Comercial Teba",
      description:
        "Rediseño completo de una web tipo ecommerce con CMS propio, autenticación y control por niveles. El proyecto permitió dejar atrás un sistema antiguo y entregar autonomía total para administrar contenido, productos y futuras mejoras.",
      tags: ["Vite", "Supabase", "CMS", "Ecommerce"],
      image: "/works/comercialteba.webp",
      alt: "Vista del proyecto Comercial Teba",
    },
    side: {
      eyebrow: "Proyecto personal",
      title: "PresupuestaDos",
      description:
        "Plataforma web para gestión de finanzas personales, creada desde una necesidad real. Permite visualizar gastos en pareja, separar aportes por porcentaje de sueldo, leer estados de cuenta con IA e interactuar con un asistente inteligente.",
      tags: ["Vite", "NestJS", "Supabase", "IA"],
      image: "/works/presupuestados.webp",
      alt: "Vista del proyecto PresupuestaDos",
    },
    grid: {
      eyebrow: "Ecommerce",
      title: "A Tiempo Cajas",
      description:
        "Ecommerce desarrollado para vender cajas de productos en fechas específicas, con base de datos e integración de pagos mediante Flow. El proyecto ayudó a aumentar ventas en campañas estacionales.",
      tags: ["Vite", "NestJS", "Supabase", "Flow"],
      image: "/works/atiempocajas.webp",
      alt: "Vista del proyecto A Tiempo Cajas",
    },
    focus: {
      title: "Áreas de trabajo",
      items: [
        {
          value: "WEB",
          label: "Sitios y plataformas a medida",
        },
        {
          value: "API",
          label: "Backends, integraciones y lógica de negocio",
        },
        {
          value: "ECOM",
          label: "Ecommerce y automatización comercial",
        },
      ],
    },
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Desarrollo soluciones digitales pensadas para usarse de verdad.",
    body: "Llevo 5 años desarrollando proyectos web y sistemas digitales. Me gusta construir soluciones claras, útiles y mantenibles, combinando desarrollo, criterio técnico y aprendizaje constante para entregar un mejor servicio en cada proyecto.",
    points: [
      {
        title: "Versatilidad real",
        description:
          "Puedo desenvolverme en sitios corporativos, ecommerce, sistemas internos, APIs y automatizaciones según la necesidad del proyecto.",
      },
      {
        title: "Mejora continua",
        description:
          "Busco mantenerme siempre aprendiendo nuevas tecnologías y especializándome para ofrecer soluciones cada vez más completas y efectivas.",
      },
    ],
  },

  stack: [
    {
      title: "Frontend",
      description:
        "Vite, Next.js, React y TypeScript para construir interfaces modernas, rápidas y mantenibles.",
    },
    {
      title: "Backend",
      description:
        "NestJS y arquitecturas enfocadas en APIs, lógica de negocio e integraciones robustas.",
    },
    {
      title: "Datos",
      description:
        "MySQL, PostgreSQL y MongoDB para modelado y almacenamiento según el tipo de proyecto.",
    },
    {
      title: "UI y despliegue",
      description:
        "Material UI, Google Cloud y Cloudflare para entregar productos consistentes y listos para producción.",
    },
  ],

  cta: {
    title: "¿Tienes una idea o proyecto en mente?",
    description:
      "En mi sitio principal puedes conocer mejor mis servicios, ver cómo trabajo y explorar soluciones pensadas para negocios, productos digitales y necesidades técnicas reales.",
    footnote:
      "También ofrezco otros servicios tecnológicos complementarios según el tipo de proyecto.",
  },

  footer: {
    blurb:
      "Portafolio de Pedro Rozas · desarrollo web, ecommerce y soluciones digitales desde Chile.",
  },
} as const;
