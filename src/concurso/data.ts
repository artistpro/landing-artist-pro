import { PremioData, MunicipioData } from './types';

export const CATEGORIAS_CONCURSO = [
  { id: 'banda-solista', nombre: 'Banda o Solista', desc: 'Para agrupaciones y solistas de cualquier género musical con propuesta integral.' },
  { id: 'voz', nombre: 'Voz', desc: 'Vocalistas e intérpretes solistas destacando técnica, afinación y expresión.' },
  { id: 'guitarra', nombre: 'Guitarra', desc: 'Guitarristas eléctricos o acústicos demostrando virtuosismo y musicalidad.' },
  { id: 'talento-revelacion', nombre: 'Talento Revelación', desc: 'Nuevos proyectos y jóvenes talentos emergentes con gran potencial.' },
  { id: 'mejor-cancion', nombre: 'Mejor Canción (Composición)', desc: 'Premios a la composición, lírica, melodía e innovación de temas originales.' },
  { id: 'ensamble-acustico', nombre: 'Mejor Ensamble Acústico', desc: 'Formatos acústicos, desenchufados, dúos, tríos o grupos de cuerda y voz.' },
];

export const CRONOGRAMA_EVENTO = [
  { fecha: '30 Ago - 15 Sept 2026', titulo: 'Inscripción y Recepción de Materiales', desc: 'Recepción de canciones a través del formulario de Google Forms.' },
  { fecha: '16 - 25 Septiembre 2026', titulo: 'Selección de Finalistas por Jurado', desc: 'Revisión técnica de materiales y selección de los 6 finalistas por categoría.' },
  { fecha: '28 Septiembre 2026', titulo: 'Anuncio Oficial de Finalistas', desc: 'Publicación de clasificados en web, emisora y redes de Artist Pro.' },
  { fecha: 'Nov 2026 - Ene 2027', titulo: 'Jornada de Audición & Grabación de Premios', desc: 'Grabaciones de singles, video lyrics y live streams para los ganadores.' },
];

export const PREMIOS: PremioData[] = [
  {
    icon: 'Mic',
    titulo: 'Grabación Completa en Estudio',
    subtitulo: 'Categoría Banda / Solista',
    descripcion: 'Grabación completa de un tema en estudio profesional con mezcla y máster de estándar internacional.',
    destacado: true,
    detalles: [
      'Grabación de Single en estudio acústico profesional',
      'Mezcla y Masterización profesional por productores de Artist Pro',
      'Asesoría técnica de producción musical antes de grabar',
    ],
  },
  {
    icon: 'Video',
    titulo: 'Producción de Video Lyric Sincronizado',
    subtitulo: 'Categoría Mejor Canción',
    descripcion: 'Diseño y desarrollo de Video Lyric en 4K con animación sincronizada y fondo artístico para tu canción.',
    detalles: [
      'Animación tipográfica sincronizada con la letra',
      'Formato HD y 4K optimizado para YouTube y redes sociales',
      'Entrega de rénder definitivo para distribución',
    ],
  },
  {
    icon: 'Radio',
    titulo: 'Live Stream Multicámara 45-60 min',
    subtitulo: 'Categorías Voz, Revelación & Ensamble',
    descripcion: 'Concierto transmitido en vivo por YouTube o Facebook Live con producción técnica de estudio.',
    detalles: [
      'Transmisión en vivo en HD con multicámara',
      'Sonido en vivo mezclado en tiempo real',
      'Curso de Marketing Musical y Promoción en Artist Pro Radio 24/7',
    ],
  },
  {
    icon: 'GraduationCap',
    titulo: 'Guitar Play Through & Cursos',
    subtitulo: 'Categoría Guitarra',
    descripcion: 'Video profesional multicámara (2-4 minutos) tocando tu solo o composición + Cursos de Formación.',
    detalles: [
      'Edición multicámara en alta definición para guitarristas',
      'Cursos de Industria y Marketing Musical en la plataforma de Artist Pro',
      'Certificado y promoción destacada en medios',
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

export const FAQS_CONCURSO = [
  {
    pregunta: '¿Quiénes pueden participar en el concurso?',
    respuesta: 'Pueden participar músicos solistas, bandas, vocalistas, guitarristas y compositores residentes o nacidos en el Eje Cafetero (Risaralda, Caldas, Quindío) y Norte del Valle del Cauca (Cartago, Sevilla, Caicedonia, Roldanillo, Tuluá, etc.).',
  },
  {
    pregunta: '¿Qué se necesita si soy menor de edad?',
    respuesta: 'Los participantes menores de 18 años deben contar con la autorización firmada de sus padres o tutor legal mediante el formulario oficial habilitado para menores.',
  },
  {
    pregunta: '¿Cuáles son las 6 categorías del concurso?',
    respuesta: '1) Banda o Solista, 2) Voz, 3) Guitarra, 4) Talento Revelación, 5) Mejor Canción (Composición), y 6) Mejor Ensamble Acústico.',
  },
  {
    pregunta: '¿Cuál es la diferencia entre Inscripción Libre y Premium?',
    respuesta: 'La Inscripción Libre es 100% gratuita. La Inscripción Premium ($50.000 COP) incluye un análisis técnico en PDF emitido por expertos de Artist Pro sobre tu canción, certificado oficial, 15% de descuento en servicios de estudio y 20% en Cursos.',
  },
  {
    pregunta: '¿Cuáles son las fechas clave del concurso?',
    respuesta: 'Inscripciones abiertas del 30 de agosto al 15 de septiembre de 2026. Selección de finalistas del 16 al 25 de septiembre y anuncio público el 28 de septiembre.',
  },
];
