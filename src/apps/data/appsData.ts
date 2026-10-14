import { AppItem } from '../types';

export const APPS_LIST: AppItem[] = [
  {
    id: 'teleprompter-artistpro',
    name: 'Teleprompter Artist Pro',
    tagline: 'Lectura flotante sobre cámara para músicos y creadores',
    category: 'Audio & Video',
    version: 'v1.0.0',
    size: '31.5 MB',
    updatedAt: 'Octubre 2026',
    minAndroid: 'Android 8.0+',
    iconUrl: '/apps/teleprompter-artistpro.jpg',
    downloadUrl: '#',
    badge: 'Popular para Creadores',
    description:
      'Teleprompter profesional con modo ventana flotante. Lee tus letras, guiones, acordes o pautas directamente sobre la app de tu cámara, transmisiones en vivo o redes sociales (Instagram, TikTok, YouTube) manteniendo siempre la mirada fija en el lente.',
    features: [
      'Ventana flotante redimensionable con transparencia ajustable',
      'Control fino de velocidad de scroll y tamaño de tipografía',
      'Modo Espejo (Mirror) para hardware de teleprompter físico',
      'Funciona sobre cualquier app de cámara o grabación',
      'Gestión de guiones, repertorio y letras sin conexión a internet',
    ],
    specialInstructionsTitle: 'Permiso Especial Requerido: Superposición (Mostrar sobre otras apps)',
    specialInstructions: [
      {
        step: 1,
        title: 'Solicitud al abrir por primera vez',
        description:
          'Al abrir la app, te solicitará permiso para superponerse en pantalla. Toca en "Permitir" o "Configuración".',
      },
      {
        step: 2,
        title: 'Localizar en la lista del sistema',
        description:
          'En el listado que abre Android, busca "Teleprompter Artist Pro".',
      },
      {
        step: 3,
        title: 'Activar el interruptor de superposición',
        description:
          'Enciende la casilla "Permitir mostrar sobre otras aplicaciones" (o "Aparecer encima").',
      },
      {
        step: 4,
        title: 'Dispositivos Xiaomi / Redmi / POCO (Paso extra)',
        description:
          'Ve a Ajustes > Aplicaciones > Administrar aplicaciones > Teleprompter Artist Pro > Otros permisos y activa "Mostrar ventanas emergentes en segundo plano".',
      },
    ],
  },
  {
    id: 'scanner-artistpro',
    name: 'Scanner Artist Pro',
    tagline: 'Digitalización profesional de documentos y partituras en PDF',
    category: 'Productividad & Documentos',
    version: 'v1.0.0',
    size: '143.8 MB',
    updatedAt: 'Octubre 2026',
    minAndroid: 'Android 8.0+',
    iconUrl: '/apps/scanner-artistpro.jpg',
    downloadUrl: '#',
    badge: 'Herramienta de Estudio',
    description:
      'Digitalizador móvil de alta resolución diseñado especialmente para músicos, directores y profesionales. Escanea partituras musicales, contratos de shows, letras y documentación con corrección automática de perspectiva y filtros de ultra-contraste.',
    features: [
      'Detección automática de bordes y perspectiva inteligente',
      'Filtros de realce de texto y partituras en blanco/negro nítido',
      'Exportación multipágina directa a formato PDF',
      'Compresión optimizada para compartir por WhatsApp o correo',
      'Procesamiento 100% local en tu teléfono para total privacidad',
    ],
  },
];

export const GENERAL_INSTALLATION_STEPS = [
  {
    step: 1,
    title: 'Iniciar la descarga del archivo APK',
    description:
      'Toca el botón "Descargar APK". Tu navegador (Chrome, Samsung Internet, etc.) mostrará una advertencia de seguridad que dice "Es posible que el archivo sea dañino". Esto es estándar en Android para cualquier archivo fuera de Play Store. Toca en "Descargar de todos modos".',
    icon: 'download',
  },
  {
    step: 2,
    title: 'Permitir instalación de fuentes desconocidas',
    description:
      'Al pulsar sobre el archivo descargado para abrirlo, Android indicará: "Por motivos de seguridad, tu teléfono no tiene permitido instalar apps desconocidas de esta fuente". Toca en "Ajustes / Configuración" y activa el interruptor "Permitir desde esta fuente".',
    icon: 'shield',
  },
  {
    step: 3,
    title: 'Aviso de Google Play Protect (si aparece)',
    description:
      'Si Play Protect muestra "Bloqueado por Play Protect" o desarrollador no verificado, toca el enlace pequeño que dice "Más detalles" y luego selecciona "Instalar de todas formas".',
    icon: 'check',
  },
  {
    step: 4,
    title: '¡Listo para usar!',
    description:
      'Presiona "Instalar" y la aplicación se añadirá a la pantalla de inicio de tu teléfono, lista para usarse de forma 100% gratuita y sin registros obligatorios.',
    icon: 'smartphone',
  },
];
