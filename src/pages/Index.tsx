import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import { services, portfolioItems } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-6 block"
            >
              Creative Agency Studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8"
            >
              Ideas that <span className="gradient-text">Inspire.</span><br />
              Code that <span className="gradient-text">Performs.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We are a digital-first creative studio specializing in building premium brands and high-performance digital products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/portfolio"
                className="px-8 py-4 gradient-flow text-white rounded-full font-bold text-lg btn-glow flex items-center gap-2"
              >
                View Our Work <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Our Expertise" 
              subtitle="Services" 
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Portfolio */}
        <section className="py-24 px-6 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <SectionHeading 
                title="Selected Projects" 
                subtitle="Portfolio" 
              />
              <Link to="/portfolio" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all mb-12">
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.slice(0, 2).map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 gradient-flow opacity-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Have a project in mind? <br />
              <span className="gradient-text">Let's build something great.</span>
            </h2>
            <p className="text-xl text-foreground/60 mb-12">
              We're always looking for new challenges and exciting projects to work on.
            </p>
            <Link
              to="/contact"
              className="px-10 py-5 bg-primary text-white rounded-full font-bold text-xl btn-glow inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;