import React, { useState } from 'react';
import '../../styles/Services/ComprehensiveServices.css';
import { 
  Palette, Code, Database, MessageCircle, Search, Server, 
  Smartphone, Globe, Zap, Shield, BarChart3, Users,
  CheckCircle, Clock, DollarSign, Star, Award, Target
} from 'lucide-react';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const comprehensiveServices = [
  {
    title: 'UI/UX Design',
    description: 'Stunning interfaces and seamless user experiences.',
    icon: Palette,
    category: 'Design',
    features: [
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing & Optimization',
      'Design Systems & Component Libraries',
      'Interactive Prototypes & Animations',
      'Responsive Design for All Devices',
      'Design Handoff & Documentation'
    ],
    process: [
      'Discovery & Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'User Testing',
      'Refinement & Delivery'
    ],
    deliverables: [
      'High-fidelity mockups',
      'Interactive prototypes',
      'Design system documentation',
      'User flow diagrams',
      'Style guide'
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Responsive web apps with modern frameworks.',
    icon: Code,
    category: 'Development',
    features: [
      'React, Vue, and Angular Development',
      'Responsive & Mobile-First Design',
      'Progressive Web Apps (PWA)',
      'Performance Optimization',
      'Cross-Browser Compatibility',
      'Modern CSS & Animations',
      'State Management Solutions',
      'API Integration & Testing'
    ],
    process: [
      'Planning & Architecture',
      'Component Development',
      'Integration & Testing',
      'Performance Optimization',
      'Deployment & Launch'
    ],
    deliverables: [
      'Fully responsive website',
      'Optimized for performance',
      'Cross-browser compatible',
      'SEO optimized code',
      'Documentation & maintenance guide'
    ]
  },
  {
    title: 'Backend Development',
    description: 'Robust server solutions and database architecture.',
    icon: Database,
    category: 'Development',
    features: [
      'Node.js, Python, and PHP Development',
      'RESTful APIs and GraphQL',
      'Database Design & Optimization',
      'Authentication & Authorization',
      'Cloud Deployment & Scaling',
      'Security & Data Protection',
      'API Documentation',
      'Database Migration & Backup'
    ],
    process: [
      'Requirements Analysis',
      'Database Design',
      'API Development',
      'Security Implementation',
      'Testing & Deployment'
    ],
    deliverables: [
      'Secure backend API',
      'Database schema',
      'API documentation',
      'Deployment scripts',
      'Security audit report'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    category: 'Development',
    features: [
      'iOS & Android Development',
      'React Native & Flutter',
      'Native App Development',
      'Push Notifications',
      'Offline Functionality',
      'App Store Optimization',
      'Performance Optimization',
      'Cross-Platform Compatibility'
    ],
    process: [
      'App Planning & Design',
      'Development & Testing',
      'App Store Submission',
      'Launch & Marketing',
      'Ongoing Support'
    ],
    deliverables: [
      'Native mobile apps',
      'App store listings',
      'Push notification setup',
      'Analytics integration',
      'App maintenance plan'
    ]
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store development and optimization.',
    icon: Globe,
    category: 'Business',
    features: [
      'Custom E-commerce Platforms',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing System',
      'Customer Management',
      'Analytics & Reporting',
      'Multi-vendor Support',
      'Mobile Commerce'
    ],
    process: [
      'Store Planning',
      'Design & Development',
      'Payment Integration',
      'Testing & Launch',
      'Training & Support'
    ],
    deliverables: [
      'Custom e-commerce website',
      'Payment processing setup',
      'Inventory management system',
      'Admin dashboard',
      'Training documentation'
    ]
  },
  {
    title: 'AI & Chatbot Development',
    description: 'Intelligent AI for customer engagement.',
    icon: MessageCircle,
    category: 'AI',
    features: [
      'Custom Chatbot Development',
      'Natural Language Processing',
      'Integration with Messaging Platforms',
      '24/7 Customer Support Automation',
      'Lead Generation & Qualification',
      'Analytics & Performance Tracking',
      'Multi-language Support',
      'Voice Assistant Integration'
    ],
    process: [
      'Requirements Gathering',
      'AI Model Training',
      'Integration & Testing',
      'Deployment & Monitoring',
      'Performance Optimization'
    ],
    deliverables: [
      'Custom chatbot solution',
      'Integration documentation',
      'Analytics dashboard',
      'Training materials',
      'Ongoing support plan'
    ]
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Search engine optimization and local discovery.',
    icon: Search,
    category: 'Marketing',
    features: [
      'Technical SEO Optimization',
      'Local Search Optimization',
      'Keyword Research & Strategy',
      'Content Optimization',
      'Google My Business Management',
      'Performance Monitoring',
      'Link Building',
      'Competitor Analysis'
    ],
    process: [
      'SEO Audit',
      'Strategy Development',
      'Implementation',
      'Monitoring & Reporting',
      'Continuous Optimization'
    ],
    deliverables: [
      'SEO audit report',
      'Keyword strategy',
      'Monthly performance reports',
      'Content optimization',
      'Analytics setup'
    ]
  },
  {
    title: 'Full Stack Development',
    description: 'Complete development with seamless deployment.',
    icon: Server,
    category: 'Development',
    features: [
      'End-to-End Web Application Development',
      'DevOps & CI/CD Pipelines',
      'Cloud Infrastructure Setup',
      'Domain & Hosting Management',
      'SSL Certificates & Security',
      'Ongoing Maintenance & Updates',
      'Performance Monitoring',
      'Scalability Planning'
    ],
    process: [
      'Project Planning',
      'Development Phase',
      'Testing & Quality Assurance',
      'Deployment & Launch',
      'Post-Launch Support'
    ],
    deliverables: [
      'Complete web application',
      'Deployment documentation',
      'Maintenance plan',
      'Performance monitoring',
      'Training & support'
    ]
  }
];



const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and MVP requirements.',
    icon: Target
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Creating wireframes, mockups, and interactive prototypes to visualize your MVP solution.',
    icon: Palette
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Building your MVP with clean, scalable code and thorough testing.',
    icon: Code
  },
  {
    step: 4,
    title: 'Deployment & Launch',
    description: 'Deploying your MVP with proper hosting, security, and performance optimization.',
    icon: Zap
  },
  {
    step: 5,
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your MVP running smoothly.',
    icon: Shield
  }
];

const ComprehensiveServices = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Design', 'Development', 'Business', 'AI', 'Marketing'];

  const filteredServices = selectedCategory === 'All' 
    ? comprehensiveServices 
    : comprehensiveServices.filter(service => service.category === selectedCategory);

  return (
    <section className="comprehensive-services">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      
      {/* Hero Section */}
      <div className="services-hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Comprehensive Digital Solutions</h1>
          <p>From concept to deployment, we deliver end-to-end digital solutions that drive business growth and user engagement.</p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${hoveredService === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <service.icon size={40} />
                </div>
                                 <div className="service-info">
                   <h3>{service.title}</h3>
                   <p className="service-description">{service.description}</p>
                 </div>
              </div>

              {/* Hover Details */}
              <motion.div
                className="service-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredService === index ? 1 : 0,
                  height: hoveredService === index ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="details-section">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <CheckCircle size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="details-section">
                  <h4>Our Process:</h4>
                  <ol>
                    {service.process.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="details-section">
                  <h4>Deliverables:</h4>
                  <ul>
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex}>
                        <Award size={16} />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Our Development Process</h2>
          <p>A proven methodology that ensures quality, transparency, and successful project delivery.</p>
        </motion.div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-icon">
                <step.icon size={32} />
              </div>
                             <h3>{step.title}</h3>
               <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default ComprehensiveServices; 