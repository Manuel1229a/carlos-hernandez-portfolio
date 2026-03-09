// src/sections/Experience.tsx
import React from 'react';
import './Experience.css';

const experiences = [
  { id: 1, company: 'CROEM', role: 'Software Engineer' },
  { id: 2, company: 'OITIC', role: 'Backend Developer' },
  { id: 3, company: 'Liomet', role: 'Desarrollador' }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experiencia</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;