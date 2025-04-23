import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import BentoBox from '../ui/BentoBox';
import { ArrowDown, Sun, Moon, Play, Clock, FileText, Palette } from 'lucide-react';
import { socialLinks } from '../../data/social';
import { projects } from '../../data/projects';
import { media } from '../../data/media';
import { hobbies } from '../../data/hobbies';

const Hero: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(0);
  const [currentHobby, setCurrentHobby] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [shouldBounce, setShouldBounce] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setCurrentMedia((prev) => (prev + 1) % media.length);
        setCurrentHobby((prev) => (prev + 1) % hobbies.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        
        if (heroElement) {
          heroElement.style.transform = `translateY(${scrollY * 0.5}px)`;
          heroElement.style.opacity = `${1 - (scrollY / 1000)}`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setShouldBounce(true);
      setTimeout(() => setShouldBounce(false), 1400); // Match the bounce animation duration
    }, 7000);

    return () => clearInterval(bounceInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div ref={heroRef} className="container mx-auto px-4 py-8 md:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 auto-rows-auto">
          {/* Profile Image */}
          <BentoBox 
            className="flex flex-col items-center justify-center md:col-span-2"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 ring-4 ring-indigo-500/50">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQEbuHL2CPF46Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727408803460?e=1750896000&v=beta&t=qTFd7QX8onnCFXqc5SYJDDXQ5sV0S0aPXI22pPc2krE" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </BentoBox>

          {/* Main Intro */}
          <BentoBox 
            className="md:col-span-4 lg:col-span-4"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 break-words">
              Hey, I'm <span className="text-indigo-600 dark:text-indigo-400">Josh</span>.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
              I'm a software developer and creative professional based in Canada, focused on crafting seamless digital experiences that connect, engage, and inspire.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className={`w-full md:w-auto ${shouldBounce ? 'bounce-button' : ''}`}
            >
              View My Work
              <ArrowDown className="ml-2" size={16} />
            </Button>
          </BentoBox>

          {/* Dark Mode Toggle */}
          <BentoBox 
            className="flex items-center justify-center cursor-pointer overflow-hidden md:col-span-2 relative group"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div className="relative">
              <div className={`transition-all duration-500 transform ${isDarkMode ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                <Sun size={64} className="text-yellow-500" />
              </div>
              <div className={`absolute top-0 left-0 transition-all duration-500 transform ${isDarkMode ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
                <Moon size={64} className="text-indigo-400" />
              </div>
            </div>
          </BentoBox>

          {/* Social Media Icons */}
          <BentoBox 
            className="h-auto min-h-[16rem] bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 md:col-span-2 flex items-center justify-center p-4"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-[280px]">
              <a
                href="https://github.com/joshuadanielcruz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group"
                aria-label="GitHub"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/joshuadanielcruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group"
                aria-label="LinkedIn"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0A66C2] rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://www.youtube.com/@joshcruz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group"
                aria-label="YouTube"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FF0000] rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  YouTube
                </span>
              </a>
              <a
                href="https://www.instagram.com/im_joshcruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group"
                aria-label="Instagram"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  Instagram
                </span>
              </a>
            </div>
          </BentoBox>

          {/* Featured Project */}
          <BentoBox 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 overflow-hidden md:col-span-2"
            onClick={() => scrollToSection('projects')}
          >
            <h3 className="text-xl font-bold mb-4">Featured Project</h3>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white/10 dark:bg-gray-900/10 p-8 rounded-lg mb-4 flex items-center justify-center">
                {React.createElement(projects[currentProject].icon, {
                  size: 48,
                  className: "text-gray-700 dark:text-gray-300"
                })}
              </div>
              <p className="font-medium truncate">{projects[currentProject].title}</p>
            </div>
          </BentoBox>

          {/* Featured Media */}
          <BentoBox 
            className="bg-gradient-to-br from-blue-500/10 to-green-500/10 overflow-hidden md:col-span-2"
            onClick={() => scrollToSection('media')}
          >
            <h3 className="text-xl font-bold mb-4">Latest Media</h3>
            <div className={`relative transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="relative">
                <img 
                  src={media[currentMedia].videoId ? getYouTubeThumbnail(media[currentMedia].videoId) : ''} 
                  alt={media[currentMedia].title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-indigo-600 ml-1" />
                  </div>
                </div>
              </div>
              <p className="font-medium truncate">{media[currentMedia].title}</p>
            </div>
          </BentoBox>

          {/* Resume Box */}
          <BentoBox 
            className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex flex-col justify-center md:col-span-2 min-h-[200px]"
            onClick={() => scrollToSection('resume')}
          >
            <div className="flex items-center mb-2">
              <FileText className="w-8 h-8 mr-3 text-emerald-500" />
              <h3 className="text-xl font-bold">Professional Overview</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View my professional experience, skills, and qualifications
            </p>
            <Button 
              variant="primary"
              className={`w-full md:w-auto ${shouldBounce ? 'bounce-button' : ''}`}
              onClick={() => scrollToSection('resume')}
            >
              View Resume
              <ArrowDown className="ml-2" size={16} />
            </Button>
          </BentoBox>

          {/* DateTime Box */}
          <BentoBox 
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 md:col-span-4 flex flex-col justify-center"
          >
            <div className="flex items-center mb-2">
              <Clock className="w-8 h-8 mr-3 text-amber-500" />
              <h3 className="text-xl font-bold">Local Time</h3>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2 break-words">
              {formatTime(currentTime)}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 break-words">
              {formatDate(currentTime)}
            </p>
          </BentoBox>

          {/* Hobbies Preview */}
          <BentoBox 
            className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 md:col-span-4 overflow-hidden group"
            onClick={() => scrollToSection('hobbies')}
          >
            <div className="flex items-center mb-4">
              <Palette className="w-8 h-8 mr-3 text-rose-500" />
              <h3 className="text-xl font-bold">My Hobbies</h3>
            </div>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white/10 dark:bg-gray-900/10 p-8 rounded-lg mb-4 flex items-center justify-center">
                {React.createElement(hobbies[currentHobby].icon, {
                  size: 48,
                  className: "text-gray-700 dark:text-gray-300 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12"
                })}
              </div>
              <p className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {hobbies[currentHobby].title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {hobbies[currentHobby].description}
              </p>
            </div>
          </BentoBox>
        </div>
      </div>
    </section>
  );
};

export default Hero;