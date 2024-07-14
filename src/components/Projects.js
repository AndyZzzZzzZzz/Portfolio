import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Array of project objects, each containing details about the project
const projects = [
  {
    title: "Bank Simulation",
    description: "Console-based bank simulation managing customer queues and service metrics with efficient real-time processing",
    gif: "/bankSim.gif",
    techStack: ["C++", "STL", "OOP", "CMake"],
    githubLink: "https://github.com/your-username/cpp-bank-simulation",
  },
  {
    title: "ScholarSerpent",
    description: "Personalized study companion offering SFU academic information, course performance analysis, and tailored study advice",
    gif: "/SS.gif",
    techStack: ["Python3", "Tkinter", "SQLite", "Flask", "ttkbootstrap", "ChatGPT API"],
    githubLink: "https://github.com/AndyZzzZzzZzz/ScholarSerpent",
  },
  {
    title: "Andy's Webiste",
    description: "Interactive portfolio website showcasing projects, skills, and contact details with a customized UI design and many cool effects.",
    gif: "/website.gif",
    techStack: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Node.js", "Google Maps API"],
    githubLink: "https://github.com/your-username/python-grade-management"
  },
  {
    title: "Mystery Project",
    description: "Ideas are currently planted and need time to grow patiently \n Check back in a month!",
    gif: "/mystery.gif",
    techStack: ["Creativity", "Dynamic", "Adaptive", "Useful"],
    githubLink: "https://github.com/your-username/python-grade-management",
  }
];

// Projects component definition
export default function Projects() {
  return (
    // Main section with id 'projects', white background, gray text, full-screen height, and padding
    <section id="projects" className="bg-white text-gray-900 min-h-screen p-10 pt-24">
      <div className="container mx-auto max-w-6xl">
        {/* Heading for the projects section */}
        <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
        {/* Grid container for project cards, with 2 columns on medium screens and above */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mapping through the projects array to create individual project cards */}
          {projects.slice().reverse().map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                {/* Project title */}
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                {/* Project description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  {/* Placeholder for the project GIF image */}
                  <div className="bg-white dark:bg-gray-800 w-full h-64 md:h-80 flex items-center justify-center rounded-lg">
                    <img src={project.gif} alt={`${project.title} gif`} className="rounded-lg w-full h-full object-contain" />
                  </div>
                </div>
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 rounded-full px-4 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* GitHub icon linked to the project's repository, positioned at the bottom right corner */}
              <div className="flex justify-end items-end mt-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-900 dark:text-gray-100 hover:text-blue-500 transition duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
