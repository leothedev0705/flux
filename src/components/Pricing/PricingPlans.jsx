import React from 'react';
import { CheckCircle } from 'lucide-react';
import '../../styles/Pricing/PricingPlans.css';
import Button2 from '../Button2.jsx';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern.png';
import { motion } from 'framer-motion';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$59',
      period: '/month',
      description: 'The Basic Plan is perfect for businesses',
      features: [
        'Figma Design',
        'Frontend',
        'Backend+Db'
      ],
      isPopular: false,
      labelColor: 'gray'
    },
    {
      name: 'Popular Plan',
      price: '$149',
      period: '/month',
      description: 'Our Popular Plan is the ultimate choice for businesses',
      features: [
        'Figma Design',
        'Frontend',
        'Backend+Db',
        'Full Stack',
        'Full Stack+Figma',
        'Chatbot',
        'Full Stack+Figma+Chatbot',
        'SEO/GEO',
        'Full Stack+GEO',
        'Full Stack+Figma+GEO',
        'Full Stack+Figma+GEO+Chatbot',
        'All of the Above+Deployment'
      ],
      isPopular: true,
      labelColor: 'purple'
    },
    {
      name: 'Pro Plan',
      price: '$359',
      period: '/month',
      description: 'The Pro Plan is tailored for businesses',
      features: [
        'Figma Design',
        'Frontend',
        'Backend+Db',
        'Chatbot',
        'SEO/GEO',
        'All of the Above+Deployment'
      ],
      isPopular: false,
      labelColor: 'gray'
    }
  ];

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: -40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

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

  return (
    <div className="pricing-plans">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="pricing-plans-blur-top" />
      
      {/* Header Section */}
      <div className="pricing-plans-header">
        <motion.h2 
          className="pricing-plans-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          Our Service Packages
        </motion.h2>
        <motion.p 
          className="pricing-plans-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          A seamless build process powered by performance-first code, scalable design systems, and clean delivery.
        </motion.p>
      </div>
      
      <motion.div 
        className="pricing-plans-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
            variants={cardVariants}
          >
            <div className={`plan-label ${plan.labelColor}`}>
              {plan.name}
            </div>
            
            <p className="plan-description">
              {plan.description}
            </p>
            
            <ul className="plan-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button2 to="/contact" className="trial-button">
              Start 7-days Free Trial
            </Button2>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="pricing-plans-bottom-pattern" />
    </div>
  );
};

export default PricingPlans; 