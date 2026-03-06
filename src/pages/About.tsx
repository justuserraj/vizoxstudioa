import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

const About = () => {
  const processSteps = [
    { title: 'Discovery', desc: 'We dive deep into your business, goals, and audience.' },
    { title: 'Strategy', desc: 'We craft a roadmap for success based on data and insights.' },
    { title: 'Design', desc: 'We create stunning visuals that align with your brand.' },
    { title: 'Development', desc: 'We build high-performance products with clean code.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeading title="Our Story" subtitle="About Vizox" />
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Founded in 2020, Vizox Studio was born out of a passion for combining artistic creativity with technical excellence. We believed that the digital world deserved better—more beauty, more performance, and more meaning.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Today, we are a team of designers, developers, and strategists dedicated to helping brands navigate the complex digital landscape. We don't just build websites; we build experiences that leave a lasting impression.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-3xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Our Process" subtitle="How we work" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 glass rounded-2xl relative"
                >
                  <span className="text-6xl font-serif font-bold text-primary/10 absolute top-4 right-4">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-4 relative z-10">{step.title}</h3>
                  <p className="text-foreground/60 relative z-10">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;