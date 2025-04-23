import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const headerClass = scrolled
    ? 'bg-white dark:bg-gray-900 shadow-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-3xl font-bold text-gray-900 dark:text-white">
          joshcruz.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-l text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
            Projects
          </a>
          <a href="#resume" className="text-l text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
            Resume
          </a>
          <a href="#media" className="text-l text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
            Media
          </a>
          <a href="#hobbies" className="text-l text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
            Hobbies
          </a>
        </nav>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#resume" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
            <a 
              href="#media" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Media
            </a>
            <a 
              href="#hobbies" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hobbies
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;