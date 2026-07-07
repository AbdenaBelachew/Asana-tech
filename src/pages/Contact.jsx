import React from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section-shell">
        {/* <div className="section-inner">
          <span className="section-badge">Contact</span>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-desc">
            Ready to start your next project? Let's talk about how we can help.
          </p>
        </div> */}
      </section>
      
      <Contact />
    </main>
  );
}