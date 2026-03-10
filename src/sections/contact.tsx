import React from "react";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container contact-section">
      <div className="contact-card">
        <div className="contact-info">
          <h2 className="contact-heading">Trabajemos juntos</h2>
          <p className="contact-description">
            Actualmente estoy abierto a nuevas oportunidades profesionales y
            colaboraciones técnicas. Si te interesa mi perfil o quieres
            conversar sobre desarrollo de software, backend, APIs o proyectos
            tecnológicos, no dudes en ponerte en contacto conmigo.
          </p>
        </div>

        <div className="contact-methods">
          <a
            href="mailto:manuel.hdez951@gmail.com"
            className="contact-method-card"
          >
            <div className="method-icon">
              <FiMail />
            </div>
            <div className="method-text">
              <span>Email</span>
              <p>manuel.hdez951@gmail.com</p>
            </div>
            <FiArrowUpRight className="arrow-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-hernández-5b5340303"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method-card"
          >
            <div className="method-icon">
              <FiLinkedin />
            </div>
            <div className="method-text">
              <span>LinkedIn</span>
              <p>Carlos Hernández</p>
            </div>
            <FiArrowUpRight className="arrow-icon" />
          </a>

          <a
            href="https://github.com/Manuel1229a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method-card"
          >
            <div className="method-icon">
              <FiGithub />
            </div>
            <div className="method-text">
              <span>GitHub</span>
              <p>@Manuel1229a</p>
            </div>
            <FiArrowUpRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
