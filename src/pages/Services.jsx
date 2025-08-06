import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ServicesHero from '../components/Services/ServicesHero.jsx';
import ComprehensiveServices from '../components/Services/ComprehensiveServices.jsx';
import FAQ from '../components/Services/FAQ.jsx';

const Services = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ServicesHero />
      <ComprehensiveServices />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Services;
