import React from 'react';
import { 
  SiPython, SiDotnet, SiReact, 
  SiPostgresql, SiTypescript, SiExpo, SiSqlite, SiVite, SiFlutter 
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import './Skills.css';

const row1 = [
  { name: 'Python', icon: <SiPython /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
];

const row2 = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React Native', icon: <SiReact /> },
  { name: 'Expo', icon: <SiExpo /> },
  { name: 'SQLite', icon: <SiSqlite /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Flutter', icon: <SiFlutter /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Stack Tecnológico</h2>
      </div>

      <div className="sliders-wrapper">
        {/* Fila 1: Se mueve a la izquierda */}
        <div className="slider-container">
          <div className="slider-track left">
            {[...row1, ...row1, ...row1].map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2: Se mueve a la derecha */}
        <div className="slider-container">
          <div className="slider-track right">
            {[...row2, ...row2, ...row2].map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;