import React from 'react';
import BentoBox from '../ui/BentoBox';
import { media } from '../../data/media';
import { Play, Music } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Media: React.FC = () => {
  const sectionRef = useScrollAnimation();
  
  const gradients = [
    'bg-gradient-to-br from-rose-500/20 to-pink-500/20',
    'bg-gradient-to-br from-violet-500/20 to-purple-500/20',
    'bg-gradient-to-br from-blue-500/20 to-indigo-500/20',
    'bg-gradient-to-br from-emerald-500/20 to-green-500/20',
  ];

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section id="media" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-left">
            Media
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12 text-left">
            A collection of my music, videos, and other creative media projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {media.map((item, index) => (
              <BentoBox 
                key={item.id} 
                className={`group ${gradients[index % gradients.length]} flex flex-col h-full cursor-pointer
                  ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                `}
                onClick={() => window.open(item.link, '_blank')}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.videoId ? getYouTubeThumbnail(item.videoId) : item.imageUrl} 
                    alt={item.title} 
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105
                      ${index === 0 ? 'h-[300px] md:h-[400px]' : 'h-[200px]'}
                    `}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="text-indigo-600" size={20} />
                      ) : (
                        <Music className="text-indigo-600" size={20} />
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-xs px-2 py-1 bg-white/20 dark:bg-gray-800/20 text-indigo-600 dark:text-indigo-300 rounded-full mr-2 backdrop-blur-sm">
                      {item.type === 'video' ? 'Video' : 'Music'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 flex-grow whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </BentoBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;