export interface TasteProfile {
  topNotes: string;   // первое впечатление
  heartNotes: string; // середина вкуса
  baseNotes: string;  // послевкусие
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
  formulationYear: string;
  tasteProfile: TasteProfile;
  flavorComponents: string[];
  provenance: string;
  image: string;      // полноразмерное фото (окно с деталями)
  imageSmall: string; // уменьшенная копия для карточки в каталоге
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
  category: "Чистая зона" | "Сырьё USP/EP" | "Флейвористика" | "Контроль GC/MS" | "Флакон и дозатор" | string;
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

