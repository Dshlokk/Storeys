import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Mail, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
      <div className="architectural-line" style={{ top: '0' }}></div>
      <div className="corner-accent corner-tl"></div>
      
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="section-subtitle text-gold">Get in Touch</h4>
            <h2 className="section-title">
              Let's Build the Next <br/>
              <span className="gradient-gold">Growth Story</span> Together.
            </h2>
            
            <div className="contact-methods">
              {[
                { icon: <MessageCircle size={24} />, title: "WhatsApp Strategy Desk", desc: "Connect instantly with our team" },
                { icon: <Calendar size={24} />, title: "Schedule Consultation", desc: "Book a strategic growth meeting" },
                { icon: <Mail size={24} />, title: "Company Profile", desc: "Request our detailed capabilities" }
              ].map((method, idx) => (
                <motion.a 
                  key={idx}
                  href="#" 
                  className="contact-method-card glass"
                  whileHover={{ x: 10, borderColor: 'var(--color-accent-gold)' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <div className="method-icon text-gold">{method.icon}</div>
                  <div>
                    <h5>{method.title}</h5>
                    <p>{method.desc}</p>
                  </div>
                  <ArrowRight size={16} className="method-arrow text-gold" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="corner-accent corner-tr" style={{ top: '-1px', right: '-1px' }}></div>
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
              
              <motion.button 
                type="submit" 
                className="btn btn-primary w-100" 
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </motion.button>
              
              {status === 'success' && <p className="status-msg success">Inquiry sent successfully!</p>}
              {status === 'error' && <p className="status-msg error">Error sending inquiry. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
