import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`
        fixed bottom-8 right-8 z-50
        bg-indigo-600 hover:bg-indigo-700
        dark:bg-indigo-500 dark:hover:bg-indigo-600
        text-white rounded-full
        p-3 md:p-4 lg:p-5
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        group overflow-hidden
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        hover:scale-110 hover:rotate-12
      `}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <div className="relative">
        <ArrowUp 
          size={24} 
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transform transition-transform duration-300 group-hover:-translate-y-1"
        />
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg" />
      </div>
    </button>
  );
};

export default ScrollToTop;