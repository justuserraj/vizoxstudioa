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
};