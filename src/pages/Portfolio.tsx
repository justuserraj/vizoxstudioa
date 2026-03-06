import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems } from '@/data/mockData';
import { cn } from '@/lib/utils';

const categories = ['All', 'E-commerce', 'SaaS', 'Motion Graphics', 'Branding'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(4);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const hasMore = visibleItems < filteredItems.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Our Portfolio" subtitle="Selected Work" align="center" />
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleItems(4);
                  }}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <AnimatePresence mode="popLayout">
                {filteredItems.slice(0, visibleItems).map((item, index) => (
                  <PortfolioCard key={item.id} item={item} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {hasMore && (
              <div className="text-center">
                <button
                  onClick={() => setVisibleItems(prev => prev + 4)}
                  className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  Load More Projects
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;