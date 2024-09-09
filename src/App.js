import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection'; 
import ProjectGallery from './components/ProjectGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { TimelineDemoPage } from './pages/TimeLineDemoPage';

// Lazy load project-specific components
const BankSimulationPage = React.lazy(() => import('./pages/BankSimulationPage'));
const ScholarSerpentPage = React.lazy(() => import('./pages/ScholarSerpentPage'));

// ScrollToTop component to handle smooth scrolling for hash-based navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class to the body element based on state
  useEffect(() => {
    const bodyClass = document.body.classList;
    isDarkMode ? bodyClass.add('dark') : bodyClass.remove('dark');
  }, [isDarkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        {/* Navbar with theme toggle */}
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <Routes>
          {/* Main page sections (About, Timeline, Projects, Contact) */}
          <Route
            path="/"
            element={
              <>
                <section id="about" className="min-h-screen">
                  <AboutSection isDarkMode={isDarkMode} />
                </section>

                <section id="timeline" className="min-h-screen">
                  <TimelineDemoPage />
                </section>

                <section id="projects" className="min-h-screen">
                  <ProjectGallery />
                </section>

                <section id="contact" className="min-h-screen">
                  <ContactForm />
                </section>
              </>
            }
          />

          {/* Lazy loaded routes for Bank Simulation and Scholar Serpent projects */}
          <Route
            path="/bank-simulation"
            element={
              <Suspense fallback={<div>Loading Bank Simulation...</div>}>
                <BankSimulationPage />
              </Suspense>
            }
          />

          <Route
            path="/scholar-serpent"
            element={
              <Suspense fallback={<div>Loading Scholar Serpent...</div>}>
                <ScholarSerpentPage />
              </Suspense>
            }
          />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}
