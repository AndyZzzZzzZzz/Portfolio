import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatedThemeSwitch } from './AnimatedModal'; // Import the light/dark mode toggle button

// Define and export the Navbar functional component
export default function Navbar({ isDarkMode, toggleTheme }) {
  // State to track the mobile menu open/close status
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu state (open/close)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Navbar element with fixed positioning and styling for both light/dark mode
    <nav className="fixed w-full top-0 z-100 bg-white dark:bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* AnimatedThemeSwitch component for light/dark mode toggle */}
          <AnimatedThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Navigation Links for Desktop */}
          <div className="flex items-center space-x-5">
            <Link to="/#about" className="text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">
              About
            </Link>
            <Link to="/#timeline" className="text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">
              Timeline
            </Link>
            <Link to="/#projects" className="text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">
              Projects
            </Link>
            <Link to="/#contact" className="text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">
              Contact
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center w-full">
          {/* Mobile version of the AnimatedThemeSwitch */}
          <AnimatedThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Button to toggle the mobile menu open/close */}
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            {/* Toggle between 'FaBars' (menu) and 'FaTimes' (close) icons */}
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu (shows when isMobileMenuOpen is true) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 p-4 z-50">
            <Link
              to="/#about"
              className="block py-2 text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100"
              onClick={closeMobileMenu} // Close menu when clicked
            >
              About
            </Link>
            <Link
              to="/#timeline"
              className="block py-2 text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100"
              onClick={closeMobileMenu}
            >
              Timeline
            </Link>
            <Link
              to="/#projects"
              className="block py-2 text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="block py-2 text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-xl font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
