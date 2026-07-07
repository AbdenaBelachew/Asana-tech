import React from 'react';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section-shell">
        {/* <div className="section-inner">
          <span className="section-badge">About Us</span>
          <h1 className="section-title">Building Smart Solutions</h1>
          <p className="section-desc">
            Learn about our mission, values, and the team behind Furtuu Systems.
          </p>
        </div> */}
      </section>
      
      <About />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}