import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/adityajadhav96',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/aditya0096',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:adityajadhav0096@gmail.com',
      icon: Mail,
    },
    {
      name: 'Phone',
      href: 'tel:+918446887235',
      icon: Phone,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Aditya Jadhav</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
            Software Engineer & Frontend Developer
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Frontend Developer with 2+ years of experience building responsive and scalable web applications
            using React, JavaScript, and TypeScript. Skilled in creating clean UI, integrating APIs, and writing
            maintainable code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-slate-300 hover:text-white transition-all duration-300 border border-slate-700 hover:border-slate-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Animated background elements that move with cursor */}
      <motion.div
        aria-hidden="true"
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: (mousePosition.x / window.innerWidth - 0.5) * -80,
          y: (mousePosition.y / window.innerHeight - 0.5) * -80,
        }}
        transition={{ type: 'tween', ease: 'circOut', duration: 1 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: (mousePosition.x / window.innerWidth - 0.5) * 60,
          y: (mousePosition.y / window.innerHeight - 0.5) * 60,
        }}
        transition={{ type: 'tween', ease: 'circOut', duration: 1 }}
      />
    </section>
  );
};

export default Hero; 