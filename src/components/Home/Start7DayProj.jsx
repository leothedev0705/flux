import React from 'react';
import '../../styles/Home/Start7DayProj.css';
import projectsImage from '../../assets/projects.png';

const Start7DayProj = () => {
  return (
    <section className="start7day-section">
      <div className="blur-effect-top"></div>
      <div className="start7day-container">
        <div className="start7day-content">
          <div className="start7day-image">
            <img src={projectsImage} alt="Project Launch Illustration" />
          </div>
          <div className="start7day-text">
            <h2>Ready to Launch Your Project?</h2>
            <p>Let's take your idea from concept to launch — fast.</p>
            <p className="subtitle">Submit your brief, get a quote, and we'll start building in days — not months</p>
            <button className="cta-button">Start Your 7-Day Build</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start7DayProj; 