import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="about gradient-blue-bg">
      <div className="container">
        <div className="about-grid" ref={ref}>
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Real Estate" 
              className="about-img"
            />
            <div className="about-img-accent"></div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="section-subtitle text-gold">About Storeys Realty</h4>
            <h2 className="section-title">
              Built for <span className="gradient-gold">Developers.</span> <br />
              Driven by <span className="gradient-gold">Results.</span>
            </h2>
            
            <p className="about-text">
              Storeys Realty was founded with a single mission: To help developers achieve sustainable growth through intelligent sales, premium marketing, strategic partnerships, and operational excellence.
            </p>
            
            <p className="about-text">
              We operate at the intersection of sales leadership, lead generation, distribution expansion, hospitality alliances, investor relations, and business growth strategy. We are not a traditional brokerage; we are your strategic growth partner.
            </p>
            
            <div className="about-stats">
              <div className="stat-box glass">
                <span className="stat-number gradient-gold">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box glass">
                <span className="stat-number gradient-gold">₹1000Cr</span>
                <span className="stat-label">Revenue Target</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
