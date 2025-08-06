import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Home/OurWork.css';
import BlurEffect from '../../assets/Blur.png';
import LogoSymbol from '../../assets/IMP/LOGO_SYMBOL.png';
import { motion } from 'framer-motion';

// WebDev Projects
import BaysideSports from '../../assets/PROJECT/WebDev/BaysideSports.png';
import GymWebsite from '../../assets/PROJECT/WebDev/GymWebsite.png';
import NetwealthIndia from '../../assets/PROJECT/WebDev/NetwealthIndia.png';

// WebDesign Projects
import Aarohan from '../../assets/PROJECT/WebDesign/Aarohan.png';
import FashionWebDesign from '../../assets/PROJECT/WebDesign/FashionWebDesign.png';
import StudentDashboard from '../../assets/PROJECT/WebDesign/Student_Dashboard.png';

const OurWork = () => {
  const projects = [
    // WebDev Projects
    {
      title: "Bayside Sports",
      categories: ["Web Development", "Sports", "E-commerce"],
      image: BaysideSports,
      description: "Modern sports equipment e-commerce platform with advanced features and seamless user experience",
      url: "/projects/webdev/1"
    },
    {
      title: "Gym Website",
      categories: ["Web Development", "Fitness", "Membership"],
      image: GymWebsite,
      description: "Comprehensive gym website with membership management and class booking system",
      url: "/projects/webdev/2"
    },
    {
      title: "NetWealth India",
      categories: ["Web Development", "Finance", "Investment"],
      image: NetwealthIndia,
      description: "Financial services platform for investment management and wealth planning",
      url: "/projects/webdev/3"
    },
    // WebDesign Projects
    {
      title: "Aarohan",
      categories: ["Web Design", "Education", "UI/UX"],
      image: Aarohan,
      description: "Educational platform with modern design and intuitive user interface",
      url: "/projects/webdesign/1"
    },
    {
      title: "Fashion Web Design",
      categories: ["Web Design", "Fashion", "E-commerce"],
      image: FashionWebDesign,
      description: "Stylish fashion e-commerce website with stunning visual design",
      url: "/projects/webdesign/2"
    },
    {
      title: "Student Dashboard",
      categories: ["Web Design", "Education", "Dashboard"],
      image: StudentDashboard,
      description: "Comprehensive student dashboard with modern design and analytics",
      url: "/projects/webdesign/3"
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchDistance, setTouchDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const projectDisplayRef = useRef(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index) => {
    if (isTransitioning || index === currentProject) return;
    setIsTransitioning(true);
    setCurrentProject(index);
  };

  const handleProjectClick = (url) => {
    window.location.href = url;
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDistance(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging || isTransitioning) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    const distance = touchStart - currentTouch;
    setTouchDistance(distance);
  };

  const onTouchEnd = () => {
    if (!isDragging || !touchStart || !touchEnd) {
      setIsDragging(false);
      setTouchDistance(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
    
    setIsDragging(false);
    setTouchDistance(0);
  };

  // Implement mouse drag functionality (for desktop testing)
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDistance(0);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      setDragEnd(e.clientX);
      const distance = dragStart - e.clientX;
      setDragDistance(distance);
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      const distance = dragStart - dragEnd;
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          nextProject();
        } else {
          prevProject();
        }
      }
      setIsDragging(false);
      setDragDistance(0);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setDragDistance(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Match with CSS transition duration (800ms)
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="our-work">
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
            Our Recent Work
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
            Transforming ideas into digital excellence. Here's a glimpse of our latest projects.
          </motion.p>
        </div>

        <div className="project-showcase">
          <div className="project-navigation">
            <button 
              className="nav-arrow prev-arrow" 
              onClick={prevProject} 
              aria-label="Previous project"
              disabled={isTransitioning}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div 
              ref={projectDisplayRef}
              className={`project-display ${isDragging || Math.abs(dragDistance) > 0 ? 'is-dragging' : ''}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {(isDragging || Math.abs(dragDistance) > 0) && (
                <div 
                  className="drag-indicator"
                  style={{
                    transform: `translateX(${dragDistance > 0 ? '10px' : '-10px'})`,
                    opacity: Math.min(Math.abs(dragDistance) / 100, 1)
                  }}
                >
                  <img src={LogoSymbol} alt="" />
                </div>
              )}
              
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`project-card ${index === currentProject ? 'active' : ''}`}
                  data-index={index % 2 === 0 ? 'even' : 'odd'}
                  onTransitionEnd={() => index === currentProject && setIsTransitioning(false)}
                  style={{
                    transform: index === currentProject && isDragging 
                      ? `translateX(${-touchDistance}px)` 
                      : undefined
                  }}
                >
                  <div className="card-inner">
                    <div className="project-content">
                      <div className="project-details">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="categories-container">
                          {project.categories.map((cat, catIndex) => (
                            <span key={catIndex} className="category" data-category={cat}>
                              {cat}
                            </span>
                          ))}
                        </div>
                        <p className="project-description">{project.description}</p>
                      </div>
                                             <div 
                         className={`project-image-container ${project.categories.includes('Mobile Development') ? 'mobile-app' : ''}`}
                         onClick={() => handleProjectClick(project.url)}
                       >
                        <div className="project-image-wrapper">
                          <img src={project.image} alt={project.title} className="project-image" />
                          <div className="image-overlay">
                            <span>View Project</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="nav-arrow next-arrow" 
              onClick={nextProject} 
              aria-label="Next project"
              disabled={isTransitioning}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          <div className="project-counter">
            <span className="current">{currentProject + 1}</span>
            <span className="separator">/</span>
            <span className="total">{projects.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork; 