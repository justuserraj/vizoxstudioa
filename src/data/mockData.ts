import { Service, PortfolioItem } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Brand Identity',
    category: 'Design',
    description: 'Crafting unique visual stories that resonate with your audience.',
    longDescription: 'Our branding process goes deep into your core values to create a visual identity that is not just beautiful, but meaningful. From logo design to full brand guidelines, we ensure consistency across all touchpoints.',
    icon: 'Palette',
  },
  {
    id: '2',
    title: 'Web Development',
    category: 'Development',
    description: 'High-performance websites built with cutting-edge technology.',
    longDescription: 'We build fast, responsive, and accessible websites using modern frameworks like React and Next.js. Our focus is on performance, SEO, and providing an exceptional user experience.',
    icon: 'Code2',
  },
  {
    id: '3',
    title: 'Mobile Apps',
    category: 'Development',
    description: 'Intuitive mobile experiences for iOS and Android.',
    longDescription: 'From concept to App Store, we develop native and cross-platform mobile applications that solve real problems and delight users with smooth interactions.',
    icon: 'Smartphone',
  },
  {
    id: '4',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Strategic growth campaigns that drive results.',
    longDescription: 'We help brands grow their online presence through data-driven marketing strategies, including SEO, social media management, and targeted advertising campaigns.',
    icon: 'BarChart3',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Lumina Watch Co.',
    category: 'E-commerce',
    description: 'A premium watch brand website with a focus on luxury and precision.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '2',
    title: 'Nebula App',
    category: 'SaaS',
    description: 'Productivity app for remote teams with real-time collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '3',
    title: 'Aether Motion',
    category: 'Motion Graphics',
    description: 'Brand reveal animation for a tech startup.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'video',
    mediaUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-326-large.mp4',
  },
  {
    id: '4',
    title: 'Zenith Coffee',
    category: 'Branding',
    description: 'Complete visual identity for a specialty coffee roaster.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000',
  },
];