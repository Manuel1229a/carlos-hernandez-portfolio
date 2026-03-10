import React, { useState, useRef, useEffect } from 'react';
import { projects, type Project } from '../data/projects';
import { FiChevronLeft, FiChevronRight, FiX, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const closeModal = () => {
  setSelectedProject(null);
  setActiveImgIndex(0); 
};

  // Función para el scroll manual
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  // Lógica de Auto-scroll Infinito
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isPaused && !selectedProject) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // Si llegamos casi al final, volvemos al inicio suavemente
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 3000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isPaused, selectedProject]);

  return (
    <section id="projects" className="section-container projects-section">
      <div className="projects-header">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="carousel-controls">
          <button className="control-btn" onClick={() => scroll('left')}><FiChevronLeft /></button>
          <button className="control-btn" onClick={() => scroll('right')}><FiChevronRight /></button>
        </div>
      </div>

      <div 
        className="carousel-container" 
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
            <div className="project-image-container">
              {project.images ? (
                <img src={project.images[0]} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">{project.title.charAt(0)}</div>
              )}
            </div>
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-short-desc">{project.shortDescription}</p>
              <div className="project-tech-mini">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="tech-dot">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Ventana emergente */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  <button className="close-modal-btn"onClick={closeModal}>
    <FiX />
  </button>
  
  {/* Visor de Imagen Principal */}
  <div className="modal-main-image">
    <img 
      src={selectedProject.images[activeImgIndex]} 
      alt={selectedProject.title} 
      key={activeImgIndex} 
    />
  </div>

  <div className="modal-body">
    <div className="modal-header-info">
      <h2>{selectedProject.title}</h2>
      
      {/* Miniaturas de la galería */}
      {selectedProject.images.length > 1 && (
        <div className="modal-thumbnails">
          {selectedProject.images.map((img, idx) => (
            <div 
              key={idx} 
              className={`thumb-item ${activeImgIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveImgIndex(idx)}
            >
              <img src={img} alt={`Preview ${idx}`} />
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="modal-tech-list">
      {selectedProject.tech.map((t, i) => (
        <span key={i} className="tech-badge">{t}</span>
      ))}
    </div>

    <p className="modal-long-desc">{selectedProject.longDescription}</p>

    {selectedProject.link && (
      <a href={selectedProject.link} target="_blank" rel="noreferrer" className="modal-link-btn">
        Explorar Proyecto <FiExternalLink />
      </a>
    )}
  </div>
</div>
        </div>
      )}
    </section>
  );
};

export default Projects;