// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  shortDescription: string; 
  longDescription: string;  
  tech: string[];
  images: string[];   //Resolución 1800 x 880       
  featured: boolean;
  link?: string;            // Opcional para GitHub o demo
  rol: string;
  year: number;
  problem: string;
  solution: string;
}

export const projects: Project[] = [
  /*{
    id: 1,
    title: "Document Processing API",
    shortDescription: "API robusta para el procesamiento automatizado de documentos.",
    longDescription: "Diseño y desarrollo de una API escalable en AWS para automatizar el análisis de documentos mediante servicios de OCR. Implementa validaciones estrictas y flujos de datos asíncronos para manejar altos volúmenes de peticiones sin degradación de servicio.",
    problem: "El procesamiento manual de documentos es lento, propenso a errores y difícil de escalar cuando el volumen de información crece.",
    solution: "Se desarrolló una API basada en servicios cloud que automatiza la extracción y normalización de datos mediante OCR, permitiendo procesar documentos de forma rápida, consistente y escalable.",
    tech: ["Python", "AWS", "PostgreSQL"],
    images: ["./images/imagen-ref.jpg","./images/image.png"], 
    featured: true,
    link: "https://github.com/tu-usuario/repo",
    rol:"Software Engenier",
    year: 2026,
  },*/
  {
    id: 2,
    title: "Mydsa Dashboard",
    shortDescription: "Plataforma administrativa para el control de gastos corporativos.",
    longDescription: "Dashboard analítico desarrollado para modernizar el sistema interno de gestión. Se rediseñó completamente la experiencia de usuario y la arquitectura del sistema para mejorar el rendimiento, la navegación y la eficiencia operativa.",
    problem: "El sistema existente presentaba problemas de rendimiento, una interfaz poco intuitiva y flujos de navegación ineficientes. Los usuarios debían realizar múltiples pasos innecesarios para acceder a funcionalidades clave, lo que afectaba la productividad y la experiencia general.",
    solution: "Se desarrolló un nuevo sistema utilizando tecnologías modernas, enfocado en mejorar el rendimiento y simplificar la experiencia de usuario. Se implementó un rediseño visual y funcional completo, además de nuevos módulos que se integran directamente con la aplicación móvil para optimizar los procesos operativos.",
    tech: ["React", "TypeScript"],
    images: ["./images/Mydsa-Web/Imagen1.png","./images/Mydsa-Web/Imagen2.png","./images/Mydsa-Web/Imagen3.png", "./images/Mydsa-Web/Imagen4.png"],
    featured: true,
    rol:"Software Engenier",
    year: 2026,
  },
  {
    id: 3,
    title: "Mydsa Mobile",
    shortDescription: "App móvil para registro de gastos operativos en tiempo real.",
    longDescription: "Aplicación móvil multiplataforma diseñada para digitalizar y optimizar el registro de operaciones en campo. Incluye funcionalidades diferenciadas para operadores y clientes, permitiendo una gestión más eficiente y transparente.",
    problem: "La empresa no contaba con una aplicación móvil, por lo que el registro de lecturas y operaciones se realizaba de forma manual. Esto generaba procesos lentos, errores humanos y pérdida de información. Además, los clientes no tenían acceso a sus lecturas, historiales de pago ni comprobantes, lo que limitaba la transparencia del servicio.",
    solution: "Se desarrolló una aplicación móvil con enfoque offline-first que permite a los operadores registrar información en tiempo real desde campo, reduciendo errores y mejorando la eficiencia. Para los clientes, se implementaron funcionalidades que permiten consultar lecturas, historiales de pago y comprobantes, centralizando toda la información en una sola plataforma digital.",
    tech: ["React Native", "Expo", "SQLite"],
    images: ["./images/Mydsa-Movil/Imagen1.jpeg", "./images/Mydsa-Movil/Imagen2.jpeg", "./images/Mydsa-Movil/Imagen3.jpeg", "./images/Mydsa-Movil/Imagen4.jpeg"],
    featured: true,
    rol:"Software Engenier",
    year: 2026,
  },
  {
    id: 4,
    title: "NahuiCore Website",
    shortDescription: "Landing page corporativa para consultoría estratégica de software.",
    longDescription: "El sitio web de NahuiCore fue desarrollado como la principal presencia digital de una iniciativa de consultoría de software. El objetivo del proyecto fue comunicar un enfoque profesional y estructurado hacia la arquitectura de software, la metodología de desarrollo y la consultoría tecnológica. \nEl diseño se centra en la claridad, el minimalismo y una fuerte jerarquía visual para presentar los servicios, la metodología y la filosofía de la empresa de manera clara y atractiva. La interfaz se construyó con un diseño responsivo para garantizar una experiencia coherente en equipos de escritorio y dispositivos móviles. \nDurante el proceso de desarrollo me concentré en crear componentes reutilizables, mantener una estructura de proyecto limpia y optimizar la interfaz para el rendimiento y la usabilidad.",
    problem: "La empresa no contaba con una presencia digital que comunicara claramente su propuesta de valor y enfoque profesional.",
    solution: "Se diseñó y desarrolló una landing page moderna y estructurada que transmite la identidad de la marca, destacando servicios, metodología y enfoque tecnológico.",
    tech: ["React", "Vite"],
    images: ["./images/NahuiCore-WebSite/Imagen1.jpg","./images/NahuiCore-WebSite/Imagen2.png", "./images/NahuiCore-WebSite/Imagen3.png", "./images/NahuiCore-WebSite/Imagen4.png"],
    featured: false,
    rol:"Software Engenier",
    link: "https://nahuicore.netlify.app",
    year: 2026,
  },
  /*{
  id: 5,
  title: "NahuiCore Finance",
  shortDescription: "Landing page corporativa para consultoría estratégica de software.",
    longDescription: "Desarrollo de la identidad digital y landing page corporativa. El diseño prioriza una estética sobria y profesional para transmitir los valores de metodología y resolución de problemas estructurales.",
    problem: "Las empresas carecen de herramientas centralizadas para analizar sus procesos financieros y operativos de forma clara.",
    solution: "Se desarrolló una plataforma que permite visualizar y analizar datos financieros, facilitando el diagnóstico de procesos y la toma de decisiones estratégicas.",
    tech: ["React", "AWS"],
    images: ["./images/imagen-ref.jpg","./images/image.png"],
    featured: false,
    rol:"Software Engenier",
    year: 2026,
}*/
{
  id: 6,
  title: "Gas-Control",
  shortDescription: "Aplicación móvil para la gestión de clientes, pedidos y operaciones en distribución de gas.",
  
  longDescription: "Desarrollo de una aplicación móvil enfocada en la gestión operativa de distribuidores de gas. La plataforma permite administrar clientes, registrar pedidos y visualizar información clave en tiempo real. Está diseñada con una arquitectura cliente-servidor, integrando un backend con API REST y una interfaz móvil intuitiva para optimizar los procesos diarios de los operadores.",
  
  problem: "Los distribuidores de gas suelen gestionar sus operaciones de forma manual o con herramientas dispersas, lo que dificulta el control de clientes, pedidos y el seguimiento de ingresos.",
  
  solution: "Se desarrolló una aplicación centralizada que permite registrar clientes, gestionar pedidos y visualizar datos operativos desde un dispositivo móvil, mejorando la organización, reduciendo errores y facilitando la toma de decisiones.",
  
  tech: ["React Native", "Expo", "FastAPI", "SQLite", "Firebase"],
  
  images: [
    "./images/Gas-control/Imagen1.jpeg",
    "./images/Gas-control/Imagen2.jpeg",
    "./images/Gas-control/Imagen3.jpeg"
  ],
  
  featured: true,
  rol: "Full Stack Developer",
  year: 2026,
}
];