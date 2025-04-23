import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  link: string;
}

export interface Media {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'music';
  videoId?: string;
  imageUrl?: string;
  link: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}