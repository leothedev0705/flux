import React from 'react';
import '../../styles/Home/WhatWeBuild.css';
import BlurEffect from '../../assets/Blur.png';
import HomeWebDevelopment from '../../assets/HomeWevDevelipment.png';
import HomeMobileDevelopment from '../../assets/HomeMobileDevelopment.png';
import HomeWebDesign from '../../assets/HomeWebDesign.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Websites',
    image: HomeWebDesign,
    url: '/projects?section=webdev'
  },
  {
    title: 'Mobile Apps',
    image: HomeMobileDevelopment,
    url: '/projects?section=appdev'
  },
  {
    title: 'Backend Systems',
    image: HomeWebDevelopment,
    url: '/projects?section=backend'
  },
];

export default function WhatWeBuild() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
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

  const handleServiceClick = (url) => {
    navigate(url);
  };

  return (
    <section className="what-we-build">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -60, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            High-performance websites, sleek mobile apps, and powerful<br />
            backend systems — all delivered in just one week.
          </motion.p>
        </div>

        <motion.div 
          className="cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {services.map(({ title, image, url }, index) => (
            <motion.div 
              key={index} 
              className="card-wrapper"
              variants={cardVariants}
              onClick={() => handleServiceClick(url)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-outer-border">
                <div className="card-inner">
                  <div className="card-content">
                    <img src={image} alt={title} />
                  </div>
                  <div className="card-footer">
                  </div>
                </div>
                <h3 className="card-title">{title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
