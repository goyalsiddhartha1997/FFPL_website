export interface UseCase {
  id: string;
  title: string;
  text: string;
  image: string;
  link: string;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  benefits?: string[];
  technicalDetails?: {
    sizeRange: string;
    materials: string;
  };
  specialties?: string[];
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}
