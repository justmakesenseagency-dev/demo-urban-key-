export type PropertyCategory = 'family' | 'bachelor' | 'professional' | 'all';

export type PropertyType = 
  | 'Apartment'
  | 'House'
  | 'Villa'
  | 'Independent Floor'
  | 'Studio'
  | 'Other';

export type BudgetRange = 
  | 'all'
  | 'under-10k'
  | '10k-20k'
  | '20k-30k'
  | '30k-plus'
  | 'contact';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  location: string;
  subLocality: string;
  price: string;
  priceRange: BudgetRange;
  bedrooms: number;
  bathrooms: number;
  area: string;
  category: PropertyCategory;
  description: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  available: boolean;
  featured: boolean;
  suitableFor: string;
  furnishing: 'Fully Furnished' | 'Semi-Furnished' | 'Unfurnished';
  parking: string;
  isPlaceholder?: boolean;
}

export interface SearchFilterState {
  location: string;
  propertyType: string;
  lookingFor: string;
  budget: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  lookingFor: string;
  preferredLocation: string;
  budget: string;
  message: string;
}
