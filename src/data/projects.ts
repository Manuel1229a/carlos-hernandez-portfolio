// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  shortDescription: string; 
  longDescription: string;  
  tech: string[];
  images: string[];          
  featured: boolean;
  link?: string;            // Opcional para GitHub o demo
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Document Processing API",
    shortDescription: "API robusta para el procesamiento automatizado de documentos.",
    longDescription: "Diseño y desarrollo de una API escalable en AWS para automatizar el análisis de documentos mediante servicios de OCR. Implementa validaciones estrictas y flujos de datos asíncronos para manejar altos volúmenes de peticiones sin degradación de servicio.",
    tech: ["Python", "AWS", "PostgreSQL"],
    images: ["/images/api-project.jpg",], // Asegúrate de crear esta carpeta en public/
    featured: true,
    link: "https://github.com/tu-usuario/repo"
  },
  {
    id: 2,
    title: "Mydsa Dashboard",
    shortDescription: "Plataforma administrativa para el control de gastos corporativos.",
    longDescription: "Dashboard analítico construido para la gestión financiera. Incluye visualización de datos en tiempo real, gestión de roles, y un diseño enfocado en la usabilidad operativa para agilizar el diagnóstico de procesos.",
    tech: ["React", "TypeScript"],
    images: ["./images/Mydsa-Web/Imagen1.png","./images/Mydsa-Web/Imagen2.png","./images/Mydsa-Web/Imagen3.png"],
    featured: true
  },
  {
    id: 3,
    title: "Mydsa Mobile",
    shortDescription: "App móvil para registro de gastos operativos en tiempo real.",
    longDescription: "Aplicación móvil multiplataforma que permite a los operadores registrar gastos en campo. Utiliza SQLite para almacenamiento local (offline-first) y se sincroniza con el backend cuando hay conexión disponible.",
    tech: ["React Native", "Expo", "SQLite"],
    images: ["/images/mydsa-mobile.jpg",],
    featured: true
  },
  {
    id: 4,
    title: "NahuiCore Website",
    shortDescription: "Landing page corporativa para consultoría estratégica de software.",
    longDescription: "Desarrollo de la identidad digital y landing page corporativa. El diseño prioriza una estética sobria y profesional para transmitir los valores de metodología y resolución de problemas estructurales.",
    tech: ["React", "Vite"],
    images: ["./images/NahuiCore-WebSite/image1.jpg","./images/NahuiCore-WebSite/image2.png"],
    featured: false
  },
  {
  id: 5,
  title: "NahuiCore Finance",
  shortDescription: "Landing page corporativa para consultoría estratégica de software.",
    longDescription: "Desarrollo de la identidad digital y landing page corporativa. El diseño prioriza una estética sobria y profesional para transmitir los valores de metodología y resolución de problemas estructurales.",
    tech: ["React", "Vite"],
    images: ["/images/nahuicore.jpg",],
    featured: false
}
];