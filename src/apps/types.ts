export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  category: 'Productividad & Documentos' | 'Audio & Video' | 'Herramientas';
  version: string;
  size: string;
  updatedAt: string;
  minAndroid: string;
  iconUrl: string;
  downloadUrl: string;
  description: string;
  features: string[];
  specialInstructionsTitle?: string;
  specialInstructions?: {
    step: number;
    title: string;
    description: string;
  }[];
  badge?: string;
}
