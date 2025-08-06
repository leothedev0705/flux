import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/Home/HowWeDeliver.css';
import BlurEffect from '../../assets/Blur.png';

const timelineSteps = [
  {
    day: 'DAY 1',
    title: 'KICKOFF',
    subtitle: 'Project Alignment & Roadmapping',
    description: [
      'We begin with a focused strategy session to align on goals, define scope, and lock in timelines.',
      'From day one, design and development move in parallel — no waiting, no fluff.'
    ]
  },
  {
    day: 'DAY 2',
    title: 'FOUNDATION',
    subtitle: 'Core Systems & Architecture',
    description: [
      'Setting up the technical infrastructure and core design systems.',
      'Building the foundational components that will power your entire product.'
    ]
  },
  {
    day: 'DAY 3',
    title: 'ASSEMBLY',
    subtitle: 'Feature Integration & Testing',
    description: [
      'Rapid assembly of features and functionality using our component library.',
      'Continuous testing and optimization for peak performance.'
    ]
  },
  {
    day: 'DAY 4',
    title: 'LAUNCH',
    subtitle: 'Final Polish & Deployment',
    description: [
      'Thorough testing across devices and final performance optimization.',
      'Deployment preparation and successful launch execution.'
    ]
  }
];

const TimelineStep = ({ step, index }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for day labels
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div ref={sectionRef} className="timeline-step">
      <div className="timeline-marker">
        <motion.span 
          className="day-label"
          style={{ y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {step.day}
        </motion.span>
        <div className="marker-dot"></div>
      </div>
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="step-details">
          <h3>{step.title}</h3>
          <h4>{step.subtitle}</h4>
          {step.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function HowWeDeliver() {
  return (
    <section className="how-we-deliver">
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
            How We Deliver Fast
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
            A streamlined, day-by-day build process — engineered for<br />
            speed, clarity, and launch without lag.
          </motion.p>
        </div>

        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 