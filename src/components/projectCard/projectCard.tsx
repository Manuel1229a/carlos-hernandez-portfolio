import React from 'react';
import type { Project } from '../../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.shortDescription}</p>
      <div className="project-tech-list">
        {project.tech.map((techItem, index) => (
          <span key={index} className="tech-badge">{techItem}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;