import React from 'react';
import { ArrowRight } from 'lucide-react';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="section-inner py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center animate-fade-up">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 glass-card !rounded-full !py-1.5 !px-3.5"
            style={{ color: 'var(--color-brand)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#166804] animate-pulse" />
            Based in Addis Ababa
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5 font-display">
            Software Built <br className="hidden sm:inline" />
            to <span className="gradient-text">Scale</span> Your Business
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
            We design and build fast websites, modern mobile apps, and custom inventory ERP software designed for your business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button type="button" onClick={() => scrollTo('contact')} className="btn-primary">
              Start a Project <ArrowRight size={17} />
            </button>
            <button type="button" onClick={() => scrollTo('services')} className="btn-secondary">
              See Our Services
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-center relative">
          <div className="absolute inset-0 bg-[#166804]/8 rounded-3xl blur-2xl pointer-events-none" />
          <div className="w-full max-w-md glass-card overflow-hidden hover:-translate-y-1">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/60 border-b border-[#166804]/8">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/90" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-xs text-slate-500 font-mono font-semibold bg-white/80 px-3 py-1 rounded-md border border-slate-100">
                app.asanasystems.com
              </span>
            </div>
            <div className="relative overflow-hidden aspect-[4/3] bg-slate-900">
              <img src="/home_hero.png" alt="Asana Systems dashboard preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
