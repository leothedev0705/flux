import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUsComponent from '../components/ContactUs';
import WhatsApp from '../components/WhatsApp';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactUsComponent />
      <WhatsApp />
      <Footer />
    </>
  );
};

export default ContactUs;
