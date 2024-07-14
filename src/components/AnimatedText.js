import React, { useEffect, useState } from 'react';

// Define an array of texts to be displayed sequentially
const texts = ["Software Developer", "Data Scientist", "Math Enthusiast", "Daydreamer"];
// Speed of letter typing in milliseconds
const speed = 100; 
// Pause time between text switching in milliseconds
const pause = 2000; 

export default function AnimatedText() {
  
    // State to hold the currently displayed text
    const [displayedText, setDisplayedText] = useState('');
    // State to track the index of the current text in the texts array
    const [index, setIndex] = useState(0);
    // State to track the index of the current letter in the current text
    const [letterIndex, setLetterIndex] = useState(0);
    // State to track whether the text is currently being deleted
    const [isDeleting, setIsDeleting] = useState(false);
    // State to track whether the typing is currently paused
    const [isPaused, setIsPaused] = useState(false);

    // useEffect hook to handle the typing animation
    useEffect(() => {
    // Function to handle the typing and deleting of text
    const handleTyping = () => {
        // Get the current text based on the index
        const currentText = texts[index];
        // Initialize the updated text with the current displayed text
        let updatedText = displayedText;

        // If deleting, remove the last character of the displayed text
        if (isDeleting) {
        updatedText = currentText.substring(0, letterIndex - 1);
        } else {
        // If typing, add the next character of the current text to the displayed text
        updatedText = currentText.substring(0, letterIndex + 1);
        }

        // Update the displayed text state
        setDisplayedText(updatedText);
        
        // If typing is complete and the full text is displayed, start the pause and then begin deleting
        if (!isDeleting && updatedText === currentText) {
        // Pause the typing
        setIsPaused(true);
        setTimeout(() => {
            // Resume after pause
            setIsPaused(false);
            // Start deleting
            setIsDeleting(true);
        }, pause);
        // If deleting is complete, move to the next text
        } else if (isDeleting && updatedText === '') {
        // Stop deleting
        setIsDeleting(false);
        // Move to the next text, looping back to start if at end
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        // Reset the letter index
        setLetterIndex(0);
        // Continue typing or deleting
        } else {
        // Update the letter index
        setLetterIndex((prevLetterIndex) => prevLetterIndex + (isDeleting ? -1 : 1));
        }
    };
    // If not paused, set up an interval to run the handleTyping function
    if (!isPaused) {
        // Set the interval for typing speed
        const typingInterval = setInterval(handleTyping, speed);
        // Clear the interval on cleanup
        return () => clearInterval(typingInterval);
    }
    // Dependencies for the useEffect hook
  }, [displayedText, index, isDeleting, letterIndex, isPaused]);

  return (
    // Return a span element to display the animated text
    <span className="animated-text">{displayedText}</span>
  );
}
