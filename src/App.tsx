import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter">
      <Hero />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
}

export default App;