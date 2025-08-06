import React, { useState } from 'react';
import '../styles/Navbar.css';
import SmallButton from './SmallButton';
import { HiMenu, HiX } from 'react-icons/hi';
import FluxLogo from '../assets/IMP/FLUX_LOGO_upscaled.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src={FluxLogo} alt="FLUXURIOUS TECH" className="logo-image" />
        </a>

        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="menu-icon" />
          ) : (
            <HiMenu className="menu-icon" />
          )}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/contact" className="nav-link">
            <SmallButton>Contact Us</SmallButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
