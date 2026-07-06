import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

export default function CTA() {
  return (
    <section className="section-shell !py-16 sm:!py-20">
      <div className="section-inner">
        <ScrollReveal>
          <div className="cta-banner rounded-[2rem] p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#166804]/30 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#2180cc]/25 blur-[60px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400/90 mb-4">
                Let&apos;s Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-display tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                From custom software and AI solutions to mobile apps and digital transformation — we deliver intelligent, scalable technology that drives real impact.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto sm:max-w-none sm:flex sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="btn-primary !px-6 !py-3.5 sm:!px-8 sm:!py-4 inline-flex items-center justify-center gap-2 !text-sm col-span-1"
                >
                  Get a Free Quote <ArrowRight size={18} />
                </button>
                <a
                  href="tel:+251966780537"
                  className="btn-secondary !px-6 !py-3.5 sm:!px-8 sm:!py-4 inline-flex items-center justify-center gap-2 !bg-white/10 !text-white !border-white/20 hover:!bg-white/20 !text-sm col-span-1"
                >
                  <Phone size={18} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
