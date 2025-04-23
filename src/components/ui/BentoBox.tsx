import React, { useEffect, useRef } from 'react';

interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'tall' | 'wide';
  onClick?: () => void;
  animate?: boolean;
}

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
  large: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  tall: 'col-span-1 row-span-2',
  wide: 'col-span-2 row-span-1',
};

const BentoBox: React.FC<BentoBoxProps> = ({ 
  children, 
  className = '', 
  size = 'small',
  onClick,
  animate = true
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const box = boxRef.current;
    if (!box) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      box.style.setProperty('--rotate-x', `${rotateX}deg`);
      box.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      box.style.setProperty('--rotate-x', '0deg');
      box.style.setProperty('--rotate-y', '0deg');
    };

    box.addEventListener('mousemove', handleMouseMove);
    box.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      box.removeEventListener('mousemove', handleMouseMove);
      box.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate]);

  return (
    <div 
      ref={boxRef}
      className={`
        ${sizeClasses[size]} 
        bg-white/10 dark:bg-gray-800/10 
        rounded-2xl p-6 
        backdrop-blur-lg 
        shadow-lg 
        hover:shadow-xl 
        transition-all 
        duration-300 
        bento-hover 
        project-card
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BentoBox;