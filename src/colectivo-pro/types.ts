export type TipoMusico = 'Solista' | 'Banda / Agrupación' | 'Músico de Sesión' | 'Compositor' | 'Productor / Arreglista';

export type DepartamentoRegion = 'Risaralda' | 'Caldas' | 'Quindío' | 'Norte del Valle';

export interface MusicoProfile {
  id: string;
  nombreArtistico: string;
  tipo: TipoMusico;
  generos: string[];
  instrumentos: string[];
  departamento: DepartamentoRegion;
  municipio: string;
  corregimiento?: string;
  bio: string;
  whatsapp: string;
  email?: string;
  linkDemo?: string;
  redes?: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  disponiblePara?: string[];
  fotoUrl?: string;
  verificado: boolean;
  estadoPerfil: 'activo' | 'in_memoriam';
  recomendacionesCount: number;
  creadoEn: string;
}

export interface MunicipioTerritorio {
  nombre: string;
  departamento: DepartamentoRegion;
  corregimientos: string[];
}
