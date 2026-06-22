import React from 'react';
import { Laptop, Smartphone, Package, QrCode, ShieldCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Laptop,
    title: 'Websites & E-Commerce',
    desc: 'Corporate websites and online stores built to convert visitors, rank on search, and grow your brand.',
    accent: false,
    featured: true,
    area: 'featured',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native-feel iOS and Android apps with offline support, push notifications, and polished dashboards.',
    accent: true,
    area: 'mobile',
  },
  {
    icon: Package,
    title: 'Inventory & Warehouse ERP',
    desc: 'Real-time stock tracking, barcode scanning, and supply chain controls that eliminate shrinkage.',
    accent: false,
    area: 'inventory',
  },
  {
    icon: QrCode,
    title: 'Restaurant QR Menus',
    desc: 'Contactless digital menus with instant price updates, ordering dashboards, and vendor analytics.',
    accent: true,
    area: 'qr',
  },
  {
    icon: ShieldCheck,
    title: 'Shop & Clinic Software',
    desc: 'Billing, inventory, and scheduling systems tailored for pharmacies, clinics, and retail shops.',
    accent: true,
    area: 'shop',
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
            High-Performance Digital Solutions
          </h2>
          <p className="section-desc text-sm sm:text-base">
            We don&apos;t just write code — we build software that drives sales, saves time, and scales your business.
          </p>
        </ScrollReveal>

        <div className="services-bento grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isFeatured = s.featured;
            return (
              <ScrollReveal
                key={s.title}
                delay={i * 0.06}
                className={`service-bento-cell service-bento-cell--${s.area}`}
              >
                <div
                  className={`group service-card glass-card mobile-grid-card flex flex-col h-full hover:-translate-y-1.5 ${
                    isFeatured ? 'service-card--featured' : ''
                  } ${s.accent ? 'service-card--accent' : ''}`}
                >
                  <span className="service-card-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className={`service-card-icon icon-box shrink-0 group-hover:scale-105 ${s.accent ? 'icon-box-accent' : ''}`}>
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
