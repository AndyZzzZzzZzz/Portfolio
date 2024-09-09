import React from 'react';
import { CardDemo } from './ProjectCard'; // Import your CardDemo component

// Define and export the Projects component
export default function Projects() {
  return (
    // Main section for the projects gallery with dynamic background color for light/dark mode
    <section 
      id="projects" 
      className="w-full bg-white dark:bg-slate-900 font-sans min-h-screen p-10 pt-24"
    >
      {/* Container for the title and intro section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {/* Title for the project gallery */}
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Projects Gallery
        </h2>
        {/* Brief intro text about the project collection */}
        <p className="text-neutral-700 dark:text-neutral-300 text-2xl md:text-xl max-w-sm">
          Here’s a collection of my favorite projects, showcasing my skills and creativity. Dive in and explore the journey through these works!
        </p>
      </div>

      {/* Grid layout for displaying the project cards */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Project 1: Expert.io */}
          <div className="flex flex-col lg:flex-row items-start">
            <CardDemo
              title="Expert.io"
              description="Server-side database website using Ruby on Rails, connecting consumers with experts through secure authentication, real-time availability, and advanced search filters."
              githubLink="https://github.com/AndyZzzZzzZzz"
              imageUrl="/black.png"
            />
            {/* Tech Stack display next to the card for larger screens */}
            <div className="hidden lg:flex flex-col justify-start mt-4 lg:mt-0 lg:ml-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack:</p>
              <div className="flex flex-col gap-3 mt-2">
                {["Ruby on Rails", "PostgreSQL", "Devise", "Heroku"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-md font-medium text-gray-900 dark:text-gray-100 transform transition duration-300 hover:-translate-y-1 hover:text-indigo-500 dark:hover:text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2: Personal Website */}
          <div className="flex flex-col lg:flex-row items-start">
            <CardDemo
              title="Personal Website"
              description="Interactive portfolio website showcasing projects, skills, and contact details with a customized UI design and many cool effects."
              githubLink="https://github.com/AndyZzzZzzZzz/Portfolio"
              imageUrl="/web.png"
            />
            {/* Tech Stack display next to the card for larger screens */}
            <div className="hidden lg:flex flex-col justify-start mt-4 lg:mt-0 lg:ml-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack:</p>
              <div className="flex flex-col gap-3 mt-2">
                {["React", "JavaScript", "Node.js", "HTML5", "Tailwind CSS", "Framer Motion", "Netlify"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-md font-medium text-gray-900 dark:text-gray-100 transform transition duration-300 hover:-translate-y-1 hover:text-indigo-500 dark:hover:text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 3: Scholar Serpent */}
          <div className="flex flex-col lg:flex-row items-start">
            <CardDemo
              title="Scholar Serpent"
              description="A Python-based academic performance management app with a dynamic UI using Tkinter and ttkbootstrap."
              githubLink="https://github.com/AndyZzzZzzZzz/ScholarSerpent"
              imageUrl="/scholar.png"
            />
            {/* Tech Stack display next to the card for larger screens */}
            <div className="hidden lg:flex flex-col justify-start mt-4 lg:mt-0 lg:ml-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack:</p>
              <div className="flex flex-col gap-3 mt-2">
                {["Python3", "Tkinter", "SQLite", "Docker", "ttkbootstrap"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-md font-medium text-gray-900 dark:text-gray-100 transform transition duration-300 hover:-translate-y-1 hover:text-indigo-500 dark:hover:text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 4: Bank Simulation */}
          <div className="flex flex-col lg:flex-row items-start">
            <CardDemo
              title="Bank Simulation"
              description="Console-based bank simulation managing customer queues and service metrics with efficient real-time processing."
              githubLink="https://github.com/AndyZzzZzzZzz/Bank_Simulation"
              imageUrl="/bank.png"
            />
            {/* Tech Stack display next to the card for larger screens */}
            <div className="hidden lg:flex flex-col justify-start mt-4 lg:mt-0 lg:ml-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack:</p>
              <div className="flex flex-col gap-3 mt-2">
                {["C++", "Python3", "OOP", "Makefile", "Custom DS"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-md font-medium text-gray-900 dark:text-gray-100 transform transition duration-300 hover:-translate-y-1 hover:text-indigo-500 dark:hover:text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
