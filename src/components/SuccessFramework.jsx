import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SuccessFramework.css';

const steps = [
  'Strategy',
  'Lead Generation',
  'Sales Enablement',
  'Distribution Expansion',
  'Partnerships',
  'Revenue Growth',
  'Scale'
];

const SuccessFramework = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
    }
  };

  return (
    <section id="framework" className="framework">
      <div className="architectural-line" style={{ top: '0' }}></div>
      <div className="corner-accent corner-br"></div>
      
      <div className="container">
        <div className="section-header text-center">
          <motion.h4 
            className="section-subtitle text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Process
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Success <span className="gradient-gold">Framework</span>
          </motion.h2>
        </div>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                className="timeline-step glass"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'var(--color-accent-gold)' }}
              >
                <div className="step-number gradient-gold">0{idx + 1}</div>
                <h3 className="step-name">{step}</h3>
              </motion.div>
              
              {idx < steps.length - 1 && (
                <motion.div 
                  className="timeline-connector"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx * 0.1) + 0.3 }}
                >
                  <div className="connector-line"></div>
                  <ArrowRight size={20} className="text-gold" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessFramework;
