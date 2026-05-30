import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="architectural-line" style={{ top: '0' }}></div>
      <div className="corner-accent corner-tl"></div>
      
      <div className="container">
        <div className="footer-grid">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="logo">
              <div className="logo-icon">
                <div className="logo-box"></div>
                <div className="logo-box-accent"></div>
              </div>
              <div className="logo-text-wrapper">
                <span className="logo-text gradient-gold">STOREYS</span>
                <span className="logo-subtext">REALTY</span>
              </div>
            </Link>
            <p className="footer-desc">
              Strategic Growth Partners for Real Estate Developers. Delivering Revenues. Building Scale. Unlock strategic growth opportunities with elite sales leadership.
            </p>
            <div className="social-links">
              <motion.a whileHover={{ y: -3, color: 'var(--color-accent-gold)' }} href="#" aria-label="LinkedIn"><Linkedin size={20} /></motion.a>
              <motion.a whileHover={{ y: -3, color: 'var(--color-accent-gold)' }} href="#" aria-label="Instagram"><Instagram size={20} /></motion.a>
              <motion.a whileHover={{ y: -3, color: 'var(--color-accent-gold)' }} href="#" aria-label="Twitter"><Twitter size={20} /></motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h5 className="footer-title">Navigation</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-locations"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="footer-title">Global Presence</h5>
            <ul>
              <li>India (HQ)</li>
              <li>UAE</li>
              <li>United Kingdom</li>
              <li>Singapore</li>
              <li>United States</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Storeys Realty. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator"></span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
