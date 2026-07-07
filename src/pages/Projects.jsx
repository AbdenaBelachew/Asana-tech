import React from 'react';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

export default function Projects() {
  return (
    <main className="page-shell">
      <section className="section-shell">
        {/* <div className="section-inner">
          <span className="section-badge">Portfolio</span>
          <h1 className="section-title">Our Projects</h1>
          <p className="section-desc">
            Explore our portfolio of successful projects delivered across various industries.
          </p>
        </div> */}
      </section>
      
      <Portfolio />
      
      <CTA />
    </main>
  );
}