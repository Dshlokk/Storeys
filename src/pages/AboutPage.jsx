import React from 'react';
import About from '../components/About';
import Leadership from '../components/Leadership';

const AboutPage = () => {
  return (
    <>
      <div style={{ height: '100px', background: 'var(--color-bg-dark)' }}></div>
      <About />
      <Leadership />
    </>
  );
};

export default AboutPage;
