import React from 'react';
import BentoBox from '../ui/BentoBox';
import { hobbies } from '../../data/hobbies';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Hobbies: React.FC = () => {
  const sectionRef = useScrollAnimation();
  
  const gradients = [
    'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
    'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    'bg-gradient-to-br from-blue-500/20 to-indigo-500/20',
  ];

  return (
    <section id="hobbies" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-left">
            Hobbies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12 text-left">
            When I'm not coding, here's what I enjoy doing in my free time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <BentoBox 
                key={hobby.id} 
                className={`${gradients[index]} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group`}
              >
                <div className="relative mb-6 overflow-hidden rounded-xl h-48 bg-white/10 dark:bg-gray-900/10 flex items-center justify-center">
                  {React.createElement(hobby.icon, {
                    size: 64,
                    className: "text-gray-700 dark:text-gray-300 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12"
                  })}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {hobby.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {hobby.description}
                </p>
              </BentoBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;