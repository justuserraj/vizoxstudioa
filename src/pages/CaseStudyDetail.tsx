import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioItems } from '@/data/mockData';
import { useEffect } from 'react';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = portfolioItems.findIndex(item => item.id === id);
  const project = portfolioItems[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/portfolio');
    }
  }, [id, project, navigate]);

  if (!project) return null;

  const nextProject = portfolioItems[(projectIndex + 1) % portfolioItems.length];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} /> Back to Portfolio
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </motion.div>
              
              {project.url && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-start lg:justify-end"
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 btn-glow"
                  >
                    Visit Website <ExternalLink size={20} />
                  </a>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden aspect-video relative"
            >
              {project.mediaType === 'video' ? (
                <video 
                  src={project.mediaUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-24 px-6 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">The Challenge</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">Our Solution</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">The Results</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {project.results}
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="glass p-8 rounded-3xl sticky top-32">
                  <h3 className="text-xl font-serif font-bold mb-6">Project Info</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-foreground/40 uppercase tracking-widest mb-1">Client</p>
                      <p className="font-medium">{project.title}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/40 uppercase tracking-widest mb-1">Category</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/40 uppercase tracking-widest mb-1">Year</p>
                      <p className="font-medium">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Images */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.additionalImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl overflow-hidden aspect-[4/3]"
                  >
                    <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next Project Navigation */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Next Project</p>
            <Link 
              to={`/portfolio/${nextProject.id}`}
              className="group inline-block"
            >
              <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 group-hover:gradient-text transition-all duration-500">
                {nextProject.title}
              </h2>
              <div className="flex items-center justify-center gap-2 text-xl font-medium group-hover:gap-4 transition-all">
                View Case Study <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;