// Define reusable animation keyframes and classes

// Base animation classes
export const fadeIn = 'opacity-0 transition-opacity duration-1000 animate-fade-in';
export const slideUp = 'opacity-0 translate-y-8 transition-all duration-1000 animate-slide-up';
export const scaleUp = 'opacity-0 scale-95 transition-all duration-1000 animate-scale-up';

// Animation timings
export const getDelayClass = (delay: number): string => {
  return `animation-delay-${delay}`;
};

// Animation trigger class for intersection observer
export const animateWhenVisible = 'animate-when-visible';