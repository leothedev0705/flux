import React, { useState } from 'react';
import '../styles/ContactUs.css';
import Button2 from './Button2';
import BottomPattern from '../assets/bottom_pattern.png';
import BlurImage from '../assets/Blur.png';
import ContactUsImage from '../assets/ContactUs.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = async (formData) => {
    const pdf = new jsPDF();
    
    // Add company logo/title
    pdf.setFontSize(20);
    pdf.setTextColor(37, 211, 102); // WhatsApp green
    pdf.text('FLUXURIOUS TECH', 20, 20);
    
    // Add form title
    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);
    pdf.text('Contact Form Submission', 20, 40);
    
    // Add form data
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    
    let yPosition = 60;
    const lineHeight = 8;
    
    pdf.text(`Full Name: ${formData.name}`, 20, yPosition);
    yPosition += lineHeight;
    
    pdf.text(`Email: ${formData.email}`, 20, yPosition);
    yPosition += lineHeight;
    
    pdf.text(`Phone: ${formData.phone}`, 20, yPosition);
    yPosition += lineHeight;
    
    pdf.text(`Company: ${formData.company}`, 20, yPosition);
    yPosition += lineHeight;
    
    pdf.text(`Project Type: ${formData.projectType}`, 20, yPosition);
    yPosition += lineHeight;
    
    // Handle long message text
    const messageLines = pdf.splitTextToSize(`Project Details: ${formData.message}`, 170);
    pdf.text(messageLines, 20, yPosition);
    
    // Add timestamp
    const timestamp = new Date().toLocaleString();
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Submitted on: ${timestamp}`, 20, 280);
    
    return pdf;
  };

  const sendToWhatsApp = (pdfBlob) => {
    const phoneNumbers = ['9967846507'];
    
    phoneNumbers.forEach(phone => {
      const whatsappUrl = `https://wa.me/${phone}?text=New contact form submission from FLUXURIOUS TECH website. Please check the attached PDF for details.`;
      window.open(whatsappUrl, '_blank');
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Generate PDF
      const pdf = await generatePDF(formData);
      const pdfBlob = pdf.output('blob');
      
      // Create FormData to send to server
      const formDataToSend = new FormData();
      formDataToSend.append('pdf', pdfBlob, `contact_form_${formData.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('message', formData.message);
      
      // Send to backend server
      const response = await fetch('http://localhost:3001/send-pdf-whatsapp', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Failed to send to server');
      }
      
      const result = await response.json();
      
      // Also send form data directly (as backup)
      const formDataResponse = await fetch('http://localhost:3001/send-form-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
      
      alert('Form submitted successfully! PDF and form data sent to WhatsApp numbers.');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="contact-blur-top" />
      
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <motion.h1 
              className="contact-title"
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
              Get In Touch With Us
            </motion.h1>
            <motion.p 
              className="contact-subtitle"
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
              Ready to start your next project? Let's discuss how we can bring your vision to life with our expert development services.
            </motion.p>
          </div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            <div className="form-outer">
              <div className="form-inner">
                <div className="form-content">
                  <div className="form-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div className="form-field">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        
                        <div className="form-field">
                          <label htmlFor="company">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>

                      <div className="form-field full-width">
                        <label htmlFor="projectType">Select project type</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="web-design">Web Design</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="full-stack">Full Stack Development</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-field full-width">
                        <label htmlFor="message">Project Details *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                          rows="5"
                        ></textarea>
                      </div>

                      <div className="form-submit">
                        <Button2 type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button2>
                      </div>
                    </form>
                  </div>

                  <div className="form-image">
                    <img src={ContactUsImage} alt="Contact Us Illustration" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="contact-bottom-pattern" />
    </div>
  );
};

export default ContactUs; 