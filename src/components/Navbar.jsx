import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text gradient-gold">STOREYS</span>
          <span className="logo-subtext">REALTY</span>
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-outline btn-sm">Let's Talk</Link>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} color="#d4af37" /> : <Menu size={24} color="#d4af37" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Let's Talk</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
