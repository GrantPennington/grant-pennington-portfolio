import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectSection';
import AboutMe from './components/AboutMe';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <ContactSection />
    </>
  );
};

export default App;