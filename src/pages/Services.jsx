import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="section-shell">
        {/* <div className="section-inner">
          <span className="section-badge">Services</span>
          <h1 className="section-title">Our Services</h1>
          <p className="section-desc">
            Comprehensive software solutions tailored to your business needs.
          </p>
        </div> */}
      </section>
      
      <Services />
      <Process />
      <CTA />
    </main>
  );
}