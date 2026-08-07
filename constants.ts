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
    details: "Nuestro estudio está diseñado para capturar el sonido en vivo con la mayor fidelidad posible. Contamos con sala de grabación acústicamente tratada, sala de control con monitores KRK, amplificadores Marshall, batería Paiste y una cadena de señal de clase mundial. Ideal para bandas, solistas, sesiones de video y contenido audiovisual.",
    icon: Mic2,
    image: "/studio/5163497992533773429.jpg"
  },
  {
    id: "produccion-multimedia",
    title: "Producción Multimedia",
    description: "Creamos contenido audiovisual de alta calidad: desde video clips y video lyrics hasta autorías multimedia y producción visual para tu marca.",
    details: "Llevamos tu música y tu marca al mundo visual. Nuestros servicios de producción multimedia incluyen:\n\n• Desarrollo de video profesional\n• Producción audiovisual para artistas y marcas\n• Multimedia video (visuales, motion graphics)\n• Video lyrics animados\n• Autorías multimedia (masterización visual, edición avanzada)\n\nCada proyecto se trabaja con una estética cuidada, alineada con tu identidad artística o corporativa.",
    icon: Cast,
    image: "/studio/5163497992533773428.jpg"
  },
  {
    id: "online-radio",
    title: "Radios Online Corporativas",
    description: "Crea tu propia voz. Diseñamos e implementamos radios online corporativas para fortalecer la comunicación interna y externa.",
    details: "Una radio online corporativa es una herramienta poderosa para conectar con tu equipo y tus clientes. Nos encargamos de todo: servidor de streaming, panel de administración, automatización de contenido, jingles y programación. Tu marca sonando 24/7 de forma profesional.",
    icon: Radio,
    image: "/studio/5163497992533773431.jpg"
  },
  {
    id: "youtube-247",
    title: "Transmisiones 24/7",
    description: "Sistemas robustos para transmisiones ininterrumpidas en YouTube. Ideal para canales de música lo-fi, noticias o contenido de marca.",
    details: "Configuramos y mantenemos sistemas de transmisión continua en YouTube para canales de música, radio, noticias o contenido de marca. Automatización de playlists, gestión de archivos de video y monitoreo constante para que tu canal nunca se detenga.",
    icon: Globe,
    image: "/studio/5165749792347458906.jpg"
  }
];