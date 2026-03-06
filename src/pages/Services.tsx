import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/mockData';
import { ServiceCategory } from '@/types';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

const categories: (ServiceCategory | 'All')[] = ['All', 'Design', 'Development', 'Marketing'];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Our Services" subtitle="What we do" align="center" />
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat 
                      ? "bg-primary text-white btn-glow" 
                      : "glass text-foreground/60 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service, index) => {
                  const Icon = (Icons as any)[service.icon];
                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="glass p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                    >
                      <div className="lg:col-span-1">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                          {Icon && <Icon size={40} />}
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-2">{service.title}</h3>
                        <span className="text-primary text-sm font-medium uppercase tracking-wider">{service.category}</span>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <p className="text-foreground/60 leading-relaxed">
                          {service.longDescription}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;