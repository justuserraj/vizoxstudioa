import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 sm:pt-20 pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="text-xl sm:text-2xl font-serif font-bold gradient-text mb-4 sm:mb-6 block">
            VIZOX
          </Link>
          <p className="text-sm sm:text-base text-foreground/60 mb-6 max-w-xs">
            Ideas that inspire. Code that performs. We build digital experiences that define the future.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors p-1"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/thevizox" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors p-1"><Instagram size={20} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors p-1"><Linkedin size={20} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors p-1"><Github size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 sm:mb-6">Services</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/60">
            <li><Link to="/services" className="hover:text-primary transition-colors">Branding</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 sm:mb-6">Company</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/60">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Our Work</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h4 className="font-serif text-lg mb-4 sm:mb-6">Newsletter</h4>
          <p className="text-sm sm:text-base text-foreground/60 mb-4">Subscribe to get the latest design news.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-background border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
            />
            <button className="bg-primary px-4 py-2 rounded-lg text-sm font-medium btn-glow w-full sm:w-auto">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/40 text-xs sm:text-sm text-center md:text-left">
        <p>© 2024 Vizox Studio. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;