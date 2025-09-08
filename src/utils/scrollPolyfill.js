// Smooth scrolling polyfill for browsers that don't support the CSS scroll-behavior
// Based on https://github.com/iamdustan/smoothscroll

// Check if smooth scrolling is supported natively
function isSmoothScrollSupported() {
  return 'scrollBehavior' in document.documentElement.style;
}

// Polyfill implementation of smooth scrolling
function smoothScrollPolyfill() {
  // Return early if smooth scrolling is already supported
  if (isSmoothScrollSupported()) {
    return;
  }

  // Override scrollTo method
  const originalScrollTo = window.scrollTo;
  window.scrollTo = function(options) {
    if (options === undefined || !options.behavior || options.behavior !== 'smooth') {
      return originalScrollTo.apply(this, arguments);
    }

    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const targetX = typeof options === 'object' ? options.left || startX : options;
    const targetY = typeof options === 'object' ? options.top || startY : arguments[1];
    const duration = 500; // Duration in ms
    const startTime = performance.now();

    function scroll(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Simple easing function
      const easeInOutQuad = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(
        startX + (targetX - startX) * easeInOutQuad,
        startY + (targetY - startY) * easeInOutQuad
      );

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };

  // Override scrollIntoView method
  if (Element.prototype.scrollIntoView) {
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function(options) {
      if (options === undefined || !options.behavior || options.behavior !== 'smooth') {
        return originalScrollIntoView.apply(this, arguments);
      }

      const targetElement = this;
      const targetRect = targetElement.getBoundingClientRect();
      const targetY = targetRect.top + window.pageYOffset;

      window.scrollTo({
        top: targetY - 90, // Account for navbar offset
        behavior: 'smooth'
      });
    };
  }
}

export default smoothScrollPolyfill;
