import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Building2, Briefcase, LayoutDashboard } from 'lucide-react';
import './CoreServices.css';

const services = [
  {
    id: '01',
    title: 'High Intent Lead Generation',
    headline: 'Generate Buyers, Not Just Leads.',
    icon: <Target size={32} className="text-gold" />,
    features: ['Organic lead generation', 'Premium social media branding', 'Performance marketing', 'AI-powered targeting', 'Conversion funnels'],
    outcome: 'Higher quality inquiries. Lower acquisition costs. Better sales velocity.'
  },
  {
    id: '02',
    title: 'Sales Leadership',
    headline: 'Building Elite Sales Organizations.',
    icon: <TrendingUp size={32} className="text-gold" />,
    features: ['Revenue planning', 'Target setting', 'Recruitment & hiring', 'Luxury sales training', 'Process design'],
    outcome: 'Consultative, advisory-driven luxury sales experiences.'
  },
  {
    id: '03',
    title: 'Channel Partner Ecosystem',
    headline: 'A Distribution Network Without Borders.',
    icon: <Globe size={32} className="text-gold" />,
    features: ['National networks', 'International broker partnerships', 'NRI buyer acquisition', 'Partner activation'],
    outcome: 'Global reach across India, UAE, UK, Singapore, & USA markets.'
  },
  {
    id: '04',
    title: 'Hospitality & Brand Alliances',
    headline: 'Powerful Partnerships That Elevate Real Estate.',
    icon: <Building2 size={32} className="text-gold" />,
    features: ['Taj IHCL', 'Marriott', 'Radisson', 'Wyndham', 'Premium hospitality brands'],
    outcome: 'Enhanced project positioning, operational value, and market perception.'
  },
  {
    id: '05',
    title: 'Strategic Growth Partners',
    headline: 'Scaling Beyond Traditional Real Estate.',
    icon: <Briefcase size={32} className="text-gold" />,
    features: ['Business development', 'Mergers & acquisitions', 'Investor introductions', 'Fundraising support'],
    outcome: '₹1000+ Crore Revenue Enablement Through Strategic Initiatives.'
  },
  {
    id: '06',
    title: 'CRM & Collections Management',
    headline: 'Operational Precision at Every Stage.',
    icon: <LayoutDashboard size={32} className="text-gold" />,
    features: ['CRM implementation', 'Banking APF coordination', 'Collection tracking', 'MIS dashboards'],
    outcome: 'Seamless customer lifecycle and construction-linked payment monitoring.'
  }
];

const CoreServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="services" className="services">
      <div className="corner-accent corner-tr"></div>
      <div className="architectural-line" style={{ bottom: '0' }}></div>
      
      <div className="container">
        <div className="section-header text-center">
          <motion.h4 
            className="section-subtitle text-gold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Core <span className="gradient-gold">Services</span>
          </motion.h2>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card glass" 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(197, 160, 89, 0.03)',
                borderColor: 'rgba(197, 160, 89, 0.4)'
              }}
            >
              <div className="service-header">
                <span className="service-number gradient-gold">{service.id}.</span>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-headline text-gold">{service.headline}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}><span></span>{feature}</li>
                ))}
              </ul>
              
              <div className="service-outcome">
                <p>{service.outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
