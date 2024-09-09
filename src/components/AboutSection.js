import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { TextGenerateEffect } from './TextEffects';

/**
 * About Section component that displays personal details with a dynamic text effect, social links, and a profile image.
 * @param {boolean} isDarkMode - Controls the theme mode (dark/light).
 */
export default function About({ isDarkMode }) {
  // Conditional theme classes based on dark mode
  const themeClasses = isDarkMode ? 'dark:bg-slate-900 text-gray-200' : 'bg-white text-gray-900';
  const iconThemeClass = isDarkMode ? 'text-gray-200' : 'text-gray-900';

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center p-10 pt-24 ${themeClasses}`}
    >
      <header className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center">
        
        {/* Main article: Introduces personal details and dynamic text effect */}
        <article className="md:w-1/2 w-full md:pr-10 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-[#008080] dark:text-[#00FFFF]">Andy Zhang</span>
          </h1>

          {/* Dynamic text effect for showing a rotating set of descriptions */}
          <h2 className="text-2xl font-medium mb-4">
            <TextGenerateEffect 
              lines={[
                "I'm a Software Engineer with a focus on building innovative applications.",
                "With experience in Data Science, I transform data into actionable insights.",
                "Mathematics is my passion, driving my problem-solving approach.",
                "Certified daydreamer, always exploring new ideas and creative solutions."
              ]}
              className="text-2xl"
              theme={isDarkMode ? "dark" : "light"}
              duration={2}
              pause={6000}
              removeDuration={2}
            />
          </h2>

          {/* Famous quote */}
          <p className="text-xl leading-relaxed mb-6">
            “Sometimes it's the very people who no one imagines anything of who do the things no one can imagine.”
            ― Alan Turing
          </p>

          {/* Social Media Icons with hover effects */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/AndyZzzZzzZzz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="2x" className={`hover:text-blue-500 transition duration-300 ${iconThemeClass}`} />
            </a>
            <a href="https://www.linkedin.com/in/andy-zhang-sfu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className={`hover:text-blue-500 transition duration-300 ${iconThemeClass}`} />
            </a>
            <a href="https://discordapp.com/users/zkpAndy" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FontAwesomeIcon icon={faDiscord} size="2x" className={`hover:text-blue-500 transition duration-300 ${iconThemeClass}`} />
            </a>
          </div>
        </article>

        {/* Profile picture section */}
        <aside className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0 order-1 md:order-2">
          <div className="rounded-full overflow-hidden shadow-lg" style={{ width: '26rem', height: '26rem' }}>
            <img
              className="object-cover w-full h-full"
              src="/selfie.jpg"   // Ensure this image path is correct in your project directory
              alt="Profile"
              loading="lazy"      // Lazy loading for performance optimization
            />
          </div>
        </aside>
      </header>
    </section>
  );
}
