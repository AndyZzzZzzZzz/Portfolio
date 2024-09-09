import React from 'react';

// Define and export the Footer functional component
export default function Footer() {
  return (
    // Footer element with background color, text color settings, and padding for spacing
    <footer className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200 py-6">
      <div className="container mx-auto text-center">
        {/* Footer text with credit for the creator */}
        <p className="text-base md:text-lg">Created by Andy Zhang © 2024</p>
        
        {/* Footer section for acknowledgments and inspirations */}
        <p className="text-base md:text-lg">
          Inspirations from various online resources and developers. Special thanks to 
          
          {/* Link to HowtoWebDev YouTube channel */}
          <a 
            href="https://www.youtube.com/@HowtoWebDev" 
            className="text-blue-500 dark:text-blue-300 mx-1" 
            target="_blank" 
            rel="noopener noreferrer" // Security attributes to prevent tabnabbing
          >
            HowtoWebDev
          </a>,
          
          {/* Link to Brittany Chiang's portfolio */}
          <a 
            href="https://brittanychiang.com/#about" 
            className="text-blue-500 dark:text-blue-300 mx-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Brittany Chiang
          </a>,
          
          {/* Link to Cristian Mihai YouTube channel */}
          <a 
            href="https://www.youtube.com/@cristianmihai01" 
            className="text-blue-500 dark:text-blue-300 mx-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Cristian Mihai
          </a>,
          
          {/* Link to Mannu Paaji's UI component page */}
          <a 
            href="https://ui.aceternity.com/components/tailwindcss-buttons/" 
            className="text-blue-500 dark:text-blue-300 mx-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Mannu Paaji
          </a>,
          
          {/* Link to Johnson Su's portfolio */}
          and 
          <a 
            href="https://sujohnson.com/" 
            className="text-blue-500 dark:text-blue-300 mx-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Johnson Su
          </a>.
        </p>
      </div>
    </footer>
  );
}
