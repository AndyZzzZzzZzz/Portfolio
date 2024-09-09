import React, { useMemo } from 'react';
import { Timeline } from '../components/TimeLine';  
import { PinContainer } from '../components/PinComponent'; 

/**
 * TimelineDemoPage Component
 * Renders a timeline with key milestones and corresponding content, including images, 
 * tech stacks, and links using PinContainer for each item.
 */
export function TimelineDemoPage() {
  // Memoize static data to avoid unnecessary re-renders
  const data = useMemo(() => [
    {
      title: "Current",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
            Performance Research Intern
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-xl font-normal mb-8">
            Conducted quantum experiments, optimized Python codebases, and enhanced data visualizations and reports for technical and non-technical audiences.
          </p>
          
          <div className="mb-8 flex flex-wrap gap-3">
            {["Python", "Quantum Computing", "Data Visualization", "Software Development"].map((tech, index) => (
              <span key={index} className="bg-indigo-300 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-indigo-400 dark:hover:bg-indigo-600 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-[20rem] w-full flex items-center justify-center">
            <PinContainer title="The Power Of Quantum Computing" href="https://www.dwavesys.com/company/about-d-wave/">
              <div className="flex basis-full flex-col p-4 text-gray-900 dark:text-slate-100 sm:basis-1/2 w-[20rem] h-[20rem] bg-white dark:bg-gray-800 border-none dark:border-gray-700 rounded-lg shadow-lg">
                <h3 className="font-bold text-base dark:text-slate-100 text-gray-800">
                  D-Wave Systems
                </h3>
                <div className="text-base font-normal dark:text-slate-400 text-gray-600">
                  Optimization Algorithms Team
                </div>
                <img src="/dwave1.png" alt="Dwave" className="flex flex-1 w-full rounded-lg mt-4 object-cover" />
              </div>
            </PinContainer>
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
            SFU Summer Research Intern
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-xl font-normal mb-8">
            Applied predictive TB genetic cluster models, advanced statistical techniques, and utilized R and Python for data analysis and visualization.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {["R", "Statistical Modeling", "Data Analysis", "Machine Learning"].map((tech, index) => (
              <span key={index} className="bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-yellow-400 dark:hover:bg-yellow-600 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-[20rem] w-full flex items-center justify-center">
            <PinContainer title="Current Research Projects" href="https://www.sfu.ca/magpie/research2/researchprojects.html">
              <div className="flex basis-full flex-col p-4 text-gray-900 dark:text-slate-100 sm:basis-1/2 w-[20rem] h-[20rem] bg-white dark:bg-gray-800 border-none dark:border-gray-700 rounded-lg shadow-lg">
                <h3 className="font-bold text-base dark:text-slate-100 text-gray-800">
                  SFU MAGPIE Research Group
                </h3>
                <div className="text-base font-normal dark:text-slate-400 text-gray-600">
                  BLAST Modelling Team
                </div>
                <img src="/MAGPIE1.png" alt="MAGPIE" className="flex flex-1 w-full rounded-lg mt-4 object-cover" />
              </div>
            </PinContainer>
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-4">
            Student Research Intern
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-xl font-normal mb-8">
            Researched VR/AR technologies for metaverse applications, delivering business analysis reports and presentations to support strategic planning.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {["VR/AR", "Business Analysis", "Strategic Planning"].map((tech, index) => (
              <span key={index} className="bg-pink-300 dark:bg-pink-700 text-pink-900 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-pink-400 dark:hover:bg-pink-600 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-[20rem] w-full flex items-center justify-center">
            <PinContainer title="Infrastructure Services" href="https://www.lenovo.com/ca/en/servers-storage/solutions/infrastructure-services/">
              <div className="flex basis-full flex-col p-4 text-gray-900 dark:text-slate-100 sm:basis-1/2 w-[20rem] h-[20rem] bg-white dark:bg-gray-800 border-none dark:border-gray-700 rounded-lg shadow-lg">
                <h3 className="font-bold text-base dark:text-slate-100 text-gray-800">
                  Intelligence Infrastructure Service Department
                </h3>
                <img src="/lenovo.png" alt="Lenovo" className="flex flex-1 w-full rounded-lg mt-4 object-cover" />
              </div>
            </PinContainer>
          </div>
        </div>
      ),
    },
  ], []);

  return (
    <div className="w-full dark:bg-slate-900">
      <Timeline data={data} />
    </div>
  );
}
