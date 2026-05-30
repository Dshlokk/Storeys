import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      <div className="container">
        <div className="why-grid" ref={ref}>
          <motion.div 
            className="why-content"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                >
                  <div className="stat-bullet"></div>
                  <span>{stat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="why-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1577969851608-540c4998e3b7?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Architecture" 
              />
              <div className="overlay-gold"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
