import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'Sales & Lead Generation'
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', type: 'Sales & Lead Generation' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact gradient-blue-bg">
      <div className="container">
        <div className="contact-grid" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle text-gold">Get in Touch</h4>
            <h2 className="section-title">
              Let's Build the Next <br/>
              <span className="gradient-gold">Growth Story</span> Together.
            </h2>
            
            <div className="contact-methods">
              <a href="#" className="contact-method-card glass">
                <MessageCircle size={24} className="text-gold" />
                <div>
                  <h5>WhatsApp Strategy Desk</h5>
                  <p>Connect instantly with our team</p>
                </div>
              </a>
              
              <a href="#" className="contact-method-card glass">
                <Calendar size={24} className="text-gold" />
                <div>
                  <h5>Schedule Consultation</h5>
                  <p>Book a strategic growth meeting</p>
                </div>
              </a>
              
              <a href="#" className="contact-method-card glass">
                <Mail size={24} className="text-gold" />
                <div>
                  <h5>Company Profile</h5>
                  <p>Request our detailed capabilities</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="form-title">Strategic Inquiry</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Company / Organization</label>
                <input 
                  type="text" 
                  name="company"
                  placeholder="Premium Developers Ltd." 
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Inquiry Type</label>
                <select name="type" value={formData.type} onChange={handleChange}>
                  <option>Sales & Lead Generation</option>
                  <option>Hospitality Partnerships</option>
                  <option>Strategic Growth Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary w-100" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>
              
              {status === 'success' && <p style={{ color: '#d4af37', marginTop: '1rem' }}>Inquiry sent successfully!</p>}
              {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Error sending inquiry. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
