import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    role: "Developer Partner",
    quote: "Storeys Realty completely transformed our sales velocity. They aren't just brokers; they built an entire revenue engine for our luxury project.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    role: "Hospitality Partner",
    quote: "The strategic alliances formed through Storeys have elevated our brand presence and operational value across multiple premium developments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
    }
  };

  return (
    <section className="testimonials gradient-blue-bg">
      <div className="architectural-line" style={{ top: '0' }}></div>
      <div className="corner-accent corner-tr"></div>
      
      <div className="container">
        <div className="section-header text-center">
          <motion.h4 
            className="section-subtitle text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Trusted by <span className="gradient-gold">Industry Leaders</span>
          </motion.h2>
        </div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              className="testimonial-card glass"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(197, 160, 89, 0.03)',
                borderColor: 'rgba(197, 160, 89, 0.4)'
              }}
            >
              <div className="video-thumbnail">
                <img src={test.image} alt="Testimonial" />
                <motion.div 
                  className="play-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play fill="var(--color-bg-dark)" color="var(--color-bg-dark)" size={20} />
                </motion.div>
                <div className="video-overlay"></div>
              </div>
              <div className="testimonial-content">
                <p className="quote">"{test.quote}"</p>
                <div className="author">
                  <span className="role text-gold">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="architectural-line" style={{ bottom: '0' }}></div>
    </section>
  );
};

export default Testimonials;
