import React from 'react';
import '../styles/WhatsApp.css';
import Button2 from './Button2';
import WhatsAppImage from '../assets/WhatsApp.png';
import BlurImage from '../assets/Blur.png';
import { motion } from 'framer-motion';

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9967846507';
    const message = encodeURIComponent('Hi Fluxurious Tech! I checked out your website and have a project in mind. Would love to talk about how we can work together.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="start7day-section">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="whatsapp-blur-top" />
      
      <motion.div 
        className="start7day-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div 
          className="start7day-content"
          variants={cardVariants}
        >
          <div className="start7day-image">
            <img src={WhatsAppImage} alt="WhatsApp Illustration" />
          </div>
          <div className="start7day-text">
            <h2>Got an Idea? Let's Chat.</h2>
            <p className="subtitle">Skip the forms. Message us directly on WhatsApp and get started today.</p>
            <div className="button-container">
              <Button2 onClick={handleWhatsAppClick}>Start Chat on WhatsApp</Button2>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsApp; 