import React, { useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { cn } from "../lib/utils"; // Import a utility for handling class names dynamically

// Define and export the CardDemo component
export function CardDemo({ 
  title,          // Title of the card (project name)
  description,    // Description of the project
  githubLink,     // GitHub link for the project
  imageUrl        // URL for the background image of the card
}) {
  const [isHovered, setIsHovered] = useState(false);        // State to control card hover effect
  const [iconHovered, setIconHovered] = useState(false);    // State to control GitHub icon hover effect

  return (
    // Main card container without the Link wrapper (as requested)
    <div className="max-w-xs w-full group/card">
      {/* Card element with hover effects and dynamic image */}
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 transition-transform duration-300", 
          isHovered && !iconHovered ? "scale-105" : "" // Slight scaling when the card is hovered
        )}
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }} // Dynamic background image
        onMouseEnter={() => setIsHovered(true)} // Set hovered state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hovered state to false on mouse leave
      >
        {/* Overlay background when hovered */}
        <div
          className={cn(
            "absolute w-full h-full top-0 left-0 transition duration-300",
            isHovered && !iconHovered ? "bg-black opacity-60" : "opacity-0" // Dark overlay when the card is hovered
          )}
        ></div>

        {/* GitHub icon button with hover effects */}
        <div className="flex flex-row items-center space-x-4 z-10">
          <FontAwesomeIcon
            icon={faGithub} // GitHub icon from FontAwesome
            className={cn(
              "h-10 w-10 rounded-full text-white transition-transform duration-300", // White icon with transition effects
              iconHovered ? "scale-125 shadow-lg" : "" // Icon scales and has shadow when hovered
            )}
            onMouseEnter={() => setIconHovered(true)} // Set icon hovered state to true on mouse enter
            onMouseLeave={() => setIconHovered(false)} // Set icon hovered state to false on mouse leave
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from firing when the GitHub icon is clicked
              window.open(githubLink, "_blank"); // Open GitHub link in a new tab
            }}
          />
        </div>

        {/* Project title and description */}
        <div className="text content mt-auto">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title} {/* Display the title passed to the component */}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description} {/* Display the description passed to the component */}
          </p>
        </div>
      </div>
    </div>
  );
}
