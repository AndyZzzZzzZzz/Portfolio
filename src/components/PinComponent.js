import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import classNames from "classnames"; // Use classnames package for conditional class names

// Define and export the PinContainer component
export const PinContainer = ({
  children,            // Content inside the pin container (can be any JSX)
  title,               // Title for the pin perspective hover effect
  href,                // Link to open when clicked (opens in new tab)
  className,           // Additional class names for styling the content inside the container
  containerClassName,  // Additional class names for the outer container
}) => {
  // State to control the 3D transformation effect on hover
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  // Function to apply 3D rotation and scaling on mouse enter
  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  // Function to reset transformation when the mouse leaves
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    // Anchor tag for external link navigation with hover effects
    <a
      className={classNames("relative group/pin z-50 cursor-pointer", containerClassName)} // Conditional classes using classNames
      onMouseEnter={onMouseEnter} // Trigger the hover effect
      onMouseLeave={onMouseLeave} // Reset the effect on mouse leave
      href={href || "/"} // Fallback to root if href is not provided
      target="_blank" // Open the link in a new tab
      rel="noopener noreferrer" // Security feature to prevent access to the window object in the new tab
    >
      {/* Inner container with 3D transformation and perspective */}
      <div
        style={{
          perspective: "1000px", // Creates the 3D depth effect
          transform: "rotateX(70deg) translateZ(0deg)", // Base transformation for perspective
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform: transform }} // Apply the hover transformation state
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl 
            shadow-[0_8px_16px_rgb(0_0_0/0.1)] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
            group-hover/pin:border-gray-400 dark:group-hover/pin:border-gray-600 transition duration-700 overflow-hidden"
        >
          {/* Render children passed to the PinContainer component */}
          <div className={classNames("relative z-50", className)}>{children}</div>
        </div>
      </div>
      {/* Render the PinPerspective component for the hover title effect */}
      <PinPerspective title={title} href={href} />
    </a>
  );
};

// Define and export the PinPerspective component
export const PinPerspective = ({ title, href }) => {
  return (
    // Motion div for hover animation and opacity transition
    <motion.div
      className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* Title link for the pin hover effect */}
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href} // External link
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Adds security to prevent tabnabbing
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title} {/* Display the title */}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        {/* 3D circle animations using motion */}
        <div
          style={{
            perspective: "1000px", // Perspective for the 3D depth effect
            transform: "rotateX(70deg) translateZ(0)", // Base transformation
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            {/* Repeated circle animations using motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }} // Initial hidden state
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }} // Animation sequence
              transition={{ duration: 6, repeat: Infinity, delay: 0 }} // Infinite loop
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        {/* Additional motion elements for 3D depth */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
