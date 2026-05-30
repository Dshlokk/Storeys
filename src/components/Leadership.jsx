import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin } from 'lucide-react';
import './Leadership.css';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="leadership-grid" ref={ref}>
          <motion.div 
            className="leadership-content"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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

            <a href="#contact" className="btn btn-outline" style={{marginTop: '2rem'}}>
              Connect with Leadership
            </a>
          </motion.div>
          
          <motion.div 
            className="leadership-profile glass"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-image">
              <img 
                src="https://images.unsplash.com/photo-1560250057-3a2164f7df50?q=80&w=1974&auto=format&fit=crop" 
                alt="Founder Profile" 
              />
            </div>
            <div className="profile-info">
              <h3>Founder & CEO</h3>
              <p className="text-gold">Storeys Realty</p>
              <p className="profile-bio">
                Leading the strategic direction and growth of India's premier real estate partnership firm, focusing on large-scale revenue enablement and global distribution expansion.
              </p>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
