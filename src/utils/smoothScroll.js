// smoothScroll.js - Utility for enhanced smooth scrolling

/**
 * Enhanced smooth scrolling with easing
 * @param {string} targetId - ID of the target element to scroll to
 * @param {number} duration - Duration of scroll animation in ms
 * @param {string} easing - Easing function to use
 */
export function smoothScrollToElement(targetId, duration = 1000, easing = 'easeInOutCubic') {
  // Get the target element
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  
  // Get the current scroll position
  const startPosition = window.pageYOffset;
  
  // Calculate distance to scroll
  // Apply offset for fixed header (adjust if needed)
  const headerOffset = 80;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition - headerOffset;
  
  // Calculate distance
  const distance = targetPosition - startPosition;
  
  // Define easing functions
  const easings = {
    // No easing, no acceleration
    linear: t => t,
    // Accelerating from zero velocity
    easeInQuad: t => t * t,
    // Decelerating to zero velocity
    easeOutQuad: t => t * (2 - t),
    // Acceleration until halfway, then deceleration
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    // Accelerating from zero velocity
    easeInCubic: t => t * t * t,
    // Decelerating to zero velocity
    easeOutCubic: t => (--t) * t * t + 1,
    // Acceleration until halfway, then deceleration
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  };
  
  // Get the easing function
  const easingFunction = easings[easing] || easings.easeInOutCubic;
  
  // Set start time
  let startTime = null;
  
  // Animation function
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easingFunction(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);
    
    // Continue animation if not complete
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Start animation
  requestAnimationFrame(animation);
}

export default smoothScrollToElement;
