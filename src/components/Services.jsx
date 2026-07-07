import React from 'react';
import { Laptop, Smartphone, Cloud, Brain, Shield, Code2, Database, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Tailored solutions built from the ground up to match your exact business processes and workflows.',
    accent: false,
    featured: true,
    area: 'featured',
  },
  {
    icon: Laptop,
    title: 'Web Application Development',
    desc: 'Secure, scalable web platforms with modern UI/UX that deliver exceptional user experiences.',
    accent: false,
    area: 'web',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native iOS and Android apps with offline support, push notifications, and seamless performance.',
    accent: true,
    area: 'mobile',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    desc: 'Intelligent automation, machine learning models, and AI-powered features that transform operations.',
    accent: true,
    area: 'ai',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    desc: 'Cloud architecture, migration, and DevOps with industry-leading security and 99.9% uptime.',
    accent: false,
    area: 'cloud',
  },
  {
    icon: Database,
    title: 'Enterprise ERP Systems',
    desc: 'Comprehensive business management with inventory, finance, HR, and reporting modules.',
    accent: false,
    area: 'erp',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Enterprise-grade security audits, penetration testing, and secure infrastructure design.',
    accent: true,
    area: 'security',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    desc: 'Strategic consulting to modernize legacy systems and accelerate your digital evolution.',
    accent: false,
    area: 'consulting',
  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="section-desc text-sm sm:text-base">
            From AI-powered innovation to enterprise systems — we deliver secure, scalable software guided by wisdom and excellence.
          </p>
        </ScrollReveal>

        <div className="services-bento grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isFeatured = s.featured;
            return (
              <ScrollReveal
                key={s.title}
                delay={i * 0.06}
                className="service-bento-cell"
              >
                <div
                  className={`group service-card glass-card mobile-grid-card flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300 ${
                    isFeatured ? 'service-card--featured' : ''
                  } ${s.accent ? 'service-card--accent' : ''}`}
                >
                  <span className="service-card-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className={`service-card-icon icon-box shrink-0 group-hover:scale-105 transition-transform duration-300 ${s.accent ? 'icon-box-accent' : ''}`}>
                    <Icon size={18} />
                  </div>

                  <div className="service-card-body min-w-0 flex flex-col flex-1">
                    <h3 className="service-card-title font-extrabold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-[#166804] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="service-card-desc text-slate-600 leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollTo('contact')}
                      className="service-card-cta inline-flex items-center gap-1.5 font-bold text-[#166804] hover:text-[#1a7a05] transition-colors cursor-pointer group/btn mt-3"
                    >
                      Request a Proposal
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}