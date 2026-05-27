import React from 'react';
import { Users, Briefcase, Award, Zap, Shield, Heart, Code2 } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Happy Clients', icon: Users },
  { value: '10+', label: 'Systems Built', icon: Briefcase, accent: true },
  { value: '4+', label: 'Years Experience', icon: Award },
  { value: '99.9%', label: 'Uptime Guarantee', icon: Zap, accent: true },
];

const values = [
  { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security, secure encryption, and database isolation built in.' },
  { icon: Zap, title: 'Speed & Uptime', desc: 'Blazing-fast load times, optimistic updates, and guaranteed database speed.', accent: true },
  { icon: Heart, title: 'Client Obsession', desc: 'Transparent milestones, round-the-clock updates, and absolute accountability.' },
  { icon: Code2, title: 'Clean Architecture', desc: 'Maintainable, professional repositories that scale seamlessly as your team grows.', accent: true },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge">Who We Are</span>
          <h2 className="section-title">Built in Addis Ababa, Built for Scale</h2>
          <p className="section-desc">
            We are a team of expert engineers and designers passionate about engineering software that solves real business challenges beautifully and securely.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="glass-card p-6 sm:p-7 flex flex-col items-center text-center hover:-translate-y-1">
                <div className={`icon-box mb-4 ${s.accent ? 'icon-box-accent' : ''}`}>
                  <Icon size={20} />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1 font-display">{s.value}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight font-display">
              Our Journey & Vision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Founded in Addis Ababa, <span className="font-bold text-[#166804]">Asana Systems</span> started with a simple belief: high-performance, beautiful software should be close and accessible to every growing business — not just multinational enterprises.
              <span className="block mt-2 font-bold text-[#2180cc]">
                Asana means &ldquo;close to me/near to me&rdquo; in Afaan Oromo.
              </span>
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              From our first digital product to scaling software systems across Ethiopia, we have grown steadily by putting engineering standards and customer trust first.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Today, we provide end-to-end consulting, website engineering, app development, and fast, reliable support.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-card p-6 hover:-translate-y-0.5 group">
                  <div className={`icon-box mb-4 w-11 h-11 ${v.accent ? 'icon-box-accent' : ''}`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#166804] transition-colors duration-300">
                    {v.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
