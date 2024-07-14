// Importing React library
import React from 'react';
// Importing the AnimatedText component
import AnimatedText from './AnimatedText';
// Importing FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importing specific icons from FontAwesome
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

// About component definition
export default function About({ isDarkMode, toggleTheme }) {
  return (
    // Main section with id 'about', white background, gray text, full-screen height, flexbox for centering, and padding
    <section id="about" className={`min-h-screen flex items-center justify-center p-10 pt-24 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left column for text content, reversed order on medium screens and above */}
        <div className="md:w-1/2 w-full md:pr-10 order-2 md:order-1">
          {/* Main heading */}
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Andy Zhang</span>
          </h1>
          {/* Subheading with animated text */}
          <h2 className="text-2xl font-medium mb-4">
            I'm a <AnimatedText />
          </h2>
          {/* Description paragraph */}
          <p className="text-lg leading-relaxed mb-6">
            Sometimes I lose myself in transforming imaginative ideas into real-world applications, and other times I find myself navigating the wonders of data, piecing together intricate puzzles. My foundation in mathematics and statistics provides an analytical lens, and my passion for software development drives me to find solutions to real-world problems.
          </p>
          {/* Social media icons with links */}
          <div className="flex space-x-4">
            <a href="https://github.com/AndyZzzZzzZzz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-900 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/andy-zhang-sfu/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-900 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://discordapp.com/users/zkpAndy" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" className="text-gray-900 hover:text-blue-500 transition duration-300" />
            </a>
          </div>
        </div>
        {/* Right column for profile image, reversed order on medium screens and above */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0 order-1 md:order-2">
          <div className="rounded-full overflow-hidden shadow-lg" style={{ width: '26rem', height: '26rem' }}>
            <img
              className="object-cover w-full h-full"
              src="/selfie.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
