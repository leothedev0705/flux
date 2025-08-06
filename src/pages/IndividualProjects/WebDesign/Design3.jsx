// Design3.jsx - Fashion Website Project Page
// This file is for the Fashion Website project (Design3)
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import FashionWebDesignImage from '../../../assets/PROJECT/WebDesign/FashionWebDesign.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import MockupFashionWebDesign from '../../../assets/PROJECT/WebDesign/Mockup_FashionWebDesign.png';
import { useNavigate } from 'react-router-dom';
import './Design.css';

const project = {
  title: 'Fashion Website',
  subheader: 'Style that speaks digital',
  description: 'Built a bold, trend-forward site where aesthetics and usability walk the runway together.'
};

// CSS variables for styling
const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const Design3 = () => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  // Animation variants for flip effect
  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 90, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    }),
  };

  // Mobile detection hook
  const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
    React.useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isMobile;
  };
  
  // Very small screen detection hook
  const useIsVerySmallScreen = (breakpoint = 490) => {
    const [isVerySmall, setIsVerySmall] = React.useState(() => window.innerWidth <= breakpoint);
    React.useEffect(() => {
      const onResize = () => setIsVerySmall(window.innerWidth <= breakpoint);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isVerySmall;
  };
  
  const isMobile = useIsMobile();
  const isVerySmallScreen = useIsVerySmallScreen();
  
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', padding: isMobile ? (isVerySmallScreen ? '0 12px' : '0 16px') : 0 }}>
      <Navbar />
      {/* Back Button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '24px 0 0 48px', zIndex: 2 }}>
        <Button2 onClick={() => navigate('/projects?section=webdesign')} style={{ width: 'fit-content', minWidth: '40px' }}>{'< Back to Web Design Projects'}</Button2>
      </div>
      {/* Blur effect at the top */}
      <div className="design-blur-container">
        <img src={BlurImage} alt="Blur" className="design-blur-img" />
      </div>
      <motion.div 
        className="design-content"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={0}
      >
        <div className="design-flex-row">
          {/* Left: Info */}
          <motion.div 
            className="design-info"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            custom={1}
          >
            <div className="design-title">
              {project.title}
            </div>
            <div className="design-subheader">
              {project.subheader}
            </div>
            <div className="design-description">
              {project.description}
            </div>
            <Button2 onClick={() => alert('View Project clicked!')}>View Project</Button2>
          </motion.div>
          {/* Right: Image Card */}
          <motion.div 
            className="design-image-outer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            custom={2}
          >
            <div
              className={`design-image-card${hover ? ' design-image-card-hover' : ''}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`design-image-inner${hover ? ' design-image-inner-hover' : ''}`}>
                <img src={FashionWebDesignImage} alt="Project Screenshot" className="design-img" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* HERO SECTION - Unified across all Design pages */}
      <motion.div 
        style={{
        width: '100%',
        background: 'radial-gradient(ellipse at center, #2d0b4e 0%, #0A0A1B 100%)',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={3}
      >
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: 16,
          letterSpacing: '-1px',
          padding: '0 24px',
        }}>
          We don't just build websites — we craft digital experiences.
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
          padding: '0 24px',
        }}>
          A modern web solution tailored to your vision — responsive, scalable, and designed to elevate user experience across every screen.
        </div>
        <img src={MockupFashionWebDesign} alt="Fashion Website Responsive Mockup" style={{
          width: '90vw',
          maxWidth: 1000,
          minWidth: 280,
          display: 'block',
          borderRadius: 24,
          margin: '0 auto',
        }} />
      </motion.div>
      {/* END HERO SECTION */}
      {/* Walkthrough Section */}
      <motion.div 
        style={{
        width: '100%',
        background: '#0A0A1B',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        position: 'relative',
        }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={4}
      >
        {/* Decorative Blur at the top of the section */}
        <img src={BlurImage} alt="Blur" style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          maxWidth: 900,
          minWidth: 180,
          opacity: 0.7,
          filter: 'blur(2px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: 12,
          letterSpacing: '-1px',
          zIndex: 1,
          padding: '0 24px',
        }}>
          Watch the Full Walkthrough
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
          zIndex: 1,
          padding: '0 24px',
        }}>
          A quick video tour of our platform — explore features, design, and functionality in under 2 minutes.
        </div>
        <div
          style={{
            position: 'relative',
            width: 'clamp(75vw, 350px, 350px)',
            maxWidth: '75vw',
            height: 'clamp(200px, 35vw, 400px)',
            borderRadius: '1rem',
            border: `2px solid ${hover ? borderHover : borderColor}`,
            background: '#18182a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
            margin: '0 auto',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            style={{
              width: 'clamp(70vw, 310px, 310px)',
              maxWidth: '70vw',
              height: 'clamp(150px, 30vw, 360px)',
              borderRadius: '0.7rem',
              border: `2px solid ${hover ? borderHover : borderColor}`,
              background: innerBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              transition: 'border-color 0.3s, box-shadow 0.3s',
              boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
            }}
          >
            <img src={FashionWebDesignImage} alt="Walkthrough Screenshot" style={{
              width: '95%',
              height: '90%',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '0.7rem',
              background: '#18182a',
              margin: 0
            }} />
          </div>
        </div>
      </motion.div>
      {/* END WALKTHROUGH SECTION */}
      <Footer />
    </div>
  );
};

export default Design3;
