import React from 'react';
import { Github, Linkedin, Youtube, Instagram, ExternalLink, Code } from 'lucide-react';
import { socialLinks } from '../../data/social';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Youtube':
        return <Youtube size={20} />;
      case 'Instagram':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 pt-16 pb-6 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              joshcruz.
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Crafting digital experiences with code and creativity. Based in Canada.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110"
                  aria-label={link.platform}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  Projects
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  Resume
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#media" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  Media
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#hobbies" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                  Hobbies
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
            </ul>
          </div>

          {/* Built With Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Code size={20} className="mr-2" />
              Built With
            </h3>
            <div className="space-y-2">
              <ul className="space-y-1 text-sm">
                <li className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  React + TypeScript
                </li>
                <li className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
                <li className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Vite
                </li>
                <li className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Lucide Icons
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {currentYear} Josh Cruz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;