import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="page-shell">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}