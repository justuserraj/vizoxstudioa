import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { Play } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const PortfolioCard = ({ item, index }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-primary text-sm font-medium mb-2">{item.category}</span>
        <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
        <p className="text-foreground/70 text-sm line-clamp-2 mb-4">{item.description}</p>
        {item.mediaType === 'video' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center text-white">
            <Play fill="currentColor" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;