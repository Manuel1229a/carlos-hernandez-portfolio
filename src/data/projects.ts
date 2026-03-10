export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Document Processing API",
    description: "API robusta diseñada para el procesamiento automatizado y escalable de documentos.",
    tech: ["Python", "AWS", "PostgreSQL"],
    featured: true
  },
  {
    id: 2,
    title: "Mydsa",
    description: "Dashboard de administración y gestión financiera para el control integral de gastos corporativos.",
    tech: ["React", "TypeScript"],
    featured: true
  },
  {
    id: 3,
    title: "Mydsa Mobile",
    description: "Aplicación móvil optimizada para el registro y administración de gastos operativos en tiempo real.",
    tech: ["React Native", "Expo", "SQLite"],
    featured: true
  },
  {
    id: 4,
    title: "NahuiCore Finance",
    description: "Sistema de arquitectura financiera desarrollado para consultoría estratégica y diagnóstico de procesos.",
    tech: ["React", "AWS"],
    featured: false
  },
  {
    id: 5,
    title: "NahuiCore Website",
    description: "Landing page corporativa enfocada en la metodología de diseño arquitectónico e implementación de software.",
    tech: ["React", "Vite"],
    featured: false
  }
];