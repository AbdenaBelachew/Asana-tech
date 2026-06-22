import React from 'react';
import { Users, Briefcase, Award, Zap, Shield, Heart, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '3+', label: 'Happy Clients', icon: Users },
  { value: '10+', label: 'Systems Built', icon: Briefcase, accent: true },
  { value: '4+', label: 'Years Experience', icon: Award },
  { value: '99.9%', label: 'Uptime Guarantee', icon: Zap, accent: true },
];

const values = [
  { icon: Shield, title: 'Security First', desc: 'Enterprise-grade encryption, secure auth, and isolated databases on every project.' },
  { icon: Zap, title: 'Speed & Uptime', desc: 'Blazing-fast load times, optimistic UI updates, and production-grade reliability.' },
  { icon: Heart, title: 'Client Obsession', desc: 'Transparent milestones, regular updates, and accountability you can count on.' },
  { icon: Code2, title: 'Clean Architecture', desc: 'Maintainable codebases that scale seamlessly as your team and product grow.' },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="section-badge">Who We Are</span>
          <h2 className="section-title">Built in Addis Ababa, Built for Scale</h2>
          <p className="section-desc">
            A team of engineers and designers passionate about building software that solves real business challenges beautifully and securely.
          </p>
        </ScrollReveal>

        <div className="about-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-12">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.label} delay={i * 0.07}>
                <div className="stat-tile hover:-translate-y-1 !p-4 sm:!p-7">
                  <div className={`icon-box w-9 h-9 sm:w-10 sm:h-10 ${s.accent ? 'icon-box-accent' : ''}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-xl sm:text-3xl font-extrabold text-slate-900 font-display">{s.value}</div>
                  <div className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider leading-tight">{s.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="section-divider mb-10 sm:mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <ScrollReveal className="lg:col-span-5 text-left" direction="right">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 sm:mb-5 tracking-tight font-display">
              Our Journey & Vision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Founded in Addis Ababa, <span className="font-bold text-[#166804]">Asana Systems</span> started with a simple belief: high-performance software should be accessible to every growing business not just multinational enterprises.
              <span className="block mt-3 font-bold text-[#2180cc]">
                &ldquo;Asana&rdquo; means close to me in Afaan Oromo and that&apos;s how we work with every client.
              </span>
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              From our first digital product to scaling systems across Ethiopia, we&apos;ve grown by putting engineering standards and customer trust first.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Today, we deliver end-to-end consulting, web engineering, mobile apps, and reliable long-term support.
            </p>
          </ScrollReveal>

          <div className="about-values-grid lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div className="glass-card mobile-grid-card p-4 sm:p-6 hover:-translate-y-0.5 group h-full flex flex-col">
                    <div className={`icon-box mb-3 sm:mb-4 w-9 h-9 sm:w-11 sm:h-11 ${v.accent ? 'icon-box-accent' : ''}`}>
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-[#166804] transition-colors duration-300">
                      {v.title}
                    </h4>
                    <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
