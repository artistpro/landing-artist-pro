import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  whatsapp: string;
  phoneDisplay: string;
  email?: string;
}