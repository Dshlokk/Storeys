import React from 'react';
import CoreServices from '../components/CoreServices';
import Testimonials from '../components/Testimonials';

const ServicesPage = () => {
  return (
    <>
      <div style={{ height: '80px', background: 'var(--color-bg-charcoal)' }}></div>
      <CoreServices />
      <Testimonials />
    </>
  );
};

export default ServicesPage;
