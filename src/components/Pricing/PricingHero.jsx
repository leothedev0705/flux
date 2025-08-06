import React from 'react';
import '../../styles/Pricing/PricingHero.css';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern.png';
import Button2 from '../Button2.jsx';
import pricingImage from '../../assets/Pricing_page.png';

const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <img src={BlurImage} alt="Blur" className="pricing-blur-top" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Build Around Your Budget
        </h1>
          <p className="hero-description">
          Clear, flexible, and tailored to your goals — no jargon, just honest value.
          </p>
          <div className="hero-buttons">
            <Button2 to="/contact">Start Your Project</Button2>
            <Button2 to="/services">View Services</Button2>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img src={pricingImage} alt="Pricing Plans" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
