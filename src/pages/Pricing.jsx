import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PricingHero from '../components/Pricing/PricingHero.jsx';
import PricingPlans from '../components/Pricing/PricingPlans.jsx';
import PricingContent from '../components/ContactUs.jsx';
import WhatsApp from '../components/WhatsApp.jsx';

const Pricing = () => {
  return (
    <div className="home-container">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <div className="pricing-container">
        <PricingContent />
      </div>
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Pricing;  
