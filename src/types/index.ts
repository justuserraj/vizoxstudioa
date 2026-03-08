export type ServiceCategory = 'Design' | 'Development' | 'Marketing';

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  longDescription: string;
  icon: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  url?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  additionalImages?: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  logoUrl: string;
};