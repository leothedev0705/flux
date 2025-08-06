import React from 'react';
import Button1 from '../Button1';
import Button2 from '../Button2';
import { CheckCircle } from 'lucide-react';
import '../../styles/Home/Home.css';
import HomeImage from '../../assets/home_img1.png';
import PatternImage from '../../assets/home_pattern.png';

const HomeContent = () => {
  const teams = [
    'Startup Founders',
    'Creative Agencies',
    'App-first Brands',
    'Solo Entrepreneurs',
    'SaaS Builders',
    'MVP-Stage Ventures',
  ];

  return (
    <main className="main">
      <img src={PatternImage} alt="" className="pattern-background" />
      <div className="content">
        {/* Left Content */}
        <div className="left-content">
          <h1 className="home-hero-title">
            Launch-Ready<br />
            Websites and Apps.<br />
            MVPs Built in 1 Week*
          </h1>
          
          <p className="hero-description">
            Custom digital products, designed with precision and delivered with speed — no shortcuts, no compromises.
          </p>

          <div className="buttons">
            <Button2 to="/contact">Start a Project</Button2>
            <Button1 to="/projects">Explore Pages</Button1>
          </div>

          <div className="teams-section">
            <h3 className="teams-title">
              Suitable For High-Growth Teams Like
            </h3>
            <div className="teams-grid">
              {teams.map((team, index) => (
                <div key={index} className="team-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span>{team}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="right-content">
          <div className="dashboard-container">
            <div className="glow-effect"></div>
            <img src={HomeImage} alt="Dashboard Preview" className="dashboard-image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
