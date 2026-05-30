import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CoreServices from '../components/CoreServices';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessFramework from '../components/SuccessFramework';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CoreServices />
      <WhyChooseUs />
      <SuccessFramework />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
