import React from 'react';
import BentoBox from '../ui/BentoBox';
import Button from '../ui/Button';
import { projects } from '../../data/projects';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const gradients = [
    'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    'bg-gradient-to-br from-orange-500/20 to-amber-500/20',
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-left">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12 text-left">
            A collection of my recent coding projects showcasing my technical skills and creative capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <BentoBox className={`h-full flex flex-col group ${gradients[index % gradients.length]}`}>
                  <div className="relative mb-4 overflow-hidden rounded-lg bg-white/10 dark:bg-gray-900/10 p-8 flex items-center justify-center">
                    {React.createElement(project.icon, {
                      size: 64,
                      className: "text-gray-700 dark:text-gray-300 transition-transform duration-500 group-hover:scale-110"
                    })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100/30 dark:bg-gray-800/30 text-gray-600 dark:text-gray-400 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="primary" 
                    href={project.link}
                    className="mt-auto"
                  >
                    View Project
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </BentoBox>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;