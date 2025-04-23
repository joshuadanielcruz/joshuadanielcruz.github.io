import { Project } from '../types';
import { Music, Bot, Coffee } from 'lucide-react';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ConcertRadar',
    description: 'A fully responsive concert ticket-tracking and social media platform built with React and Node.js.',
    icon: Music,
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    link: 'https://github.com/joshuadanielcruz',
  },
  {
    id: '2',
    title: 'TEMI Robot: Language and Translation',
    description: 'An innovative project enhancing the TEMI robot\'s multilingual communication by integrating language detection and real-time translation capabilities, built using Kotlin and Python.',
    icon: Bot,
    tags: ['Kotlin', 'Python', 'Android Studio'],
    link: 'https://github.com/joshuadanielcruz',
  },
  {
    id: '3',
    title: 'Boba Buddy',
    description: 'A mobile app that helps users discover nearby bubble tea shops, track their favorite drinks, and share reviews, built with React Native and integrated APIs.',
    icon: Coffee,
    tags: ['React', 'API Integration', 'Expo'],
    link: 'https://github.com/joshuadanielcruz',
  },
];