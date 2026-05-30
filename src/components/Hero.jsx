import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="corner-accent corner-tl"></div>
      <div className="corner-accent corner-tr"></div>
      
      <div className="hero-video-wrapper">
        <div className="hero-overlay"></div>
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        >
          <source src="https://player.vimeo.com/external/498425265.sd.mp4?s=d4f2ea0df21d9eb170d18bc3d67484df6d790409&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>

      <div className="container hero-content">
        <div className="hero-text-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="hero-badge-premium">
              <span className="badge-line"></span>
              Strategic Growth Partners
            </span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            The Growth Engine Behind <br />
            <span className="gradient-gold">High-Performing</span> <br />
            Real Estate Brands
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            Storeys Realty helps developers accelerate sales, generate qualified demand, build elite sales organizations, and unlock strategic growth opportunities.
          </motion.p>
          
          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <a href="#contact" className="btn btn-primary">
              Schedule Strategy Call <ArrowRight size={18} style={{marginLeft: '8px'}}/>
            </a>
            <a href="#profile" className="btn btn-outline">
              Download Company Profile
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="text-gold" />
        </a>
      </motion.div>

      <div className="architectural-line" style={{ bottom: '0' }}></div>
    </section>
  );
};

export default Hero;
