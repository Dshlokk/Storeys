import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="framework" className="framework">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-subtitle text-gold">The Process</h4>
          <h2 className="section-title">Success <span className="gradient-gold">Framework</span></h2>
        </div>

        <div className="timeline-container" ref={ref}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                className="timeline-step glass"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="step-number gradient-gold">0{idx + 1}</div>
                <h3 className="step-name">{step}</h3>
              </motion.div>
              
              {idx < steps.length - 1 && (
                <motion.div 
                  className="timeline-connector"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: (idx * 0.15) + 0.1 }}
                >
                  <ArrowRight size={24} className="text-gold" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessFramework;
