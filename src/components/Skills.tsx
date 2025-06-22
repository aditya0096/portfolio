import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, TestTube } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['HTML5', 'CSS3/SCSS', 'JavaScript (ES6+)', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Code,
      skills: ['Next.js', 'React.js', 'Redux', 'Node.js', 'Tailwind CSS', 'Material UI', 'Jest', 'Redux Toolkit'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['SQL', 'MongoDB', 'Firebase'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Build & Tooling',
      icon: Wrench,
      skills: ['Webpack', 'Babel', 'npm', 'yarn', 'ESLint'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Testing',
      icon: TestTube,
      skills: ['Jest', 'React Testing Library', 'Playwright'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Version Control & Agile',
      icon: Code,
      skills: ['Git', 'Bitbucket', 'GitHub', 'Agile Methodology'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Floating background logos */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <SiTypescript
          className="absolute top-[15%] left-[10%] text-slate-700/30 text-8xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <FaReact
          className="absolute top-[25%] right-[5%] text-slate-700/30 text-9xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <SiNextdotjs
          className="absolute bottom-[10%] left-[30%] text-slate-700/30 text-7xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 card-hover"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-tag px-3 py-2 rounded-lg text-sm font-medium text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-center mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Responsive Design',
                'Performance Optimization',
                'API Integration',
                'Component Architecture',
                'State Management',
                'Testing & Debugging',
                'Code Review',
                'Agile Development'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <span className="text-slate-200 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 