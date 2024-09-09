import { clsx } from "clsx";        // Import clsx for conditional class name concatenation
import { twMerge } from "tailwind-merge"; // Import twMerge for resolving Tailwind CSS class conflicts

/**
 * Utility function to merge and conditionally apply CSS class names.
 * 
 * @param  {...any} inputs - The class names or conditions for class names.
 * @returns {string} - A single string of merged and optimized class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));  // Merge class names using clsx, then resolve Tailwind conflicts with twMerge
}
