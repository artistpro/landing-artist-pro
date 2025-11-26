import { Course } from '../../types';

export const COURSES: Course[] = [
    {
        id: 'marketing-musical',
        title: 'Marketing y Promoción de Proyectos Musicales Independientes',
        description: 'El curso definitivo de gestión y promoción musical para Artistas Independientes. Aprende conceptos introductorios a la industria musical, mercadeo de productos musicales y 10 estrategias prácticas para catapultar tus resultados. Incluye 4 módulos con clases en vídeo y material de apoyo.',
        price: 'USD $97',
        link: 'https://go.hotmart.com/B79811544N',
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000',
        features: [
            'Estrategias de marketing musical',
            'Gestión de proyectos independientes',
            'Material de apoyo en PDF',
            'Acceso a comunidad de estudiantes'
        ],
        faq: [
            {
                question: '¿Para quién es este curso?',
                answer: 'Para artistas independientes que quieren profesionalizar su carrera y aprender a promocionar su música efectivamente.'
            },
            {
                question: '¿Qué incluye el curso?',
                answer: '4 módulos con clases en video, material descargable y actualizaciones futuras.'
            }
        ]
    },
    {
        id: 'proyecto-musical',
        title: 'Lleva tu Proyecto Musical al siguiente Nivel',
        description: 'Convierte tu talento y pasión en un negocio rentable. Este curso dota a músicos y artistas de una mentalidad emprendedora con herramientas usadas por Startups para estructurar proyectos sólidos. Aprende a planificar, delegar y construir un proyecto sustentable.',
        price: 'USD $97',
        link: 'https://go.hotmart.com/I79814565S',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1000',
        features: [
            'Mentalidad emprendedora para músicos',
            'Herramientas de gestión de proyectos',
            'Estructuración de equipos de trabajo',
            'Planificación estratégica'
        ],
        faq: [
            {
                question: '¿Necesito conocimientos previos de negocios?',
                answer: 'No, el curso está diseñado para enseñarte desde cero cómo aplicar conceptos de emprendimiento a tu música.'
            }
        ]
    },
    {
        id: 'escuela-fans',
        title: 'Escuela de Fans',
        description: 'Formación y gestión de públicos y audiencias. Aprende a crear una base de fans sólida y sostenible. Domina la promoción efectiva de artistas emergentes, construcción de marca y estrategias de engagement. Ideal para músicos, managers y emprendedores musicales.',
        price: 'USD $77',
        link: 'https://go.hotmart.com/L79742948R',
        image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=1000',
        features: [
            'Gestión de audiencias',
            'Estrategias de crecimiento de fans',
            'Branding para artistas',
            'Marketing de contenidos'
        ],
        faq: [
            {
                question: '¿Qué aprenderé en este curso?',
                answer: 'Aprenderás a construir y gestionar una comunidad de fans leales que apoyen tu carrera musical a largo plazo.'
            }
        ]
    },
    {
        id: 'nfts-musical',
        title: 'NFTs en la Industria Musical',
        description: 'Descubre la revolución de los NFTs en la música. Aprende cómo esta tecnología permite a los artistas monetizar su obra de manera directa y descentralizada. Rompe con las cadenas de la industria tradicional y toma el control total sobre tu música y tus ingresos.',
        price: 'USD $35',
        link: 'https://go.hotmart.com/Y85451708H',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000',
        features: [
            'Introducción a los NFTs y Web3',
            'Monetización descentralizada',
            'Creación y venta de NFTs musicales',
            'Independencia financiera para artistas'
        ],
        faq: [
            {
                question: '¿Qué es un NFT musical?',
                answer: 'Es un activo digital único que representa propiedad o acceso a tu música, permitiéndote vender directamente a tus fans.'
            }
        ]
    }
];
