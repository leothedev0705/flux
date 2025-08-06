// WebDev2.jsx - Gym Website Project Page
// This file is for the Gym Website project (WebDev2)
import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import GymWebsiteImage from '../../../assets/PROJECT/WebDev/GymWebsite.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import MockupGymWebsite from '../../../assets/PROJECT/WebDev/Mockup_GymWebsite.png';
import VideoGym from '../../../assets/PROJECT/WebDev/Video_Gym.mp4';
import { motion } from 'framer-motion';
import '../../../styles/Projects/WebDev1.css';

const project = {
  title: 'Gym Website',
  subheader: 'Modern, powerful, and built to move',
  description: 'Sleek design. Fast access. Made for members who lift, train, and hustle—and for the trainers who keep them going.'
};

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
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for better mobile feel
    },
  }),
};

// Mobile-specific animation variants (no 3D transforms)
const mobileCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};



const WebDev2 = () => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();
  
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
  
  // CSS variables for styling
  const borderColor = '#2a2a3a';
  const borderHover = '#ab28fa';
  const innerBg = '#0f0f1a';
  
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', padding: isMobile ? (isVerySmallScreen ? '0 12px' : '0 16px') : 0 }}>
      <Navbar />
      {/* Back Button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '24px 0 0 48px', zIndex: 2 }}>
        <Button2 onClick={() => navigate('/projects?section=webdev')} style={{ width: 'fit-content', minWidth: '40px' }}>{'< Back to Web Development Projects'}</Button2>
      </div>
      {/* Blur effect at the top */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 0 }}>
        <img src={BlurImage} alt="Blur" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60vw', maxWidth: 900, minWidth: 180, opacity: 0.7, filter: 'blur(2px)', zIndex: 0, pointerEvents: 'none' }} />
      </div>
      {/* Top Section: Responsive Layout */}
      <motion.div 
        className="webdev1-top-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
        variants={isMobile ? mobileCardVariants : cardVariants}
        style={{ perspective: isMobile ? 'none' : '1000px' }}
      >
        {/* Image Card First on Mobile */}
        <motion.div 
          className="webdev1-image-box"
          custom={1}
          variants={isMobile ? mobileCardVariants : cardVariants}
        >
            <div
            className="webdev1-image-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none' }}
          >
            <div
              className="webdev1-image-inner"
              style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none', background: innerBg }}
            >
              <img src={GymWebsiteImage} alt="Project Screenshot" className="webdev1-main-img" />
            </div>
          </div>
        </motion.div>
        {/* Info Box */}
        <motion.div 
          className="webdev1-info-box"
          custom={2}
          variants={isMobile ? mobileCardVariants : cardVariants}
        >
          <div className="webdev1-title">{project.title}</div>
          <div className="webdev1-subheader">{project.subheader}</div>
          <div className="webdev1-description">{project.description}</div>
          <Button2 onClick={() => alert('View Project clicked!')} style={{ width: 'fit-content', minWidth: '40px' }}>View Project</Button2>
        </motion.div>
      </motion.div>
      {/* HERO SECTION - Unified across all WebDev pages */}
      <motion.div 
        className="webdev1-hero-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={3}
        variants={isMobile ? mobileCardVariants : cardVariants}
        style={{ perspective: isMobile ? 'none' : '1000px' }}
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
        <img src={MockupGymWebsite} alt="Gym Website Responsive Mockup" style={{
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
        className="webdev1-walkthrough-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={4}
        variants={isMobile ? mobileCardVariants : cardVariants}
        style={{ perspective: isMobile ? 'none' : '1000px' }}
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
        }}>
          A quick video tour of our platform — explore features, design, and functionality in under 2 minutes.
        </div>
        <div
          style={{
            position: 'relative',
            width: isMobile ? 'clamp(85vw, 300px, 400px)' : 'clamp(75vw, 350px, 350px)',
            maxWidth: isMobile ? '85vw' : '75vw',
            height: isMobile ? 'clamp(180px, 40vw, 350px)' : 'clamp(200px, 35vw, 400px)',
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
              width: isMobile ? 'clamp(80vw, 280px, 380px)' : 'clamp(70vw, 310px, 310px)',
              maxWidth: isMobile ? '80vw' : '70vw',
              height: isMobile ? 'clamp(160px, 35vw, 330px)' : 'clamp(150px, 30vw, 360px)',
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
            <video
              src={VideoGym}
              controls
              preload="metadata"
              onError={(e) => {
                console.error('Video loading error:', e);
              }}
              onLoadStart={() => {
                console.log('Video loading started');
              }}
              onLoadedData={() => {
                console.log('Video data loaded');
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '0.7rem',
                background: '#18182a',
                margin: 0,
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default WebDev2;
