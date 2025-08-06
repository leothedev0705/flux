import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import FluxLogo from '../assets/IMP/FLUX_LOGO_upscaled.png';
import BottomPattern from '../assets/bottom_pattern.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={FluxLogo} alt="FLUXURIOUS TECH" />
            </div>
            <p className="footer-description">
              Custom digital products, designed with precision and delivered with speed.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: <a href="mailto:support@fluxurioustech.com">support@fluxurioustech.com</a></li>
              <li>Phone: <a href="tel:+919967846507">+91 9967846507</a></li>
              <li>Address: Thane, Maharashtra</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Fluxurious Tech. All rights reserved.</p>
        </div>
      </div>
      
      {/* Bottom Pattern */}
      <div className="footer-bottom-pattern">
        <img src={BottomPattern} alt="Bottom Pattern" className="footer-pattern-img" />
      </div>
    </footer>
  );
};

export default Footer; 