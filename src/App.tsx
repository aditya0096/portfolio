import React from 'react';
// import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useProjects } from './hooks/useProjects';

function App() {
  const projects = useProjects();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProjectsSection projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 