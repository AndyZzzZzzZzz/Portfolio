import React from 'react';

// Define and export the Navbar functional component
export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    // Navigation bar with fixed positioning at the top, full width, and a high z-index to ensure it stays on top of other content
    <nav className="fixed w-full top-0 z-10 bg-white dark:bg-gray-800 p-4">
      {/* Container to center the content and apply padding */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Flex container to align theme switch button on the left */}
        <div className="flex items-center">
          {/* Theme switch button with dynamic text and styles based on current mode */}
          <button
            onClick={toggleTheme}
            className="text-lg font-medium hover:text-blue-500 transition duration-300 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-1 px-3 rounded"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        {/* Flex container to align navigation links on the right */}
        <div className="flex items-center">
          {/* Navigation link to the About section */}
          <a href="#about" className="mx-5 text-lg font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">About</a>
          {/* Navigation link to the Projects section */}
          <a href="#projects" className="mx-5 text-lg font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">Projects</a>
          {/* Navigation link to the Contact section */}
          <a href="#contact" className="mx-5 text-lg font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">Contact</a>
          {/* Navigation link to open the resume PDF in a new tab */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mx-5 text-lg font-medium hover:text-blue-500 transition duration-300 dark:text-gray-100">Resume</a>
        </div>
      </div>
    </nav>
  );
}
