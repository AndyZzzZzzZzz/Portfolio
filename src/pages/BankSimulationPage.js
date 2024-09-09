import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function BankSimulation() {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900text-gray-900 dark:text-gray-200 p-10 pt-24">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Bank Simulation</h1>
            <p className="text-lg mb-4">
              Console-based bank simulation managing customer queues and service metrics with efficient real-time processing.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/your-username/cpp-bank-simulation" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 underline">
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/bankSim.gif" alt="Bank Simulation gif" className="rounded-lg w-full h-full object-contain" />
          </div>
        </header>
        
        {/* Problem Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
          <p className="text-lg mb-8">How can a bank efficiently manage customer arrivals, service times, and queue handling to minimize wait times and optimize service quality?</p>

          <h2 className="text-2xl font-bold mb-4">Proposed Solution</h2>
          <p className="text-lg mb-8">This project implements a priority queue system using custom data structures to efficiently manage customer arrivals, service times, and queue handling, minimizing wait times and optimizing service.</p>
        </div>

        {/* Project Overview Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg mb-8">
            This project implements a bank simulation where customers arrive and are either served immediately or placed in a queue if the teller is busy. 
            The simulation processes events (arrivals and departures) using a priority queue and outputs the total number of customers processed and the average wait time.
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Project Architecture</h2>
          <p className="text-lg mb-8">
            The simulation follows an event-driven design, with events representing customer arrivals and departures.
            It leverages a priority queue for event handling and a custom queue to manage customer wait times, ensuring efficient processing.
          </p>
        </div>

        {/* Core Data Structures */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Core Data Structures</h2>
          <ul className="list-disc ml-8">
            <li className="text-lg mb-4">
              <strong>Queue (FIFO):</strong> Used to store customers waiting in line for service.
            </li>
            <li className="text-lg mb-4">
              <strong>Priority Queue (Binary Heap):</strong> Ensures that events (either arrivals or departures) are processed based on time.
            </li>
            <li className="text-lg mb-4">
              <strong>Event Class:</strong> Captures details about customer events, including arrival and departure times and processing duration.
            </li>
          </ul>
        </div>

        {/* Simulation Flow Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Simulation Flow</h2>
          <ul className="list-disc ml-8">
            <li className="text-lg mb-4">
              <strong>Arrival Event Handling:</strong> Customers are either served immediately or placed in a queue if the teller is busy. Corresponding departure events are scheduled as needed.
            </li>
            <li className="text-lg mb-4">
              <strong>Departure Event Handling:</strong> Once a customer finishes their transaction, the next customer is served.
            </li>
            <li className="text-lg mb-4">
              <strong>Time Management:</strong> The simulation advances based on event times, ensuring events are processed in the correct order.
            </li>
          </ul>
        </div>

        {/* Performance Optimization */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
          <p className="text-lg mb-8">
            By using a binary heap for the priority queue, the simulation ensures that event processing is efficient, with O(log n) time complexity for insertions and deletions.
            Events are processed in the order they occur, avoiding unnecessary backtracking or recalculations.
          </p>
        </div>

         {/* Reflection Section */}
         <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Reflection</h2>
          <p className="text-lg mb-8">
            This project, developed as part of the CMPT225 Data Structures and Algorithms course, was my first hands-on experience building a console-based application utilizing advanced custom data structures. Despite being a purely console-driven program without a graphical user interface, the journey was both challenging and rewarding.
          </p>
          <p className="text-lg mb-8">
            Throughout the development process, I experimented with various data structures, which provided me with valuable insights into their strengths, weaknesses, and practical applications. By working with structures like hash maps, self-balancing trees, and priority queues, I gained a deeper understanding of how each can be effectively employed in different scenarios to optimize performance.
          </p>
          <p className="text-lg mb-8">
            Completing this project not only strengthened my foundational knowledge of data structures and algorithms but also sparked my interest in tackling optimization-related problems. The combination of theory and practice reinforced key concepts and highlighted the significance of choosing the right data structure for different tasks. I look forward to applying these skills in future projects and exploring more complex algorithms and optimizations.
          </p>
          <p className="text-lg mb-8">
            The project demonstrated the importance of efficient queue management, especially in scenarios with large numbers of customers. 
            Future improvements could include handling multiple tellers or introducing real-time visualization of the simulation.
          </p>
        </div>

      </div>
    </section>
  );
}
