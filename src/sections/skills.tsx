// src/sections/Skills.tsx
import React from 'react';
import './Skills.css';

const skills: string[] = ['Python', '.NET', 'React', 'AWS', 'PostgreSQL', 'TypeScript', 'React Native', 'Expo', 'SQLite', 'Vite'];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Stack Tecnológico</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;