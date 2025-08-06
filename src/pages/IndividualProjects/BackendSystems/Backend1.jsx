import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import DreamStackImage from '../../../assets/PROJECT/BackendSystems/DreamStack.jpg';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../../styles/Projects/WebDev1.css';


const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const project = {
  title: 'DreamStack',
  subheader: 'AI-Powered Website Builder',
  description: 'Built a revolutionary platform that creates stunning websites with AI in minutes. Features bulk import functionality and automated project management.'
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

const Backend1 = () => {
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
  
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', padding: isMobile ? (isVerySmallScreen ? '0 12px' : '0 16px') : 0 }}>
      <Navbar />
      {/* Back Button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '24px 0 0 48px', zIndex: 2 }}>
        <Button2 onClick={() => navigate('/projects?section=backend')} style={{ width: 'fit-content', minWidth: '40px' }}>{'< Back to Backend Systems Projects'}</Button2>
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
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
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
              <img src={DreamStackImage} alt="Project Screenshot" className="webdev1-main-img" />
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
          <Button2 href="https://dreamstack.ai" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content', minWidth: '40px' }}>Visit Platform</Button2>
        </motion.div>
      </motion.div>
      
       {/* Mockup Section - Responsive Devices */}
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
           perspective: isMobile ? 'none' : '1000px',
         }}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.2, margin: "-50px" }}
         custom={3}
         variants={isMobile ? mobileCardVariants : cardVariants}
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
           We don't just build platforms — we craft AI-powered experiences.
         </div>
         <div style={{
           color: '#bdbdbd',
           fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
           textAlign: 'center',
           maxWidth: 700,
           margin: '0 auto 40px auto',
           padding: '0 24px',
         }}>
           A revolutionary AI platform tailored to your vision — intelligent, scalable, and designed to transform how websites are built.
         </div>
         <img src={DreamStackImage} alt="DreamStack Platform Screenshot" style={{
           width: '90vw',
           maxWidth: 1000,
           minWidth: 280,
           display: 'block',
           borderRadius: 24,
           margin: '0 auto',
         }} />
       </motion.div>
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
           perspective: isMobile ? 'none' : '1000px',
         }}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.3 }}
         custom={4}
         variants={isMobile ? mobileCardVariants : cardVariants}
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
           A quick video tour of our AI-powered platform — explore features, design, and functionality in under 2 minutes.
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
                           <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '0.7rem',
                overflow: 'hidden',
                background: '#000',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1107824283?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0.7rem',
                      border: 'none'
                    }} 
                    title="Video_DreamStack"
                  />
                </div>
              </div>
           </div>
         </div>
       </motion.div>
       
      {/* CTA Section */}
      <motion.div 
        style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgba(171, 40, 250, 0.1) 0%, rgba(124, 21, 159, 0.1) 100%)',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        position: 'relative',
          perspective: isMobile ? 'none' : '1000px',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                 custom={5}
         variants={isMobile ? mobileCardVariants : cardVariants}
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
           Ready to Build Your Dream Project?
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
          padding: '0 24px',
        }}>
          Let's create something amazing together
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Button2 to="/contact" style={{ width: 'fit-content', minWidth: '40px' }}>Start Your Project</Button2>
          <Button2 to="/projects" style={{ width: 'fit-content', minWidth: '40px' }}>View All Projects</Button2>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Backend1; 