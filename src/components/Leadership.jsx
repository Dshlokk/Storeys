import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import './Leadership.css';

const Leadership = () => {
  return (
    <section id="leadership" className="leadership">
      <div className="architectural-line" style={{ top: '0' }}></div>
      <div className="corner-accent corner-tl"></div>
      
      <div className="container">
        <div className="leadership-grid">
          <motion.div 
            className="leadership-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="section-subtitle text-gold">Leadership</h4>
            <h2 className="section-title">
              Strategic Vision.<br/>
              <span className="gradient-gold">Uncompromising Execution.</span>
            </h2>
            
            <p className="leadership-text">
              Storeys Realty is led by visionaries with deep expertise in real estate growth, sales leadership, and institutional strategy. We believe that true growth requires more than just capital; it demands an integrated ecosystem of talent, partnerships, and operational rigor.
            </p>
            
            <p className="leadership-text">
              Our leadership team brings together decades of experience across luxury real estate, hospitality, and corporate finance to deliver unprecedented value to our developer partners.
            </p>

            <motion.a 
              href="#contact" 
              className="btn btn-outline" 
              style={{marginTop: '2rem'}}
              whileHover={{ scale: 1.02 }}
            >
              Connect with Leadership
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="leadership-profile glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src="https://images.unsplash.com/photo-1560250057-3a2164f7df50?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder Profile" 
                />
              </div>
              <div className="image-border-accent"></div>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Founder & CEO</h3>
              <p className="profile-role text-gold">Storeys Realty</p>
              <p className="profile-bio">
                Leading the strategic direction and growth of India's premier real estate partnership firm, focusing on large-scale revenue enablement and global distribution expansion.
              </p>
              <motion.a 
                href="#" 
                className="social-icon"
                whileHover={{ y: -3, color: 'var(--color-accent-gold)' }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="architectural-line" style={{ bottom: '0' }}></div>
    </section>
  );
};

export default Leadership;
