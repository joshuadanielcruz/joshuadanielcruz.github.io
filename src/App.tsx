import React, { useEffect, useRef, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Media from './components/sections/Media';
import Hobbies from './components/sections/Hobbies';
import ScrollToTop from './components/ui/ScrollToTop';
import './index.css';

const greetings = [
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Kumusta", lang: "Tagalog" },
  { text: "Hello", lang: "English" }
];

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const sphereRefs = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting(prev => {
        if (prev < greetings.length - 1) return prev + 1;
        return prev;
      });
    }, 300);

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2200);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      sphereRefs.current.forEach((sphere, i) => {
        if (!sphere) return;
        
        const speed = (i + 1) * 0.08;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        
        sphere.style.transform = `translate(${x}px, ${y}px)`;
      });

      blobRefs.current.forEach((blob, i) => {
        if (!blob) return;
        
        const speed = (i + 1) * 0.04;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        
        const currentTransform = blob.style.transform;
        const match = currentTransform.match(/translate\((.*?)px, (.*?)px\)/);
        
        if (match) {
          const currentX = parseFloat(match[1]);
          const currentY = parseFloat(match[2]);
          const newX = currentX + (x - currentX) * 0.1;
          const newY = currentY + (y - currentY) * 0.1;
          
          blob.style.transform = `translate(${newX}px, ${newY}px)`;
        } else {
          blob.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
          if (scrollPercent > 0 && scrollPercent < 1) {
            section.style.transform = `translateY(${scrollPercent * 50}px)`;
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showWelcome && (
        <div className="welcome-overlay">
          <div className="max-w-[90vw]">
            <h1 className="welcome-text">{greetings[currentGreeting].text}</h1>
          </div>
        </div>
      )}
      
      <div className="relative min-h-screen bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white backdrop-blur-3xl">
        {/* Background Blobs */}
        <div 
          ref={el => blobRefs.current[0] = el!}
          className="floating-blob bg-purple-500/30"
          style={{ 
            top: '15%', 
            left: '10%',
            width: '40rem',
            height: '40rem',
            animationDelay: '0s'
          }}
        />
        <div 
          ref={el => blobRefs.current[1] = el!}
          className="floating-blob bg-blue-500/30"
          style={{ 
            top: '60%', 
            right: '15%',
            width: '35rem',
            height: '35rem',
            animationDelay: '-2s'
          }}
        />
        <div 
          ref={el => blobRefs.current[2] = el!}
          className="floating-blob bg-pink-500/30"
          style={{ 
            bottom: '10%', 
            left: '20%',
            width: '45rem',
            height: '45rem',
            animationDelay: '-4s'
          }}
        />
        <div 
          ref={el => blobRefs.current[3] = el!}
          className="floating-blob bg-emerald-500/30"
          style={{ 
            top: '40%', 
            left: '50%',
            width: '30rem',
            height: '30rem',
            animationDelay: '-6s'
          }}
        />
        
        {/* Gradient Spheres */}
        <div 
          ref={el => sphereRefs.current[0] = el!}
          className="gradient-sphere w-[1000px] h-[1000px] text-purple-500"
          style={{ top: '10%', left: '15%' }}
        />
        <div 
          ref={el => sphereRefs.current[1] = el!}
          className="gradient-sphere w-[800px] h-[800px] text-blue-500"
          style={{ top: '40%', right: '15%' }}
        />
        <div 
          ref={el => sphereRefs.current[2] = el!}
          className="gradient-sphere w-[900px] h-[900px] text-pink-500"
          style={{ bottom: '10%', left: '25%' }}
        />

        <Header />
        <main className="relative z-10 hero-content" ref={contentRef}>
          <Hero />
          <Projects />
          <Resume />
          <Media />
          <Hobbies />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;