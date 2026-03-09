import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container contact-section">
      <h2 className="section-title">Contacto</h2>
      
      <div className="contact-links">
        <a href="mailto:manuel.hdez951@gmail.com" className="contact-link">Correo Electrónico</a>
        <a href="https://www.linkedin.com/in/carlos-hernández-5b5340303" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://github.com/Manuel1229a" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;