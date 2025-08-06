import React, { useState } from 'react';
import '../../styles/Services/FAQ.css';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const faqs = [
  { 
    question: 'What is Fluxurious Tech?', 
    answer: 'Fluxurious Tech is a modern web development and design agency that specializes in creating responsive, scalable, and user-centric digital experiences. We craft custom websites, web applications, and mobile apps that help businesses establish a strong online presence and drive growth.' 
  },
  { 
    question: 'What services can I get from Fluxurious Tech?', 
    answer: 'We offer comprehensive web development services including custom website design, responsive web development, mobile app development, UI/UX design, e-commerce solutions, and ongoing maintenance and support. Our team handles everything from initial concept to final deployment and beyond.' 
  },
  { 
    question: 'Do you service businesses of all sizes?', 
    answer: 'Yes, we work with businesses of all sizes - from startups and small businesses to large enterprises. We tailor our approach and solutions to meet your specific needs, budget, and timeline. Whether you\'re launching your first website or scaling an existing platform, we have the expertise to help.' 
  },
  { 
    question: 'Does your solution integrate with other software and tools?', 
    answer: 'Absolutely! We build websites and applications that seamlessly integrate with your existing business tools and software. This includes CRM systems, payment gateways, marketing tools, analytics platforms, and custom APIs. We ensure your digital solution works harmoniously with your current workflow.' 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

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

  return (
    <section className="faq-section">
      <img src={BlurEffect} alt="" className="faq-blur-top" />
      <motion.h2 
        className="faq-heading"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        Frequently Asked Question
      </motion.h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-item${openIndex === idx ? ' open' : ''}`}> 
            <button className="faq-question" onClick={() => toggle(idx)}>
              <span>{faq.question}</span>
              <span className="faq-arrow">&#9660;</span>
            </button>
            <div className="faq-answer" style={{ display: openIndex === idx ? 'block' : 'none' }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
