import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '../types';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = (Icons as any)[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card border-white/5 hover:border-primary/50 transition-all duration-500 group h-full">
        <CardContent className="p-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
            {Icon && <Icon size={28} />}
          </div>
          <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
          <p className="text-foreground/60 leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;