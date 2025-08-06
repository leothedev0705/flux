// MobDev2.jsx - Music App Project Page
// This file is for the Music App project (MobDev2)
import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import BlurImage from '../../../assets/Blur.png';
import BottomPattern from '../../../assets/bottom_pattern.png';
import Button2 from '../../../components/Button2.jsx';
import Mob3Image from '../../../assets/PROJECT/MobileDev/Mob3.png';
import MockupAppDev21 from '../../../assets/PROJECT/MobileDev/Mockup_AppDev21.png';
import MockupAppDev22 from '../../../assets/PROJECT/MobileDev/Mockup_AppDev22.png';
import './MobDev.css';

const project = {
  title: 'Music App',
  subheader: 'Music & Entertainment',
  description: 'A modern music streaming app with personalized recommendations.'
};

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
};

const MobDev2 = () => {
  const [hover, setHover] = React.useState(false);
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    console.log('MobDev2 component mounted');
    console.log('Mockup images:', MockupAppDev21, MockupAppDev22);
  }, []);

  return (
    <div className="mobdev-root">
      <Navbar />
      {/* Blur effect at the top */}
      <div className="mobdev-blur-container">
        <img src={BlurImage} alt="Blur" className="mobdev-blur-img" />
      </div>
      
      {/* Hero Section */}
      <div className="mobdev-content">
        <div className="mobdev-flex-row" style={{ 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '32px' : '48px',
          alignItems: isMobile ? 'center' : 'center'
        }}>
          {/* Image First on Mobile */}
          <div className="mobdev-image-outer" style={{ 
            order: isMobile ? 1 : 2,
            width: isMobile ? '100%' : 'auto'
          }}>
            <div
              className={`mobdev-phone-mockup${hover ? ' mobdev-phone-mockup-hover' : ''}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                width: isMobile ? '280px' : '300px',
                height: isMobile ? '560px' : '600px'
              }}
            >
              <div className={`mobdev-phone-inner${hover ? ' mobdev-phone-inner-hover' : ''}`} style={{
                width: isMobile ? '250px' : '270px',
                height: isMobile ? '500px' : '540px'
              }}>
                <img src={Mob3Image} alt="Music App Screenshot" className="mobdev-phone-image" />
              </div>
            </div>
          </div>
          
          {/* Text Second on Mobile */}
          <div className="mobdev-info" style={{ 
            order: isMobile ? 2 : 1,
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isMobile ? '100%' : '520px'
          }}>
            <div className="mobdev-title" style={{
              fontSize: isMobile ? '2.2rem' : '2.8rem'
            }}>
              {project.title}
            </div>
            <div className="mobdev-subheader" style={{
              fontSize: isMobile ? '1.1rem' : '1.25rem'
            }}>
              {project.subheader}
            </div>
            <div className="mobdev-description" style={{
              fontSize: isMobile ? '1rem' : '1.15rem'
            }}>
              {project.description}
            </div>
            <Button2 style={{
              alignSelf: isMobile ? 'center' : 'flex-start',
              margin: isMobile ? '0 auto' : '0',
              display: isMobile ? 'block' : 'inline-block'
            }}>View Project</Button2>
          </div>
        </div>
      </div>

      {/* Mockup Images Section */}
      <div className="mobdev-mockup-section" style={{ minHeight: '600px', position: 'relative' }}>
        {/* Blur effect near title */}
        <div className="mobdev-mockup-blur-container">
          <img src={BlurImage} alt="Blur" className="mobdev-mockup-blur-img" />
        </div>
        
        <div className="mobdev-mockup-content">
          <div className="mobdev-mockup-text">
            <h2 className="mobdev-mockup-title">
              We don't just build apps — we craft digital experiences.
            </h2>
            <p className="mobdev-mockup-description">
              A modern mobile solution tailored to your vision — responsive, scalable, and designed to elevate user experience across every device.
            </p>
          </div>
          
          <div className="mobdev-mockup-images" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div className="mobdev-mockup-image-container" style={{ flex: 1, maxWidth: '400px', minWidth: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={MockupAppDev21} 
                alt="Music App Mockup 1" 
                className="mobdev-mockup-image" 
                style={{ width: '100%', height: 'auto', maxWidth: '350px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                onLoad={() => console.log('Mockup 1 loaded successfully')}
                onError={(e) => console.error('Error loading mockup 1:', e)}
              />
            </div>
            <div className="mobdev-mockup-image-container" style={{ flex: 1, maxWidth: '400px', minWidth: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={MockupAppDev22} 
                alt="Music App Mockup 2" 
                className="mobdev-mockup-image" 
                style={{ width: '100%', height: 'auto', maxWidth: '350px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                onLoad={() => console.log('Mockup 2 loaded successfully')}
                onError={(e) => console.error('Error loading mockup 2:', e)}
              />
            </div>
          </div>
        </div>
        
        {/* Bottom pattern */}
        <div className="mobdev-mockup-bottom-pattern">
          <img src={BottomPattern} alt="Bottom Pattern" className="mobdev-bottom-pattern-img" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MobDev2;

