import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Vuclip',
      location: 'Pune, India',
      period: '07/2023 - Present',
      technologies: ['Next.js', 'React', 'TypeScript', 'Redux', 'Tailwind', 'Material UI', 'Firebase', 'CSS3', 'HTML5'],
      achievements: [
        'Developed features that enhanced user experience for millions of people watching their favorite content',
        'Fixed production issues related to Player functionality',
        'Collaborated with product managers, designers, and backend developers to deliver end-to-end features',
        'Participated in sprint planning, estimations, and agile ceremonies',
        'Built reusable UI components and maintained design system consistency',
        'Optimized page load times using Lighthouse, Web Vitals, and lazy loading',
        'Set up unit tests and component testing using Jest',
        'Reviewed code via pull requests, maintaining high code quality standards',
        'Contributed to and maintained internal UI documentation'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Vuclip',
      location: 'Pune, India',
      period: '01/2023 - 06/2023',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'Redux', 'Tailwind', 'Material UI', 'Firebase', 'CSS', 'HTML'],
      achievements: [
        'Fixed issues faced by many users related to Player functionality',
        'Worked on Ads integration and fixed banner Ads issues',
        'Resolved Player issues related to Continue Watching and subtitles'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <div className="flex items-center gap-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Achievements & Responsibilities</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-slate-300">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 