export interface TasteProfile {
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  sweetness: number; // 1-10
  coolness: number;  // 1-10
  saturation: number; // 1-10
}

export interface Product {
  id: string;
  number: string;
  plate: string;
  name: string;
  classification: string;
  description: string;
  secondaryText: string;
  vessel: string;
  volume: string;
  formulationYear: string;
  strength: string;
  ratio: string;
  tasteProfile: TasteProfile;
  botanicalOrigins: string[];
  extractionMethod: string;
  viscosityGrade: string;
  provenance: string;
  image: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface ArchiveEntry {
  id: string;
  index: string;
  title: string;
  year: string;
  category: "Чистая зона" | "Сырьё USP/EP" | "Флейвористика" | "Контроль GC/MS" | "Честный Знак" | "Флакон и дозатор" | string;
  dimension: string;
  description: string;
  image?: string;
  plateNumber: string;
  notes: string;
}

export interface BrandManifestoChapter {
  num: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  marginalia: string;
  quote?: string;
}

