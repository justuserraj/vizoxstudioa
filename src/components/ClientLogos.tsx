import { motion } from 'framer-motion';
import { clientLogos } from '@/data/mockData';

const ClientLogos = () => {
  return (
    <section className="py-16 px-6 border-y border-white/5 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-foreground/40 text-sm font-medium uppercase tracking-widest mb-12">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50">
          {clientLogos.map((logo) => (
            <motion.div
              key={logo.id}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={logo.logoUrl} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;