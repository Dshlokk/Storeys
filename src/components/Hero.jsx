import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <div className="hero-overlay"></div>
        {/* Using a premium real estate placeholder video since we don't have a local one */}
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
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-gold">Strategic Growth Partners</span>
          </motion.div>
          
          <h1 className="hero-title">
            The Growth Engine Behind High-Performing <span className="gradient-gold">Real Estate Brands</span>
          </h1>
          
          <p className="hero-subtitle">
            Storeys Realty helps developers accelerate sales, generate qualified demand, build elite sales organizations, and unlock strategic growth opportunities.
          </p>
          
          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#contact" className="btn btn-primary">
              Schedule Strategy Call <ArrowRight size={18} style={{marginLeft: '8px'}}/>
            </a>
            <a href="#profile" className="btn btn-outline">
              Download Company Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} color="#d4af37" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
