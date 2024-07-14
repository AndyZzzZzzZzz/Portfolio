import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
