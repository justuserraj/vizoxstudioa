import { Service, PortfolioItem, Testimonial, ClientLogo } from '../types';

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
    challenge: 'Lumina needed a digital presence that matched the craftsmanship of their timepieces. Their existing site was slow and failed to convey the premium nature of the brand.',
    solution: 'We designed a minimalist, high-performance e-commerce platform using React and Shopify. The focus was on high-resolution imagery, smooth transitions, and a seamless checkout experience.',
    results: '35% increase in conversion rate and a 50% reduction in page load times within the first three months of launch.',
    additionalImages: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '2',
    title: 'Nebula App',
    category: 'SaaS',
    description: 'Productivity app for remote teams with real-time collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    challenge: 'Remote teams were struggling with fragmented communication tools. Nebula needed an interface that felt intuitive and reduced cognitive load.',
    solution: 'We developed a unified workspace with real-time synchronization. The UI was built around a "flow" state concept, minimizing distractions and highlighting active tasks.',
    results: 'Over 10,000 active users within the first month and a 4.8-star rating on the App Store.',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '3',
    title: 'Aether Motion',
    category: 'Motion Graphics',
    description: 'Brand reveal animation for a tech startup.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'video',
    mediaUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-326-large.mp4',
    challenge: 'Aether wanted to stand out in a crowded tech market with a visual identity that felt futuristic yet organic.',
    solution: 'We created a series of motion graphics that used generative art principles. The brand reveal animation became the centerpiece of their digital marketing strategy.',
    results: 'The animation received over 500k views across social platforms and significantly increased brand recognition.',
    additionalImages: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '4',
    title: 'Zenith Coffee',
    category: 'Branding',
    description: 'Complete visual identity for a specialty coffee roaster.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000',
    challenge: 'Zenith Coffee needed to transition from a local roaster to a national brand without losing its artisanal feel.',
    solution: 'We developed a brand identity that combined traditional typography with modern, earthy color palettes. The packaging design was crafted to tell the story of the coffee\'s origin.',
    results: 'Secured distribution in 50+ new retail locations and saw a 200% increase in online subscription sales.',
    additionalImages: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000'
    ]
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Lumina Watch Co.',
    content: 'Vizox Studio transformed our digital presence. Their attention to detail and understanding of luxury branding is unparalleled.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Lead',
    company: 'Nebula App',
    content: 'The team at Vizox delivered a product that exceeded our expectations. Their design process is truly collaborative and data-driven.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'Zenith Coffee',
    content: 'Working with Vizox was a game-changer for our brand. They captured our essence perfectly in the new visual identity.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];

export const clientLogos: ClientLogo[] = [
  { id: '1', name: 'Lumina', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: '2', name: 'Nebula', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: '3', name: 'Zenith', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { id: '4', name: 'Aether', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { id: '5', name: 'Stellar', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg' },
];