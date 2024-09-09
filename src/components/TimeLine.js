"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Timeline component that displays key events with smooth scrolling and animations
export const Timeline = ({ data }) => {
  const ref = useRef(null);         // Reference to the timeline content container
  const containerRef = useRef(null); // Reference to the scroll container
  const [height, setHeight] = useState(0);  // State to store the height of the timeline content

  // Effect to calculate and set the height of the timeline container
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);  // Store the height of the content
    }
  }, [ref]);

  // Use framer-motion's useScroll to get the scroll progress within the target container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],  // Define the scroll offset range for the animation
  });

  // Apply height transformation based on scroll progress (0 to full height of the timeline)
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  
  // Apply opacity transformation based on scroll progress for a fade-in effect
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {/* Timeline title and description */}
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Timestamps of My Journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-2xl md:text-xl max-w-sm">
          I've been continually seeking new challenges and opportunities. 
          Here's a timeline highlighting key milestones in my journey.
        </p>
      </div>

      {/* Timeline content container */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Map over the data array and render each timeline event */}
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            {/* Sticky title section that remains in place as the user scrolls */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 p-2" />
              </div>
              {/* Hidden on small screens and visible on larger screens */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-600 dark:text-neutral-300">
                {item.title}
              </h3>
            </div>

            {/* Timeline event content, responsive for both small and large screens */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Title is shown only on smaller screens */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-600 dark:text-neutral-300">
                {item.title}
              </h3>
              {/* Display the event's content */}
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical timeline indicator, animates as the user scrolls */}
        <div
          style={{ height: `${height}px` }}  // Dynamic height based on the timeline content
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress indicator that moves as the user scrolls */}
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}  // Dynamic height and opacity
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full dark:via-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};
