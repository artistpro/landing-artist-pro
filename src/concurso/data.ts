import { PremioData, MunicipioData } from './types';

export const PREMIOS: PremioData[] = [
  {
    icon: 'Mic',
    titulo: 'Grabación Profesional en Estudio',
    subtitulo: 'Sesión Completa de Audio',
    descripcion: 'Grabación de voz, instrumentos, mezcla y máster en el estudio profesional de Artist Pro con tecnología de punta.',
    destacado: true,
    detalles: [
      'Grabación de Single o Live Session en estudio acústico',
      'Mezcla y Masterización profesional de estándar internacional',
      'Asesoría técnica de producción musical antes de grabar',
    ],
  },
  {
    icon: 'Video',
    titulo: 'Producción de Video Lyric',
    subtitulo: 'Material Audiovisual Oficial',
    descripcion: 'Diseño y desarrollo de Video Lyric animado en alta definición para tu sencillo promocional.',
    detalles: [
      'Concepto visual y animación sincronizada con la canción',
      'Formato optimizado para YouTube, Instagram Reels y TikTok',
      'Entrega de rénder final en 4K',
    ],
  },
  {
    icon: 'Radio',
    titulo: 'Promoción & Difusión en Medios',
    subtitulo: 'Campaña de Lanzamiento',
    descripcion: 'Rotación en la emisora Artist Pro Radio y difusión masiva en redes sociales y plataformas digitales.',
    detalles: [
      'Rotación destacada en programación de Artist Pro Radio 24/7',
      'Entrevista en vivo y publicación en el Blog oficial de Artist Pro',
      'Campaña promocional orientada a audiencias del Eje Cafetero y Colombia',
    ],
  },
  {
    icon: 'GraduationCap',
    titulo: 'Cursos & Becas Artpreneur',
    subtitulo: 'Formación en Industria Musical',
    descripcion: 'Acceso a programas de capacitación en marketing musical, monetización de contenidos y posicionamiento de marca.',
    detalles: [
      'Acceso a la plataforma de Cursos Artist Pro',
      'Tutoría estratégica para construir tu empresa musical',
      'Asesoría en registro de marca y distribución digital',
    ],
  },
];

export const MUNICIPIOS: MunicipioData[] = [
  // Risaralda
  { nombre: 'Pereira', departamento: 'Risaralda', destacado: true },
  { nombre: 'Dosquebradas', departamento: 'Risaralda', destacado: true },
  { nombre: 'Santa Rosa de Cabal', departamento: 'Risaralda', destacado: true },
  { nombre: 'La Virginia', departamento: 'Risaralda' },
  { nombre: 'Marsella', departamento: 'Risaralda' },
  { nombre: 'Belén de Umbría', departamento: 'Risaralda' },

  // Caldas
  { nombre: 'Manizales', departamento: 'Caldas', destacado: true },
  { nombre: 'Villamaría', departamento: 'Caldas', destacado: true },
  { nombre: 'Chinchiná', departamento: 'Caldas', destacado: true },
  { nombre: 'Anserma', departamento: 'Caldas' },
  { nombre: 'Riosucio', departamento: 'Caldas' },

  // Quindío
  { nombre: 'Armenia', departamento: 'Quindío', destacado: true },
  { nombre: 'Salento', departamento: 'Quindío', destacado: true },
  { nombre: 'Calarcá', departamento: 'Quindío', destacado: true },
  { nombre: 'Circasia', departamento: 'Quindío' },
  { nombre: 'Montenegro', departamento: 'Quindío' },
  { nombre: 'Quimbaya', departamento: 'Quindío' },

  // Norte del Valle
  { nombre: 'Cartago', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Alcalá', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Ulloa', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Obando', departamento: 'Norte del Valle' },
  { nombre: 'La Victoria', departamento: 'Norte del Valle' },
  { nombre: 'Zarzal', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Roldanillo', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Sevilla', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Caicedonia', departamento: 'Norte del Valle', destacado: true },
  { nombre: 'Bolívar', departamento: 'Norte del Valle' },
  { nombre: 'Toro', departamento: 'Norte del Valle' },
  { nombre: 'Ansermanuevo', departamento: 'Norte del Valle' },
  { nombre: 'Tuluá', departamento: 'Norte del Valle', destacado: true },
];

export const GENEROS_MUSICALES = [
  'Rock / Alternativo',
  'Pop / Pop Rock',
  'Urbano / Hip-Hop / Rap / Reggaetón',
  'Música Popular / Ranchera / Vallenato',
  'Tropical / Salsa / Cumbia',
  'Folclor / Fusión Latina',
  'Indie / Singer-Songwriter',
  'Otro / Fusión',
];

export const FAQS_CONCURSO = [
  {
    pregunta: '¿Quiénes pueden participar en el concurso?',
    respuesta: 'Pueden participar artistas solistas y bandas musicales emergentes o independientes que residan o desarrollen su proyecto artístico en cualquier municipio del Eje Cafetero (Risaralda, Caldas, Quindío) o el Norte del Valle del Cauca (hasta Tuluá).',
  },
  {
    pregunta: '¿Tiene algún costo la inscripción?',
    respuesta: 'La inscripción inicial es 100% gratuita a través del formulario de esta plataforma.',
  },
  {
    pregunta: '¿Qué tipo de canciones se pueden presentar?',
    respuesta: 'Se reciben canciones originales de autoría propia o arreglos inéditos en cualquier género musical (Rock, Pop, Urbano, Popular, Folclor, Fusión, etc.).',
  },
  {
    pregunta: '¿Cómo se seleccionará a los ganadores?',
    respuesta: 'Un jurado especializado de productores, músicos y gestores de Artist Pro evaluará la interpretación, originalidad, propuesta artística e impacto técnico de los temas inscritos.',
  },
  {
    pregunta: '¿Cuáles son las fechas clave del concurso?',
    respuesta: 'Las inscripciones están abiertas. La fase de recepción de canciones estará habilitada según el calendario oficial del evento.',
  },
];
