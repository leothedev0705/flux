import React from 'react';
import '../../styles/Services/OurServices.css';
import { Palette, Code, Database, MessageCircle, Search, Layers } from 'lucide-react';
import pattern from '../../assets/whats_under_the_hood_pattern.png';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'UI/UX Design',
    description: 'Stunning interfaces and seamless user experiences.',
    icon: Palette,
    details: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing and optimization',
      'Design systems and component libraries',
      'Interactive prototypes and animations'
    ]
  },
  {
    title: 'Frontend',
    description: 'Responsive web apps with modern frameworks.',
    icon: Code,
    details: [
      'React, Vue, and Angular development',
      'Responsive and mobile-first design',
      'Progressive Web Apps (PWA)',
      'Performance optimization',
      'Cross-browser compatibility',
      'Modern CSS and animations'
    ]
  },
  {
    title: 'Backend + Database',
    description: 'Robust server solutions and database architecture.',
    icon: Database,
    details: [
      'Node.js, Python, and PHP development',
      'RESTful APIs and GraphQL',
      'Database design and optimization',
      'Authentication and authorization',
      'Cloud deployment and scaling',
      'Security and data protection'
    ]
  },
  {
    title: 'Chatbot',
    description: 'Intelligent AI for customer engagement.',
    icon: MessageCircle,
    details: [
      'Custom chatbot development',
      'Natural language processing',
      'Integration with messaging platforms',
      '24/7 customer support automation',
      'Lead generation and qualification',
      'Analytics and performance tracking'
    ]
  },
  {
    title: 'SEO/GEO',
    description: 'Search engine optimization and local discovery.',
    icon: Search,
    details: [
      'Technical SEO optimization',
      'Local search optimization',
      'Keyword research and strategy',
      'Content optimization',
      'Google My Business management',
      'Performance monitoring and reporting'
    ]
  },
  {
    title: 'Full Stack + Deployment',
    description: 'Complete development with seamless deployment.',
    icon: Layers,
    details: [
      'End-to-end web application development',
      'DevOps and CI/CD pipelines',
      'Cloud infrastructure setup',
      'Domain and hosting management',
      'SSL certificates and security',
      'Ongoing maintenance and updates'
    ]
  }
];

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section className="our-features">
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
            Our Services
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
            A seamless build process powered by performance-first code, scalable design<br />
            systems, and clean delivery — because good tech should feel invisible.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div 
                key={index} 
                className={`feature-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="icon-wrapper">
                  <IconComponent size={32} className="feature-icon" />
                </div>
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                {/* Hover Details */}
                <motion.div 
                  className="feature-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h4>What you'll get:</h4>
                  <ul>
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <img src={pattern} alt="" className="bottom-pattern" />
    </section>
  );
} 