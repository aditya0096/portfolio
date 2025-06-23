import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Project } from '../hooks/useProjects';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse }) => (
  <div className={`grid lg:grid-cols-2 gap-8 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
    {/* Project Image */}
    <div className={reverse ? 'lg:col-start-2' : ''}>
      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <ExternalLink className="text-white" size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <Github className="text-white" size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Project Content */}
    <div className={reverse ? 'lg:col-start-1' : ''}>
      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
        {project.featured && (
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full mb-4">
            Featured Project
          </span>
        )}

        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

        <p className="text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-slate-200 mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              <Play size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard; 