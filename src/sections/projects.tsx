import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/projectCard/ProjectCard';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;