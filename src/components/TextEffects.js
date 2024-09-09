"use client";
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  lines,          // Array of lines to display
  className,      // Additional class names for styling
  filter = true,  // Control whether a blur effect is applied to the text
  duration = 2,   // Animation duration for showing each word
  pause = 6000,   // Pause duration between lines
  removeDuration = 2, // Animation duration for removing each word
  theme           // Track the current theme (light/dark)
}) => {
  const [scope, animate] = useAnimate();  // Control the animation
  const [currentLineIndex, setCurrentLineIndex] = useState(0);  // Track which line is currently displayed
  const [isRemoving, setIsRemoving] = useState(false);          // Control whether the text is being removed
  const animationInProgress = useRef(false);                    // Ref to track if an animation is running
  
  // Memoize the array of words for the current line to avoid unnecessary recalculations
  const wordsArray = useMemo(() => lines[currentLineIndex]?.split(" ") || [], [lines, currentLineIndex]);

  // Reset the animation when the theme changes but keep the current animation intact
  useEffect(() => {
    if (!animationInProgress.current) {
      setCurrentLineIndex(0);
      setIsRemoving(false);
    }
  }, [theme]);

  // Function to show text with animation
  const showText = useCallback(async () => {
    animationInProgress.current = true;  // Mark animation as in progress
    await animate(
      "span", 
      { opacity: 1, filter: filter ? "blur(0px)" : "none" }, // Set animation for showing words
      { duration: duration, delay: stagger(0.3) } // Stagger the animation for each word
    );
    animationInProgress.current = false;  // Mark animation as done
  }, [animate, duration, filter]);

  // Function to hide text with animation
  const hideText = useCallback(async () => {
    animationInProgress.current = true;  // Mark animation as in progress
    await animate(
      "span", 
      { opacity: 0, filter: filter ? "blur(10px)" : "none" }, // Set animation for hiding words
      { duration: removeDuration, delay: stagger(0.2) } // Stagger the removal for each word
    );
    animationInProgress.current = false;  // Mark animation as done
  }, [animate, removeDuration, filter]);

  // Control the display and removal of words with staggered animation
  useEffect(() => {
    let isMounted = true;  // Ensure that the component is still mounted during async operations

    const manageTextAnimation = async () => {
      if (isRemoving) {
        await hideText();  // Hide text when `isRemoving` is true
        if (isMounted) {
          setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);  // Move to the next line
          setIsRemoving(false);  // Reset removal state
        }
      } else {
        await showText();  // Show text when `isRemoving` is false
        if (isMounted) {
          setTimeout(() => setIsRemoving(true), pause);  // Pause before starting to remove text
        }
      }
    };

    manageTextAnimation();

    return () => {
      isMounted = false;  // Cleanup if component is unmounted to prevent memory leaks
    };
  }, [isRemoving, currentLineIndex, hideText, showText, pause, lines]);

  // Render the words with motion effects
  const renderWords = () => {
    return (
      <motion.div ref={scope}> 
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}  // Use a unique key for each word
            className="dark:text-white text-black opacity-0"  // Initial opacity for animation
            style={{
              filter: filter ? "blur(10px)" : "none",  // Apply initial blur if enabled
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  // Render the main text effect component
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {/* Text container with theme-based text color */}
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()} {/* Render words with animation */}
        </div>
      </div>
    </div>
  );
};
