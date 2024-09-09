import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ScholarSerpent() {
  
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200 p-10 pt-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">ScholarSerpent</h1>
            <p className="text-lg mb-4">
              Personalized study companion offering SFU academic information, course performance analysis, and tailored study advice.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/AndyZzzZzzZzz/ScholarSerpent" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 underline">
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/SS.gif" alt="ScholarSerpent gif" className="rounded-lg w-full h-full object-contain" />
          </div>
        </header>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg mb-8">Python3, Tkinter, SQLite, Flask, ttkbootstrap, ChatGPT API</p>
        </div>

      </div>
    </section>
  );
}
