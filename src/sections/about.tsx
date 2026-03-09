import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Sobre mí</h2>
      <div className="about-content">
        <p>
          Soy un Software Engineer especializado en el desarrollo de arquitecturas backend, infraestructura en la nube y diseño de APIs. Me apasiona resolver problemas estructurales complejos y construir sistemas que sean tanto escalables como eficientes.
        </p>
        <p>
          Mi enfoque principal es la ingeniería estratégica: no solo escribo código, sino que analizo el panorama completo para diseñar soluciones robustas que soporten el crecimiento a largo plazo.
        </p>
      </div>
    </section>
  );
};

export default About;