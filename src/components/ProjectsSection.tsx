import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../hooks/useProjects';

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  description?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  title = 'Featured Projects',
  description = 'A showcase of my recent work and personal projects',
}) => (
  <section id="projects" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title.split(' ').map((word, i) =>
            word === 'Projects' ? (
              <span key={i} className="gradient-text">{word} </span>
            ) : (
              word + ' '
            )
          )}
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} reverse={index % 2 === 1} />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-slate-300 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection; 