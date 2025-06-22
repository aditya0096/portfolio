import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityajadhav0096@gmail.com',
      href: 'mailto:adityajadhav0096@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8446887235',
      href: 'tel:+918446887235',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about creating exceptional user experiences and building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <User className="text-purple-400" size={28} />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm a dedicated Frontend Developer with over 2 years of experience crafting responsive and 
                scalable web applications. My expertise lies in React, JavaScript, and TypeScript, where I 
                focus on creating clean, maintainable code that delivers exceptional user experiences.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm passionate about performance optimization, accessibility, and staying current with the 
                latest web technologies. My collaborative approach with cross-functional teams has helped 
                deliver features that impact millions of users.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:bg-slate-800/50 transition-colors duration-300"
                >
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <info.icon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-200 hover:text-white transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• 2+ years of professional experience</li>
                  <li>• Specialized in React & TypeScript</li>
                  <li>• Experience with Next.js & Redux</li>
                  <li>• Focus on performance & accessibility</li>
                  <li>• Agile development methodology</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 