import { Hobby } from '../types';
import { Scissors, Coffee, Music } from 'lucide-react';

export const hobbies: Hobby[] = [
  {
    id: '1',
    title: 'Thrifting + Sewing',
    description: 'I like thrifting clothes and giving them a fresh look by tailoring, altering, or combining pieces in new ways.',
    icon: Scissors,
  },
  {
    id: '2',
    title: 'Cafe Hopping',
    description: 'I enjoy checking out different coffee shops, especially for the atmosphere, design, and a good cup of matcha.',
    icon: Coffee,
  },
  {
    id: '3',
    title: 'Live Music',
    description: 'I go to concerts whenever I can — nothing beats the energy of hearing music live with a crowd.',
    icon: Music,
  },
];
