import React, { useState, useRef, useEffect } from "react";
import { projects, type Project } from "../data/projects";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiExternalLink,
  FiCalendar,
  FiUser,
  FiTarget,
  FiCheckCircle,
  FiGithub,
} from "react-icons/fi";
import "./Projects.css";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardImageIndex, setCardImageIndex] = useState(0);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsExiting(false);
      setActiveImgIndex(0);
    }, 300); // Debe coincidir con la duración de la animación CSS
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !selectedProject) {
        setCardImageIndex((prev) => (prev + 1) % 3);

        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
          }
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, selectedProject]);

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedProject) return;
    const total = selectedProject.images.length;
    if (direction === "next") {
      setActiveImgIndex((prev) => (prev + 1) % total);
    } else {
      setActiveImgIndex((prev) => (prev - 1 + total) % total);
    }
  };

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);
  return (
    <section id="projects" className="section-container projects-section">
      <div className="projects-header">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="carousel-controls">
          <button className="control-btn" onClick={() => scroll("left")}>
            <FiChevronLeft />
          </button>
          <button className="control-btn" onClick={() => scroll("right")}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project) => {
          const imgToShow =
            project.images[cardImageIndex % project.images.length];

          return (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-container">
                {project.images?.length > 0 ? (
                  <img
                    key={imgToShow}
                    src={imgToShow}
                    alt={project.title}
                    className="project-image fade-animation"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-desc">{project.shortDescription}</p>
                <div className="project-tech-mini">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="tech-dot">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`modal-overlay ${isExiting ? "exit" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${isExiting ? "exit" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              <FiX />
            </button>

            {/* Visor de Imagen Principal con lógica de marco móvil */}
            <div
              className={`modal-main-image ${selectedProject.tech.includes("React Native") ? "mobile-frame-container" : ""}`}
            >
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    className="nav-modal-btn prev"
                    onClick={() => navigateImage("prev")}
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    className="nav-modal-btn next"
                    onClick={() => navigateImage("next")}
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
              {selectedProject.tech.includes("React Native") ? (
                <div className="smartphone-wrapper">
                  <div className="smartphone-screen">
                    <img
                      src={selectedProject.images[activeImgIndex]}
                      alt={selectedProject.title}
                      key={activeImgIndex}
                      className="fade-animation"
                    />
                  </div>
                  {/* Botón home o notch ficticio para más realismo */}
                  <div className="smartphone-notch"></div>
                </div>
              ) : (
                <img
                  src={selectedProject.images[activeImgIndex]}
                  alt={selectedProject.title}
                  key={activeImgIndex}
                  className="fade-animation"
                />
              )}
            </div>

            <div className="modal-body">
              {/* Layout de Dos Columnas para Info */}
              <div className="modal-grid">
                <div className="modal-info-main">
                  <h2>{selectedProject.title}</h2>

                  <div className="modal-meta-row">
                    <span>
                      <FiUser /> {selectedProject.rol}
                    </span>
                    <span>
                      <FiCalendar /> {selectedProject.year}
                    </span>
                  </div>

                  <div className="modal-description-section">
                    <h3>Sobre el proyecto</h3>
                    <p>{selectedProject.longDescription}</p>

                    <div className="problem-solution-box">
                      <div className="ps-item">
                        <h4>
                          <FiTarget className="icon-p" /> El Problema
                        </h4>
                        <p>{selectedProject.problem}</p>
                      </div>
                      <div className="ps-item">
                        <h4>
                          <FiCheckCircle className="icon-s" /> La Solución
                        </h4>
                        <p>{selectedProject.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-sidebar">
                  {selectedProject.images.length > 1 && (
                    <div className="modal-gallery-side">
                      <h3>Galería</h3>
                      <div className="modal-thumbnails">
                        {selectedProject.images.map((img, idx) => (
                          <div
                            key={idx}
                            className={`thumb-item ${activeImgIndex === idx ? "active" : ""}`}
                            onClick={() => setActiveImgIndex(idx)}
                          >
                            <img src={img} alt={`Preview ${idx}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="modal-tech-side">
                    <h3>Tecnologías</h3>
                    <div className="modal-tech-list">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.links?.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn primary"
                    >
                      <FiExternalLink /> Ver Sitio En Vivo
                    </a>
                  )}

                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn secondary"
                    >
                      <FiGithub />{" "}
                      {selectedProject.links.githubBackend
                        ? "Repo Frontend"
                        : "Repositorio"}
                    </a>
                  )}

                  {selectedProject.links?.githubBackend && (
                    <a
                      href={selectedProject.links.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn secondary"
                    >
                      <FiGithub /> Repo Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
