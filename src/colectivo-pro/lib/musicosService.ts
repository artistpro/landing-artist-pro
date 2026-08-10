import { MusicoProfile } from '../types';

const INITIAL_MUSICOS: MusicoProfile[] = [
  {
    id: 'musico-1',
    nombreArtistico: 'Mateo & La Sombra',
    tipo: 'Banda / Agrupación',
    generos: ['Rock / Alternativo', 'Indie / Cantautor'],
    instrumentos: ['Guitarra Eléctrica', 'Voz Lead / Coros', 'Bajo Eléctrico / Contrabajo'],
    departamento: 'Risaralda',
    municipio: 'Pereira',
    corregimiento: 'Combia',
    bio: 'Banda emergente de rock alternativo e indie nacida en Pereira. Nos especializamos en shows en vivo con energía alta y composiciones originales.',
    whatsapp: '573162548002',
    email: 'contacto@mateoylasombra.com',
    linkDemo: 'https://youtube.com',
    redes: {
      instagram: 'https://instagram.com/artistproco',
      youtube: 'https://youtube.com',
      spotify: 'https://spotify.com',
    },
    disponiblePara: ['Presentaciones en vivo', 'Festivales', 'Grabación de sesión'],
    fotoUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
    verificado: true,
    estadoPerfil: 'activo',
    recomendacionesCount: 14,
    creadoEn: new Date().toISOString(),
  },
  {
    id: 'musico-2',
    nombreArtistico: 'Valentina Ríos',
    tipo: 'Solista',
    generos: ['Jazz / Blues / Bossa Nova', 'Pop / Ballad'],
    instrumentos: ['Voz Lead / Coros', 'Teclados / Piano / Acordeón'],
    departamento: 'Caldas',
    municipio: 'Manizales',
    corregimiento: 'Manizales (Cabecera)',
    bio: 'Cantautora y pianista de Manizales. Interpretación de jazz latino, bossa nova y baladas con producción acústica íntima.',
    whatsapp: '573162548002',
    email: 'valentina@riosmusic.com',
    linkDemo: 'https://youtube.com',
    redes: {
      instagram: 'https://instagram.com/artistproco',
      spotify: 'https://spotify.com',
    },
    disponiblePara: ['Eventos corporativos', 'Sesiones de estudio', 'Composición'],
    fotoUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    verificado: true,
    estadoPerfil: 'activo',
    recomendacionesCount: 22,
    creadoEn: new Date().toISOString(),
  },
  {
    id: 'musico-3',
    nombreArtistico: 'Carlos El Tiple Duque',
    tipo: 'Músico de Sesión',
    generos: ['Folclor / Fusión Latina / Andina', 'Música Popular / Ranchera / Vallenato'],
    instrumentos: ['Guitarra Acústica / Tiple / Bandola', 'Violín / Cuerdas'],
    departamento: 'Quindío',
    municipio: 'Salento',
    corregimiento: 'Salento (Cabecera)',
    bio: 'Maestro ejecutante del tiple y la bandola andina con más de 15 años acompañando artistas del Eje Cafetero y grabaciones de estudio.',
    whatsapp: '573162548002',
    linkDemo: 'https://youtube.com',
    redes: {
      youtube: 'https://youtube.com',
    },
    disponiblePara: ['Grabación de sesión', 'Arreglos folclóricos', 'Acompañamiento en vivo'],
    fotoUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80',
    verificado: true,
    estadoPerfil: 'activo',
    recomendacionesCount: 31,
    creadoEn: new Date().toISOString(),
  },
  {
    id: 'musico-4',
    nombreArtistico: 'Son del Norte Fusion',
    tipo: 'Banda / Agrupación',
    generos: ['Salsa / Tropical / Cumbia', 'Folclor / Fusión Latina / Andina'],
    instrumentos: ['Batería / Percusión Latina', 'Saxofón / Trompeta / Trombón', 'Voz Lead / Coros'],
    departamento: 'Norte del Valle',
    municipio: 'Cartago',
    corregimiento: 'Cartago (Cabecera)',
    bio: 'Ensamble de percusión y metales del Norte del Valle. Alegría, cumbia y ritmo tropical para fiestas, ferias y escenarios regionales.',
    whatsapp: '573162548002',
    linkDemo: 'https://youtube.com',
    redes: {
      instagram: 'https://instagram.com/artistproco',
      youtube: 'https://youtube.com',
    },
    disponiblePara: ['Festivales', 'Ferias patronales', 'Eventos privados'],
    fotoUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    verificado: true,
    estadoPerfil: 'activo',
    recomendacionesCount: 18,
    creadoEn: new Date().toISOString(),
  },
  {
    id: 'musico-5',
    nombreArtistico: 'Maestro Don Pedro Ramírez',
    tipo: 'Solista',
    generos: ['Música Popular / Ranchera / Vallenato', 'Folclor / Fusión Latina / Andina'],
    instrumentos: ['Guitarra Acústica / Tiple / Bandola', 'Voz Lead / Coros'],
    departamento: 'Risaralda',
    municipio: 'Apía',
    corregimiento: 'Apía (Cabecera)',
    bio: 'Venerado compositor y guitarrista de Apía. Gran cultor de la música campesina y andina colombiana.',
    whatsapp: '573162548002',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    verificado: true,
    estadoPerfil: 'in_memoriam',
    recomendacionesCount: 45,
    creadoEn: new Date().toISOString(),
  },
];

const STORAGE_KEY = 'artistpro_colectivo_musicos_db';

export const getMusicos = (): MusicoProfile[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading colectivo musicos from localStorage:', err);
  }
  // Initialize with initial sample list
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MUSICOS));
  } catch (e) {
    // ignore
  }
  return INITIAL_MUSICOS;
};

export const createMusico = (profileData: Omit<MusicoProfile, 'id' | 'recomendacionesCount' | 'creadoEn'>): MusicoProfile => {
  const currentList = getMusicos();
  const newProfile: MusicoProfile = {
    ...profileData,
    id: `musico-${Date.now()}`,
    recomendacionesCount: 1,
    creadoEn: new Date().toISOString(),
  };

  const updated = [newProfile, ...currentList];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving new musico:', e);
  }
  return newProfile;
};

export const recomendarMusico = (id: string): number => {
  const currentList = getMusicos();
  let updatedCount = 0;
  const updated = currentList.map((m) => {
    if (m.id === id) {
      updatedCount = m.recomendacionesCount + 1;
      return { ...m, recomendacionesCount: updatedCount };
    }
    return m;
  });

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    // ignore
  }
  return updatedCount;
};
