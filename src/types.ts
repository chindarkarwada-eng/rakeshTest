export type Category = 
  | 'all' 
  | 'key-art' 
  | 'ott-series' 
  | 'advertising' 
  | 'branding' 
  | 'concept';

export type ViewMode = 'grid' | 'cinema' | 'list';

export interface Award {
  id: string;
  title: string;
  project: string;
  year: number;
  festival: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryLabel: string;
  year: number;
  studio: string;
  agency?: string;
  client: string;
  role: string;
  imageUrl: string;
  backdropUrl?: string;
  gallery?: string[];
  awards?: string[];
  description: string;
  impactStats?: { label: string; value: string }[];
  processNotes?: {
    stage: string;
    description: string;
  }[];
  tags: string[];
  featured?: boolean;
  aspectRatio?: '2:3' | '16:9' | '3:4' | '1:1';
  synopsis?: string;
}

export interface Client {
  name: string;
  category: string;
  logoText: string;
  featuredProject?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
}

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: Category;
  budgetRange: string;
  timeline: string;
  briefDetails: string;
}
