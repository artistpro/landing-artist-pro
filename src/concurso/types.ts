export interface InscripcionForm {
  nombreArtistico: string;
  tipoParticipante: 'solista' | 'banda';
  generoMusical: string;
  departamento: string;
  municipio: string;
  nombreContacto: string;
  whatsapp: string;
  email: string;
  linkDemo: string;
  integrantesCount?: number;
  comentarios?: string;
}

export interface MunicipioData {
  nombre: string;
  departamento: 'Risaralda' | 'Caldas' | 'Quindío' | 'Norte del Valle';
  destacado?: boolean;
}

export interface PremioData {
  icon: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  destacado?: boolean;
  detalles: string[];
}
