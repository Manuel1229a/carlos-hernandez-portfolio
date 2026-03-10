import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo con link al inicio */}
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-dot"></span> Carlos Hernández
        </a>

        {/* Botón hamburguesa */}
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links con clase condicional para móvil */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;