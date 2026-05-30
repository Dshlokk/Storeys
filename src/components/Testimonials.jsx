import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="testimonials gradient-blue-bg">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-subtitle text-gold">Success Stories</h4>
          <h2 className="section-title">Trusted by <span className="gradient-gold">Industry Leaders</span></h2>
        </div>

        <div className="testimonials-grid" ref={ref}>
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="video-thumbnail">
                <img src={test.image} alt="Testimonial" />
                <div className="play-button">
                  <Play fill="#07111a" color="#07111a" size={24} />
                </div>
              </div>
              <div className="testimonial-content">
                <p className="quote">"{test.quote}"</p>
                <div className="author">
                  <span className="role text-gold">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
