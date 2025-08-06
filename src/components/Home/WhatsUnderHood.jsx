import React from 'react';
import '../../styles/Home/WhatsUnderHood.css';
import { Palette, Code, Database, MessageCircle, Search, Server } from 'lucide-react';
import pattern from '../../assets/whats_under_the_hood_pattern.png';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'UI/UX Design',
    description: 'Stunning interfaces and seamless user experiences.',
    icon: Palette
  },
  {
    title: 'Frontend',
    description: 'Responsive web apps with modern frameworks.',
    icon: Code
  },
  {
    title: 'Backend + Database',
    description: 'Robust server solutions and database architecture.',
    icon: Database
  },
  {
    title: 'Chatbot',
    description: 'Intelligent AI for customer engagement.',
    icon: MessageCircle
  },
  {
    title: 'SEO/GEO',
    description: 'Search engine optimization and local discovery.',
    icon: Search
  },
  {
    title: 'Full Stack + Deployment',
    description: 'Complete development with seamless deployment.',
    icon: Server
  }
];

export default function WhatsUnderHood() {
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





  return (
    <section className="whats-under-hood">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
              <motion.div 
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
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
            viewport={{ amount: 0.1 }}
          >
            What's Under the Hood
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
            viewport={{ amount: 0.1 }}
          >
            A seamless build process powered by performance-first code, scalable design<br />
            systems, and clean delivery — because good tech should feel invisible.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="feature-card"
              >
                <div className="icon-wrapper">
                  <IconComponent size={32} className="feature-icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
      <img src={pattern} alt="" className="bottom-pattern" />
    </section>
  );
} 