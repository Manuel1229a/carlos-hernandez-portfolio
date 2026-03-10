import React from 'react';
import './Experience.css';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  location: string;
  type: string;
  logo?: string; 
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "CROEM México",
    role: "Software Developer Jr",
    period: "May 2024 – Apr 2025",
    description: [
      "Desarrollo de soluciones de software internas y servicios de backend.",
      "Diseño de wireframes del sistema y documentación funcional.", 
      "Análisis de datos e informes utilizando herramientas de inteligencia empresarial."
    ],
    tech: [".Net", "SharePoint", "Azure DevOps", "Power BI", "Miro"],
    location: "México",
    type: "Tiempo completo / Educación Dual",
    logo: "src/assets/img/croem_mexico_logo.jpg" 
  },
  {
    id: 2,
    company: "OITIC",
    role: "Software Engineer Jr",
    period: "Apr 2025 – Ene 2026",
    description: [
      "Diseño y desarrollo de APIs REST modulares para el procesamiento de documentos.",
      "Implementación de pipelines para el análisis de documentos utilizando servicios OCR.",
      "Integración con servicios en la nube serverless y validación automatizada de datos."
    ],
    tech: ["Python", "Flask", "AWS", "PostgreSQL", "Java", "Docker", "TypeScript", "React", "Spring Boot"],
    location: "México",
    type: "Tiempo completo / Educación Dual",
    logo: "src/assets/img/oitic_logo.jpg"
  },
  {
    id: 3,
    company: "Liomet TI Solutions",
    role: "Software Engineer Jr",
    period: "May 2025 – Present",
    description: [
      "Desarrollo de plataformas web administrativas usando una arquitectura desacoplada frontend–backend.",
      "Implementación de la lógica de negocio, validaciones y flujos de datos.",
      "Desarrollo de interfaces de usuario enfocadas en la usabilidad y la eficiencia operativa."
    ],
    tech: ["React", "TypeScript", "React Native", "Python", "PostgreSQL", "Expo"],
    location: "México",
    type: "Tiempo parcial / Freelance",
    logo: "src/assets/img/liomet_ti_logo.jpg"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Trayectoria Profesional</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="experience-card">
              <div className="experience-header">
                <div className="company-logo-container">
                   {/* Espacio designado para el logo */}
                   {exp.logo ? (
                     <img src={exp.logo} alt={exp.company} className="company-logo" />
                   ) : (
                     <div className="logo-placeholder">{exp.company.charAt(0)}</div>
                   )}
                </div>
                
                <div className="header-text">
                  <div className="header-main">
                    <h3>{exp.role}</h3>
                    <span className="period-badge">{exp.period}</span>
                  </div>
                  <h4 className="company-name">{exp.company} • <span className="type-text">{exp.type}</span></h4>
                </div>
              </div>

              <div className="experience-body">
                <ul className="description-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="tech-stack-mini">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;