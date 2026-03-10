import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">Sobre mí</h2>
          <p>
            Soy un <strong>Ingeniero en Software</strong> enfocado en el desarrollo
            backend y la construcción de APIs. Mi experiencia se centra en
            diseñar servicios con <strong>Python, .NET y SQL</strong>, creando sistemas
            modulares que resuelven problemas estructurales.
          </p>
          <p>
            He liderado integraciones entre plataformas y automatización de procesos, 
            siempre priorizando código mantenible y arquitecturas preparadas para escalar en la nube.
          </p>
          <p>
            Me apasiona la <strong>ingeniería de software</strong> como disciplina: 
            entender el valor real que aporta la tecnología y mejorar continuamente 
            la calidad de la implementación.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span>2</span>
            <p>Años de experiencia</p>
          </div>
          <div className="stat-card">
            <span>5</span>
            <p>Proyectos completados</p>
          </div>
          <div className="stat-card">
            <span>∞</span>
            <p>Café por línea de código</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;