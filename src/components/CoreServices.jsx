import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-subtitle text-gold">Our Expertise</h4>
          <h2 className="section-title">Core <span className="gradient-gold">Services</span></h2>
        </div>

        <motion.div 
          className="services-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card glass" variants={itemVariants}>
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
