import { Mic2, Radio, Cast, Globe, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Service, SocialLink, ContactInfo } from './types';

export const COMPANY_NAME = "Artist Pro";

export const CONTACT_INFO: ContactInfo = {
  whatsapp: "573162548002",
  phoneDisplay: "+57 316 254 8002",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "X (Twitter)",
    url: "https://x.com/artistproco",
    username: "@artistproco",
    icon: Twitter
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/ArtistProCollective",
    username: "Artist Pro Collective",
    icon: Facebook
  },
  {
    platform: "WhatsApp",
    url: `https://wa.me/${CONTACT_INFO.whatsapp}`,
    username: CONTACT_INFO.phoneDisplay,
    icon: MessageCircle
  }
];

export const SERVICES: Service[] = [
  {
    id: "live-sessions",
    title: "Live Sessions & Grabación",
    description: "Estudio de grabación especializado en Live Sessions. Capturamos la energía del momento con acústica perfecta y mezcla de clase mundial.",
    icon: Mic2,
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: "streaming-solutions",
    title: "Desarrollo Streaming",
    description: "Soluciones integrales de streaming para eventos y marcas. Estabilidad garantizada y calidad broadcast para tu audiencia.",
    icon: Cast,
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: "online-radio",
    title: "Radios Online Corporativas",
    description: "Crea tu propia voz. Diseñamos e implementamos radios online corporativas para fortalecer la comunicación interna y externa.",
    icon: Radio,
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: "youtube-247",
    title: "Transmisiones 24/7",
    description: "Sistemas robustos para transmisiones ininterrumpidas en YouTube. Ideal para canales de música lo-fi, noticias o contenido de marca.",
    icon: Globe,
    image: "https://picsum.photos/800/600?random=4"
  }
];