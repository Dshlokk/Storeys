import React from 'react';
import CoreServices from '../components/CoreServices';
import Testimonials from '../components/Testimonials';

const ServicesPage = () => {
  return (
    <>
      <div style={{ height: '100px', background: 'var(--color-bg-dark)' }}></div>
      <CoreServices />
      <Testimonials />
    </>
  );
};

export default ServicesPage;
