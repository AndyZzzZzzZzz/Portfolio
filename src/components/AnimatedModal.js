"use client"; // Mark as a client-side component for Next.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence for animations

/**
 * AnimatedThemeSwitch Component
 * 
 * This component toggles between light and dark modes, with smooth animations for both the button and the text.
 * The button resizes on hover and has animated text that slides in and out when the theme is toggled.
 * 
 * @param {boolean} isDarkMode - Controls the current theme (true for dark mode, false for light mode)
 * @param {function} toggleTheme - Function to toggle between light and dark modes
 */
export const AnimatedThemeSwitch = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme} // Trigger the theme toggle function when the button is clicked
      className="relative bg-black dark:bg-white dark:text-black text-white flex justify-center px-4 py-2 rounded-md text-center overflow-hidden"
      whileHover={{
        scale: 1.05, // Slightly increase button size on hover for a subtle effect
      }}
      whileTap={{
        scale: 0.95, // Decrease button size slightly when clicked (tap effect)
      }}
    >
      {/* AnimatePresence ensures that only one instance of the text is visible at a time */}
      <AnimatePresence mode="wait">
        <motion.span
          key={isDarkMode ? "dark-mode" : "light-mode"} // Key changes based on the mode to re-trigger animations
          className="relative z-10" // Ensure text stays above background animation
          initial={{ x: 100, opacity: 0 }} // Text starts offscreen to the right with 0 opacity
          animate={{ x: 0, opacity: 1 }} // Animate the text sliding in from the right
          exit={{ x: -100, opacity: 0 }} // Exit animation: text slides out to the left
          transition={{ duration: 0.3 }} // Controls the speed of the text animations
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} {/* Toggle text based on the current theme */}
        </motion.span>
      </AnimatePresence>

      {/* Background animation for visual feedback when hovered */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
        initial={{ opacity: 0 }} // Background starts with 0 opacity (invisible)
        animate={{ opacity: [0, 0.6] }} // Animate to a visible gradient effect
        transition={{ duration: 0.3 }} // Controls how quickly the background appears/disappears
        whileHover={{ opacity: 0.6 }} // Increase opacity when hovered
        style={{ mixBlendMode: "overlay" }} // Blend the background gradient with the button's content
      />
    </motion.button>
  );
};
