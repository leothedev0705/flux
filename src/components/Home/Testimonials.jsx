import React from 'react';
import '../../styles/Home/Testimonials.css';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ishant Yadav",
      role: "Founder of TechStartup",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=IY",
      quote: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration."
    },
    {
      name: "Luziana DMello",
      role: "CEO of Digital Solutions",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=LD",
      quote: "The speed and precision with which they executed our project was remarkable. Their innovative approach and technical expertise helped us launch ahead of schedule."
    },
    {
      name: "Shardul Bhande",
      role: "Product Manager at Innovation Co",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=SB",
      quote: "From concept to launch, Fluxurious demonstrated exceptional professionalism. Their agile methodology and clear communication made the development process smooth and efficient."
    }
  ];

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
    <section className="testimonials">
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
            Client Success Stories
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
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={cardVariants}
            >
              <div className="testimonial-author">
                <div className="author-image-container">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p className="quote">{testimonial.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 