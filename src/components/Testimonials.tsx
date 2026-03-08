import { motion } from 'framer-motion';
import { testimonials } from '@/data/mockData';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Testimonials" 
          align="center" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl relative flex flex-col h-full"
            >
              <Quote className="text-primary/20 absolute top-6 right-8" size={48} />
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-serif font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/50">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;