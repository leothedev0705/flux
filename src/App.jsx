import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import WebDev1 from './pages/IndividualProjects/WebDev/WebDev1';
import WebDev2 from './pages/IndividualProjects/WebDev/WebDev2';
import WebDev3 from './pages/IndividualProjects/WebDev/WebDev3';
import WebDev4 from './pages/IndividualProjects/WebDev/WebDev4';
import Design1 from './pages/IndividualProjects/WebDesign/Design1';
import Design2 from './pages/IndividualProjects/WebDesign/Design2';
import Design3 from './pages/IndividualProjects/WebDesign/Design3';
import MobDev1 from './pages/IndividualProjects/MobileDev/MobDev1';
import MobDev2 from './pages/IndividualProjects/MobileDev/MobDev2';
import Backend1 from './pages/IndividualProjects/BackendSystems/Backend1';
import './styles/global.css';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects/webdev/1" element={<WebDev1 />} />
        <Route path="/projects/webdev/2" element={<WebDev2 />} />
        <Route path="/projects/webdev/3" element={<WebDev3 />} />
        <Route path="/projects/webdev/4" element={<WebDev4 />} />
        <Route path="/projects/webdesign/1" element={<Design1 />} />
        <Route path="/projects/webdesign/2" element={<Design2 />} />
        <Route path="/projects/webdesign/3" element={<Design3 />} />
        <Route path="/projects/appdev/1" element={<MobDev1 />} />
        <Route path="/projects/appdev/2" element={<MobDev2 />} />
        <Route path="/projects/backendsystems/1" element={<Backend1 />} />
      </Routes>
    </Router>
  );
}

export default App;

