import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
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

        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.href} 
                  className={location.pathname === link.href ? 'active' : ''}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="nav-underline"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-outline btn-sm">Let's Talk</Link>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} className="text-gold" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav glass"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Let's Talk</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
