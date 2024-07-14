import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">Created by Andy Zhang © 2024</p>
        <p className="text-sm">
          Inspirations from various online resources and developers. Special thanks to 
          <a href="https://www.youtube.com/@HowtoWebDev" className="text-blue-500 dark:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">HowtoWebDev</a>,
          <a href="https://brittanychiang.com/#about" className="text-blue-500 dark:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>,
          <a href="https://www.youtube.com/@cristianmihai01" className="text-blue-500 dark:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">Cristian Mihai</a>,
          and 
          <a href="https://sujohnson.com/" className="text-blue-500 dark:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">Johnson Su</a>.
        </p>
      </div>
    </footer>
  );
}
