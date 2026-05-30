import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text gradient-gold">STOREYS</span>
              <span className="logo-subtext">REALTY</span>
            </Link>
            <p className="footer-desc">
              Strategic Growth Partners for Real Estate Developers. Delivering Revenues. Building Scale.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h5 className="footer-title">Company</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-locations">
            <h5 className="footer-title">Global Presence</h5>
            <ul>
              <li>India</li>
              <li>UAE</li>
              <li>United Kingdom</li>
              <li>Singapore</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Storeys Realty. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
