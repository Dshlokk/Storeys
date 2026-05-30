import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const stats = [
    'Qualified Lead Generation',
    'High Conversion Sales Teams',
    'Global Distribution Network',
    'Hospitality Alliances',
    'Revenue-Focused Leadership',
    'End-to-End Growth Strategy'
  ];

  return (
    <section className="why-choose-us gradient-blue-bg">
      <div className="corner-accent corner-tl"></div>
      <div className="architectural-line" style={{ top: '0' }}></div>
      
      <div className="container">
        <div className="why-grid">
          <motion.div 
            className="why-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="section-subtitle text-gold">The Storeys Advantage</h4>
            <h2 className="section-title">
              We Don't Sell Projects.<br/>
              We Build <span className="gradient-gold">Growth Ecosystems.</span>
            </h2>
            
            <div className="stats-list">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="stat-item glass"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  whileHover={{ x: 10, borderColor: 'var(--color-accent-gold)' }}
                >
                  <div className="stat-bullet"></div>
                  <span>{stat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="why-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="image-wrapper">
              <motion.img 
                src="https://images.unsplash.com/photo-1577969851608-540c4998e3b7?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Architecture" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
              />
              <div className="overlay-gold"></div>
              <div className="corner-accent corner-br" style={{ bottom: '-20px', right: '-20px' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="architectural-line" style={{ bottom: '0' }}></div>
    </section>
  );
};

export default WhyChooseUs;
