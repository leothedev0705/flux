import React from 'react';
import '../../styles/Projects/ProjectsHero.css';
import Blur from '../../assets/Blur.png';
import Button2 from '../Button2.jsx';
import projectsImage from '../../assets/Projects_page.png';

const ProjectsHero = () => {
  return (
    <section className="projects-hero">
      <img src={Blur} alt="Blur" className="projects-blur-top" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bringing Ideas to Life
        </h1>
          <p className="hero-description">
            Explore the digital products we’ve designed, developed, and delivered — with purpose and precision.
          </p>
          <div className="hero-buttons">
            <Button2 to="/contact">Start Your Project</Button2>
            <Button2 to="/services">Our Services</Button2>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img src={projectsImage} alt="Our Projects" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero; 