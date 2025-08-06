import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProjectsHero from '../components/Projects/ProjectsHero.jsx';
import ProjectsContent from '../components/Projects/ProjectsContent.jsx';

const Projects = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="projects-container">
        <ProjectsHero />
        <ProjectsContent />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
